import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, ChevronRight, Sparkles } from 'lucide-react';

const BentoGrid = ({ metrics, toolkit, isDark }) => {
  const leetcode = metrics.leetcode;

  // Dynamic LeetCode stats state initialized with local fallback data
  const [stats, setStats] = useState({
    totalSolved: leetcode.totalSolved,
    medium: leetcode.medium,
    hard: leetcode.hard,
    easy: leetcode.easy,
    loading: true
  });

  // Sourcing live problem-solving data from LeetCode API scraper
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch('https://leetcode-api-fwd.vercel.app/api/u/Vaibhav___09');
        if (!response.ok) throw new Error('API query failed');
        const data = await response.json();
        
        let total = leetcode.totalSolved;
        let medium = leetcode.medium;
        let hard = leetcode.hard;
        let easy = leetcode.easy;

        if (data) {
          // Schema 1: Hierarchical matchedUser structure
          if (data.matchedUser?.submitStats?.acSubmissionNum) {
            const list = data.matchedUser.submitStats.acSubmissionNum;
            const allStat = list.find(s => s.difficulty === 'All');
            const easyStat = list.find(s => s.difficulty === 'Easy');
            const medStat = list.find(s => s.difficulty === 'Medium');
            const hardStat = list.find(s => s.difficulty === 'Hard');
            
            if (allStat) total = allStat.count;
            if (easyStat) easy = easyStat.count;
            if (medStat) medium = medStat.count;
            if (hardStat) hard = hardStat.count;
          } 
          // Schema 2: Flat stats object
          else if (typeof data.totalSolved === 'number') {
            total = data.totalSolved;
            medium = data.mediumSolved || data.medium || leetcode.medium;
            hard = data.hardSolved || data.hard || leetcode.hard;
            easy = data.easySolved || data.easy || leetcode.easy;
          }
          // Schema 3: Alternate flat keys
          else if (typeof data.solvedQuestions === 'number') {
            total = data.solvedQuestions;
            medium = data.mediumQuestions || leetcode.medium;
            hard = data.hardQuestions || leetcode.hard;
            easy = data.easyQuestions || leetcode.easy;
          }
        }

        setStats({
          totalSolved: total,
          medium: medium,
          hard: hard,
          easy: easy,
          loading: false
        });
      } catch (err) {
        console.warn('LeetCode API fetch error. Using local metrics fallback.', err);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLeetCodeData();
  }, [leetcode]);

  // Constants for concentric progress rings
  const center = 80;
  
  // Dynamic Ring definitions: [value, max, color, radius]
  const rings = [
    { 
      name: 'Total Solved', 
      val: stats.totalSolved, 
      max: leetcode.targetSolved, 
      color: '#0071e3', // Apple Blue
      radius: 65,
      stroke: 8,
      label: `${stats.totalSolved} / ${leetcode.targetSolved}`
    },
    { 
      name: 'Medium Problems', 
      val: stats.medium, 
      max: 100, 
      color: '#f59e0b', // Amber/Yellow
      radius: 50,
      stroke: 8,
      label: `${stats.medium} Med`
    },
    { 
      name: 'Hard Problems', 
      val: stats.hard, 
      max: 20, 
      color: '#ef4444', // Red
      radius: 35,
      stroke: 8,
      label: `${stats.hard} Hard`
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
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-apple-blue" />
                <span className={`text-xs font-semibold tracking-wider uppercase ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  Data Structures & Algorithms Focus
                </span>
              </div>
              {stats.loading && (
                <span className="text-[10px] tracking-wider uppercase opacity-60 animate-pulse text-apple-blue">
                  Syncing live...
                </span>
              )}
            </div>
            <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              {stats.totalSolved}+ Solved on LeetCode
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
                        animate={{ strokeDashoffset }}
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
                  {stats.hard}/20
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

        {/* BLOCK B: About Me Block (spans 1 col on md) */}
        <motion.div 
          variants={itemVariants}
          className={`rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative cursor-default group transition-all duration-500 hover:scale-[1.01] ${
            isDark ? 'glass-dark' : 'glass-light'
          }`}
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div>
            <div className="flex items-center space-x-3 mb-5">
              <img 
                src="/assets/profile.jpg" 
                alt="K Vaibhav" 
                className="w-14 h-14 object-cover rounded-2xl border border-white/10 dark:border-white/10 shadow-md transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <span className={`text-[10px] tracking-widest uppercase font-semibold block ${
                  isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                }`}>
                  Identity
                </span>
                <h4 className={`text-sm font-bold ${
                  isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                }`}>
                  K Vaibhav
                </h4>
              </div>
            </div>
            
            <h3 className={`text-xl font-bold tracking-tight mb-3 ${
              isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
            }`}>
              About Me
            </h3>
            <p className={`text-xs leading-relaxed ${
              isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
            }`}>
              I am a Software Engineering Student and Aspiring Machine Learning Engineer dedicated to building intelligent systems, training neural architectures, and tackling algorithmic puzzles.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <a 
              href="https://leetcode.com/u/Vaibhav___09/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-apple-blue hover:bg-blue-600 text-white shadow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View LeetCode Profile
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
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
