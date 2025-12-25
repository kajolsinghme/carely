import mongoose, { Document } from 'mongoose';
import { UserRoles } from '../constants/user-roles.js';
import { Gender } from '../constants/gender.enum.js';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age: number | null;
  gender: Gender | null;
  role: UserRoles;
}
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true, maxlength: 50 },
    password: { type: String, required: true, minlength: 4 },
    age: { type: Number, min: 5, max: 100, default: null },
    gender: { type: String, enum: Object.values(Gender), default: null },
    role: { type: String, enum: Object.values(UserRoles), default: UserRoles.PATIENT },
  },
  {
    timestamps: true,
  }
);
export const UserModel = mongoose.model<IUser>('User', userSchema);
