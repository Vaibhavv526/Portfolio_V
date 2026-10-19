"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowUp,
  FileText,
} from "lucide-react";
import { personal, socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="relative border-t border-border/80 py-12 px-6">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-1.5">
              <div className="w-7 h-7 rounded-lg border border-accent/40 flex items-center justify-center bg-accent/10">
                <span className="font-display font-bold text-xs gradient-text">KV</span>
              </div>
              <span className="font-display font-bold text-sm text-text">K Vaibhav</span>
            </div>
            <p className="font-mono text-xs text-muted">
              AI/ML Engineer & Software Engineer • Bilaspur, Chhattisgarh, India
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-muted">
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-accent hover:underline"
            >
              <FileText size={12} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = iconMap[social.icon] || Github;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.label}`}
                  title={social.label}
                  className="w-8 h-8 rounded-lg glass border border-border hover:border-accent/50 flex items-center justify-center text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-mono text-[11px] text-muted/60">
            © {new Date().getFullYear()} K Vaibhav. Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <ArrowUp size={13} />
            <span>Back to top</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
