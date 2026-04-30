import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getGames } from '../services/gameApi';
import { Game } from '../types/Game';
import GameGrid from '../components/GameGrid/GameGrid';

const BrowseByGenre = () => {
    const { genre } = useParams();
    const navigate = useNavigate();
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const data = await getGames({
                    search: '',
                    genres: [genre || ''],
                    platforms: [],
                    sortBy: 'relevance'
                });
                setGames(data);
            } catch (err) {
                setError('Failed to load games.');
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, [genre]);

    return (
        <div style={{ background: 'linear-gradient(135deg, #0d1117 0%, #0f1923 50%, #0d1117 100%)', minHeight: '100vh', padding: '24px 32px' }}>
            <Button variant="outline-secondary" size="sm" className="mb-4" onClick={() => navigate(-1)}>
                ← Back
            </Button>

            <h3 style={{ color: '#fff', marginBottom: '4px' }}>
                🎮 {genre} Games
                <span style={{ color: '#6e7681', fontSize: '16px', marginLeft: '12px' }}>
                    ({games.length} results)
                </span>
            </h3>

            <div className="mt-3">
                <GameGrid games={games} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default BrowseByGenre;