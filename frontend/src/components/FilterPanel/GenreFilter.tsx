import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';

const GENRES = ['Action', 'RPG', 'Strategy', 'Sports', 'Horror', 'Adventure', 'Simulation', 'Puzzle'];

interface Props {
    onClose?: () => void;
}

const GenreFilter = ({ onClose }: Props) => {
    const { filters, toggleGenre } = useFilters();

    return (
        <div className="genre-filter-container">
            {/* Using a subtle, uppercase heading for a professional dashboard feel */}
            <div className="d-flex flex-column gap-1">
                {GENRES.map(genre => {
                    const isChecked = filters.genres.includes(genre);
                    return (
                        <div
                            key={genre}
                            className={`genre-item d-flex align-items-center rounded-2 px-2 py-1 ${isChecked ? 'active' : ''}`}
                            style={{
                                transition: '0.2s ease',
                                cursor: 'pointer',
                                background: isChecked ? 'rgba(31, 111, 235, 0.1)' : 'transparent'
                            }}
                            onClick={() => toggleGenre(genre)}
                        >
                            <Form.Check
                                type="checkbox"
                                id={`genre-${genre}`}
                                label={genre}
                                checked={isChecked}
                                onChange={() => { }} // Controlled by the parent div click
                                className="custom-check"
                            />
                        </div>
                    );
                })}
            </div>

            <style>
                {`
                    .genre-filter-container {
                        max-height: 300px;
                        overflow-y: auto;
                        padding-right: 5px;
                    }

                    /* Custom Checkbox Styling */
                    .custom-check .form-check-input {
                        background-color: #161b22;
                        border: 1px solid #30363d;
                        cursor: pointer;
                        width: 1.1em;
                        height: 1.1em;
                        margin-top: 0.25em;
                        transition: all 0.2s ease;
                    }

                    .custom-check .form-check-input:checked {
                        background-color: #1f6feb;
                        border-color: #1f6feb;
                        box-shadow: 0 0 10px rgba(31, 111, 235, 0.3);
                    }

                    .custom-check .form-check-label {
                        color: #c9d1d9;
                        font-size: 14px;
                        font-weight: 500;
                        padding-left: 8px;
                        cursor: pointer;
                        width: 100%;
                    }

                    .genre-item:hover {
                        background: rgba(255, 255, 255, 0.05);
                    }

                    .genre-item.active .form-check-label {
                        color: #fff;
                        font-weight: 600;
                    }

                    /* Custom Scrollbar for the genre list */
                    .genre-filter-container::-webkit-scrollbar {
                        width: 4px;
                    }
                    .genre-filter-container::-webkit-scrollbar-thumb {
                        background: #30363d;
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default GenreFilter;