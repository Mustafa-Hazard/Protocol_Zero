import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import type { Game } from '../../types/Game';

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
        >
            <Card.Img
                variant="top"
                src={game.coverImage}
                alt={game.title}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{game.title}</Card.Title>
                <Card.Text className="text-secondary small">
                    {game.description.slice(0, 80)}...
                </Card.Text>
                <div className="d-flex flex-wrap gap-1 mt-auto">
                    {game.genres.map(genre => (
                        <Badge
                            key={genre}
                            bg="primary"
                            style={{ cursor: 'pointer' }}
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
                <span>⭐ {game.rating}/10</span>
                <span>{new Date(game.releaseDate).getFullYear()}</span>
            </Card.Footer>
        </Card>
    );
};

export default GameCard;