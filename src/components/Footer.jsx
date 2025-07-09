
import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp size={24} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Meet Patel
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Thank you for visiting my portfolio. Let's build something amazing together!
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>by Meet Patel</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
