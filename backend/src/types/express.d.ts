import type { Request } from 'express';
import type { UserRoles } from '../constants/user-roles.ts';

export interface IExtendedRequest extends Request {
  user?: {
    userId: string;
    role: UserRoles;
  };
}
