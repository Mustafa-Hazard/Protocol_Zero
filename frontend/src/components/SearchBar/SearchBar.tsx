import { useFilters } from '../../hooks/useFilters';

const SearchBar = () => {
    const { filters, setSearch } = useFilters();

    return (
        <input
            type="text"
            className="form-control bg-secondary text-white border-0"
            placeholder="Search games..."
            value={filters.search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default SearchBar;