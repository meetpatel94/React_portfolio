
import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200/30 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200/30 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Meet Patel
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl lg:text-3xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Information Technology Engineer & Full Stack Developer
          </p>
          
          <p className={`text-lg mb-12 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          } transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            I am an Information Technology Engineer with holistic knowledge of software development and design. 
            I am also attentive in coordinating with stakeholders to obtain challenging careers in the IT industry.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={scrollToProjects}
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button
              onClick={scrollToAbout}
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToAbout}
            className={`animate-bounce p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-100 hover:bg-blue-200'
            }`}
          >
            <ArrowDown className="text-blue-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
