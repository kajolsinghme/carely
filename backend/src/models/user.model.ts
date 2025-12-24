import mongoose, { Document } from 'mongoose';

export interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  age: number | null;
  gender: "Male" | "Female" | null;
  role: "Patient" | "Doctor"
}
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 50 },
    email: { type: String, required: true, unique: true, maxlength: 50 },
    password: { type: String, required: true, minlength: 4 },
    age: { type: Number, min: 5, max: 100, default: null },
    gender: { type: String, enum: ['Male', 'Female'], default: null },
    role: {type: String, enum: ['Patient', "Doctor"], default: 'Patient'}
  },
  {
    timestamps: true,
  }
);
export const UserModel = mongoose.model<IUser>('User', userSchema);
