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
            <Button className="filter-btn" onClick={() => setShow(true)}>
                🎛 Filters
            </Button>

            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                placement="start"
                className="bg-dark"
            >
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title className="text-white">Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <GenreFilter />
                    <hr className="border-secondary" />
                    <PlatformFilter />
                    <hr className="border-secondary" />
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => { resetFilters(); setShow(false); }}
                    >
                        Reset Filters
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default FilterPanel;