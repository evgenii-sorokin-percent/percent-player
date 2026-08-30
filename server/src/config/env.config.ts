import { loadEnvFile } from "process";
import z from "zod";

try {
  loadEnvFile();
} catch {}

const envSchema = z.object({
  PORT: z.coerce.number().default(3456),
  NODE_ENV: z.enum(["dev", "production"]).default("dev"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(`Environment variables validation error: ${z.treeifyError(parsed.error)}`);
  process.exit(1);
}

export const env = parsed.data;
export type Env = z.infer<typeof envSchema>;
