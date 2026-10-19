"use client";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Sparkles,
  Database,
  Cloud,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

const categoryIcons = [
  Code,       // Programming
  Cpu,        // AI/ML
  Sparkles,   // Generative AI
  Database,   // Backend & Data
  Cloud,      // Cloud & Tools
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical Skills" className="relative py-28 px-6">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent-2/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Core Stack"
          title="Technical Skills"
          subtitle="Curated tools, frameworks, and technologies applied across AI/ML models, generative workflows, and production backends."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[idx] || Code;
            const isLarge = idx === 1; // AI/ML category has more items, give it special layout if desired

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`glass-bright border border-border rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group hover:border-border-bright transition-all duration-300 shadow-lg shadow-black/20 ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Category accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-70 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${category.color}, transparent)`,
                  }}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/70">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: category.color + "15",
                        border: `1px solid ${category.color}35`,
                      }}
                    >
                      <Icon size={17} style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-wide text-text">
                        {category.title}
                      </h3>
                      <span className="font-mono text-[10px] text-muted">
                        {category.skills.length} verified technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl font-mono text-xs border transition-all duration-200 cursor-default flex items-center gap-1.5"
                        style={{
                          color: "#e8eef8",
                          borderColor: "rgba(42, 58, 96, 0.7)",
                          backgroundColor: "rgba(10, 15, 30, 0.6)",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.borderColor = category.color + "80";
                          target.style.backgroundColor = category.color + "15";
                          target.style.color = category.color;
                          target.style.boxShadow = `0 0 14px ${category.color}25`;
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.borderColor = "rgba(42, 58, 96, 0.7)";
                          target.style.backgroundColor = "rgba(10, 15, 30, 0.6)";
                          target.style.color = "#e8eef8";
                          target.style.boxShadow = "none";
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: category.color }}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted/70">
                  <span>Production verified</span>
                  <span className="text-emerald-400/90 font-medium">✓ Active Stack</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Credibility Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="font-mono text-xs text-muted/70">
            Skills organized by architectural domain · No arbitrary percentage bars or fabricated ratings
          </p>
        </motion.div>
      </div>
    </section>
  );
}
