import express from "express";
import { getProductRouter } from "./src/router/product.router";
import { connectToDb } from "./src/shared/db/db";
import { getAppConfig } from "./src/shared/config/app";
import { loadEnvs } from "./src/shared/config/env";
import cors from "cors";
import { corsOptions } from "./src/shared/config/cors";
import { errorHandler } from "./src/shared/middleware/error-handler";
import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "./swaggerDocument.json";
import { logger } from "./src/shared/logger/logger";

loadEnvs();

const config = getAppConfig(process.env);
export const app = express();
const productRouter = getProductRouter();

app.use(express.json());
app.use(cors(corsOptions));
app.use(productRouter);
app.use(errorHandler);
app.use("/api-docs", serve, setup(swaggerDocument));

connectToDb(config.mongoDbUri, config.dbName);

export const server = app.listen(config.port, () =>
  logger.info(`Server running at http://localhost:${config.port}.`),
);
