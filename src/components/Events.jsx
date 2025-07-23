import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ✅ React Router link

import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';

const RecentEvent = ({ darkMode }) => {
  const imageSets = [
    [img1, img2, img3, img4, img5],
  ];

  const eventDetails = [
    {
      title: 'Programming Contest',
      description: `The battle of logic, speed, and problem-solving came alive on 22nd February 2025 as Coder’s Cafe hosted an intense Competitive Programming Contest! 🏆💻

🥇 1st Place: Prabhat Singh
🥈 2nd Place: Krish Kumar
🎖️ 3rd Place: Tanishka Pundhir`,
    },
  ];

  const [indices, setIndices] = useState([0]);

  const handleChange = (eventIdx, direction) => {
    setIndices((prev) =>
      prev.map((i, idx) => {
        if (idx === eventIdx) {
          const len = imageSets[idx].length;
          return direction === 'next' ? (i + 1) % len : (i - 1 + len) % len;
        }
        return i;
      })
    );
  };

  return (
    <section
      id="events"
      className={`scroll-mt-24 pt-24 pb-24 px-4 md:px-16 transition-all duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f7f7f7] text-black'
      }`}
    >
      {/* 🔗 Updated Button */}
      <div className="flex justify-center mb-12">
        <Link
          to="/upcoming"
          className={`px-7 py-3 rounded-full text-sm font-semibold shadow-md backdrop-blur-md transition-all duration-300 
            ${darkMode 
              ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20' 
              : 'bg-black text-white border border-black/10 hover:bg-black/90'
            }`}
        >
          🌟 Explore Upcoming Events
        </Link>
      </div>

      <div className="flex flex-col gap-20 items-center">
        {eventDetails.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-full max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden min-h-[360px] shadow-xl transition-all duration-500 ${
              darkMode
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 w-full relative flex items-center justify-center p-4">
              {/* Left Button */}
              <button
                onClick={() => handleChange(idx, 'prev')}
                className="absolute left-12 top-1/2 -translate-y-1/2 
                  bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black dark:text-white 
                  shadow-md hover:shadow-xl transition-transform transform hover:scale-110 
                  rounded-full p-3 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={imageSets[idx][indices[idx]]}
                alt={`Event ${idx} Slide`}
                className="w-[85%] h-[85%] object-contain rounded-3xl transition duration-300"
              />

              {/* Right Button */}
              <button
                onClick={() => handleChange(idx, 'next')}
                className="absolute right-12 top-1/2 -translate-y-1/2 
                  bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black dark:text-white 
                  shadow-md hover:shadow-xl transition-transform transform hover:scale-110 
                  rounded-full p-3 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-start p-6">
              <h2 className={`mt-[12px] text-3xl md:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                {event.title}
              </h2>
              <p className="text-xm md:text-sm font-normal whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentEvent;
