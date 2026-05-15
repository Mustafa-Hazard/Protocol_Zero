import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Game } from '../../types/Game';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    const navigate = useNavigate();

    return (
        <Card
            bg="dark"
            text="white"
            className="h-100 border-secondary"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/game/${game.id}`)}
            data-cy="game-card"                          // ← add
        >
            <Card.Img
                variant="top"
                src={game.coverImage}
                alt={game.title}
                style={{ height: '200px', objectFit: 'cover' }}
                data-cy="game-image"                     // ← add
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title data-cy="game-title">{game.title}</Card.Title>   {/* ← add */}
                <Card.Text className="text-secondary small" data-cy="game-description">
                    {game.description.slice(0, 80)}...
                </Card.Text>
                <div className="d-flex flex-wrap gap-1 mt-auto">
                    {game.genres.map(genre => (
                        <Badge
                            key={genre}
                            bg="primary"
                            style={{ cursor: 'pointer' }}
                            data-cy="game-genre-badge"   // ← add
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/genre/${genre}`);
                            }}
                        >
                            {genre}
                        </Badge>
                    ))}
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between text-secondary small">
                <span data-cy="game-rating">⭐ {game.rating}/10</span>       {/* ← add */}
                <span data-cy="game-year">{new Date(game.releaseDate).getFullYear()}</span> {/* ← add */}
            </Card.Footer>
        </Card>
    );
};

export default GameCard;