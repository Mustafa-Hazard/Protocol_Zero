import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { mockGames } from '../services/mockData';
import GameGrid from '../components/GameGrid/GameGrid';

const BrowseByGenre = () => {
    const { genre } = useParams();
    const navigate = useNavigate();

    const filteredGames = mockGames.filter(game =>
        game.genres.includes(genre || '')
    );

    return (
        <Container fluid className="bg-dark min-vh-100 text-white py-4">
            <Button
                variant="outline-secondary"
                size="sm"
                className="mb-4 ms-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </Button>

            <h3 className="px-3 mb-3">
                🎮 {genre} Games
                <span className="text-secondary fs-6 ms-2">({filteredGames.length} results)</span>
            </h3>

            <div className="px-3">
                <GameGrid
                    games={filteredGames}
                    loading={false}
                    error={null}
                />
            </div>
        </Container>
    );
};

export default BrowseByGenre;