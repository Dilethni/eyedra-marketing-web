import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Journey', href: '/journey' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full bg-transparent backdrop-blur-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <nav 
        className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6 lg:px-8" 
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary-900 to-secondary-900 bg-clip-text text-transparent"
            aria-label="EYEDRA Home"
          >
            <img 
              src="/logo.png" 
              alt="EYEDRA Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            EYEDRA
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-center gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="relative font-bold text-blue-900 hover:text-blue-600 transition-colors 
                        after:content-[''] after:absolute after:bottom-0 after:left-0 
                        after:w-0 after:h-[2px] after:bg-blue-600 
                        hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-72 h-screen bg-gradient-to-r from-blue-100 to-pink-100 transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-lg font-bold">Menu</span>
            <button 
              className="text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="flex-1 p-6 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-blue-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
