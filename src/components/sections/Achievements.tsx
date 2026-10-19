"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Trophy, Award, Star, Code2, Globe2, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  star: Star,
  code: Code2,
  globe: Globe2,
};

function AnimatedStat({
  to,
  suffix = "",
  label,
  sublabel,
}: {
  to: number;
  suffix?: string;
  label: string;
  sublabel: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          animate(count, to, { duration: 1.6, ease: "easeOut" });
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [count, to]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  return (
    <div
      ref={ref}
      className="glass-bright border border-border rounded-2xl p-5 text-center relative overflow-hidden group hover:border-border-bright transition-all"
    >
      <div className="font-display font-extrabold text-3xl sm:text-4xl gradient-text mb-1">
        {display}
        {suffix}
      </div>
      <div className="font-mono text-xs text-text font-medium">{label}</div>
      <div className="font-mono text-[10px] text-muted mt-0.5">{sublabel}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" aria-label="Achievements and Recognition" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Track Record"
          title="Achievements & Recognition"
          subtitle="Competitive coding milestones, hackathon podium finishes, and international AI contest selections."
        />

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <AnimatedStat
            to={150}
            suffix=" Top"
            label="Adobe Hackathon"
            sublabel="Round 4 of ~300,000"
          />
          <AnimatedStat
            to={1740}
            suffix=""
            label="LeetCode Rating"
            sublabel="300+ Problems Solved"
          />
          <AnimatedStat
            to={2}
            suffix="x"
            label="Hackathon Runner-Up"
            sublabel="SSH 26 & Business Ghar"
          />
          <AnimatedStat
            to={2026}
            suffix=""
            label="Intl AI Finalist"
            sublabel="Sber AI RnD XR Challenge"
          />
        </div>

        {/* Verified Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            const isMesh = item.title.includes("International AI");

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-bright border border-border rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-border-bright transition-all duration-300 shadow-md shadow-black/20"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />

                <div>
                  {/* Icon & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: item.color + "15",
                        border: `1px solid ${item.color}35`,
                      }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <span
                      className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
                      style={{
                        color: item.color,
                        background: item.color + "15",
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Position */}
                  <h3 className="font-display font-bold text-sm sm:text-base text-text leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="font-mono text-xs font-semibold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.position}
                  </p>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Optional Repo Link for International AI Contest */}
                {isMesh && (
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <a
                      href="https://github.com/Vaibhavv526/3D-Mesh_quality_check"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent hover:underline"
                    >
                      <span>View Contest Repo (3D-Mesh)</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
