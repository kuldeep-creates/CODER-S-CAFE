import React from 'react';

const Challenge = ({ darkMode }) => {
  return (
    <section
      id="challenge"
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f9f9f9] text-black'
      }`}
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Challenges Coming Soon 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
          We're cooking up some exciting challenges for you to sharpen your skills.
          Stay tuned and keep coding! 💻
        </p>
      </div>
    </section>
  );
};

export default Challenge;
