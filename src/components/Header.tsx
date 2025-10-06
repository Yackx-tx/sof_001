import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Chapters', path: '/chapters' },
  { name: 'News', path: '/news' },
  { name: 'Events', path: '/events' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-1 rounded-lg group-hover:bg-primary-light transition-colors">
              <Sprout className="w-8 h-8 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Seeds of the Future</span>
              <span className="text-xs text-gray-600">Planting Hope, Growing Futures</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group px-4 py-2 rounded-lg font-medium transition-colors ${
                  link.name === 'Get Involved'
                    ? 'bg-yellow-400 text-green-900 hover:bg-yellow-500'
                    : location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.name}
                {link.name !== 'Get Involved' && (
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 ease-out ${
                      location.pathname === link.path ? 'w-8' : 'w-0'
                    } group-hover:w-8`}
                  ></span>
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors text-center ${
                    link.name === 'Get Involved'
                      ? 'bg-yellow-400 text-green-900 hover:bg-yellow-500'
                      : location.pathname === link.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  <span className="relative group">
                    {link.name}
                    {link.name !== 'Get Involved' && (
                    <span
                        className={`absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 ease-out ${
                          location.pathname === link.path ? 'w-8' : 'w-0'
                        } group-hover:w-8`}
                    ></span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
