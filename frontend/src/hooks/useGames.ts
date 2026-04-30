import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchGames, setSelectedGame } from '../store/gameSlice';
import { GameFilters } from '../types/Filter';
import { Game } from '../types/Game';

export const useGames = (filters: GameFilters) => {
    const dispatch = useDispatch<AppDispatch>();
    const { games, loading, error } = useSelector((state: RootState) => state.games);

    useEffect(() => {
        dispatch(fetchGames(filters));
    }, [
        filters.search,
        filters.sortBy,
        filters.genres.join(','),
        filters.platforms.join(','),
    ]);

    return {
        games,
        loading,
        error,
        selectGame: (game: Game | null) => dispatch(setSelectedGame(game)),
    };
};
export default useGames;