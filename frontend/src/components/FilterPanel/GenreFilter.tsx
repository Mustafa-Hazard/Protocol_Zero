import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';

const GENRES = ['Action', 'RPG', 'Strategy', 'Sports', 'Horror', 'Adventure', 'Simulation', 'Puzzle'];

interface Props {
    onClose?: () => void;
}

const GenreFilter = ({ onClose }: Props) => {
    const { filters, toggleGenre } = useFilters();

    return (
        <div>
            <h6 className="text-white mb-3">Genres</h6>
            {GENRES.map(genre => (
                <Form.Check
                    key={genre}
                    type="checkbox"
                    label={genre}
                    checked={filters.genres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                    className="text-white mb-2"
                />
            ))}
        </div>
    );
};

export default GenreFilter;