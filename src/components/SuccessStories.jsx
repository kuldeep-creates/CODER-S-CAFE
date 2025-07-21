import React from 'react';

const SuccessStories = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Success Stories
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Coming Soon
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Success stories will be featured here.
            </p>
          </div>
        </div> */}
        <div className="mt-8 flex justify-center">
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-colors
                ${darkMode 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              COMMING SOON !
            </button>
          </div>
      </div>
    </section>
  );
};

export default SuccessStories;