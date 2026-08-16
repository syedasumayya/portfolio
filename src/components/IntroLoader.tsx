"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "intro-seen";
const RADIUS = 92;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function alreadySeen() {
  if (typeof window === "undefined") return true;
  return window.sessionStorage.getItem(SESSION_KEY) === "1";
}

export default function IntroLoader() {
  const [seenOnMount] = useState(alreadySeen);
  const [visible, setVisible] = useState(!seenOnMount);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(seenOnMount);

  useEffect(() => {
    if (seenOnMount) return;

    let raf: number;
    const start = performance.now();
    const DURATION = 2200;

    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(finish, 300);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [seenOnMount]);

  function finish() {
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
    setTimeout(() => setDone(true), 700);
  }

  if (done) return null;

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-base flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 grid-mesh opacity-60" />

          <span className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold/50" />
          <span className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold/50" />
          <span className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold/50" />
          <span className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold/50" />

          <div className="relative w-[220px] h-[220px] mb-10 flex items-center justify-center">
            <motion.svg
              viewBox="0 0 220 220"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
              <circle
                cx="110"
                cy="110"
                r={RADIUS}
                fill="none"
                stroke="var(--color-ivory-dim)"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="3 7"
              />
            </motion.svg>

            <svg viewBox="0 0 220 220" className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="110"
                cy="110"
                r={RADIUS}
                fill="none"
                stroke="url(#loaderGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
              <defs>
                <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B7CFF" />
                  <stop offset="100%" stopColor="#FFB454" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative w-[130px] h-[130px] rounded-full overflow-hidden">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #a79bff 0%, #8b7cff 35%, #6b4fd6 60%, #0a0c12 78%)",
                  boxShadow: "0 0 60px 6px rgba(139,124,255,0.45)",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, transparent 55%, rgba(10,12,18,1) 56%)" }}
              />
            </div>
          </div>

          <p className="font-mono text-sm tracking-[0.35em] uppercase text-ivory-dim border-y border-gold/15 py-3 px-2 mb-4">
            System Initializing
          </p>

          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-10 flex items-center gap-3">
            <span>Intelligence</span>
            <span className="w-1 h-1 rounded-full bg-gold-bright" />
            <span>Precision</span>
            <span className="w-1 h-1 rounded-full bg-gold-bright" />
            <span>Engineering</span>
          </p>

          <div className="w-64 md:w-80 flex items-center gap-3">
            <div className="flex-1 h-px bg-gold/15 relative overflow-hidden">
              <motion.div className="absolute inset-y-0 left-0 bg-gold-bright" style={{ width: `${progress}%` }} />
              <motion.div
                className="absolute -top-[3px] w-2 h-2 rounded-full bg-gold-bright shadow-[0_0_8px_2px_rgba(167,155,255,0.7)]"
                style={{ left: `calc(${progress}% - 4px)` }}
              />
            </div>
            <span className="font-mono text-xs text-gold-bright tabular-nums w-10 text-right">{progress}%</span>
          </div>

          <button
            onClick={finish}
            className="mt-10 font-mono text-[10px] tracking-[0.25em] uppercase text-ivory-dim/60 hover:text-gold border border-gold/20 hover:border-gold/50 px-5 py-2.5 transition-colors duration-300"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}