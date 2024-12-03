export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  completedTrails: string[];
  savedTrails: string[];
  isPremium: boolean;
}