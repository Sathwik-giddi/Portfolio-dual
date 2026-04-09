
import { PrismaClient, Prisma } from '@prisma/client';

console.log('Starting debug script...');
try {
    console.log('Prisma Version Info:', Prisma.prismaVersion);

    console.log('Attempting to instantiate PrismaClient...');
    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });

    console.log('PrismaClient instantiated successfully.');

    // @ts-ignore
    const runtimeDataModel = prisma._runtimeDataModel;
    console.log('Runtime Data Model loaded:', !!runtimeDataModel);

} catch (error) {
    console.error('Caught error during Prisma initialization:');
    console.error(error);
}
