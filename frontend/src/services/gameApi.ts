import axiosClient from './axiosClient';
import type { Game, Genre, Platform } from '../types/Game';
import type { GameFilters } from '../types/Filter';

export const getGames = async (filters: GameFilters): Promise<Game[]> => {
    const { data } = await axiosClient.get('/games', { params: filters });
    return data;
};

export const getGameById = async (id: string): Promise<Game> => {
    const { data } = await axiosClient.get(`/games/${id}`);
    return data;
};

export const getGenres = async (): Promise<Genre[]> => {
    const { data } = await axiosClient.get('/genres');
    return data;
};

export const getPlatforms = async (): Promise<Platform[]> => {
    const { data } = await axiosClient.get('/platforms');
    return data;
};