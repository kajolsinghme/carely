import type { Response, NextFunction } from 'express';
import AppError from '../errors/app-error.js';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import type { IExtendedRequest } from '../types/express.js';

export const authMiddleware = (
  req: IExtendedRequest,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('Authentication required', StatusCodes.UNAUTHORIZED);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token!, process.env['JWT_SECRET']!) as {
      userId: string;
      role: string;
    };

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };
    next();
  } catch {
    throw new AppError('Invalid or expired token', StatusCodes.UNAUTHORIZED);
  }
};
