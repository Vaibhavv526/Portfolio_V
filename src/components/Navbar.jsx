import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Systems', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? (isDark ? 'glass-navbar-dark py-3' : 'glass-navbar-light py-3') 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center space-x-2 text-sm font-semibold tracking-tight uppercase"
        >
          <Terminal className={`w-5 h-5 ${isDark ? 'text-apple-blue' : 'text-apple-blue'}`} />
          <span className={isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'}>
            K Vaibhav
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                isDark 
                  ? 'text-apple-text-darkSecondary hover:text-apple-text-darkPrimary' 
                  : 'text-apple-text-lightSecondary hover:text-apple-text-lightPrimary'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-white/5 hover:bg-white/10 text-amber-400' 
                : 'bg-black/5 hover:bg-black/10 text-indigo-600'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark ? 'text-amber-400' : 'text-indigo-600'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}
            aria-label="Open Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 py-6 px-8 flex flex-col space-y-4 animate-fade-in ${
          isDark ? 'glass-navbar-dark' : 'glass-navbar-light'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-widest uppercase py-2 transition-colors ${
                isDark 
                  ? 'text-apple-text-darkSecondary hover:text-apple-text-darkPrimary' 
                  : 'text-apple-text-lightSecondary hover:text-apple-text-lightPrimary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
