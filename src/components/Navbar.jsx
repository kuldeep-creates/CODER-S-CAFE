import React from 'react';
import { Coffee, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md shadow-lg py-2 px-6 ${
        darkMode ? 'bg-blue-900/20' : 'bg-black/30'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <Coffee
                size={33}
                className={`text-${darkMode ? 'bg-black' : 'bg-white'}`}
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-[70%] -translate-y-[30%] text-[7px] font-bold leading-none pointer-events-none">
                {'</>'}
              </span>
            </div>
            <span className="font-['Bebas_Neue'] text-2xl">CODER'S CAFE</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
