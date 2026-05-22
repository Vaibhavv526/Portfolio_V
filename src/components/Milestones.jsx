import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Milestones = ({ milestones, isDark }) => {

  const getCategory = (role) => {
    if (role.toLowerCase().includes('runner up')) {
      return 'Award Recognition';
    }
    return 'National Finalist';
  };

  const getCategoryColor = (role) => {
    if (role.toLowerCase().includes('runner up')) {
      return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
    }
    return 'text-apple-blue bg-apple-blue/10 border-apple-blue/20';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="milestones" className="py-24 px-6 max-w-6xl mx-auto select-none">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tightest mb-4 ${
          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
        }`}>
          Recognition & Milestones
        </h2>
        <p className={`text-sm tracking-wide uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Latest milestones from national hackathons, ideathons, and skill competitions.
        </p>
      </div>

      {/* Apple Newsroom Layout Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden cursor-default group transition-all duration-500 hover:scale-[1.01] ${
              isDark ? 'glass-dark' : 'glass-light'
            }`}
          >
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-out pointer-events-none" />

            <div>
              {/* Category Tag */}
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold border ${getCategoryColor(milestone.role)}`}>
                  {getCategory(milestone.role)}
                </span>
                
                <span className={`flex items-center gap-1.5 text-xs font-semibold ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {milestone.year}
                </span>
              </div>

              {/* Title / Role */}
              <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-apple-blue transition-colors duration-300 leading-tight ${
                isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
              }`}>
                {milestone.role}
              </h3>
              
              {/* Event Name */}
              <p className={`text-base font-semibold mb-6 ${
                isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
              }`}>
                {milestone.event}
              </p>
            </div>

            {/* Footer with locations/milestone info */}
            <div className={`pt-6 border-t flex items-center justify-between text-xs font-medium ${
              isDark ? 'border-white/5 text-apple-text-darkSecondary' : 'border-black/5 text-apple-text-lightSecondary'
            }`}>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {milestone.location}
              </span>
              
              <a 
                href={milestone.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue font-semibold flex items-center gap-1 group/link hover:underline"
              >
                Read Post
                <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Milestones;
