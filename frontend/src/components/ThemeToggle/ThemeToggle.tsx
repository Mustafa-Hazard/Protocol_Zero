import { useDarkMode } from '../../hooks/useDarkMode';

const ThemeToggle = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="btn btn-outline-secondary btn-sm"
        >
            {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
};

export default ThemeToggle;