"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroConstellation from "./HeroConstellation";
import CyclingWord from "./CyclingWord";

const PALETTE = [
  { color: "#a78bfa", colorTo: "#67e8f9" },
  { color: "#f472b6", colorTo: "#c084fc" },
  { color: "#60a5fa", colorTo: "#818cf8" },
  { color: "#34d399", colorTo: "#22d3ee" },
];

const HEADLINE_WORDS = [
  { text: "intelligence", ...PALETTE[0] },
  { text: "systems", ...PALETTE[1] },
  { text: "software", ...PALETTE[2] },
  { text: "robotics", ...PALETTE[3] },
];

const SCAN_NODES: [number, number][] = [
  [320, 480],
  [500, 420],
  [700, 340],
  [950, 180],
];

function useTypewriter(text: string, startDelay: number, speed = 55) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay, speed]);

  return output;
}

export default function Hero() {
  const name = useTypewriter("Syeda Sumayya Zahid", 2400, 50);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {PALETTE.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full blur-[110px]"
          style={{
            background: p.color,
            opacity: 0.11,
            width: 380 - i * 25,
            height: 380 - i * 25,
            top: `${-8 + i * 20}%`,
            left: i % 2 === 0 ? `${-8 + i * 4}%` : "auto",
            right: i % 2 !== 0 ? `${-6 + i * 3}%` : "auto",
          }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 11 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M -50 650 C 150 650 180 500 320 480 L 420 480 C 460 480 460 420 500 420 L 620 420 C 660 420 660 360 700 340 C 780 300 820 200 950 180 C 1050 165 1100 100 1250 90"
          stroke="url(#heroPathGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -22] }}
          transition={{
            pathLength: { duration: 2.2, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 2.2, ease: "easeInOut", delay: 0.2 },
            strokeDashoffset: { duration: 3, ease: "linear", repeat: Infinity, delay: 2.4 },
          }}
        />
        {SCAN_NODES.map(([cx, cy], i) => {
          const p = PALETTE[i % PALETTE.length];
          return (
            <g key={i}>
              <motion.rect
                x={cx - 6}
                y={cy - 6}
                width={12}
                height={12}
                fill="none"
                stroke={p.colorTo}
                strokeWidth="1"
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: 360 }}
                transition={{
                  scale: { duration: 0.5, delay: 1 + i * 0.2 },
                  opacity: { duration: 0.5, delay: 1 + i * 0.2 },
                  rotate: { duration: 14 + i * 3, ease: "linear", repeat: Infinity, delay: 1 + i * 0.2 },
                }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <motion.circle
                cx={cx}
                cy={cy}
                r="2.5"
                fill={p.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 1, 1.4, 1], opacity: [0, 1, 1, 0.4, 1] }}
                transition={{ duration: 2.4, delay: 1 + i * 0.2, repeat: Infinity, repeatDelay: 1.5 }}
              />
            </g>
          );
        })}
        <defs>
          <linearGradient id="heroPathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={PALETTE[0].color} stopOpacity="0" />
            <stop offset="35%" stopColor={PALETTE[0].colorTo} stopOpacity="0.9" />
            <stop offset="70%" stopColor={PALETTE[1].color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={PALETTE[2].colorTo} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-8">
        <div>
          <div className="relative h-6 mb-2">
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, times: [0, 0.15, 0.75, 1], delay: 0.1 }}
              className="absolute top-0 left-0 flex items-center gap-2"
            >
              <span className="w-2 h-2 border-t-2 border-l-2 border-gold inline-block" />
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold-bright border border-gold/40 px-2 py-1 whitespace-nowrap">
                identifying subject...
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.6, times: [0, 0.2, 0.7, 1], delay: 1.1 }}
              className="absolute top-0 left-0 border border-gold/50 px-4 py-2 whitespace-nowrap"
            >
              <span className="font-mono text-xs tracking-wide text-gold-bright">
                ✓ MATCH FOUND — S. SUMAYYA ZAHID
              </span>
            </motion.div>
          </div>

          <div className="mb-3">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-gold-bright min-h-[1.3em]">
              {name}
              {name.length < 19 && (
                <span className="inline-block w-[2px] h-[0.85em] bg-gold-bright ml-1 animate-pulse align-middle" />
              )}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.4 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4"
          >
            Software Engineer — AI &amp; Robotics
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.7 }}
            className="font-display text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-ivory max-w-3xl mb-6"
          >
            Engineering{" "}
            <CyclingWord items={HEADLINE_WORDS} startDelay={4600} />,
            <br />
            <span className="italic text-white">crafted</span> with precision.
          </motion.h2>
          <motion.p
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 4.0 }}
  style={{ color: "#d5d7e8" }}
  className="max-w-xl text-[15px] md:text-base leading-relaxed font-light mb-8"
>
  I turn ideas into intelligent systems — training the models,
  engineering the robots, and shipping the software that runs them.
</motion.p>

    

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="flex flex-wrap items-center gap-4"
          >
           <a 
              href="#projects"
              className="px-6 py-3 border text-sm tracking-[0.1em] uppercase transition-all duration-300"
              style={{ borderColor: `${PALETTE[0].color}60`, color: PALETTE[0].color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 24px -4px ${PALETTE[0].color}90`;
                e.currentTarget.style.backgroundColor = `${PALETTE[0].color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border text-sm tracking-[0.1em] uppercase transition-all duration-300"
              style={{ borderColor: `${PALETTE[2].color}60`, color: PALETTE[2].color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 24px -4px ${PALETTE[2].color}90`;
                e.currentTarget.style.backgroundColor = `${PALETTE[2].color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.6, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <HeroConstellation />
        </motion.div>
      </div>
    </section>
  );
}