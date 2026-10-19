"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowDown,
  Download,
  ArrowUpRight,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personal, socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

export default function Hero() {
  const typed = useTypewriter(personal.roles, {
    typeSpeed: 65,
    deleteSpeed: 35,
    pauseDuration: 2000,
  });

  return (
    <section
      id="home"
      aria-label="Introduction and Overview"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, #7b2fff 50%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Technical Narrative & Positioning */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full glass border border-accent/30 shadow-sm shadow-accent/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-text/90 tracking-wide font-medium">
              Available for Software & AI/ML Opportunities
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              <span className="text-text">{personal.name}</span>
            </h1>

            {/* Role Typewriter */}
            <div className="h-9 sm:h-11 flex items-center justify-center lg:justify-start mb-5">
              <span className="font-mono text-lg sm:text-2xl text-accent font-semibold flex items-center">
                {typed}
                <span className="animate-pulse ml-1 inline-block w-2 h-5 bg-accent" />
              </span>
            </div>
          </motion.div>

          {/* Credible Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base font-body mb-6"
          >
            Focused on machine learning, generative AI, backend engineering, and production-oriented applications. Experienced in training custom encoder-decoder Transformers from scratch in PyTorch, engineering multi-agent LLM systems with FastAPI, and deploying robust cloud services.
          </motion.p>

          {/* Location & Institution Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-muted/80 mb-8"
          >
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-accent" />
              <span>{personal.location}</span>
            </div>
            <span className="text-border-bright hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-accent-2" />
              <span>B.Tech IT (2024–2028), GEC Bilaspur</span>
            </div>
          </motion.div>

          {/* Primary & Secondary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3.5 justify-center lg:justify-start mb-8"
          >
            {/* Primary Action */}
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="group relative px-6 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold overflow-hidden transition-all duration-200 shadow-md shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-2 to-accent bg-[length:200%_100%] transition-all" />
              <span className="relative z-10 text-bg flex items-center gap-2">
                <span>View Featured Projects</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>

            {/* Secondary Action */}
            <a
              href={personal.resumePath}
              id="hero-download-resume-btn"
              download="K_Vaibhav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-mono font-medium glass border border-border hover:border-accent/50 text-text hover:text-accent transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 shadow-sm"
            >
              <Download size={14} className="text-accent" />
              <span>Download Resume</span>
            </a>

            {/* Contact Action */}
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-mono font-medium border border-border/80 text-muted hover:text-text hover:border-border-bright transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Verified Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <span className="font-mono text-[11px] text-muted/70 tracking-wider">
              VERIFIED PROFILES:
            </span>
            <div className="flex gap-2.5">
              {socials.map((social) => {
                const Icon = iconMap[social.icon] || Github;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${social.label}: ${social.handle || social.url}`}
                    aria-label={`Visit K Vaibhav on ${social.label}`}
                    className="w-9 h-9 rounded-xl glass border border-border hover:border-accent/50 flex items-center justify-center text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-accent/20"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Architectural Engineering Visual */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            {/* Tech Card Backdrop */}
            <div className="glass-bright border border-border-bright/80 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-2xl shadow-black/60">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[11px] text-muted ml-2">
                    ai-engine.core.py
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  PyTorch + CUDA
                </span>
              </div>

              {/* Code / Architecture Snippet */}
              <div className="font-mono text-xs space-y-2 mb-6">
                <div className="text-muted/60"># Custom Transformer & Multi-Agent Architecture</div>
                <div className="text-text">
                  <span className="text-accent-3">class</span>{" "}
                  <span className="text-accent font-semibold">TransformerEncoderDecoder</span>:
                </div>
                <div className="pl-4 text-muted">
                  def <span className="text-highlight">forward</span>(self, src, tgt_mask):
                </div>
                <div className="pl-8 text-muted/90">
                  enc = self.encoder(src, mask=None)
                </div>
                <div className="pl-8 text-muted/90">
                  dec = self.decoder(tgt, enc, causal_mask)
                </div>
                <div className="pl-8 text-accent-2 font-medium">
                  return self.linear_out(dec)
                </div>
              </div>

              {/* Core Engineering Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="glass rounded-xl p-3 border border-border/80">
                  <div className="flex items-center gap-1.5 text-accent text-xs font-mono font-semibold">
                    <CheckCircle2 size={13} />
                    <span>Transformer</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1">
                    197K+ Pairs (Scratch)
                  </div>
                </div>

                <div className="glass rounded-xl p-3 border border-border/80">
                  <div className="flex items-center gap-1.5 text-accent-2 text-xs font-mono font-semibold">
                    <CheckCircle2 size={13} />
                    <span>CampusCompass</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1">
                    7-Agent Architecture
                  </div>
                </div>

                <div className="glass rounded-xl p-3 border border-border/80">
                  <div className="flex items-center gap-1.5 text-accent-3 text-xs font-mono font-semibold">
                    <CheckCircle2 size={13} />
                    <span>Vision Platform</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1">
                    92% Acc | &lt;200ms Latency
                  </div>
                </div>

                <div className="glass rounded-xl p-3 border border-border/80">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-mono font-semibold">
                    <CheckCircle2 size={13} />
                    <span>LeetCode</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1">
                    300+ Solved | 1740 Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow accent under card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent-2/20 to-accent-3/20 rounded-3xl blur-xl -z-10 opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-muted/60 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} className="text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
