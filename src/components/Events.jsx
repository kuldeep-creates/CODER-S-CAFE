import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';

const RecentEvent = ({ darkMode }) => {
  const imageSets = [
    [img1, img2, img3,img4,img5],
    [img1, img2, img3,img4,img5],
    [img1, img2, img3,img4,img5],
  ];

  const eventDetails = [
    {
      title: 'Programming Contest',
      description: `The battle of logic, speed, and problem-solving came alive on 22nd February 2025 as Coder’s Cafe hosted an intense Competitive Programming Contest! 🏆💻

With brilliant minds tackling challenging problems, the event was a true celebration of coding excellence and innovation. From debugging to optimizing, every participant showcased remarkable skills and determination. 🔥

🥇 1st Place: Prabhat Singh
🥈 2nd Place: Krish Kumar
🎖️ 3rd Place: Tanishka Pundhir`,
    },
    {
      title: 'Hackathon 2.0',
      description: `Innovation meets execution! On 10th March 2025, young tech enthusiasts gathered to code their ideas into reality. 💡💻

Projects ranged from AI-powered bots to sustainable tech solutions. The competition was fierce, but the collaboration and creativity stood out!

🥇 1st Place: Aryan Raj
🥈 2nd Place: Meera Chaudhary
🎖️ 3rd Place: Ankit Yadav

Great work by everyone who participated!`,
    },
    {
      title: 'WebDev Showcase',
      description: `Frontend finesse and backend brilliance! 🔥

On 5th April 2025, our Web Dev Showcase featured stunning portfolios, functional web apps, and creative UI/UX from our talented developers. 🌐

Special mentions to:
✨ Neha Sharma – Best Design
🚀 Rohan Verma – Most Functional
🎯 Muskan Agarwal – Best Innovation`,
    },
  ];

  const [indices, setIndices] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) => prev.map((i, idx) => (i + 1) % imageSets[idx].length));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="events"
      className={`scroll-mt-24 pt-24 pb-24 px-4 md:px-16 transition-all duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f7f7f7] text-black'
      }`}
    >
      {/* Upcoming Events Button */}
      <div className="flex justify-center mb-12">
        <a
          href="#upcoming-events"
          className={`px-7 py-3 rounded-full text-sm font-semibold shadow-md backdrop-blur-md transition-all duration-300 
            ${darkMode 
              ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20' 
              : 'bg-black text-white border border-black/10 hover:bg-black/90'
            }`}
        >
          🌟 Explore Upcoming Events
        </a>
      </div>

      {/* Event Cards */}
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
            <div className="md:w-1/2 w-full flex items-center justify-center p-4">
              <div className="w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
                <img
                  src={imageSets[idx][indices[idx]]}
                  alt={`Event ${idx} Slide`}
                  className="w-[85%] h-[85%] object-contain rounded-3xl transition duration-300"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-start p-6">
              <h2 className={`mt-[12px] text-3xl md:text-4xl  font-bold mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
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
