
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    // Create a link to download the actual resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/0b83a2f2-8ce2-4b0f-8921-1edbcb43cb0e.png';
    link.download = 'Meet_Patel_Resume.png';
    link.click();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    } ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Patel
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={downloadResume}
              className="hidden sm:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
            
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block capitalize hover:text-blue-600 transition-colors duration-300 w-full text-left"
              >
                {item}
              </button>
            ))}
            <button
              onClick={downloadResume}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
