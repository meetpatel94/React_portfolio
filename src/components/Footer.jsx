
import React from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Backend Development',
    'E-commerce Solutions',
    'API Integration'
  ];

  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp size={24} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Patel
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences. 
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <a
                  href="mailto:meetpatel96645@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  meetpatel96645@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <a
                  href="tel:+919664562657"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  +91 9664562657
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-600'} pt-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={14} />
              <span>by Meet Patel</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Meet Patel. All rights reserved.
            </div>
          </div>
          <div className="text-center mt-4">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
