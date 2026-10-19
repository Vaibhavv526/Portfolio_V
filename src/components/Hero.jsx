
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Hero = ({ personal, isDark }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden select-none"
    >
      {/* Background Radial Glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ${
        isDark 
          ? 'bg-apple-blue/10 opacity-70' 
          : 'bg-apple-blue/5 opacity-50'
      }`} />

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        {/* Profile Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative group"
        >
          {/* Subtle glowing ring backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-apple-blue to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-700 pointer-events-none" />
          
          <img 
            src="/assets/profile.jpg" 
            alt={personal.name} 
            className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-3xl border-2 border-white/10 shadow-xl relative z-10 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-white/20"
          />
        </motion.div>

        {/* Subtitle / Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-xs font-semibold tracking-[0.25em] uppercase mb-6 ${
            isDark ? 'text-apple-blue' : 'text-apple-blue'
          }`}
        >
          {personal.role}
        </motion.div>

        {/* Large Typographic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest leading-[1.08] text-balance mb-8 max-w-3xl ${
            isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
          }`}
        >
          {personal.headline}
        </motion.h1>

        {/* Sub-headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg sm:text-xl font-normal leading-relaxed text-balance max-w-2xl px-4 ${
            isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
          }`}
        >
          {personal.subHeadline}
        </motion.p>

        {/* Call to Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-medium bg-apple-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Systems
          </a>
          <a
            href="https://drive.google.com/file/d/1KRlNbxIY2LS97iBuny6Nipo_EZ_H53fB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-full text-sm font-medium border flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 ${
              isDark 
                ? 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-apple-text-darkPrimary' 
                : 'border-black/10 hover:border-black/20 bg-black/5 hover:bg-black/10 text-apple-text-lightPrimary'
            }`}
          >
            <FileText className="w-4 h-4 text-apple-blue" />
            Resume
          </a>
          <a
            href="#metrics"
            className={`text-sm font-medium transition-colors ${
              isDark 
                ? 'text-apple-text-darkPrimary hover:text-apple-blue' 
                : 'text-apple-text-lightPrimary hover:text-apple-blue'
            } flex items-center gap-1 group`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#metrics')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Core Metrics
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector('#metrics')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className={`text-[10px] tracking-widest uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Scroll to view
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className={`w-1.5 h-1.5 rounded-full ${
            isDark ? 'bg-apple-text-darkPrimary' : 'bg-apple-text-lightPrimary'
          }`}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
