export interface Trail {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  distance: number;
  elevation: number;
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  rating: number;
  reviews: number;
  imageUrl: string;
}