
import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
      } border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Meet Patel
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-300 font-medium`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${
              darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                      darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <footer className={`py-8 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-600'
      } border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Meet Patel. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
