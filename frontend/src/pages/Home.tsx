import { Container, Row, Col } from 'react-bootstrap';
import { useFilters } from '../hooks/useFilters';
import { useGames } from '../hooks/useGames';
import GameGrid from '../components/GameGrid/GameGrid';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import SortDropdown from '../components/SortDropdown/SortDropdown';

const Home = () => {
    const { filters } = useFilters();
    const { games, loading, error } = useGames(filters);

    return (
        <div className="game-bg" style={{ minHeight: '100vh' }}>
            <div style={{ borderBottom: '1px solid #1f6feb33', padding: '24px 32px 16px' }}>
                <Row className="align-items-center">
                    <Col>
                        <h2 style={{ color: '#fff', fontWeight: 800, letterSpacing: '1px', margin: 0 }}>
                            <span style={{ color: '#1f6feb' }}>◈</span> Discover Games
                        </h2>
                        <p style={{ color: '#6e7681', margin: '4px 0 0', fontSize: '14px' }}>
                            {games.length} titles available
                        </p>
                    </Col>
                    <Col xs="auto" className="d-flex gap-2 align-items-center">
                        <FilterPanel />
                        <SortDropdown />
                    </Col>
                </Row>
            </div>
            <div style={{ padding: '24px 32px' }}>
                <GameGrid games={games} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default Home;