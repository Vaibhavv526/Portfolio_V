"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  GitBranch,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal, experience, education } from "@/lib/data";

const pillars = [
  {
    icon: Cpu,
    title: "Deep Learning & Transformer Architectures",
    desc: "Hands-on experience developing deep neural models in PyTorch, including custom encoder-decoder Transformers with multi-head attention and sinusoidal positional encoding.",
    color: "#ff2d78",
  },
  {
    icon: Layers,
    title: "Multi-Agent AI & Generative Workflows",
    desc: "Architecting multi-agent systems and LLM pipelines using Groq, LangGraph, and CrewAI for automated tutoring, evaluation, and structured workflows.",
    color: "#00d4ff",
  },
  {
    icon: GitBranch,
    title: "Production Backend & Cloud Deployment",
    desc: "Building containerized REST APIs with FastAPI, PostgreSQL, JWT auth, and Docker, deployed reliably to cloud platforms like Render, Railway, and Vercel.",
    color: "#7b2fff",
  },
];

const milestones = [
  {
    period: "Aug 2026 – Oct 2026",
    title: "Software Engineer Intern (AI/ML)",
    org: "PM Accelerator (Remote)",
    desc: "Explored LLMs, prompt engineering, and contributed to AI product development workflows.",
    color: "#00d4ff",
  },
  {
    period: "2026",
    title: "Transformer From Scratch & CampusCompass",
    org: "Core Engineering Projects",
    desc: "Trained English-Hindi PyTorch Transformer on 197K+ pairs; shipped 7-agent mentoring platform.",
    color: "#ff2d78",
  },
  {
    period: "2026",
    title: "Adobe Hackathon Round 4 & Hackathon Podiums",
    org: "Competitive Engineering",
    desc: "Top 150 of ~300,000 in Adobe University Hackathon; Runner-up at Symbiosis and Business Ghar Ideathon.",
    color: "#ffa500",
  },
  {
    period: "2024 – 2028",
    title: "B.Tech in Information Technology",
    org: "Government Engineering College, Bilaspur",
    desc: "Maintaining strong academic standing with an SPI of 8.00 through the fourth semester.",
    color: "#7b2fff",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About and Experience" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Profile & Experience"
          title="Engineering Background"
          subtitle="A comprehensive view of my industry experience, academic foundations, and technical focus."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Bio + Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-bright border border-border rounded-2xl p-7 relative overflow-hidden shadow-lg shadow-black/30"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                  <Terminal size={17} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-text">
                    Engineering Approach
                  </h3>
                  <p className="font-mono text-xs text-muted">
                    Practical AI systems & scalable applications
                  </p>
                </div>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed font-body">
                {personal.about}
              </p>
            </motion.div>

            {/* Core Competencies */}
            <div className="space-y-3.5">
              <h4 className="font-mono text-xs text-muted tracking-wider uppercase px-1">
                Core Technical Pillars
              </h4>
              <div className="grid gap-3">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="glass border border-border/80 rounded-xl p-4.5 flex items-start gap-3.5 hover:border-border-bright transition-all"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: pillar.color + "15",
                          border: `1px solid ${pillar.color}35`,
                        }}
                      >
                        <Icon size={16} style={{ color: pillar.color }} />
                      </div>
                      <div>
                        <h5 className="font-display font-semibold text-xs sm:text-sm text-text mb-1">
                          {pillar.title}
                        </h5>
                        <p className="text-muted text-xs leading-relaxed font-body">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-bright border border-border rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-2/15 border border-accent-2/30 flex items-center justify-center shrink-0 text-accent-2">
                  <GraduationCap size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-display font-bold text-sm sm:text-base text-text">
                      {education.institution}
                    </h4>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-accent-2/10 border border-accent-2/25 text-accent-2">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-body text-text/80 mb-2">
                    {education.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
                    <span className="text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                      {education.score}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-muted" />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Work Experience & Milestones (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Current Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-bright border border-accent/30 rounded-2xl p-6 relative overflow-hidden shadow-xl shadow-black/40"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3" />

              {/* Company & Role Header */}
              <div className="flex items-start gap-3.5 mb-5 pb-4 border-b border-border/80">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 text-accent">
                  <Briefcase size={19} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h4 className="font-display font-bold text-base text-text">
                      {experience[0].company}
                    </h4>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/25">
                      {experience[0].location}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-accent font-medium">
                    {experience[0].role}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted mt-1">
                    <Calendar size={12} />
                    <span>{experience[0].period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5">
                <span className="font-mono text-[11px] text-muted tracking-wider uppercase block">
                  Key Technical Responsibilities
                </span>
                <ul className="space-y-2 text-xs font-body text-text/80">
                  {experience[0].highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2
                        size={14}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Trajectory Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-bright border border-border rounded-2xl p-6"
            >
              <h4 className="font-mono text-xs text-muted tracking-wider uppercase mb-5">
                Trajectory & Key Milestones
              </h4>

              <div className="relative pl-5 border-l border-border/80 space-y-5">
                {milestones.map((item, i) => (
                  <div key={i} className="relative group">
                    {/* Bullet marker */}
                    <span
                      className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full border-2 border-bg"
                      style={{ background: item.color }}
                    />
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <span className="font-display font-semibold text-xs text-text">
                        {item.title}
                      </span>
                      <span className="font-mono text-[10px] text-muted/70 shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-accent/80 mb-1">
                      {item.org}
                    </p>
                    <p className="text-[11px] text-muted font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
