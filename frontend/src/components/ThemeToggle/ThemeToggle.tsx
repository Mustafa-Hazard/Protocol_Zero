import { useDarkMode } from '../../hooks/useDarkMode';

const ThemeToggle = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="theme-toggle-btn"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
            }}
        >
            {/* Visual Indicator Container */}
            <div style={{
                fontSize: '16px',
                lineHeight: '1',
                filter: isDark ? 'drop-shadow(0 0 5px rgba(240, 192, 64, 0.4))' : 'none',
                transition: 'transform 0.5s ease'
            }} className="icon-wrapper">
                {isDark ? '☀️' : '🌙'}
            </div>

            {/* Label - Hidden on mobile, visible on desktop */}
            <span style={{
                color: isDark ? '#f0c040' : '#8b949e',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }} className="d-none d-md-inline">
                {isDark ? 'Light' : 'Dark'}
            </span>

            <style>
                {`
                    .theme-toggle-btn:hover {
                        background: rgba(31, 111, 235, 0.1) !important;
                        border-color: #1f6feb !important;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(31, 111, 235, 0.15);
                    }
                    .theme-toggle-btn:active {
                        transform: scale(0.95);
                    }
                    .theme-toggle-btn:hover .icon-wrapper {
                        transform: rotate(15deg) scale(1.1);
                    }
                `}
            </style>
        </button>
    );
};

export default ThemeToggle;