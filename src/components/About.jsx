
import React, { useEffect, useState, useRef } from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices with modern technologies.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Creating beautiful and intuitive user interfaces with responsive web design.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and excellent user experience with modern frameworks.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and coordinating with stakeholders in dynamic environments.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and intro */}
          <div className={`transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Information Technology Engineer
              </h3>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Passed out B.E in Information Technology from Gujarat Technological University (GTU). 
                I have hands-on experience with modern web technologies including React.js, Tailwind CSS, 
                JavaScript, and various development tools. I'm passionate about creating responsive, 
                user-friendly web applications and contributing to dynamic work environments.
              </p>
            </div>
          </div>

          {/* Right side - Features */}
          <div className={`transition-all duration-1000 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`p-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <feature.icon className="text-blue-600 mb-4" size={32} />
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
