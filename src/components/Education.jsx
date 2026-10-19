
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const Education = ({ education, isDark }) => {
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
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tightest mb-4 ${
          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
        }`}>
          Education & Academic Background
        </h2>
        <p className={`text-sm tracking-wide uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Undergraduate foundations in Information Technology and computer science principles.
        </p>
      </div>

      {/* Education Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden cursor-default group transition-all duration-500 hover:scale-[1.01] ${
              isDark ? 'glass-dark' : 'glass-light'
            }`}
          >
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-out pointer-events-none" />

            <div>
              {/* Category Tag & Duration */}
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-emerald-500" />
                  <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold border text-emerald-500 bg-emerald-500/10 border-emerald-500/20">
                    Undergraduate Degree
                  </span>
                </div>
                
                <span className={`flex items-center gap-1.5 text-xs font-semibold ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-apple-blue" />
                  {edu.duration}
                </span>
              </div>

              {/* Degree Title */}
              <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-apple-blue transition-colors duration-300 leading-tight ${
                isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
              }`}>
                {edu.degree}
              </h3>
              
              {/* Institution & Location */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`text-base font-semibold ${
                  isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                }`}>
                  {edu.institution}
                </span>
                <span className={isDark ? 'text-white/20' : 'text-black/20'}>•</span>
                <span className={`flex items-center gap-1 text-xs font-medium ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {edu.location}
                </span>
              </div>

              {/* Performance Metric Pill */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold ${
                  isDark 
                    ? 'bg-apple-blue/10 border-apple-blue/20 text-apple-blue' 
                    : 'bg-apple-blue/5 border-apple-blue/10 text-apple-blue'
                }`}>
                  <Award className="w-3.5 h-3.5" />
                  SPI: {edu.spi}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
