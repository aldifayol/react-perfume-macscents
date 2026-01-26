import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full
        bg-pastel-purple/10 dark:bg-pastel-blue/10
        text-pastel-purple dark:text-pastel-blue
        hover:bg-pastel-purple/20 dark:hover:bg-pastel-blue/20
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-pastel-purple dark:focus:ring-pastel-blue
        ${className}
      `}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon
        icon={resolvedTheme === 'dark' ? faSun : faMoon}
        className="w-5 h-5"
      />
    </button>
  );
}
