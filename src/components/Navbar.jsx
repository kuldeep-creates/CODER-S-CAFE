import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled
        ? `backdrop-blur-md shadow-lg py-2 px-6 rounded-none border-none 
     ${darkMode ? 'bg-blue-900/20' : 'bg-black/30'}`
        : `backdrop-blur-sm border border-white/10 shadow-md py-2 px-6 mx-4 mt-4 rounded-xl 
     ${darkMode ? 'bg-blue-900/10' : 'bg-black/20'}`
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <Coffee size={33} className={`text-${darkMode ? 'bg-black' : 'bg-white'}`} />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-[70%] -translate-y-[30%] text-[7px] font-bold leading-none pointer-events-none">{'</>'}</span>
            </div>
            <span className="font-['Bebas_Neue'] text-2xl">CODER'S CAFE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks darkMode={darkMode} />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${darkMode ? 'bg-black' : 'bg-white'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLinks darkMode={darkMode} mobile onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ darkMode, mobile = false, onClick }) => {
  const links = ['Home', 'Domains', 'Events', 'Team'];

  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onClick}
          className={`relative font-medium transition-all duration-200 ${mobile ? 'block py-2 px-4' : ''
            } ${darkMode
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-700'
            } after:absolute after:w-0 after:h-0.5 after:left-0 after:bottom-0 ${darkMode
              ? 'after:bg-white'
              : 'after:bg-black'
            } hover:after:w-full after:transition-all after:duration-300`}
        >
          {link}
        </a>
      ))}
    </>
  );
};

export default Navbar;
