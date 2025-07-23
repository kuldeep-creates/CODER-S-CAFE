import React from 'react';
import { Code, Globe, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Domains = ({ darkMode }) => {
  const navigate = useNavigate();

  const domains = [
    {
      title: 'Data Structures & Algorithms',
      icon: <Code size={42} />,
      description: 'Master algorithms and data structures for optimized problem-solving and coding interviews.',
      path: '/courses/dsa',
    },
    {
      title: 'Full Stack Development',
      icon: <Globe size={42} />,
      description: 'Build modern web apps with frontend, backend, databases, and deployment.',
      path: '/courses/fullstack',
    },
    {
      title: 'Java Programming',
      icon: <Coffee size={42} />,
      description: 'Learn Java OOP, Android development, and enterprise-level programming.',
      path: '/courses/java',
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section
      id="domains"
      className={`relative py-36 px-4 md:px-12 overflow-hidden ${darkMode ? 'bg-[#0a0f1a] text-white' : 'bg-[#f5f7fa] text-black'
        }`}
    >
      {/* Background Grid - More Visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`w-full h-full bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] ${darkMode ? 'text-white/15' : 'text-black/20'
            }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center animate-fade-in">

        <h2
          className={`text-4xl md:text-5xl font-bold font-mono tracking-wide mb-4 ${darkMode ? 'text-white' : 'text-black'
            }`}
        >
          ▍ Explore Our Domains
        </h2>
        <p className="text-md font-mono text-gray-400 mb-16 max-w-2xl mx-auto">
          Build, break, and rebuild. Choose your battlefield — and master it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {domains.map((domain, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(domain.path)}
              className={`group p-6 rounded-xl backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-[1.03] relative overflow-hidden border ${darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white border-black/10 hover:bg-gray-100'
                }`}
            >
              <div className="flex flex-col items-center gap-4 h-full">
                <div className={`text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold text-center font-mono tracking-wide">
                  {domain.title}
                </h3>
                <p className="text-center text-sm text-gray-400 font-mono leading-relaxed">
                  {domain.description}
                </p>

                {/* Button with Modern Hover Effect */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(domain.path);
                  }}
                  className={`mt-6 px-6 py-2 text-xs font-semibold rounded-full tracking-wider font-mono uppercase transition-all duration-300 transform 
                    ${darkMode
                      ? 'bg-white text-black hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                      : 'bg-black text-white hover:scale-105 hover:shadow-[0_0_12px_rgba(0,0,0,0.2)]'}
                  `}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
