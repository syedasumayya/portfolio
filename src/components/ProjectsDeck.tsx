"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectsDeck() {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const active = projects[index];
  const ctaHref = active.liveUrl || active.repoUrl || `/projects/${active.slug}`;
  const isExternal = Boolean(active.liveUrl || active.repoUrl);

  const peekOffsets = [1, 2].map((offset) => projects[(index + offset) % total]);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 pb-28">
      <div className="relative h-[560px] md:h-[600px]">
        {peekOffsets
          .slice()
          .reverse()
          .map((p, revI) => {
            const depth = peekOffsets.length - revI;
            return (
              <div
                key={p.slug}
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl overflow-hidden border pointer-events-none"
                style={{
                  transform: `translateY(${depth * 16}px) scale(${1 - depth * 0.035})`,
                  opacity: 1 - depth * 0.32,
                  zIndex: 10 - depth,
                  borderColor: `${p.color}25`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(160deg, ${p.color}10, #0a0c12 100%)` }}
                />
              </div>
            );
          })}

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.slug}
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onClick={next}
            role="button"
            aria-label="Show next project"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") next();
            }}
            className="absolute inset-0 rounded-2xl overflow-hidden glass-panel cursor-pointer"
            style={{ zIndex: 20, borderColor: `${active.color}40` }}
          >
            <div className="grid md:grid-cols-2 h-full">
              <div className="relative h-full min-h-[220px]">
                <ProjectVisual project={active} />
              </div>

              <div className="relative flex items-center px-6 md:px-12 py-10 overflow-hidden">
                <span
                  className="absolute -right-2 bottom-0 font-display text-[9rem] md:text-[11rem] leading-none select-none pointer-events-none"
                  style={{ color: `${active.color}0f` }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <span className="font-mono text-xs tracking-[0.2em] text-ivory-dim/50 block mb-4">
                    {active.year}
                  </span>

                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-ivory mb-4 text-balance">
                    {active.title}{" "}
                    <span
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${active.color}, ${active.colorTo})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {active.titleAccent}
                    </span>
                  </h3>

                  <p className="text-ivory-dim text-[14px] md:text-[15px] leading-relaxed font-light mb-6">
                    {active.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full bg-surface-2 border border-gold/10 text-ivory-dim/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={ctaHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="relative z-10 inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-ivory border rounded-full px-5 py-2.5 hover:opacity-80 transition-opacity duration-300 group"
                    style={{ borderColor: `${active.color}40` }}
                  >
                    View Project
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${p.title} ${p.titleAccent}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "24px" : "8px",
                backgroundColor: i === index ? active.color : "var(--color-ivory-dim)",
                opacity: i === index ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ivory-dim/50 tabular-nums mr-2">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-ivory-dim hover:text-ivory hover:border-gold/50 transition-colors duration-300"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-ivory-dim hover:text-ivory hover:border-gold/50 transition-colors duration-300"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim/30 text-center mt-6">
        Click the card, or use the arrows, to move through the archive
      </p>

      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/syedasumayya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.15em] uppercase text-ivory border border-gold/20 rounded-full px-7 py-3.5 transition-all duration-300 hover:border-[#a78bfa]/60 hover:shadow-[0_0_24px_-6px_rgba(167,139,250,0.6)] hover:bg-[#a78bfa]/10 group"
        >
          <GithubMark size={16} />
          See More Projects on GitHub
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

function GithubMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}