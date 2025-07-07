
import React, { useEffect, useState, useRef } from 'react';
import { Code, Server, Database } from 'lucide-react';

const Skills = ({ darkMode }) => {
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

  const skillCards = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-400 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-400 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
        { name: 'React.js', level: 80, color: 'from-blue-400 to-cyan-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-blue-500' }
      ],
      bgColor: darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Server,
      title: 'Backend & Tools',
      skills: [
        { name: 'Java', level: 75, color: 'from-red-400 to-pink-500' },
        { name: 'Python', level: 70, color: 'from-green-400 to-blue-500' },
        { name: 'GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-purple-600' }
      ],
      bgColor: darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-indigo-600' },
        { name: 'MongoDB', level: 70, color: 'from-green-500 to-teal-600' },
        // { name: 'Responsive Design', level: 85, color: 'from-purple-500 to-pink-600' },
        // { name: 'Teamwork', level: 90, color: 'from-indigo-500 to-purple-600' }
      ],
      bgColor: darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((card, cardIndex) => (
            <div
              key={card.title}
              className={`${card.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
              } hover:scale-105`}
              style={{ transitionDelay: `${cardIndex * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${card.iconColor} ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-full shadow-md mb-4`}>
                  <card.icon size={32} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {card.title}
                </h3>
              </div>

              <div className="space-y-4">
                {card.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-semibold ${
                        darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold px-2 py-1 rounded-full shadow-sm ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className={`w-full rounded-full h-2 shadow-inner ${
                        darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-50'
                      }`}>
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-sm transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(cardIndex * 200) + (skillIndex * 300) + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
