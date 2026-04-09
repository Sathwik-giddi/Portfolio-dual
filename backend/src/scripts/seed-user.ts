
import { prisma } from '../config/db.js';
import bcrypt from 'bcrypt';
// const prisma = new PrismaClient(); // Removed

async function seedUser() {
    const email = 'nothing@gmail.com';
    const password = 'welcome@123';

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            console.log('User already exists:', existingUser.id);
            return;
        }

        console.log('User not found. Creating default user...');
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                passwordHash: hashedPassword,
                name: 'Default User',
                subscriptionPlan: 'PRO', // Granting PRO for demo purposes
            },
        });

        console.log('✅ User created successfully:', newUser.id);
    } catch (error) {
        console.error('❌ Failed to seed user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedUser();
