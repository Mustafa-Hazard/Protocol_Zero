export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  platforms: string[];
  relevanceScore: number;
}

export interface Genre {
  id: string;
  name: string;
}

export interface Platform {
  id: string;
  name: string;
  slug: string;
}