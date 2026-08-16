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
    </div>
  );
}