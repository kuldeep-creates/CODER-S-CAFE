import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Domains from './components/Domains.jsx';
import WhyJoin from './components/WhyJoin.jsx';
import Events from './components/Events.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import WeeklyChallenge from './components/WeeklyChallenge.jsx';
import TechStack from './components/TechStack.jsx';
import Team from './components/Team.jsx';
import Footer from './components/Footer.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';
import DSAPage from './components/courses/dsa.jsx';
import FullStackPage from './components/courses/fullstack.jsx';
import JavaPage from './components/courses/java.jsx';
import DataSciencePage from './components/courses/datascience.jsx';
import DevOpsPage from './components/courses/devops.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const HomeLayout = ({ children }) => (
    <div className={`relative min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <ParticleBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <FloatingCTA darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );

  const CourseLayout = ({ children }) => (
    <div className={`relative min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pb-20">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <HomeLayout>
            <Hero darkMode={darkMode} />
            <WhyJoin darkMode={darkMode} />
            <Domains darkMode={darkMode} />
            <TechStack darkMode={darkMode} />
            <Team darkMode={darkMode} />
            <WeeklyChallenge darkMode={darkMode} />
            <Events darkMode={darkMode} />
          </HomeLayout>
        } />
        <Route path="/courses/dsa" element={<CourseLayout><DSAPage darkMode={darkMode} /></CourseLayout>} />
        <Route path="/courses/fullstack" element={<CourseLayout><FullStackPage darkMode={darkMode} /></CourseLayout>} />
        <Route path="/courses/java" element={<CourseLayout><JavaPage darkMode={darkMode} /></CourseLayout>} />
        <Route path="/courses/datascience" element={<CourseLayout><DataSciencePage darkMode={darkMode} /></CourseLayout>} />
        <Route path="/courses/devops" element={<CourseLayout><DevOpsPage darkMode={darkMode} /></CourseLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
