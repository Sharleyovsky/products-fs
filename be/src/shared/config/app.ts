import { z } from "zod";
import { loadEnvs } from "./env";

const appConfig = (env: any) => ({
  port: env.API_PORT!,
  mongoDbUri: env.MONGODB_URI,
  dbName: env.DB_NAME,
});

const appConfigSchema = z.object({
  port: z
    .string()
    .transform((port) => parseInt(port))
    .pipe(z.number().int().min(1000).default(3000)),
  mongoDbUri: z.string().url().min(1),
  dbName: z.string().min(1),
});

export const getAppConfig = (env: any) => {
  loadEnvs();

  const config = appConfig(env);

  return appConfigSchema.parse(config);
};
