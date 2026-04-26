import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';
import type { SortOption } from '../../types/Filter';

const SortDropdown = () => {
  const { filters, setSortBy } = useFilters();

  return (
    <Form.Select
      className="bg-dark text-white border-secondary"
      value={filters.sortBy}
      onChange={(e) => setSortBy(e.target.value as SortOption)}
      style={{ width: 'auto' }}
    >
      <option value="relevance">Most Relevant</option>
      <option value="rating">Highest Rated</option>
      <option value="releaseDate">Newest First</option>
      <option value="title">A - Z</option>
    </Form.Select>
  );
};

export default SortDropdown;