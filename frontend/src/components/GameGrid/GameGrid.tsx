import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import GameCard from '../GameCard/GameCard';
import type { Game } from '../../types/Game';

interface Props {
    games: Game[];
    loading: boolean;
    error: string | null;
}

const GameGrid = ({ games, loading, error }: Props) => {
    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" variant="light" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="danger" className="mt-4">
                {error}
            </Alert>
        );
    }

    if (games.length === 0) {
        return (
            <Alert variant="secondary" className="mt-4">
                No games found. Try adjusting your filters.
            </Alert>
        );
    }

    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-2">
            {games.map(game => (
                <Col key={game.id}>
                    <GameCard game={game} />
                </Col>
            ))}
        </Row>
    );
};

export default GameGrid;