import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { promisify } from 'util'
import os from 'os'
import fs from 'fs'

const stat = promisify(fs.stat)

export async function GET() {
    const startTime = Date.now()

    try {
        const healthData: any = {
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || 'development',
            responseTime: 0
        }

        try {
            const dbStartTime = Date.now()
            await prisma.$queryRaw`SELECT 1`
            const dbResponseTime = Date.now() - dbStartTime

            healthData.database = {
                status: 'connected',
                type: 'postgresql',
                responseTime: `${dbResponseTime}ms`,
                connectionPool: {
                    status: 'active'
                }
            }
        } catch (dbError) {
            console.error('Database connection failed:', dbError)
            healthData.database = {
                status: 'disconnected',
                error: 'Database connection failed',
                details: process.env.NODE_ENV === 'development' ?
                    (dbError instanceof Error ? dbError.message : String(dbError)) : undefined
            }
            healthData.status = 'degraded'
        }

        const memUsage = process.memoryUsage()
        const totalSystemMemory = os.totalmem()
        const freeSystemMemory = os.freemem()
        const usedSystemMemory = totalSystemMemory - freeSystemMemory

        healthData.memory = {
            process: {
                rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`,
                heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
                heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`,
                heapFree: `${Math.round((memUsage.heapTotal - memUsage.heapUsed) / 1024 / 1024)} MB`,
                external: `${Math.round(memUsage.external / 1024 / 1024)} MB`,
                arrayBuffers: `${Math.round(memUsage.arrayBuffers / 1024 / 1024)} MB`
            },
            system: {
                total: `${Math.round(totalSystemMemory / 1024 / 1024)} MB`,
                free: `${Math.round(freeSystemMemory / 1024 / 1024)} MB`,
                used: `${Math.round(usedSystemMemory / 1024 / 1024)} MB`,
                usagePercentage: `${Math.round((usedSystemMemory / totalSystemMemory) * 100)}%`
            },
            heapUsagePercentage: `${Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100)}%`
        }

        const cpus = os.cpus()
        const loadAvg = os.loadavg()

        healthData.cpu = {
            model: cpus[0]?.model || 'unknown',
            cores: cpus.length,
            architecture: os.arch(),
            loadAverage: {
                '1min': Math.round(loadAvg[0] * 100) / 100,
                '5min': Math.round(loadAvg[1] * 100) / 100,
                '15min': Math.round(loadAvg[2] * 100) / 100
            },
            usage: process.cpuUsage()
        }

        healthData.system = {
            platform: os.platform(),
            release: os.release(),
            hostname: os.hostname(),
            nodeVersion: process.version,
            pid: process.pid,
            ppid: process.ppid
        }

        try {
            const stats = await stat(process.cwd())
            healthData.disk = {
                workingDirectory: process.cwd(),
                accessible: true,
                stats: {
                    size: stats.size,
                    created: stats.birthtime,
                    modified: stats.mtime
                }
            }
        } catch (diskError) {
            healthData.disk = {
                workingDirectory: process.cwd(),
                accessible: false,
                error: 'Unable to access working directory'
            }
            healthData.status = 'degraded'
        }

        if (process.env.NODE_ENV === 'production') {
            const requiredEnvVars = [
                'DATABASE_URL',
                'NEXTAUTH_SECRET',
                'NEXTAUTH_URL'
            ]

            const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar])
            const presentEnvVars = requiredEnvVars.filter(envVar => process.env[envVar])

            if (missingEnvVars.length > 0) {
                healthData.status = 'unhealthy'
                healthData.environment_check = {
                    status: 'failed',
                    missing_variables: missingEnvVars,
                    present_variables: presentEnvVars,
                    total_required: requiredEnvVars.length,
                    missing_count: missingEnvVars.length
                }
            } else {
                healthData.environment_check = {
                    status: 'passed',
                    all_variables_present: true,
                    total_checked: requiredEnvVars.length
                }
            }
        }

        healthData.external_services = {
            status: 'not_configured'
        }

        healthData.performance = {
            eventLoopDelay: typeof process.hrtime.bigint !== 'undefined' ? 'available' : 'not_available',
            gcStats: typeof global.gc === 'function' ? 'available' : 'not_available'
        }

        healthData.application = {
            version: process.env.APP_VERSION || process.env.npm_package_version || 'unknown',
            buildTime: process.env.BUILD_TIME || 'unknown',
            gitCommit: process.env.GIT_COMMIT || 'unknown',
            uptime: {
                seconds: Math.floor(process.uptime()),
                human: formatUptime(process.uptime())
            }
        }

        healthData.security = {
            httpsOnly: process.env.NODE_ENV === 'production' ?
                (process.env.NEXTAUTH_URL?.startsWith('http://') || false) : 'development',
            secrets: {
                nextAuthSecret: !!process.env.NEXTAUTH_SECRET,
                databaseUrl: !!process.env.DATABASE_URL
            }
        }

        let healthScore = 100
        if (healthData.database.status !== 'connected') healthScore -= 40
        if (healthData.environment_check?.status === 'failed') healthScore -= 30
        if (healthData.disk?.accessible === false) healthScore -= 10

        const memUsagePercent = parseInt(healthData.memory.system.usagePercentage)
        if (memUsagePercent > 90) healthScore -= 15
        else if (memUsagePercent > 80) healthScore -= 10
        else if (memUsagePercent > 70) healthScore -= 5

        healthData.healthScore = healthScore

        if (healthScore >= 90) healthData.status = 'healthy'
        else if (healthScore >= 70) healthData.status = 'degraded'
        else healthData.status = 'unhealthy'

        healthData.responseTime = `${Date.now() - startTime}ms`

        const statusCode = healthData.status === 'healthy' ? 200 :
            healthData.status === 'degraded' ? 200 : 503

        return NextResponse.json(healthData, {
            status: statusCode,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        })

    } catch (error) {
        console.error('Health check failed:', error)

        const errorMessage = error instanceof Error ? error.message : String(error)

        return NextResponse.json(
            {
                status: 'unhealthy',
                timestamp: new Date().toISOString(),
                responseTime: `${Date.now() - startTime}ms`,
                error: 'Service unavailable',
                details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
                healthScore: 0
            },
            { status: 503 }
        )
    } finally {
        await prisma.$disconnect()
    }
}

function formatUptime(uptimeSeconds: number): string {
    const days = Math.floor(uptimeSeconds / 86400)
    const hours = Math.floor((uptimeSeconds % 86400) / 3600)
    const minutes = Math.floor((uptimeSeconds % 3600) / 60)
    const seconds = Math.floor(uptimeSeconds % 60)

    const parts = []
    if (days > 0) parts.push(`${days}d`)
    if (hours > 0) parts.push(`${hours}h`)
    if (minutes > 0) parts.push(`${minutes}m`)
    if (seconds > 0) parts.push(`${seconds}s`)

    return parts.join(' ') || '0s'
}