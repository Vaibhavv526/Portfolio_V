"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Layers,
  Cpu,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects, secondaryProjects, Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-bright border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-border-bright transition-all duration-300 shadow-xl shadow-black/30"
    >
      {/* Top Accent Gradient Bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      {/* Visual Header */}
      <div className="h-44 sm:h-48 relative overflow-hidden bg-surface-2 flex items-center justify-center p-4">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${project.color}20 1px, transparent 1px), linear-gradient(90deg, ${project.color}20 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {project.image ? (
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={project.image}
              alt={`${project.title} Interface`}
              fill
              className="object-cover rounded-xl border border-white/10 shadow-md"
              unoptimized
            />
          </div>
        ) : (
          /* Architectural Banner when screenshot is not pre-existing */
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4 rounded-xl border border-white/10 bg-surface/80">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 shadow-lg"
              style={{
                background: project.color + "18",
                border: `1px solid ${project.color}40`,
              }}
            >
              {project.id === 2 ? (
                <Sparkles size={22} style={{ color: project.color }} />
              ) : (
                <Cpu size={22} style={{ color: project.color }} />
              )}
            </div>
            <span className="font-mono text-xs font-semibold tracking-wider text-text">
              {project.id === 2
                ? "7-Agent Multi-Agent Orchestration"
                : "ResNet18 + YOLO + XGBoost Pipeline"}
            </span>
            <span className="font-mono text-[10px] text-muted mt-1">
              {project.id === 2
                ? "FastAPI • PostgreSQL • Groq LLM"
                : "92% Accuracy • <200ms Latency"}
            </span>
          </div>
        )}

        {/* Ambient glow orb */}
        <div
          className="absolute w-28 h-28 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: project.color }}
        />
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-text group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Problem Statement */}
        <div className="mb-3">
          <span className="font-mono text-[10px] text-muted tracking-wider uppercase block mb-1">
            Problem & Context
          </span>
          <p className="text-muted text-xs leading-relaxed font-body">
            {project.problem}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="mb-4 flex-1">
          <span className="font-mono text-[10px] text-muted tracking-wider uppercase block mb-2">
            Engineering Contributions
          </span>
          <ul className="space-y-1.5">
            {project.highlights.map((h, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-text/80 font-body leading-relaxed"
              >
                <CheckCircle2
                  size={12}
                  className="shrink-0 mt-0.5"
                  style={{ color: project.color }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-2 border-t border-border/60">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md font-mono text-[10px] border"
              style={{
                color: project.color,
                borderColor: project.color + "35",
                background: project.color + "10",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions (Verified Links Only) */}
        <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-border mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-text transition-colors group/link focus-visible:ring-1 focus-visible:ring-accent rounded-md px-1 py-0.5"
            >
              <Github size={14} />
              <span>GitHub</span>
              <ArrowUpRight
                size={12}
                className="opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"
              />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-muted/50">
              Private Codebase
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all shadow-sm focus-visible:ring-1 focus-visible:ring-accent"
              style={{
                color: "#050810",
                background: project.color,
              }}
            >
              <ExternalLink size={12} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="projects" aria-label="Projects and Applications" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Featured Work"
          title="Featured Engineering Projects"
          subtitle="Production-grade AI/ML models, deep learning architectures, and scalable full-stack applications with verified metrics."
        />

        {/* Primary Featured Projects Grid (3 Core Projects) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} priority={true} />
          ))}
        </div>

        {/* Toggleable Secondary Projects */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-display font-bold text-base text-text">
                Additional Applied ML Projects
              </h4>
              <p className="font-mono text-xs text-muted">
                Time-series forecasting pipelines and clustering systems
              </p>
            </div>
            <button
              onClick={() => setShowSecondary(!showSecondary)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border hover:border-accent/40 text-xs font-mono text-text transition-all"
            >
              <span>{showSecondary ? "Hide Secondary Projects" : "View Secondary Projects (2)"}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  showSecondary ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {showSecondary && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6 pt-2 pb-6">
                  {secondaryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* View All on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Vaibhavv526"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass border border-border hover:border-accent/50 text-muted hover:text-accent font-mono text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/20"
          >
            <Github size={16} />
            <span>Explore All 20+ Repositories on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
