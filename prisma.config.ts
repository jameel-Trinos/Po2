import { config } from "dotenv";
import { resolve } from "path";
import { defineConfig, env } from "prisma/config";

// Load .env.local explicitly
config({ path: resolve(process.cwd(), ".env.local") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL || env("DATABASE_URL"),
  },
});
