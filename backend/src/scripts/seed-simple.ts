
import { PrismaClient } from '@prisma/client';

console.log('Instantiating Prisma Client...');
try {
    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });
    console.log('✅ Prisma Client instantiated successfully.');

    // Try a simple connection check
    prisma.$connect().then(() => {
        console.log('✅ Connected to database.');
        return prisma.user.count();
    }).then((count) => {
        console.log(`User count: ${count}`);
        process.exit(0);
    }).catch((e) => {
        console.error('❌ Connection failed:', e);
        process.exit(1);
    });

} catch (e) {
    console.error('❌ Instantiation failed:', e);
    process.exit(1);
}
