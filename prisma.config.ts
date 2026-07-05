import { defineConfig } from "prisma/config";

const fallbackDatabaseUrl =
  "postgresql://user:password@localhost:5432/sitebrain?schema=public";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? fallbackDatabaseUrl,
  },
});
