export interface SignupInput {
  name: string;
  email: string;
  password: string;
  age?: number | null;
  gender?: 'Male' | 'Female' | null;
  role?: 'Patient' | 'Doctor';
}

export interface SignupResult {
  id: string;
  name: string;
  email: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResult {
  id: string;
  role: 'Patient' | 'Doctor';
  isProfileCompleted: boolean;
}
