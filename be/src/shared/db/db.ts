import mongoose from "mongoose";
import { logger } from "../logger/logger";

export const connectToDb = async (mongoDbUri: string, dbName: string) => {
  mongoose.connection
    .on("open", () => logger.info("Connected to the database."))
    .on("close", () => logger.info("Disconnected from the database."))
    .on("error", (error) => logger.error("DB Error", error));

  try {
    await mongoose.connect(mongoDbUri, { dbName });
  } catch (error) {
    return logger.error(
      "Something went wrong while connecting to Database",
      error,
    );
  }
};
