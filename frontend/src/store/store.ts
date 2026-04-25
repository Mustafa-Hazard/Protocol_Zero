import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import gameReducer from './gameSlice';

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        games: gameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;