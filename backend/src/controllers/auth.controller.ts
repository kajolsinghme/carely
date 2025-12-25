import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { loginService, signupService } from '../services/auth.service.js';
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response) => {
  const user = await signupService(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: 'User registered successfully', data: user.id });
};

export const login = async (req: Request, res: Response) => {
  const result = await loginService(req.body);

  const token = jwt.sign(
    {
      userId: result.id,
      role: result.role,
    },
    process.env['JWT_SECRET']!,
    {
      expiresIn: '1h',
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ message: 'User logged in successfully', token: token });
};
