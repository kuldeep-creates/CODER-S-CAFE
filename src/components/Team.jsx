import React from 'react';

import { Users } from 'lucide-react';

const Team = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "RAVIRANJAN KUMAR SINGH",
      role: "FULL STACK HEAD",
      image: "https://media.licdn.com/dms/image/v2/D5603AQG0fRp-6TyWYQ/profile-displayphoto-shrink_400_400/B56ZZzJjP0GQAk-/0/1745688608111?e=1755734400&v=beta&t=kuEOSsA6UKPP_rOB3qNIBD4KogLefKwcSax-CMIGfP8",
      bio: "4 YEARS OF EXPERIENCE"
    },
    {
      name: "MANIKANT SINGH",
      role: "DATA SCIENCE AND ALGORITHM HEAD",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFwQUQUAJWDjg/profile-displayphoto-shrink_400_400/B56ZaR_tUFGoAk-/0/1746206120578?e=1755734400&v=beta&t=5h-_OSu3kXDrSFoo6398JIQBrnkA9u4itfE6IujeKzc",
      bio: "4 YEARS OF EXPERIENCE"
    },
    {
      name: "SACHIN SINGH",
      role: "DEV-OPS HEAD",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEeAfmkybEanQ/profile-displayphoto-shrink_400_400/B56ZWJH3nuGoAg-/0/1741762302461?e=1755734400&v=beta&t=2XI9t3bt8tPHqoWuSX1cgGGN83-Taa0AG3ejPluHdoE",
      bio: "4 YEARS OF EXPERIENCE"
    },
    {
      name: "HARSHDEEP BISNOI",
      role: "JAVA HEAD",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFucglZRgAM3A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710075886430?e=1755734400&v=beta&t=1lMYKLt-iTqcbn7vIz8r0tLm-4K-HUiLSsjkvcY31Cs",
      bio: "3 YEARS OF EXPERIENCE"
    },
    {
      name: "HIMANSHU MALI",
      role: "DATA SCIENCE AND ALGORITHM HEAD",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQF7Nl99hV7U9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694677039161?e=1755734400&v=beta&t=pzgQz4xQgxPjubHdy0D4KftRzORIYuRbuLGIlf49zT0",
      bio: "2 YEARS OF EXPERIENCE"
    },
    {
      name: "LAKSHYA ROHRA",
      role: "DATA SCIENCE HEAD",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGa0e4kc6oRmA/profile-displayphoto-shrink_400_400/B56ZdtmyE8GQAg-/0/1749890573698?e=1755734400&v=beta&t=-px4LiSS-TJEyXYL2jraFTdGeL-b2Lsa11-rOx0COf0",
      bio: "2 YEARS OF EXPERIENCE"
    }
  ];

  return (
    <section id="team" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Meet Our Team
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The passionate individuals driving our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 ${
                darkMode ? 'bg-gray-800 shadow-blue-500/20' : 'bg-white shadow-xl'
              }`}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className={`absolute inset-0 rounded-lg ${
                  darkMode ? 'bg-gradient-to-t from-gray-900/80' : 'bg-gradient-to-t from-black/50'
                }`} />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h3>
              <p className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {member.role}
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;