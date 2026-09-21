"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Eye, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const infoCards = [
  {
    label: "EMAIL",
    value: "syedasumayya764@gmail.com",
    href: "mailto:syedasumayya764@gmail.com",
    icon: Mail,
    color: "#a78bfa",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/sumayya-zahid11",
    href: "https://www.linkedin.com/in/sumayya-zahid11",
    icon: LinkedinIcon,
    color: "#60a5fa",
  },
  {
    label: "GITHUB",
    value: "github.com/syedasumayya",
    href: "https://github.com/syedasumayya",
    icon: GithubIcon,
    color: "#f472b6",
  },
];

const VISIT_KEY = "portfolio_visits";

export default function Contact() {
  const [visits, setVisits] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const counted = useRef(false);

  useEffect(() => {
  if (counted.current) return;
  counted.current = true;
  try {
    const current = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10);
    const next = current + 1;
    localStorage.setItem(VISIT_KEY, String(next));
    queueMicrotask(() => setVisits(next));
  } catch {
    queueMicrotask(() => setVisits(1));
  }
}, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:syedasumayya764@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
            07 — Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory text-balance">
            Let&apos;s{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              connect
            </span>
          </h2>
          <p className="mt-5 text-ivory-dim/70 text-lg max-w-xl">
            Have an opportunity, project idea or simply want to say hello?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* left: info cards + visit counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {infoCards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="scan-frame glass-panel flex items-center gap-4 p-5 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${c.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <span className="corner-tl" />
                  <span className="corner-br" />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${c.color}1a`, border: `1px solid ${c.color}40` }}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.2em]" style={{ color: c.color }}>
                      {c.label}
                    </p>
                    <p className="text-sm text-ivory truncate">{c.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="border border-dashed border-gold/15 rounded-lg p-5 flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 shrink-0">
                <Eye size={22} className="text-ivory-dim/50" />
              </div>
              <div>
                <p className="font-display text-2xl text-ivory">{visits ?? "—"}</p>
                <p className="text-xs text-ivory-dim/50">Portfolio visits on this browser</p>
              </div>
            </div>
          </motion.div>

          {/* right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="scan-frame glass-panel p-7 md:p-8 space-y-5">
              <span className="corner-tl" />
              <span className="corner-br" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-ivory-dim mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-surface-2 border border-gold/15 text-ivory placeholder:text-ivory-dim/40 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#a78bfa]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ivory-dim mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-surface-2 border border-gold/15 text-ivory placeholder:text-ivory-dim/40 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#a78bfa]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-ivory-dim mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your opportunity or idea..."
                  className="w-full bg-surface-2 border border-gold/15 text-ivory placeholder:text-ivory-dim/40 px-4 py-3 text-sm rounded-md focus:outline-none focus:border-[#a78bfa]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-[1.02]"
                style={{ background: "linear-gradient(90deg, #a78bfa, #22d3ee)", color: "#0a0c12" }}
              >
                Send Message
                <ArrowUpRight size={15} />
              </button>

              <p className="text-xs text-ivory-dim/40">
                This opens your email application with the message prepared.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}