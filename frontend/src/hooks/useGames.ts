import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { setSelectedGame } from '../store/gameSlice';
import type { GameFilters } from '../types/Filter';
import type { Game } from '../types/Game';
import { mockGames } from '../services/mockData';

export const useGames = (filters: GameFilters) => {
    const dispatch = useDispatch<AppDispatch>();

    const filteredGames = mockGames
        .filter(game =>
            game.title.toLowerCase().includes(filters.search.toLowerCase())
        )
        .filter(game =>
            filters.genres.length === 0 ||
            filters.genres.some(g => game.genres.includes(g))
        )
        .filter(game =>
            filters.platforms.length === 0 ||
            filters.platforms.some(p => game.platforms.includes(p))
        )
        .sort((a, b) => {
            switch (filters.sortBy) {
                case 'rating': return b.rating - a.rating;
                case 'releaseDate': return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
                case 'title': return a.title.localeCompare(b.title);
                default: return b.relevanceScore - a.relevanceScore;
            }
        });

    return {
        games: filteredGames,
        loading: false,
        error: null,
        selectGame: (game: Game | null) => dispatch(setSelectedGame(game)),
    };
};