"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Database,
  Cpu,
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal, socials } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
  database: Database,
  cpu: Cpu,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API submission cleanly
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <section id="contact" aria-label="Contact and Inquiries" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          label="Let's Talk"
          title="Get In Touch"
          subtitle="Open to AI/ML engineering roles, software engineering internships, and technical collaborations."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-bright border border-border rounded-2xl p-6 sm:p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

              <h3 className="font-display font-bold text-base mb-4 text-text">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/70 border border-border/70">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                      <Mail size={15} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-muted block">EMAIL</span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-mono text-text hover:text-accent transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-accent transition-colors"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/70 border border-border/70">
                  <div className="w-8 h-8 rounded-lg bg-accent-2/10 border border-accent-2/25 flex items-center justify-center text-accent-2 shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted block">LOCATION</span>
                    <span className="text-xs sm:text-sm font-mono text-text">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-mono text-xs text-muted mb-3 tracking-wider uppercase">
                  Verified Social Channels
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {socials.slice(0, 4).map((social) => {
                    const Icon = iconMap[social.icon] || Github;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass border border-border/80 hover:border-accent/40 rounded-xl p-2.5 flex items-center gap-2 group transition-all"
                      >
                        <Icon size={14} className="text-muted group-hover:text-accent transition-colors" />
                        <span className="font-mono text-[11px] text-text/80 group-hover:text-accent transition-colors truncate">
                          {social.label}
                        </span>
                        <ArrowUpRight size={10} className="ml-auto opacity-40 group-hover:opacity-100 text-muted" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Availability Notice */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="glass border border-emerald-500/25 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                  ACTIVELY INTERVIEWING
                </span>
              </div>
              <p className="text-muted text-xs font-body leading-relaxed">
                Currently open to software engineering internships and AI/ML engineering roles. Ready to discuss real model architectures, system design, and production codebases.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-bright border border-border rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent-2 to-accent-3" />

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-2">
                  <Check size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-text">
                  Message Prepared
                </h4>
                <p className="text-muted text-xs sm:text-sm max-w-sm font-body">
                  Thank you for reaching out! You can also reach me directly at{" "}
                  <a href={`mailto:${personal.email}`} className="text-accent underline font-mono">
                    {personal.email}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 text-xs font-mono text-accent hover:underline"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-base text-text">
                    Send a Message
                  </h3>
                  <span className="font-mono text-[10px] text-muted">
                    Quick response guaranteed
                  </span>
                </div>

                <div>
                  <label htmlFor="contact-name" className="font-mono text-xs text-muted block mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Recruiter / Engineer Name"
                    required
                    className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-body text-text placeholder:text-muted/40 focus:border-accent/60 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="font-mono text-xs text-muted block mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-body text-text placeholder:text-muted/40 focus:border-accent/60 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="font-mono text-xs text-muted block mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share role details, engineering collaborations, or questions about my projects..."
                    required
                    className="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-body text-text placeholder:text-muted/40 focus:border-accent/60 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-bg bg-gradient-to-r from-accent to-accent-2 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 mt-2 shadow-md shadow-accent/20 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
