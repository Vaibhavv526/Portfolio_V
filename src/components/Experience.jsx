
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = ({ experience, isDark }) => {
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
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tightest mb-4 ${
          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
        }`}>
          Professional Experience
        </h2>
        <p className={`text-sm tracking-wide uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Applied machine learning, engineering workflows, and system contributions.
        </p>
      </div>

      {/* Experience Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {experience.map((exp, index) => (
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
              {/* Category / Type Tag and Duration */}
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-apple-blue" />
                  <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold border text-apple-blue bg-apple-blue/10 border-apple-blue/20">
                    {exp.type} Internship
                  </span>
                </div>
                
                <span className={`flex items-center gap-1.5 text-xs font-semibold ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-apple-blue" />
                  {exp.duration}
                </span>
              </div>

              {/* Role Title */}
              <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:text-apple-blue transition-colors duration-300 leading-tight ${
                isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
              }`}>
                {exp.role}
              </h3>
              
              {/* Company & Location */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`text-base font-semibold ${
                  isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                }`}>
                  {exp.company}
                </span>
                <span className={isDark ? 'text-white/20' : 'text-black/20'}>•</span>
                <span className={`flex items-center gap-1 text-xs font-medium ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {exp.type}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="pt-4 border-t border-white/5">
                <h4 className={`text-[10px] tracking-widest uppercase font-semibold mb-4 ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  Key Engineering Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-apple-blue shrink-0 mt-0.5" />
                      <span className={`text-sm leading-relaxed ${
                        isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                      }`}>
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
