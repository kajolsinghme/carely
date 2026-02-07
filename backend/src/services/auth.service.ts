import { StatusCodes } from 'http-status-codes';
import AppError from '../errors/app-error.js';
import { UserModel, type IUser } from '../models/user.model.js';
import type {
  LoginInput,
  LoginResult,
  SignupInput,
  SignupResult,
} from '../types/auth.types.js';
import bcrypt from 'bcrypt';

export const signupService = async (
  data: SignupInput
): Promise<SignupResult> => {
  const { name, email, password, age, gender, role } = data;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    throw new AppError('Email already in use', StatusCodes.CONFLICT);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = (await UserModel.create({
    name,
    email,
    password: hashedPassword,
    age: age ?? null,
    gender: gender ?? null,
    role,
  } as never)) as unknown as IUser;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
  };
};

export const loginService = async (data: LoginInput): Promise<LoginResult> => {
  const { email, password } = data;

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new AppError('Invalid credentials', StatusCodes.UNAUTHORIZED);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new AppError('Invalid credentials', StatusCodes.UNAUTHORIZED);
  }

  return {
    id: user._id.toString(),
    role: user.role,
    isProfileCompleted: user.isProfileCompleted
  };
};
