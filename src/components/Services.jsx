
import React, { useEffect, useState, useRef } from 'react';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

const Services = ({ darkMode }) => {
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

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and responsive design principles.',
      features: ['React.js Development', 'Responsive Design', 'Modern UI/UX']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Creating mobile-responsive applications that work seamlessly across all devices and screen sizes.',
      features: ['Mobile Optimization', 'Cross-Platform', 'Touch-Friendly UI']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions using Java Spring Boot, MySQL, and API development for scalable applications.',
      features: ['RESTful APIs', 'Database Design', 'Server Architecture']
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end web development services from concept to deployment with modern tech stacks.',
      features: ['Frontend & Backend', 'Database Integration', 'Deployment']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and visually appealing interfaces.',
      features: ['User Research', 'Wireframing', 'Visual Design']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, performance, and better user experience.',
      features: ['Code Optimization', 'Loading Speed', 'SEO Friendly']
    }
  ];

  return (
    <section ref={sectionRef} id="services" className={`py-12 sm:py-16 lg:py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I offer comprehensive web development services to help bring your ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                darkMode ? 'bg-blue-600/20' : 'bg-blue-100'
              }`}>
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Service Title */}
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={`flex items-center text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to start your project?
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
