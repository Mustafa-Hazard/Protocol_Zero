import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import GenreFilter from './GenreFilter';
import PlatformFilter from './PlatformFilter';
import { useFilters } from '../../hooks/useFilters';

const FilterPanel = () => {
    const [show, setShow] = useState(false);
    const { resetFilters } = useFilters();

    return (
        <>
            {/* Main Trigger Button */}
            <Button
                className="filter-btn d-flex align-items-center gap-2"
                onClick={() => setShow(true)}
                style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600
                }}
            >
                <span style={{ fontSize: '18px' }}>🎛</span> Filters
            </Button>

            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                placement="start"
                className="game-offcanvas"
                style={{
                    backgroundColor: '#0d1117',
                    borderRight: '1px solid #1f6feb', // Signature blue border
                    width: '320px'
                }}
            >
                {/* Offcanvas Header with Branding */}
                <Offcanvas.Header closeButton closeVariant="white" style={{ borderBottom: '1px solid #30363d' }}>
                    <Offcanvas.Title className="text-white d-flex align-items-center gap-2">
                        <span style={{ color: '#1f6feb', fontSize: '18px' }}>◈</span>
                        <span style={{ fontWeight: 800, letterSpacing: '0.5px' }}>Filter Engine</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="d-flex flex-column gap-4 py-4">
                    {/* Genre Section */}
                    <div>
                        <h6 style={{ color: '#8b949e', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', marginBottom: '16px' }}>
                            By Genre
                        </h6>
                        <GenreFilter />
                    </div>

                    <hr style={{ borderTop: '1px solid #30363d', margin: '0' }} />

                    {/* Platform Section */}
                    <div>
                        <h6 style={{ color: '#8b949e', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.5px', marginBottom: '16px' }}>
                            By Platform
                        </h6>
                        <PlatformFilter />
                    </div>

                    {/* Reset Action Area */}
                    <div className="mt-auto pt-4" style={{ borderTop: '1px solid #30363d' }}>
                        <Button
                            variant="link"
                            className="w-100 text-decoration-none d-flex align-items-center justify-content-center gap-2"
                            style={{
                                color: '#f85149', // GitHub-style red
                                fontSize: '14px',
                                fontWeight: 600,
                                transition: '0.2s'
                            }}
                            onClick={() => { resetFilters(); setShow(false); }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(248, 81, 73, 0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9a5 5 0 0 0-9.234-2H8V3zM.083 9a6.002 6.002 0 0 1 10.531-4.182.5.5 0 1 1-.771.636A5.002 5.002 0 0 0 3.1 9h1.017a6.002 6.002 0 0 1-4.034 0z" />
                            </svg>
                            Clear All Filters
                        </Button>
                    </div>
                </Offcanvas.Body>

                <style>
                    {`
                        .game-offcanvas .btn-close {
                            filter: invert(1) grayscale(1) brightness(2);
                            opacity: 0.5;
                        }
                        .game-offcanvas .btn-close:hover {
                            opacity: 1;
                        }
                    `}
                </style>
            </Offcanvas>
        </>
    );
};

export default FilterPanel;