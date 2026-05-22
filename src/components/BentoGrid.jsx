import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Database, Layers, Terminal } from 'lucide-react';

const BentoGrid = ({ metrics, toolkit, isDark }) => {
  const leetcode = metrics.leetcode;
  const consistency = metrics.consistency;

  // Constants for concentric progress rings
  const center = 80;
  
  // Ring definitions: [value, max, color, radius]
  const rings = [
    { 
      name: 'Total Solved', 
      val: leetcode.totalSolved, 
      max: leetcode.targetSolved, 
      color: '#0071e3', // Apple Blue
      radius: 65,
      stroke: 8,
      label: `${leetcode.totalSolved} / ${leetcode.targetSolved}`
    },
    { 
      name: 'Medium Problems', 
      val: leetcode.medium, 
      max: 100, 
      color: '#f59e0b', // Amber/Yellow
      radius: 50,
      stroke: 8,
      label: `${leetcode.medium} Med`
    },
    { 
      name: 'Hard Problems', 
      val: leetcode.hard, 
      max: 20, 
      color: '#ef4444', // Red
      radius: 35,
      stroke: 8,
      label: `${leetcode.hard} Hard`
    }
  ];

  // Group toolkit items by category
  const categories = {
    'Languages & Core': toolkit.filter(t => t.name === 'Python' || t.name === 'Java'),
    'Machine Learning': toolkit.filter(t => t.name === 'PyTorch' || t.name === 'Scikit-learn'),
    'Backend & APIs': toolkit.filter(t => t.name === 'FastAPI' || t.name === 'Flask'),
    'DevOps & Deployment': toolkit.filter(t => t.name === 'Docker' || t.name === 'Streamlit')
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="metrics" className="py-24 px-6 max-w-6xl mx-auto select-none">
      {/* Section Title */}
      <div className="mb-16 text-center md:text-left">
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tightest mb-4 ${
          isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
        }`}>
          Core Metrics & Toolkit
        </h2>
        <p className={`text-sm tracking-wide uppercase ${
          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
        }`}>
          Algorithmic discipline, consistency, and structural competencies.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* BLOCK A: LeetCode Rings (spans 2 cols on md) */}
        <motion.div 
          variants={itemVariants}
          className={`md:col-span-2 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative cursor-default group transition-all duration-500 hover:scale-[1.01] ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-apple-blue/0 to-apple-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-5 h-5 text-apple-blue" />
              <span className={`text-xs font-semibold tracking-wider uppercase ${
                isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
              }`}>
                Data Structures & Algorithms Focus
              </span>
            </div>
            <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              155+ Solved on LeetCode
            </h3>
            <p className={`text-sm max-w-sm mb-6 ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              Deepening algorithmic problem-solving with complex logic architectures and analytical structures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-8 mt-4">
            {/* SVG Concentric Rings */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                {rings.map((ring, index) => {
                  const circumference = 2 * Math.PI * ring.radius;
                  const strokeDashoffset = circumference - (Math.min(ring.val, ring.max) / ring.max) * circumference;
                  return (
                    <g key={ring.name}>
                      {/* Track */}
                      <circle
                        cx={center}
                        cy={center}
                        r={ring.radius}
                        fill="transparent"
                        stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}
                        strokeWidth={ring.stroke}
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx={center}
                        cy={center}
                        r={ring.radius}
                        fill="transparent"
                        stroke={ring.color}
                        strokeWidth={ring.stroke}
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        strokeLinecap="round"
                      />
                    </g>
                  );
                })}
              </svg>
              {/* Inner Label */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className={`text-[10px] tracking-widest uppercase font-semibold ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  Hard Target
                </span>
                <span className={`text-base font-extrabold ${
                  isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                }`}>
                  {leetcode.hard}/20
                </span>
              </div>
            </div>

            {/* Labels Legend */}
            <div className="flex flex-col gap-3 justify-center w-full sm:w-auto">
              {rings.map((ring) => (
                <div key={ring.name} className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ring.color }} />
                  <div className="flex flex-col">
                    <span className={`text-xs font-semibold ${
                      isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                    }`}>
                      {ring.label}
                    </span>
                    <span className={`text-[10px] tracking-wider uppercase font-medium ${
                      isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                    }`}>
                      {ring.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BLOCK B: Consistency Badge */}
        <motion.div 
          variants={itemVariants}
          className={`rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative cursor-default group transition-all duration-500 hover:scale-[1.01] ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-orange-500" />
              <span className={`text-xs font-semibold tracking-wider uppercase ${
                isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
              }`}>
                {consistency.subtitle}
              </span>
            </div>
            <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              {consistency.title}
            </h3>
            <p className={`text-sm ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              Maintaining daily commits, clean algorithms, and software design focus.
            </p>
          </div>

          {/* Badge Vector Mockup */}
          <div className="flex justify-center items-center mt-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Spinning / Glowing Outer Rings */}
              <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-2 border border-dashed border-orange-500/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
              
              {/* Premium Vector Hex Badge */}
              <svg className="w-20 h-20 drop-shadow-[0_0_12px_rgba(245,158,11,0.3)] filter transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="50%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                  </linearGradient>
                </defs>
                {/* Hexagon Shield */}
                <polygon 
                  points="50,5 90,25 90,75 50,95 10,75 10,25" 
                  fill="url(#badgeGrad)" 
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                {/* Glass Inner Hexagon */}
                <polygon 
                  points="50,12 83,28 83,72 50,88 17,72 17,28" 
                  fill="url(#glassGrad)" 
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                />
                {/* Text 100 inside */}
                <text x="50" y="47" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800" fontFamily="Inter, sans-serif">100</text>
                <text x="50" y="60" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontWeight="600" letterSpacing="1" fontFamily="Inter, sans-serif">DAYS</text>
                <text x="50" y="72" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6" fontWeight="500" letterSpacing="0.5" fontFamily="Inter, sans-serif">BADGE</text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* BLOCK C: Core Technical Toolkit (spans 3 cols on md) */}
        <motion.div 
          variants={itemVariants}
          className={`md:col-span-3 rounded-3xl p-8 overflow-hidden relative cursor-default ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          <div className="flex items-center space-x-2 mb-6">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className={`text-xs font-semibold tracking-wider uppercase ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              Engineering Competency System
            </span>
          </div>

          <h3 className={`text-2xl font-bold tracking-tight mb-6 ${
            isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
          }`}>
            The Technical Toolkit
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="flex flex-col">
                <span className={`text-[10px] tracking-widest uppercase font-semibold mb-3 ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className={`text-xs px-3.5 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                        isDark 
                          ? 'bg-white/5 border border-white/10 text-apple-text-darkPrimary hover:bg-white/10 hover:border-white/20' 
                          : 'bg-black/5 border border-black/5 text-apple-text-lightPrimary hover:bg-black/10 hover:border-black/10'
                      }`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
