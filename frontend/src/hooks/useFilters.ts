import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import {
    setSearch,
    toggleGenre,
    togglePlatform,
    setSortBy,
    resetFilters,
} from '../store/filterSlice';
import type { SortOption } from '../types/Filter';

export const useFilters = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filters = useSelector((state: RootState) => state.filters);
    return {
        filters,
        setSearch: (value: string) => dispatch(setSearch(value)),
        toggleGenre: (genre: string) => dispatch(toggleGenre(genre)),
        togglePlatform: (platform: string) => dispatch(togglePlatform(platform)),
        setSortBy: (sort: SortOption) => dispatch(setSortBy(sort)),
        resetFilters: () => dispatch(resetFilters()),
    };
};