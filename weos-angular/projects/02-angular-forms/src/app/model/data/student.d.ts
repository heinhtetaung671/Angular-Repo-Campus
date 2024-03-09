export interface Student {
  name: string;
  contact: {
    phone: string,
    email: string
  }
  subjects?: string[];
  mark: number;
  gender: 'Male' | 'Female' | 'Other';
  birthYear: number;
}
