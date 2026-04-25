import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameFilters, SortOption } from '../types/Filter';

const initialState: GameFilters = {
    search: '',
    genres: [],
    platforms: [],
    sortBy: 'relevance',
};

const filterSlice = createSlice
    ({
        name: 'filters',
        initialState,
        reducers: {
            setSearch: (state, action: PayloadAction<string>) => {
                state.search = action.payload;
            },
            toggleGenre: (state, action: PayloadAction<string>) => {
                const genre = action.payload;
                if (state.genres.includes(genre)) {
                    state.genres = state.genres.filter(g => g !== genre);
                } else {
                    state.genres.push(genre);
                }
            },
            togglePlatform: (state, action: PayloadAction<string>) => {
                const platform = action.payload;
                if (state.platforms.includes(platform)) {
                    state.platforms = state.platforms.filter(p => p !== platform);
                } else {
                    state.platforms.push(platform);
                }
            },
            setSortBy: (state, action: PayloadAction<SortOption>) => {
                state.sortBy = action.payload;
            },
            resetFilters: (state) => {
                Object.assign(state, initialState);
            },
        },
    });
export const { setSearch, toggleGenre, togglePlatform, setSortBy, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;