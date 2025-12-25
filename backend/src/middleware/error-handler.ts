import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import AppError from '../errors/app-error.js';

export default function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    console.error('AppError:', err);

    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  console.error('Unexpected Error:', err);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: 'Internal Server Error',
  });
  return;
}
