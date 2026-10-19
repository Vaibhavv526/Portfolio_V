"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { label: "About & Experience", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active link spy
      const sections = links.map((l) => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(links[i].label);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          aria-label="K Vaibhav Homepage"
          className="group relative flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
        >
          <div className="w-9 h-9 rounded-xl border border-accent/40 flex items-center justify-center relative overflow-hidden bg-surface-2 transition-transform duration-200 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-2/15" />
            <span className="font-display font-bold text-sm gradient-text relative z-10 tracking-tight">
              KV
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-text group-hover:text-accent transition-colors">
              {personal.name}
            </span>
            <span className="font-mono text-[10px] text-muted tracking-wider hidden sm:block">
              AI/ML & Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative px-3.5 py-2 text-xs font-mono tracking-wider transition-colors duration-200 rounded-lg group ${
                active === link.label
                  ? "text-accent font-semibold"
                  : "text-muted hover:text-text"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-lg bg-accent/0 group-hover:bg-accent/5 transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-muted hover:text-text border border-border hover:border-accent/40 glass transition-all duration-200"
          >
            <FileText size={13} className="text-accent" />
            <span>Resume</span>
            <ArrowUpRight size={12} className="opacity-60" />
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-mono font-medium border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-200 shadow-sm shadow-accent/10"
          >
            Connect
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-2.5 rounded-xl glass border border-border text-muted hover:text-text transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-5 max-w-md mx-auto">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-mono text-muted hover:text-text hover:bg-accent/5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border/60 flex flex-col gap-2.5">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-text glass border border-border hover:border-accent/40 transition-all"
                >
                  <FileText size={14} className="text-accent" />
                  View Resume (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono text-center font-medium bg-gradient-to-r from-accent to-accent-2 text-bg font-bold transition-all"
                >
                  Connect With Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
