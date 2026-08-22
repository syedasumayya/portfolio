"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, BookOpen, Send } from "lucide-react";
import { useState } from "react";

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

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumayya-zahid11", icon: LinkedinIcon, color: "#60a5fa" },
  { label: "GitHub", href: "https://github.com/syedasumayya", icon: GithubIcon, color: "#a78bfa" },
  { label: "Blog", href: "https://www.blogger.com/profile/16214197526729610194", icon: BookOpen, color: "#34d399" },
];

const info = [
  { label: "syedasumayya764@gmail.com", icon: Mail, color: "#f472b6", href: "mailto:syedasumayya764@gmail.com" },
  { label: "+329-099-2077", icon: Phone, color: "#22d3ee", href: "tel:+3290992077" },
  { label: "Islamabad, Pakistan", icon: MapPin, color: "#fb923c", href: undefined },
];

const ACCENT = "#a78bfa";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

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
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">06 — Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory text-balance max-w-2xl">
            Let&apos;s build something{" "}
            <span
              className="italic"
              style={{
                backgroundImage: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              intelligent
            </span>{" "}
            together.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-ivory-dim font-light text-lg leading-relaxed mb-9">
              Open to opportunities in AI engineering, robotics, and full-stack development. Reach out — I&apos;d love to hear about your project.
            </p>

            <div className="space-y-3 mb-9">
              {info.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all duration-300"
                    style={{ borderColor: "rgba(139,124,255,0.08)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${item.color}55`;
                      e.currentTarget.style.backgroundColor = `${item.color}0d`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(139,124,255,0.08)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}1a`, border: `1px solid ${item.color}40` }}
                    >
                      <Icon size={15} style={{ color: item.color }} />
                    </div>
                    <span className="text-sm text-ivory-dim">{item.label}</span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="flex gap-8">
              {socials.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-ivory-dim transition-colors duration-300 group"
                  onMouseEnter={(e) => (e.currentTarget.style.color = l.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <l.icon size={20} />
                  <span className="text-[11px] font-mono tracking-wide uppercase opacity-70 group-hover:opacity-100">{l.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form
              action="https://formspree.io/f/mzdljejn"
              method="POST"
              className="scan-frame glass-panel p-7 md:p-9 flex flex-col gap-4"
            >
              <span className="corner-tl" />
              <span className="corner-br" />

              {(["name", "email", "message"] as const).map((field) => {
                const isFocused = focused === field;
                const common = {
                  name: field,
                  required: true,
                  onFocus: () => setFocused(field),
                  onBlur: () => setFocused(null),
                  style: {
                    borderColor: isFocused ? `${ACCENT}80` : "rgba(139,124,255,0.15)",
                    boxShadow: isFocused ? `0 0 0 3px ${ACCENT}1a` : "none",
                  },
                  className:
                    "bg-surface-2 border text-ivory placeholder:text-ivory-dim/40 px-5 py-3 text-sm focus:outline-none transition-all duration-300",
                };

                if (field === "message") {
                  return (
                    <textarea key={field} {...common} placeholder="Your Message" rows={5} className={`${common.className} resize-none`} />
                  );
                }
                return (
                  <input
                    key={field}
                    {...common}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "email" ? "Your Email" : "Your Name"}
                  />
                );
              })}

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 px-9 py-4 border text-sm tracking-[0.1em] uppercase transition-all duration-300"
                style={{ borderColor: `${ACCENT}80`, color: ACCENT }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${ACCENT}15`;
                  e.currentTarget.style.boxShadow = `0 0 28px -6px ${ACCENT}90`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Send Message
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}