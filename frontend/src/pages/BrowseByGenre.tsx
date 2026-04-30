import { useParams, useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getGames } from '../services/gameApi';
import { Game } from '../types/Game'; // Using 'import type' for strict TS compliance
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
                setLoading(true);
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
        <div className="page-container" style={{
            background: 'linear-gradient(135deg, #0d1117 0%, #0f1923 50%, #0d1117 100%)',
            minHeight: '100vh',
            padding: '40px 32px'
        }}>
            {/* Header Navigation Section */}
            <div className="d-flex align-items-center gap-3 mb-5">
                <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle border-0 d-flex align-items-center justify-content-center"
                    onClick={() => navigate(-1)}
                    style={{
                        width: '40px',
                        height: '40px',
                        background: 'rgba(255,255,255,0.05)',
                        transition: '0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(31,111,235,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                    <span style={{ fontSize: '20px', color: '#fff' }}>←</span>
                </Button>

                <div>
                    <h2 style={{
                        color: '#fff',
                        fontWeight: 800,
                        margin: 0,
                        letterSpacing: '1px',
                        textShadow: '0 0 20px rgba(31, 111, 235, 0.3)'
                    }}>
                        <span style={{ color: '#1f6feb', marginRight: '10px' }}>◈</span>
                        {genre} Games
                    </h2>
                    <p style={{ color: '#6e7681', margin: 0, fontSize: '14px', fontWeight: 500 }}>
                        Exploring {games.length} curated titles in this category
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="mt-4" style={{
                minHeight: '60vh',
                position: 'relative'
            }}>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                        <Spinner animation="grow" variant="primary" />
                    </div>
                ) : (
                    <GameGrid games={games} loading={loading} error={error} />
                )}
            </div>
        </div>
    );
};

export default BrowseByGenre;