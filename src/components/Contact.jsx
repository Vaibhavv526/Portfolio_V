import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, MessageSquare } from 'lucide-react';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct formatting for mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Vaibhav,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
    );
    
    window.location.href = `mailto:kv9976699@gmail.com?subject=${subject}&body=${body}`;
  };

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
        className="grid grid-cols-1 md:grid-cols-5 gap-8"
      >
        {/* Left Column: Cards & Info (Spans 2/5) */}
        <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col justify-between h-full gap-6">
            <div>
              <h3 className={`text-2xl font-bold tracking-tight mb-4 ${
                isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
              }`}>
                Reach Out Directly
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${
                isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
              }`}>
                Feel free to trigger a mail client redirection sequence or simply copy primary metadata details directly to your clipboard buffer. I am actively open to discussing software architecture design patterns and machine learning initiatives.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div 
                onClick={() => handleCopy('kv9976699@gmail.com', 'email', 'Email Address')}
                className={`rounded-2xl p-5 flex items-center justify-between border cursor-pointer group transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10' 
                    : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-black/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-apple-blue/15 text-apple-blue' : 'bg-apple-blue/10 text-apple-blue'}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] tracking-wider uppercase font-semibold block ${
                      isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                    }`}>
                      Email Address
                    </span>
                    <span className={`text-sm font-semibold truncate block ${
                      isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                    }`}>
                      kv9976699@gmail.com
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-apple-text-darkSecondary group-hover:text-apple-text-darkPrimary' : 'text-apple-text-lightSecondary group-hover:text-apple-text-lightPrimary'
                }`}>
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500 animate-scale-in" />
                  ) : (
                    <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                  )}
                </div>
              </div>

              {/* Phone Card */}
              <div 
                onClick={() => handleCopy('+91 8959253281', 'phone', 'Phone Number')}
                className={`rounded-2xl p-5 flex items-center justify-between border cursor-pointer group transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10' 
                    : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-black/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/15 text-emerald-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] tracking-wider uppercase font-semibold block ${
                      isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                    }`}>
                      Phone / Mobile
                    </span>
                    <span className={`text-sm font-semibold block ${
                      isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                    }`}>
                      +91 8959253281
                    </span>
                  </div>
                </div>
                <div className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'text-apple-text-darkSecondary group-hover:text-apple-text-darkPrimary' : 'text-apple-text-lightSecondary group-hover:text-apple-text-lightPrimary'
                }`}>
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500 animate-scale-in" />
                  ) : (
                    <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form (Spans 3/5) */}
        <motion.div 
          variants={itemVariants} 
          className={`md:col-span-3 rounded-3xl p-8 overflow-hidden relative cursor-default border ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          {/* Form Background Accent Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/0 to-apple-blue/5 pointer-events-none" />

          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-apple-blue" />
            <span className={`text-xs font-semibold tracking-wider uppercase ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              Secure Client Channel
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="name" 
                  className={`text-[10px] tracking-widest uppercase font-semibold ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Steve Jobs"
                  className={`text-sm px-4 py-3.5 rounded-2xl outline-none transition-all border ${
                    isDark 
                      ? 'bg-white/5 border-white/5 text-apple-text-darkPrimary placeholder-white/20 focus:border-apple-blue/50 focus:bg-white/[0.08]' 
                      : 'bg-black/5 border-black/5 text-apple-text-lightPrimary placeholder-black/20 focus:border-apple-blue/50 focus:bg-black/[0.08]'
                  }`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="email" 
                  className={`text-[10px] tracking-widest uppercase font-semibold ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="steve@apple.com"
                  className={`text-sm px-4 py-3.5 rounded-2xl outline-none transition-all border ${
                    isDark 
                      ? 'bg-white/5 border-white/5 text-apple-text-darkPrimary placeholder-white/20 focus:border-apple-blue/50 focus:bg-white/[0.08]' 
                      : 'bg-black/5 border-black/5 text-apple-text-lightPrimary placeholder-black/20 focus:border-apple-blue/50 focus:bg-black/[0.08]'
                  }`}
                />
              </div>
            </div>

            {/* Message Block */}
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="message" 
                className={`text-[10px] tracking-widest uppercase font-semibold ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}
              >
                Inquiry Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Let's build something remarkable..."
                className={`text-sm px-4 py-3.5 rounded-2xl outline-none transition-all resize-none border ${
                  isDark 
                    ? 'bg-white/5 border-white/5 text-apple-text-darkPrimary placeholder-white/20 focus:border-apple-blue/50 focus:bg-white/[0.08]' 
                    : 'bg-black/5 border-black/5 text-apple-text-lightPrimary placeholder-black/20 focus:border-apple-blue/50 focus:bg-black/[0.08]'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full sm:w-auto self-end inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold tracking-wider uppercase bg-apple-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Initialize Redirect
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
