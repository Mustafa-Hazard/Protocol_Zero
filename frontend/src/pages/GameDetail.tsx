import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { mockGames } from '../services/mockData';

const GameDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const game = mockGames.find(g => g.id === id);

    if (!game) {
        return (
            <Container className="bg-dark min-vh-100 text-white py-5 text-center">
                <h3>Game not found.</h3>
                <Button variant="outline-light" className="mt-3" onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </Container>
        );
    }

    return (
        <Container fluid className="bg-dark min-vh-100 text-white py-5">
            <Button
                variant="outline-secondary"
                size="sm"
                className="mb-4 ms-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </Button>

            <Row className="px-3 g-4">
                <Col md={4}>
                    <img
                        src={game.coverImage}
                        alt={game.title}
                        className="img-fluid rounded shadow"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Col>

                <Col md={8}>
                    <h1 className="fw-bold">{game.title}</h1>

                    <div className="d-flex align-items-center gap-3 my-3">
                        <span className="fs-5">⭐ {game.rating}/10</span>
                        <span className="text-secondary">
                            {new Date(game.releaseDate).toLocaleDateString('en-US', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            })}
                        </span>
                    </div>

                    <p className="text-secondary fs-6 mb-4">{game.description}</p>

                    <h5 className="mb-2">Genres</h5>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {game.genres.map(genre => (
                            <Badge key={genre} bg="primary" className="fs-6">{genre}</Badge>
                        ))}
                    </div>

                    <h5 className="mb-2">Platforms</h5>
                    <div className="d-flex flex-wrap gap-2">
                        {game.platforms.map(platform => (
                            <Badge key={platform} bg="secondary" className="fs-6">{platform}</Badge>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GameDetail;