import { PrismaClient } from '@/prisma/client';
import { hash } from 'bcrypt-ts';

const prisma = new PrismaClient();

async function main() {
    const defaultEmail = 'admin@example.com';
    const plainPassword = 'supersecretpassword';
    const hashedPassword = await hash(plainPassword, 10);

    const existingUser = await prisma.user.findUnique({
        where: { email: defaultEmail }
    });

    if (!existingUser) {
        await prisma.user.create({
            data: {
                name: 'admin',
                email: defaultEmail,
                password: hashedPassword
            }
        });
        console.log('Default user created.');
    } else {
        console.log('User already exists.');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
