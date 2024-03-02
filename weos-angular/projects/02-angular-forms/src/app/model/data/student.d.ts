export interface Student{
   name: string;
   contact: {phone: string , email: string};
   subject?: string[];
   mark: number;
   gender: 'Male' | 'Female';
   birthYear: number;
}