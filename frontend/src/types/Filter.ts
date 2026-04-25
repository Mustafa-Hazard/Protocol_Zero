export type SortOption = 'relevance' | 'rating' | 'releaseDate' | 'title';

export interface GameFilters {
    search: string;
    genres: string[];
    platforms: string[];
    sortBy: SortOption;
}