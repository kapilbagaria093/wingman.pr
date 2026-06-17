import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { PrismaClient } from './generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('DATABASE_URL not set...');

    const adapter = new PrismaPg({ connectionString: url });
    return new PrismaClient({adapter});
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()
if ( process.env.NODE_ENV !== 'production'){ 
    // this check is important because we don't want to create multiple prisma clients in development, which can lead to connection pool exhaustion. In production, we assume that the environment is stable and won't have hot reloads, so we can safely create a new client without worrying about multiple instances.
    globalForPrisma.prisma = prisma;
}

// creates a primsa client that is called to do db stuff. insert. delete. upsert, etc etc.
// has to generated everytime there is a schema change
// all this stuff is done so there is only one client througout, and not multiple connection pools from same application.