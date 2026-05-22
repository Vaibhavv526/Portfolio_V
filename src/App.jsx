import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';

function App() {
  // Dark mode is default (as per specification)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // default true
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#f5f5f7';
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-out font-sans ${
      isDark 
        ? 'bg-apple-bg-dark text-apple-text-darkPrimary' 
        : 'bg-apple-bg-light text-apple-text-lightPrimary'
    }`}>
      {/* Navigation */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Sections */}
      <main className="relative">
        {/* Section 1: Hero Experience */}
        <Hero personal={portfolioData.personal} isDark={isDark} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Subtle separator */}
          <hr className={`border-t transition-colors duration-500 ${
            isDark ? 'border-white/5' : 'border-black/5'
          }`} />
        </div>

        {/* Section 2: Core Metrics & Bento Grid */}
        <BentoGrid metrics={portfolioData.metrics} toolkit={portfolioData.toolkit} isDark={isDark} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Subtle separator */}
          <hr className={`border-t transition-colors duration-500 ${
            isDark ? 'border-white/5' : 'border-black/5'
          }`} />
        </div>

        {/* Section 3: Featured Systems (Product Cards) */}
        <Projects projects={portfolioData.projects} isDark={isDark} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Subtle separator */}
          <hr className={`border-t transition-colors duration-500 ${
            isDark ? 'border-white/5' : 'border-black/5'
          }`} />
        </div>

        {/* Section 4: Recognition & Milestones */}
        <Milestones milestones={portfolioData.milestones} isDark={isDark} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Subtle separator */}
          <hr className={`border-t transition-colors duration-500 ${
            isDark ? 'border-white/5' : 'border-black/5'
          }`} />
        </div>

        {/* Section 5: Contact Gate */}
        <Contact isDark={isDark} />
      </main>

      {/* Section 6: Footer & Digital Touchpoints */}
      <Footer socials={portfolioData.socials} isDark={isDark} />
    </div>
  );
}

export default App;
