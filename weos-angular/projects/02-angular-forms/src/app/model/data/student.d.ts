export interface Student {
  name: string;
  phone: string;
  email: string;
  subject?: string[];
  mark: number;
  gender: 'Male' | 'Female' | 'Other';
  birthYear: number;
}
