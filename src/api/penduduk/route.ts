import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const penduduks = await prisma.data_penduduk.findMany({
      include: {
        data_kecamatan: {
          select: {
            nama_kecamatan: true,
          },
        },
      },
    });
    return NextResponse.json(penduduks);
  } catch (error) {
    console.error('Error saat mengambil data penduduk:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data penduduk' },
      { status: 500 }
    );
  }
}
