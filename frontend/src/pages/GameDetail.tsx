import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Badge, Button, Spinner, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getGameById } from '../services/gameApi';
import { Game } from '../types/Game'; // Fixed: Type-only import

const GameDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                if (!id) return;
                const data = await getGameById(id);
                setGame(data);
            } catch (err) {
                setError('Game not found.');
            } finally {
                setLoading(false);
            }
        };
        fetchGame();
    }, [id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: '#0d1117' }}>
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    }

    if (error || !game) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100" style={{ background: '#0d1117' }}>
                <h3 className="text-white opacity-75">Game not found.</h3>
                <Button variant="link" className="text-info mt-2" onClick={() => navigate('/')}>
                    Return to Discovery
                </Button>
            </div>
        );
    }

    return (
        <div style={{
            position: 'relative',
            backgroundColor: '#0d1117',
            minHeight: '100vh',
            overflow: 'hidden'
        }}>
            {/* Background Hero Blur: Creates an immersive atmosphere based on game art */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '60vh',
                backgroundImage: `url(${game.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(80px) brightness(0.3)',
                zIndex: 0
            }} />

            <Container style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '60px' }}>
                <Button
                    variant="link"
                    className="text-white-50 p-0 mb-5 text-decoration-none"
                    onClick={() => navigate(-1)}
                    style={{ transition: '0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                    ← Back to Library
                </Button>

                <Row className="g-5">
                    <Col lg={4}>
                        {/* Sticky Cover Image: Remains visible as you scroll through description */}
                        <div style={{
                            position: 'sticky',
                            top: '40px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <img src={game.coverImage} alt={game.title} style={{ width: '100%', display: 'block' }} />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className="ps-lg-4">
                            <h1 style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-1px' }}>
                                {game.title}
                            </h1>

                            <div className="d-flex align-items-center gap-4 my-4">
                                <div style={{
                                    background: 'rgba(240, 192, 64, 0.1)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(240, 192, 64, 0.3)'
                                }}>
                                    <span style={{ color: '#f0c040', fontWeight: 700, fontSize: '1.1rem' }}>⭐ {game.rating}/10</span>
                                </div>
                                <span style={{ color: '#8b949e', fontWeight: 500 }}>
                                    {new Date(game.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>

                            <p style={{ color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '800px' }}>
                                {game.description}
                            </p>

                            {/* Section: Genres */}
                            <div className="mb-5">
                                <h6 style={{ color: '#8b949e', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', marginBottom: '16px' }}>Genres</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {game.genres.map(genre => (
                                        <Badge key={genre} style={{
                                            background: '#1f6feb',
                                            color: '#fff',
                                            fontWeight: 600,
                                            padding: '10px 20px',
                                            borderRadius: '30px'
                                        }}>
                                            {genre}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Section: Platforms */}
                            <div>
                                <h6 style={{ color: '#8b949e', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', marginBottom: '16px' }}>Available Platforms</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {game.platforms.map(platform => (
                                        <div key={platform} style={{
                                            fontSize: '0.9rem',
                                            padding: '8px 18px',
                                            borderRadius: '30px',
                                            border: '1px solid #30363d',
                                            color: '#c9d1d9',
                                            background: 'rgba(48, 54, 61, 0.3)'
                                        }}>
                                            {platform}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GameDetail;