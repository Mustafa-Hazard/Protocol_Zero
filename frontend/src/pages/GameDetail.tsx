import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { mockGames } from '../services/mockData';

const GameDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const game = mockGames.find(g => g.id === id);

    if (!game) {
        return (
            <Container className="min-vh-100 d-flex flex-column align-items-center justify-content-center" style={{ background: '#0d1117' }}>
                <h3 className="text-white">Game not found.</h3>
                <Button variant="outline-light" className="mt-3" onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </Container>
        );
    }

    return (
        <div style={{ background: 'linear-gradient(135deg, #0d1117 0%, #0f1923 50%, #0d1117 100%)', minHeight: '100vh', padding: '32px' }}>
            <Button variant="outline-secondary" size="sm" className="mb-4" onClick={() => navigate(-1)}>
                ← Back
            </Button>

            <Row className="g-4">
                <Col md={4}>
                    <img
                        src={game.coverImage}
                        alt={game.title}
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 32px rgba(31,111,235,0.3)' }}
                    />
                </Col>

                <Col md={8}>
                    <h1 style={{ color: '#fff', fontWeight: 800 }}>{game.title}</h1>

                    <div className="d-flex align-items-center gap-3 my-3">
                        <span style={{ color: '#f0c040', fontSize: '20px' }}>⭐ {game.rating}/10</span>
                        <span style={{ color: '#6e7681' }}>
                            {new Date(game.releaseDate).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })}
                        </span>
                    </div>

                    <p style={{ color: '#8b949e', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                        {game.description}
                    </p>

                    <h5 style={{ color: '#fff', marginBottom: '12px' }}>Genres</h5>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {game.genres.map(genre => (
                            <Badge key={genre} bg="primary" style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '20px' }}>
                                {genre}
                            </Badge>
                        ))}
                    </div>

                    <h5 style={{ color: '#fff', marginBottom: '12px' }}>Platforms</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {game.platforms.map(platform => (
                            <Badge key={platform} style={{
                                fontSize: '14px',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                background: 'transparent',
                                border: '1px solid #1f6feb',
                                color: '#1f6feb'
                            }}>
                                {platform}
                            </Badge>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default GameDetail;