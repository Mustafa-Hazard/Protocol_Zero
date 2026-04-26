import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';

const PLATFORMS = ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'Mobile'];

const PlatformFilter = () => {
    const { filters, togglePlatform } = useFilters();

    return (
        <div>
            <h6 className="text-white mb-3">Platforms</h6>
            {PLATFORMS.map(platform => (
                <Form.Check
                    key={platform}
                    type="checkbox"
                    label={platform}
                    checked={filters.platforms.includes(platform)}
                    onChange={() => togglePlatform(platform)}
                    className="text-white mb-2"
                />
            ))}
        </div>
    );
};

export default PlatformFilter;