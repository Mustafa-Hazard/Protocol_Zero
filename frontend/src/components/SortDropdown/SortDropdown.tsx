import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';
import { SortOption } from '../../types/Filter';

const SortDropdown = () => {
  const { filters, setSortBy } = useFilters();

  return (
    <div className="sort-container" style={{ position: 'relative' }}>
      <Form.Select
        className="sort-select-custom shadow-none"
        value={filters.sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
        style={{
          width: 'auto',
          backgroundColor: '#161b22',
          color: '#fff',
          border: '1px solid #30363d',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          padding: '8px 36px 8px 12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          appearance: 'none', // Removes default browser arrow for custom feel
        }}
      >
        <option value="relevance">◈ Most Relevant</option>
        <option value="rating">⭐ Highest Rated</option>
        <option value="releaseDate">📅 Newest First</option>
        <option value="title">AZ Name</option>
      </Form.Select>

      {/* Custom Arrow Icon */}
      <div style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        color: '#6e7681'
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>
        {`
                    .sort-select-custom:hover {
                        border-color: #484f58 !important;
                        background-color: #1c2128 !important;
                    }
                    .sort-select-custom:focus {
                        border-color: #1f6feb !important;
                        box-shadow: 0 0 0 3px rgba(31, 111, 235, 0.1) !important;
                    }
                    /* Style for options list in some browsers */
                    .sort-select-custom option {
                        background-color: #0d1117;
                        color: #fff;
                        padding: 10px;
                    }
                `}
      </style>
    </div>
  );
};

export default SortDropdown;