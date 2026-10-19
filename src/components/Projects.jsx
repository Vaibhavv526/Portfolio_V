import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, TrendingUp, X, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

const Projects = ({ projects, isDark }) => {
  const [activeProject, setActiveProject] = useState(null);

  // SVG Architecture Visualizers for each project
  const renderArchitectureSVG = (projectId) => {
    if (projectId === 'transformer-translation') {
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto max-w-sm mx-auto drop-shadow-md">
          {/* Encoder Block */}
          <rect x="20" y="40" width="100" height="140" rx="12" fill={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} stroke="#0071e3" strokeWidth="1.5" />
          <text x="70" y="25" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="10" fontWeight="600" letterSpacing="0.5">ENCODER</text>
          
          <rect x="30" y="55" width="80" height="30" rx="6" fill="#0071e3" fillOpacity="0.1" stroke="#0071e3" strokeWidth="1" />
          <text x="70" y="73" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="9" fontWeight="500">Multi-Head Attn</text>
          
          <rect x="30" y="105" width="80" height="30" rx="6" fill="#0071e3" fillOpacity="0.1" stroke="#0071e3" strokeWidth="1" />
          <text x="70" y="123" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="9" fontWeight="500">Feed Forward</text>

          {/* Connection arrow */}
          <path d="M 120,110 L 220,110" stroke="#86868b" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrow)" />
          <text x="170" y="100" textAnchor="middle" fill="#0071e3" fontSize="8" fontWeight="600">K, V vectors</text>

          {/* Decoder Block */}
          <rect x="230" y="40" width="100" height="140" rx="12" fill={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} stroke="#e59e0b" strokeWidth="1.5" />
          <text x="280" y="25" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="10" fontWeight="600" letterSpacing="0.5">DECODER</text>
          
          <rect x="240" y="55" width="80" height="30" rx="6" fill="#e59e0b" fillOpacity="0.1" stroke="#e59e0b" strokeWidth="1" />
          <text x="280" y="73" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="9" fontWeight="500">Masked Attn</text>
          
          <rect x="240" y="105" width="80" height="30" rx="6" fill="#e59e0b" fillOpacity="0.1" stroke="#e59e0b" strokeWidth="1" />
          <text x="280" y="123" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="9" fontWeight="500">Encoder-Dec Attn</text>

          <rect x="240" y="145" width="80" height="25" rx="6" fill="#e59e0b" fillOpacity="0.1" stroke="#e59e0b" strokeWidth="1" />
          <text x="280" y="161" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="500">Linear & Softmax</text>

          {/* Output Arrow */}
          <path d="M 330,157 L 375,157" stroke="#86868b" strokeWidth="1.5" />
          <text x="355" y="150" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="500">Hindi</text>

          {/* Input Arrow */}
          <path d="M -5,110 L 20,110" stroke="#86868b" strokeWidth="1.5" />
          <text x="5" y="100" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="500">English</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#86868b" />
            </marker>
          </defs>
        </svg>
      );
    } else if (projectId === 'campus-compass' || projectId === 'customer-segmentation') {
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto max-w-sm mx-auto drop-shadow-md">
          {/* React Frontend */}
          <rect x="15" y="75" width="75" height="50" rx="8" fill="#0071e3" fillOpacity="0.1" stroke="#0071e3" strokeWidth="1.5" />
          <text x="52" y="98" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">React + Vite</text>
          <text x="52" y="112" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">Student UI</text>

          {/* Arrow */}
          <path d="M 90,100 L 125,100" stroke="#86868b" strokeWidth="1.5" />

          {/* FastAPI Gateway */}
          <rect x="125" y="70" width="75" height="60" rx="8" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
          <text x="162" y="95" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">FastAPI</text>
          <text x="162" y="108" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">REST / JWT</text>
          <text x="162" y="120" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="500">Pydantic</text>

          {/* Arrow */}
          <path d="M 200,100 L 235,100" stroke="#86868b" strokeWidth="1.5" />

          {/* 7-Agent Core */}
          <rect x="235" y="60" width="80" height="80" rx="10" fill="#e59e0b" fillOpacity="0.1" stroke="#e59e0b" strokeWidth="1.5" />
          <text x="275" y="85" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">7-Agent AI</text>
          <text x="275" y="98" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">Mentoring</text>
          <text x="275" y="110" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">Quiz & Tutor</text>
          <text x="275" y="124" textAnchor="middle" fill="#e59e0b" fontSize="7" fontWeight="500">Groq LLM</text>

          {/* Arrow */}
          <path d="M 315,100 L 345,100" stroke="#86868b" strokeWidth="1.5" />

          {/* PostgreSQL & Cloud */}
          <circle cx="370" cy="100" r="22" fill="none" stroke="#0071e3" strokeWidth="1.5" />
          <text x="370" y="98" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="7" fontWeight="600">Postgres</text>
          <text x="370" y="110" textAnchor="middle" fill="#0071e3" fontSize="6">SQLAlchemy</text>
        </svg>
      );
    } else if (projectId === 'cv-illumination' || projectId === 'weather-forecasting') {
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto max-w-sm mx-auto drop-shadow-md">
          {/* Camera Ingestion */}
          <rect x="15" y="70" width="75" height="50" rx="8" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="52" y="93" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">Camera Image</text>
          <text x="52" y="106" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">Preprocessing</text>

          {/* Arrow */}
          <path d="M 90,95 L 125,95" stroke="#86868b" strokeWidth="1.5" />

          {/* ResNet18 + YOLO */}
          <rect x="125" y="65" width="80" height="70" rx="8" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
          <text x="165" y="90" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">Feature Pipeline</text>
          <text x="165" y="103" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">ResNet18 + YOLO</text>
          <text x="165" y="118" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="500">Night-Vision</text>

          {/* Arrow */}
          <path d="M 205,100 L 240,100" stroke="#86868b" strokeWidth="1.5" />

          {/* XGBoost Classifier */}
          <rect x="240" y="70" width="75" height="60" rx="8" fill="#e59e0b" fillOpacity="0.1" stroke="#e59e0b" strokeWidth="1.5" />
          <text x="277" y="95" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">XGBoost</text>
          <text x="277" y="108" textAnchor="middle" fill={isDark ? '#86868b' : '#6e6e73'} fontSize="7">Classifier</text>
          <text x="277" y="120" textAnchor="middle" fill="#e59e0b" fontSize="7" fontWeight="500">&lt;200ms Latency</text>

          {/* Arrow */}
          <path d="M 315,100 L 345,100" stroke="#86868b" strokeWidth="1.5" />

          {/* Accuracy Result */}
          <circle cx="370" cy="100" r="22" fill="none" stroke="#10b981" strokeWidth="1.5" />
          <text x="370" y="98" textAnchor="middle" fill={isDark ? '#f5f5f7' : '#1d1d1f'} fontSize="8" fontWeight="600">92%</text>
          <text x="370" y="110" textAnchor="middle" fill="#10b981" fontSize="7">Accuracy</text>
        </svg>
      );
    }
    return null;
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'transformer-translation':
        return <Cpu className="w-6 h-6 text-apple-blue" />;
      case 'campus-compass':
      case 'customer-segmentation':
        return <Layers className="w-6 h-6 text-emerald-500" />;
      case 'cv-illumination':
      case 'weather-forecasting':
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
      default:
        return <Server className="w-6 h-6 text-apple-blue" />;
    }
  };

  return (
    <section id="projects" className="py-24 select-none">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tightest mb-4 ${
            isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
          }`}>
            Featured Hardware & Software Systems
          </h2>
          <p className={`text-sm tracking-wide uppercase ${
            isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
          }`}>
            Translating mathematical equations and pipeline concepts into deployable code systems.
          </p>
        </div>

        {/* Alternate Full-Width Product Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 group overflow-hidden relative ${
                  isDark ? 'glass-dark' : 'glass-light'
                }`}
              >
                {/* Left/Right Text Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {getProjectIcon(project.id)}
                    <span className="text-xs font-semibold tracking-widest uppercase text-apple-blue">
                      Production System
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold tracking-tight mb-2 ${
                    isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <span className={`text-sm font-medium mb-4 ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}>
                    {project.subtitle}
                  </span>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full font-semibold ${
                          isDark 
                            ? 'bg-white/5 border border-white/5 text-apple-text-darkSecondary' 
                            : 'bg-black/5 border border-black/5 text-apple-text-lightSecondary'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-apple-blue hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      View Source Code
                    </a>
                    
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 transform hover:-translate-y-0.5 ${
                          isDark 
                            ? 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-apple-text-darkPrimary' 
                            : 'border-black/10 hover:border-black/20 bg-black/5 hover:bg-black/10 text-apple-text-lightPrimary'
                        }`}
                      >
                        Live Demo
                      </a>
                    )}

                    <button
                      onClick={() => setActiveProject(project)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                        isDark ? 'text-apple-text-darkPrimary hover:text-apple-blue' : 'text-apple-text-lightPrimary hover:text-apple-blue'
                      } group/btn`}
                    >
                      Explore Specs
                      <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Right/Left Interactive SVG Side */}
                <div className={`w-full md:w-1/2 flex items-center justify-center order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`w-full max-w-sm p-6 rounded-2xl border transition-all duration-700 group-hover:scale-105 ${
                    isDark 
                      ? 'bg-black/20 border-white/5 shadow-inner' 
                      : 'bg-white/40 border-black/5 shadow-sm'
                  }`}>
                    {renderArchitectureSVG(project.id)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Architectural Detail Modal Drawer */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className={`w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative z-10 border max-h-[90vh] flex flex-col ${
                isDark 
                  ? 'glass-dark text-apple-text-darkPrimary' 
                  : 'glass-light text-apple-text-lightPrimary'
              }`}
            >
              {/* Header */}
              <div className={`p-6 border-b flex items-center justify-between ${
                isDark ? 'border-white/5' : 'border-black/5'
              }`}>
                <div className="flex items-center space-x-3">
                  {getProjectIcon(activeProject.id)}
                  <div>
                    <h4 className="text-lg font-bold tracking-tight">{activeProject.title}</h4>
                    <p className={`text-xs ${isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'}`}>
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className={`p-2 rounded-full transition-colors ${
                    isDark ? 'hover:bg-white/10 text-apple-text-darkSecondary' : 'hover:bg-black/10 text-apple-text-lightSecondary'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 overflow-y-auto flex-1 space-y-8 scrollbar-thin">
                {/* Embedded Large Architecture Diagram */}
                <div>
                  <h5 className={`text-[10px] tracking-widest uppercase font-semibold mb-4 ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}>
                    System Architecture & Data Flows
                  </h5>
                  <div className={`p-6 rounded-2xl border flex items-center justify-center ${
                    isDark ? 'bg-black/40 border-white/5' : 'bg-black/5 border-black/5'
                  }`}>
                    {renderArchitectureSVG(activeProject.id)}
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div>
                  <h5 className={`text-[10px] tracking-widest uppercase font-semibold mb-4 ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}>
                    Key Engineering Highlights
                  </h5>
                  <ul className="space-y-3.5">
                    {activeProject.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-apple-blue shrink-0 mt-0.5" />
                        <span className={`text-sm ${
                          isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                        }`}>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Infrastructure Spec Sheet */}
                <div>
                  <h5 className={`text-[10px] tracking-widest uppercase font-semibold mb-4 ${
                    isDark ? 'text-apple-text-darkSecondary' : 'text-apple-text-lightSecondary'
                  }`}>
                    System Spec Sheet
                  </h5>
                  <div className={`grid grid-cols-2 gap-4 p-4 rounded-xl border text-xs ${
                    isDark ? 'bg-white/5 border-white/5 text-apple-text-darkSecondary' : 'bg-black/5 border-black/5 text-apple-text-lightSecondary'
                  }`}>
                    <div>
                      <span className="font-semibold block mb-1">Target Engine:</span>
                      <span className={isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'}>
                        {activeProject.id === 'transformer-translation' 
                          ? 'PyTorch Custom NN' 
                          : activeProject.id === 'campus-compass' 
                          ? '7-Agent LLM Orchestrator' 
                          : 'ResNet18 + YOLO + XGBoost'}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold block mb-1">API Backend:</span>
                      <span className={isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'}>
                        {activeProject.id === 'transformer-translation' 
                          ? 'FastAPI' 
                          : activeProject.id === 'campus-compass' 
                          ? 'FastAPI + SQLAlchemy' 
                          : 'FastAPI + JWT'}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold block mb-1">Deployment Target:</span>
                      <span className={isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'}>
                        {activeProject.id === 'campus-compass' 
                          ? 'Render & Vercel' 
                          : activeProject.id === 'cv-illumination' 
                          ? 'Vercel & Render' 
                          : 'FastAPI Server'}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold block mb-1">Framework Core:</span>
                      <span className={isDark ? 'text-apple-text-darkPrimary' : 'text-apple-text-lightPrimary'}>
                        {activeProject.tech.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`p-4 border-t flex flex-wrap items-center justify-between gap-4 ${
                isDark ? 'border-white/5 bg-black/20' : 'border-black/5 bg-black/5'
              }`}>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-apple-blue hover:bg-blue-600 text-white shadow transition-all duration-300"
                  >
                    GitHub Repo
                  </a>
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                        isDark 
                          ? 'border-white/10 hover:border-white/20 bg-white/5 text-apple-text-darkPrimary' 
                          : 'border-black/10 hover:border-black/20 bg-black/5 text-apple-text-lightPrimary'
                      }`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-apple-blue hover:bg-blue-600 text-white"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
