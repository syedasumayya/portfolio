"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Code2, Eye, Mail, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
}

const FOCUS_AREAS = [
  { icon: Brain, label: "AI & Machine Learning", color: "#a78bfa" },
  { icon: Eye, label: "Computer Vision", color: "#60a5fa" },
  { icon: Cpu, label: "Robotics (ROS 2)", color: "#34d399" },
  { icon: Code2, label: "Full-Stack Dev", color: "#f472b6" },
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "13+", label: "Projects Shipped" },
  { value: "3", label: "Professional Roles" },
];

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/syedasumayya", label: "GitHub", color: "#a78bfa" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/syedasumayya", label: "LinkedIn", color: "#60a5fa" },
  { icon: Mail, href: "mailto:zahidsumayya266@gmail.com", label: "Email", color: "#f472b6" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-x-hidden py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden">
        <SectionHeading eyebrow="01 — Profile" title="About Me" />

        <div className="mt-14 grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
  {/* Animated photo */}
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mx-auto w-full max-w-[320px] md:mx-0"
  >
    <div className="scan-frame glass-panel relative aspect-[14/15] overflow-hidden rounded-[1.5rem] border border-white/10">
              <video
                src="/profile.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            {/* status badge */}
            <div className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-[#9a9db5] md:justify-start">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34d399]" />
              </span>
              <span className="truncate">Open to work — Islamabad, PK</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0 space-y-6"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
              Software Engineer & Builder
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[#d5d7e8]">
              I turn ideas into real systems — spanning{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #34d399, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="font-semibold"
              >
                full-stack & mobile apps
              </span>
              ,{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="font-semibold"
              >
                AI, ML & computer vision
              </span>
              , to{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #60a5fa, #34d399)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="font-semibold"
              >
                ROS 2 robotics & embedded systems
              </span>
              . From architecture to intelligent models to hardware, I build
              the full journey — backed by research and technical writing
              that turns complex ideas into something usable.
            </p>

            {/* stats */}
            <div className="flex flex-wrap gap-8 border-y border-white/10 py-5">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #a78bfa, #60a5fa)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-[#8d90a8]">{s.label}</div>
                </div>
              ))}
            </div>

            {/* focus areas */}
            <div className="grid grid-cols-2 gap-3">
              {FOCUS_AREAS.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  className="glass-panel flex items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5"
                >
                  <area.icon className="h-4 w-4 shrink-0" style={{ color: area.color }} />
                  <span className="text-xs font-medium text-[#d5d7e8]">{area.label}</span>
                </motion.div>
              ))}
            </div>

            {/* socials */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all hover:-translate-y-0.5"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <s.icon className="h-4 w-4 text-[#d5d7e8] transition-colors group-hover:text-white" />
                </a>
              ))}
              <Sparkles className="ml-1 h-4 w-4 text-[#a78bfa]/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}