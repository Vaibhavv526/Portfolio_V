
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = ({ socials, isDark }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 64; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={`py-16 px-6 border-t select-none text-[11px] transition-colors duration-500 ${
      isDark 
        ? 'bg-apple-bg-darkObsidian border-white/5 text-apple-text-darkSecondary' 
        : 'bg-apple-bg-light border-black/5 text-apple-text-lightSecondary'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Apple Style Footer Directory Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          {/* Section 1: Navigation */}
          <div className="flex flex-col space-y-2.5">
            <span className={`font-semibold uppercase tracking-wider ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              Sections
            </span>
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="hover:underline transition-all">Start Experience</a>
            <a href="#experience" onClick={(e) => handleLinkClick(e, '#experience')} className="hover:underline transition-all">Experience</a>
            <a href="#metrics" onClick={(e) => handleLinkClick(e, '#metrics')} className="hover:underline transition-all">Metrics Dashboard</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:underline transition-all">Core Systems</a>
            <a href="#education" onClick={(e) => handleLinkClick(e, '#education')} className="hover:underline transition-all">Education</a>
            <a href="#milestones" onClick={(e) => handleLinkClick(e, '#milestones')} className="hover:underline transition-all">Recognition</a>
          </div>

          {/* Section 2: Technical Toolkit */}
          <div className="flex flex-col space-y-2.5">
            <span className={`font-semibold uppercase tracking-wider ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              Core Architecture
            </span>
            <span>PyTorch Transformers</span>
            <span>Multi-Agent AI Systems</span>
            <span>Computer Vision Pipelines</span>
            <span>Containerized Microservices</span>
          </div>

          {/* Section 3: Digital Touchpoints */}
          <div className="flex flex-col space-y-2.5">
            <span className={`font-semibold uppercase tracking-wider ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              Digital Touchpoints
            </span>
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a 
              href={socials.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline flex items-center gap-1.5"
            >
              <Code className="w-3.5 h-3.5" />
              LeetCode
            </a>
          </div>

          {/* Section 4: Academic Focus */}
          <div className="flex flex-col space-y-2.5">
            <span className={`font-semibold uppercase tracking-wider ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              Student Identity
            </span>
            <span>Software Engineering Major</span>
            <span>Aspiring ML Engineer</span>
            <span>Bilaspur, India</span>
            <span className="text-apple-blue font-semibold">Open for Opportunities</span>
          </div>
        </div>

        {/* Apple Style Footer Legal & Copyright Bar */}
        <div className={`pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark ? 'border-white/5' : 'border-black/5'
        }`}>
          <div>
            Copyright © {currentYear} Vaibhav K. All rights reserved. Built with Vite, React, and Tailwind.
          </div>
          
          <div className="flex flex-wrap gap-3">
            <span className="hover:underline cursor-pointer">Refactoring Guidelines</span>
            <span className="text-gray-600">|</span>
            <span className="hover:underline cursor-pointer">Code Coverage</span>
            <span className="text-gray-600">|</span>
            <span className="hover:underline cursor-pointer">Deployment Config</span>
            <span className="text-gray-600">|</span>
            <span className="hover:underline cursor-pointer">VCS Commits</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
