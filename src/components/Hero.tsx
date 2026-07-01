"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const name = useTypewriter("Syeda Sumayya Zahid", 2800, 55);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bronze/5 blur-[100px]" />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M -50 650 C 150 650 180 500 320 480 L 420 480 C 460 480 460 420 500 420 L 620 420 C 660 420 660 360 700 340 C 780 300 820 200 950 180 C 1050 165 1100 100 1250 90"
          stroke="url(#goldGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />
        {[
          [320, 480],
          [500, 420],
          [700, 340],
          [950, 180],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="#D4AF6A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + i * 0.25 }}
          />
        ))}
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF6A" stopOpacity="0" />
            <stop offset="50%" stopColor="#F0C987" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF6A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">

        {/* Step 1: "identifying subject..." tag — appears then fades */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, times: [0, 0.15, 0.75, 1], delay: 0.2 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 border-t-2 border-l-2 border-gold inline-block" />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold-bright border border-gold/40 px-2 py-1">
            identifying subject...
          </span>
        </motion.div>

        {/* Step 2: "MATCH FOUND" box — appears after step 1, then fades */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.9, times: [0, 0.2, 0.7, 1], delay: 1.4 }}
          className="border border-gold/50 px-4 py-2 inline-block mb-8"
        >
          <span className="font-mono text-xs tracking-wide text-gold-bright">
            ✓ MATCH FOUND — S. SUMAYYA ZAHID
          </span>
        </motion.div>

        {/* Step 3: Name types in after scan boxes are gone */}
        <div className="mb-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-bright min-h-[1.3em]">
            {name}
            {name.length < 19 && (
              <span className="inline-block w-[2px] h-[0.85em] bg-gold-bright ml-1 animate-pulse align-middle" />
            )}
          </h1>
        </div>

        {/* Step 4: Role tag */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 4.2 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6"
        >
          Software Engineer — AI &amp; Robotics
        </motion.p>

        {/* Step 5: Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 4.5 }}
          className="font-display text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ivory max-w-3xl mb-8"
        >
          Engineering intelligence,
          <br />
          <span className="italic text-gold-bright">crafted</span> with
          precision.
        </motion.h2>

        {/* Step 6: Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.8 }}
          className="max-w-xl text-ivory-dim text-base md:text-lg leading-relaxed font-light mb-10"
        >
          Building autonomous robotic systems, training machine learning
          models, and architecting full-stack web applications with
          Next.js, Node.js, and ROS&nbsp;2.
        </motion.p>

        {/* Step 7: Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.0 }}
          className="flex flex-wrap items-center gap-5"
        >
          <a
            href="#projects"
            className="px-7 py-3 border border-gold text-gold text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-base transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="/resume1.pdf"
            download
            className="px-7 py-3 text-ivory-dim text-sm tracking-[0.1em] uppercase hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ivory-dim/60">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}