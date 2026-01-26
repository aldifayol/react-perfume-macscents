import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../../constants/navigation';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { useMobileMenu } from '../../hooks/useMobileMenu';

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      <header className="flex justify-between items-center py-4 px-6 md:py-6 md:px-8 bg-white/80 dark:bg-dark-surface/90 shadow-sm sticky top-0 z-40 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-pastel-purple dark:text-pastel-blue tracking-wide">
            Macscents
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="
                text-pastel-purple dark:text-pastel-blue
                font-medium
                hover:text-pastel-blue dark:hover:text-pastel-yellow
                transition-colors duration-200
              "
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggle}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="w-6 h-6 text-pastel-purple dark:text-pastel-blue"
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
}
