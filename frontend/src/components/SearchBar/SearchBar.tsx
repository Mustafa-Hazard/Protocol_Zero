import { Form, InputGroup } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';

const SearchBar = () => {
    const { filters, setSearch } = useFilters();

    return (
        <InputGroup className="search-group" style={{ filter: 'drop-shadow(0 0 8px rgba(31, 111, 235, 0.1))' }}>
            <InputGroup.Text
                style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    borderRight: 'none',
                    color: '#6e7681',
                    borderRadius: '8px 0 0 8px'
                }}
            >
                {/* Simple SVG Search Icon */}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </InputGroup.Text>

            <Form.Control
                type="text"
                placeholder="Search games, genres, or platforms..."
                value={filters.search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    backgroundColor: '#161b22',
                    color: '#fff',
                    border: '1px solid #30363d',
                    borderLeft: 'none',
                    borderRadius: '0 8px 8px 0',
                    fontSize: '14px',
                    fontWeight: 500,
                    boxShadow: 'none'
                }}
                className="search-input-custom"
            />

            {/* Custom focus styles for the input group */}
            <style>
                {`
                    .search-input-custom:focus {
                        border-color: #1f6feb !important;
                        background-color: #0d1117 !important;
                    }
                    .search-input-custom:focus + .input-group-text {
                        border-color: #1f6feb !important;
                    }
                    .search-input-custom::placeholder {
                        color: #484f58;
                    }
                `}
            </style>
        </InputGroup>
    );
};

export default SearchBar;