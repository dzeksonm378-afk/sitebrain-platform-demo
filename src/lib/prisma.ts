import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const fallbackDatabaseUrl =
  "postgresql://user:password@localhost:5432/sitebrain?schema=public";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? fallbackDatabaseUrl,
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
