export interface Promotion {
  id: string; // UUID
  title: string;
  description?: string;
  location: 'mall' | 'retail' | 'restaurant';
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
} 