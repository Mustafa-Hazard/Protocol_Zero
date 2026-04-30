import { Form } from 'react-bootstrap';
import { useFilters } from '../../hooks/useFilters';

const PLATFORMS = ['PC', 'PlayStation 5', 'Xbox Series X', 'Nintendo Switch', 'Mobile'];

const PlatformFilter = () => {
    const { filters, togglePlatform } = useFilters();

    return (
        <div className="platform-filter-container">
            <div className="d-flex flex-column gap-1">
                {PLATFORMS.map(platform => {
                    const isChecked = filters.platforms.includes(platform);
                    return (
                        <div
                            key={platform}
                            className={`platform-item d-flex align-items-center rounded-2 px-2 py-1 ${isChecked ? 'active' : ''}`}
                            style={{
                                transition: '0.2s ease',
                                cursor: 'pointer',
                                background: isChecked ? 'rgba(31, 111, 235, 0.1)' : 'transparent'
                            }}
                            onClick={() => togglePlatform(platform)}
                        >
                            <Form.Check
                                type="checkbox"
                                id={`platform-${platform}`}
                                label={platform}
                                checked={isChecked}
                                onChange={() => { }} // Controlled by the row click
                                className="custom-check"
                            />
                        </div>
                    );
                })}
            </div>

            <style>
                {`
                    .platform-filter-container {
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

                    .platform-item:hover {
                        background: rgba(255, 255, 255, 0.05);
                    }

                    .platform-item.active .form-check-label {
                        color: #fff;
                        font-weight: 600;
                    }

                    /* Scrollbar Styling */
                    .platform-filter-container::-webkit-scrollbar {
                        width: 4px;
                    }
                    .platform-filter-container::-webkit-scrollbar-thumb {
                        background: #30363d;
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    );
};

export default PlatformFilter;