"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzeddjvo";
const VISIT_KEY = "portfolio_visits";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.73.81 1.17 1.83 1.17 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
  function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.25c-5.52 0-10 3.9-10 8.72 0 1.73.58 3.34 1.57 4.7-.1.5-.4 1.73-.76 2.9-.08.27.17.52.44.44 1.2-.36 2.5-.8 3-1 1.43.6 3.03.93 4.75.93 5.52 0 10-3.9 10-8.72s-4.48-8.97-10-8.97Zm-4.2 7.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm8.4 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 17.1c-1.8 0-3.36-.8-4.1-2a.45.45 0 0 1 .5-.67c1.1.44 2.3.67 3.6.67s2.5-.23 3.6-.67a.45.45 0 0 1 .5.67c-.74 1.2-2.3 2-4.1 2Z" />
    </svg>
  );
}
}

const INFO_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "zahidsumayya266@gmail.com",
    href: "mailto:zahidsumayya266@gmail.com",
    color: "#a78bfa",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/syedasumayya",
    href: "https://linkedin.com/in/syedasumayya",
    color: "#60a5fa",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/syedasumayya",
    href: "https://github.com/syedasumayya",
    color: "#34d399",
  },
  {
    icon: HuggingFaceIcon,
    label: "Hugging Face",
    value: "huggingface.co/syedasumayya1",
    href: "https://huggingface.co/syedasumayya1",
    color: "#fb923c",
  },
];

export default function Contact() {
  const [visits, setVisits] = useState<number | null>(null);
  const countedRef = useRef(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    if (countedRef.current) return;
    countedRef.current = true;
    try {
      const current = Number(localStorage.getItem(VISIT_KEY) || "0");
      const next = current + 1;
      localStorage.setItem(VISIT_KEY, String(next));
      queueMicrotask(() => setVisits(next));
    } catch {
      queueMicrotask(() => setVisits(null));
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="09 — Contact" title="Let's Connect" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: info cards + visit counter */}
          <div className="space-y-4">
            {INFO_CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass-panel group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-all hover:-translate-y-0.5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.color;
                  e.currentTarget.style.boxShadow = `0 0 24px ${c.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${c.color}1a`, color: c.color }}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#8d90a8]">{c.label}</div>
                  <div className="truncate text-sm font-medium text-[#d5d7e8]">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-dashed border-white/15 p-4 text-center">
              <div
                className="text-2xl font-bold"
                style={{
                  backgroundImage: "linear-gradient(90deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {visits !== null ? visits.toLocaleString() : "—"}
              </div>
              <div className="text-xs text-[#8d90a8]">Portfolio Visits</div>
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel scan-frame space-y-4 rounded-2xl border border-white/10 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs text-[#8d90a8]">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-[#d5d7e8] outline-none focus:border-[#a78bfa]/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-[#8d90a8]">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-[#d5d7e8] outline-none focus:border-[#a78bfa]/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs text-[#8d90a8]">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-[#d5d7e8] outline-none focus:border-[#a78bfa]/60"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] px-6 py-3 text-sm font-semibold text-[#0a0a16] transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-[#f87171]">
                <AlertCircle className="h-4 w-4" />
                Something went wrong — try again or email me directly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}