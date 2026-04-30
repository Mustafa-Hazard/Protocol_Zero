import { Row, Col } from 'react-bootstrap';
import { useFilters } from '../hooks/useFilters';
import { useGames } from '../hooks/useGames';
import GameGrid from '../components/GameGrid/GameGrid';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import SortDropdown from '../components/SortDropdown/SortDropdown';

const Home = () => {
    const { filters } = useFilters();
    const { games, loading, error } = useGames(filters);

    return (
        <div className="game-bg" style={{
            minHeight: '100vh',
            backgroundColor: '#0d1117'
        }}>
            {/* Main Header / Navigation Bar */}
            <div style={{
                borderBottom: '1px solid rgba(31, 111, 235, 0.2)',
                padding: '32px 32px 24px',
                background: 'rgba(1, 4, 9, 0.3)',
                backdropFilter: 'blur(10px)'
            }}>
                <Row className="align-items-center">
                    <Col>
                        <h2 style={{
                            color: '#fff',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            margin: 0,
                            textShadow: '0 0 20px rgba(31, 111, 235, 0.3)'
                        }}>
                            <span style={{ color: '#1f6feb', marginRight: '12px' }}>◈</span>
                            Discover Games
                        </h2>
                        <p style={{
                            color: '#8b949e',
                            margin: '6px 0 0',
                            fontSize: '14px',
                            fontWeight: 500
                        }}>
                            {games.length} titles available in the Protocol-Zero library
                        </p>
                    </Col>

                    {/* Action Panel: Filters and Sorting */}
                    <Col xs="auto" className="d-flex gap-3 align-items-center">
                        <div className="d-flex align-items-center gap-2 p-1" style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <FilterPanel />
                            <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
                            <SortDropdown />
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Content Section */}
            <div style={{ padding: '32px' }}>
                <GameGrid games={games} loading={loading} error={error} />
            </div>
        </div>
    );
};

export default Home;