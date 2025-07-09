
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Github, ArrowUp } from 'lucide-react';

const Projects = ({ darkMode }) => {
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

  const projects = [
    {
      title: 'Dynamic Movie Web Application',
      description: 'Developed responsive movie application using React.js, Redux, and Tailwind CSS. Integrated external movie APIs to display real-time data, including trending movies, genres, trailers, and ratings. Ensured a mobile-first and visually appealing UI using Tailwind CSS.',
      image: '🎬',
      technologies: ['React.js', 'Redux', 'Tailwind CSS', 'Movie API'],
      github: 'https://github.com/meetpatel94/Movieosite.git',
      demo: 'https://movieosite.vercel.app/'
    },
    {
      title: 'Real-Time Check Weather Webapp',
      description: 'Built a real-time weather application using HTML, CSS, JavaScript. Integrated weather APIs to fetch and display live weather details. Designed a clean, accessible UI with dynamic data rendering.',
      image: '🌤️',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      github: 'https://github.com/meetpatel94/Weather_webapp.git',
      demo: 'https://weather-webapp-eight-gamma.vercel.app/'
    },
    {
      title: 'PocketBuddy - Nearby Show Events Webapp',
      description: 'Developed a monolithic web application using Java Spring Boot, JSP, Servlets, Hibernate, and MySQL, enabling users to discover and manage nearby events. Managed user sessions and authentication using Java Servlets, ensuring secure access to personalized event information.',
      image: '🎪',
      technologies: ['Java Spring Boot', 'JSP', 'Servlets', 'Hibernate', 'MySQL'],
      github: 'https://github.com/meetpatel94/pocketbuddy_events.git',
    },
    {
      title: 'Portfolio Website Using HTML,CSS&JS',
      description: 'A modern portfolio website showcasing my skills and projects with smooth animations, dark mode, and responsive design. Built with React and Tailwind CSS for optimal performance.',
      image: '💼',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/meetpatel94/Personal_portfolio.git',
      demo: 'https://personal-portfolio-beta-wine.vercel.app/'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, user authentication, and team collaboration features. Built with modern web technologies.',
      image: '📝',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      comingSoon: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration. Features include responsive design and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Express', 'MySQL', 'Payment Gateway'],
      comingSoon: true
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className={`py-12 sm:py-16 lg:py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent projects that showcase my skills and experience in web development and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-xs sm:text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  {project.comingSoon ? (
                    <div className="flex items-center justify-center w-full">
                      <span className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg font-medium">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target='_blank'
                          rel="noopener noreferrer"
                          className="flex items-center justify-center sm:justify-start space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 group/link"
                        >
                          <span className="text-sm font-medium">Live Demo</span>
                          <ArrowUp className="rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" size={16} />
                        </a>
                      )}
                      
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center sm:justify-start space-x-2 transition-colors duration-300 group/link ${
                            darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
                          }`}
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
