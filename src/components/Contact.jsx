import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, Linkedin, Github, FileText } from 'lucide-react';

// Exact LeetCode Logo SVG Path
const LeetCodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0L6.753 15.63a1.213 1.213 0 010-1.696l2.982-2.89a.478.478 0 000-.677l-1.258-1.22a.48.48 0 00-.679 0l-5.32 5.158c-1.398 1.355-1.398 3.553 0 4.908l5.32 5.158c1.398 1.355 3.663 1.355 5.061 0l5.32-5.158a.48.48 0 000-.678l-1.258-1.22a.48.48 0 00-.679 0zM22.015 12.637l-5.32-5.158a3.504 3.504 0 00-5.061 0l-1.258 1.22a.48.48 0 000 .678l5.32 5.158c.466.45.466 1.18 0 1.63l-2.982 2.89a.478.478 0 000 .677l1.258 1.22a.48.48 0 00.679 0l5.32-5.158c1.398-1.355 1.398-3.552 0-4.907z" />
  </svg>
);

const Contact = ({ isDark }) => {
  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopy = async (text, type, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setToastMessage(`${label} copied to clipboard!`);
      setShowToast(true);
      
      setTimeout(() => {
        setCopiedType(null);
      }, 2000);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const contactLinks = [
    {
      id: 'email',
      label: 'Email Address',
      value: 'kv9976699@gmail.com',
      actionType: 'copy',
      copyLabel: 'Email Address',
      icon: Mail,
      iconColorClass: 'text-apple-blue bg-apple-blue/10 dark:bg-apple-blue/15',
      hoverColorClass: 'group-hover:text-apple-blue',
      mailto: 'kv9976699@gmail.com'
    },
    {
      id: 'phone',
      label: 'Phone / Mobile',
      value: '+91 8959253281',
      actionType: 'copy',
      copyLabel: 'Phone Number',
      icon: Phone,
      iconColorClass: 'text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/15',
      hoverColorClass: 'group-hover:text-emerald-500'
    },
    {
      id: 'linkedin',
      label: 'Professional Network',
      value: 'linkedin.com/in/k-vaibhav',
      actionType: 'link',
      url: 'https://www.linkedin.com/in/k-vaibhav-7328b1329/',
      icon: Linkedin,
      iconColorClass: 'text-apple-blue bg-apple-blue/10 dark:bg-apple-blue/15',
      hoverColorClass: 'group-hover:text-apple-blue'
    },
    {
      id: 'github',
      label: 'Open Source Repositories',
      value: 'github.com/Vaibhavv526',
      actionType: 'link',
      url: 'https://github.com/Vaibhavv526',
      icon: Github,
      iconColorClass: 'text-neutral-400 bg-neutral-400/10 dark:bg-neutral-400/15',
      hoverColorClass: 'group-hover:text-apple-text-darkPrimary dark:group-hover:text-apple-text-darkPrimary group-hover:text-apple-text-lightPrimary'
    },
    {
      id: 'leetcode',
      label: 'Algorithmic Profiles',
      value: 'leetcode.com/Vaibhav___09',
      actionType: 'link',
      url: 'https://leetcode.com/u/Vaibhav___09/',
      icon: LeetCodeIcon,
      iconColorClass: 'text-amber-500 bg-amber-500/10 dark:bg-amber-500/15',
      hoverColorClass: 'group-hover:text-amber-500'
    },
    {
      id: 'resume',
      label: 'Curriculum Vitae',
      value: 'View Professional Resume',
      actionType: 'link',
      url: 'https://drive.google.com/file/d/1QNkHok0qQc7S6ywITMhJOE42AkpIr1Cn/view?usp=sharing',
      icon: FileText,
      iconColorClass: 'text-violet-500 bg-violet-500/10 dark:bg-violet-500/15',
      hoverColorClass: 'group-hover:text-violet-500'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto select-none relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl border text-xs font-semibold backdrop-blur-md ${
              isDark 
                ? 'bg-apple-bg-darkObsidian/90 border-white/10 text-apple-text-darkPrimary' 
                : 'bg-white/90 border-black/5 text-apple-text-lightPrimary'
            }`}
          >
            <Check className="w-4 h-4 text-emerald-500" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tightest mb-4 ${
          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
        }`}>
          Digital Touchpoints
        </h2>
        <p className={`text-sm tracking-wide uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Let's collaborate on intelligent systems and data-driven systems.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
      >
        {/* Left Column: Info (Spans 2/5) */}
        <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col justify-center">
          <div>
            <h3 className={`text-2xl font-bold tracking-tight mb-4 ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              Let's Build the Future
            </h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              I am actively seeking Engineering & Machine Learning Internship opportunities. If you are looking for a dedicated engineer to build scalable pipelines, design systems, or train intelligent models, let's connect. Feel free to launch a dynamic mail redirection or copy my metadata straight to your clipboard.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Contact Cards Hub (Spans 3/5) */}
        <motion.div 
          variants={itemVariants} 
          className={`md:col-span-3 rounded-3xl p-8 overflow-hidden relative cursor-default border ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          {/* Accent Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/0 to-apple-blue/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            <span className={`text-[10px] tracking-widest uppercase font-semibold ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              Digital Connections & Gateways
            </span>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                const IconComponent = link.icon;
                const isCopy = link.actionType === 'copy';

                const CardWrapper = isCopy ? 'div' : 'a';
                const wrapperProps = isCopy
                  ? {
                      onClick: () => handleCopy(link.value, link.id, link.copyLabel),
                      className: `rounded-2xl p-4 flex items-center justify-between border cursor-pointer group transition-all duration-300 hover:scale-[1.01] ${
                        isDark 
                          ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10' 
                          : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-black/10'
                      }`
                    }
                  : {
                      href: link.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: `rounded-2xl p-4 flex items-center justify-between border group transition-all duration-300 hover:scale-[1.01] ${
                        isDark 
                          ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10' 
                          : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-black/10'
                      }`
                    };

                return (
                  <CardWrapper key={link.id} {...wrapperProps}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-105 ${link.iconColorClass}`}>
                        <IconComponent className={`w-5 h-5 transition-transform duration-300 ${link.hoverColorClass}`} />
                      </div>
                      <div className="text-left">
                        <span className={`text-[10px] tracking-wider uppercase font-semibold block ${
                          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                        }`}>
                          {link.label}
                        </span>
                        <span className={`text-sm font-semibold block truncate max-w-[200px] sm:max-w-xs ${
                          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                        }`}>
                          {link.value}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isCopy ? (
                        <>
                          {/* For Email, show secondary redirect action alongside copy */}
                          {link.mailto && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = `mailto:${link.mailto}`;
                              }}
                              title="Launch Direct Redirection"
                              className={`p-2 rounded-lg transition-colors hover:bg-white/10 ${
                                isDark ? 'text-apple-text-darkSecondary hover:text-apple-text-darkPrimary' : 'text-apple-text-lightSecondary hover:text-apple-text-lightPrimary'
                              }`}
                            >
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                          )}
                          <div className={`p-2 rounded-lg transition-colors ${
                            isDark ? 'text-apple-text-darkSecondary group-hover:text-apple-text-darkPrimary' : 'text-apple-text-lightSecondary group-hover:text-apple-text-lightPrimary'
                          }`}>
                            {copiedType === link.id ? (
                              <Check className="w-4 h-4 text-emerald-500 animate-scale-in" />
                            ) : (
                              <Copy className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                            )}
                          </div>
                        </>
                      ) : (
                        <div className={`p-2 rounded-lg transition-colors ${
                          isDark ? 'text-apple-text-darkSecondary group-hover:text-apple-text-darkPrimary' : 'text-apple-text-lightSecondary group-hover:text-apple-text-lightPrimary'
                        }`}>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
