import { getReasonPhrase } from "http-status-codes";

export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message?: string,
  ) {
    super(message || getReasonPhrase(statusCode));

    Object.setPrototypeOf(this, HttpError.prototype);
    Error.captureStackTrace(this, HttpError.captureStackTrace);
  }
}
