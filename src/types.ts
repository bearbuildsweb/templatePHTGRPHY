export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  layoutType: 'full' | 'asymmetric-left' | 'asymmetric-right' | 'overlapping';
  museumNumber: string;
  location?: string;
  credits?: string;
  aspectRatio?: string;
  medium?: string;
}
