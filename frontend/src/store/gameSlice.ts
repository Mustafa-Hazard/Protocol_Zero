import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Game } from '../types/Game';
import type { GameFilters } from '../types/Filter';
import { getGames } from '../services/gameApi';

interface GameState {
    games: Game[];
    selectedGame: Game | null;
    loading: boolean;
    error: string | null;
}

const initialState: GameState = {
    games: [],
    selectedGame: null,
    loading: false,
    error: null,
};

export const fetchGames = createAsyncThunk(
    'games/fetchGames',
    async (filters: GameFilters, { rejectWithValue }) => {
        try {
            return await getGames(filters);
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setSelectedGame: (state, action: PayloadAction<Game | null>) => {
            state.selectedGame = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});
export const { setSelectedGame } = gameSlice.actions;
export default gameSlice.reducer;