export interface DoctorProfileInput {
  profilePicture?: string;
  specialization: string;
  yearsOfExperience: number;
  consultationFee: number;
  location: string;
  availableSlots: string[];
}
