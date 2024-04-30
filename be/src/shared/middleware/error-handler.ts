import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../domain/errors/http.error";
import { ZodError } from "zod";
import { logger } from "../logger/logger";

export const errorHandler = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  logger.error(error);

  if (error instanceof ZodError) {
    return res.status(400).send({
      type: "ValidationError",
      issues: error.issues,
      message: error.message,
    });
  }

  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({
      type: "HttpError",
      statusCode: error.statusCode,
      message: error.message,
    });
  }

  return res.status(500).send({ message: "Something went wrong." });
};
