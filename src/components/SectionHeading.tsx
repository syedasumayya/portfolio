"use client";

import { motion } from "framer-motion";

// same accent palette used across Skills/Projects/Hero — cycles per section number
const PALETTE = [
  { color: "#a78bfa", colorTo: "#67e8f9" }, // 01 — violet
  { color: "#f472b6", colorTo: "#c084fc" }, // 02 — pink
  { color: "#60a5fa", colorTo: "#818cf8" }, // 03 — blue
  { color: "#34d399", colorTo: "#22d3ee" }, // 04 — green
  { color: "#fb923c", colorTo: "#fbbf24" }, // 05 — amber
  { color: "#f472b6", colorTo: "#a78bfa" }, // 06 — pink/violet
];

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const match = eyebrow.match(/^(\d+)/);
  const num = match ? parseInt(match[1], 10) : 1;
  const { color, colorTo } = PALETTE[(num - 1) % PALETTE.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative mb-14"
    >
      {/* faint ghost number in the background, same language as Skills/Projects */}
      <span
        className="absolute -top-6 -left-2 font-display text-[7rem] md:text-[9rem] leading-none select-none pointer-events-none"
        style={{ color: `${color}0d` }}
      >
        {String(num).padStart(2, "0")}
      </span>

      <div className="relative flex items-center gap-2.5 mb-3">
        <motion.span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: color, boxShadow: `0 0 10px 2px ${color}80` }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color }}>
          {eyebrow}
        </p>
      </div>

      {/* title now gradient-colored, matching the section's accent */}
      <h2
        className="relative font-display text-4xl md:text-5xl"
        style={{
          backgroundImage: `linear-gradient(90deg, #f2f3f9, ${color} 55%, ${colorTo})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </h2>

      <div className="relative mt-5 w-20 h-[3px] overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${colorTo})` }}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}