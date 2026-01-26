import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../../constants/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`
          absolute right-0 top-0 h-full w-72
          bg-white dark:bg-dark-surface
          shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold text-pastel-purple dark:text-pastel-blue">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="w-5 h-5 text-gray-600 dark:text-gray-300"
            />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    block py-3 px-4
                    text-lg font-medium
                    text-pastel-purple dark:text-pastel-blue
                    hover:bg-pastel-purple/10 dark:hover:bg-pastel-blue/10
                    rounded-lg
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme toggle */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-bg rounded-lg">
            <span className="text-sm text-gray-600 dark:text-dark-muted">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
