"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Code2, Eye, Sparkles, Fingerprint } from "lucide-react";

export const ORB_ACTIVATE_EVENT = "hero-orb-activate";

const ORBITERS = [
  { Icon: Brain, color: "#a78bfa", radius: 130, duration: 22, startAngle: 0 },
  { Icon: Eye, color: "#22d3ee", radius: 130, duration: 22, startAngle: 72 },
  { Icon: Cpu, color: "#f472b6", radius: 130, duration: 22, startAngle: 144 },
  { Icon: Code2, color: "#60a5fa", radius: 130, duration: 22, startAngle: 216 },
  { Icon: Sparkles, color: "#34d399", radius: 130, duration: 22, startAngle: 288 },
];

export default function HeroConstellation() {
  const [pulsing, setPulsing] = useState(false);

  function handlePulse() {
    if (pulsing) return;
    setPulsing(true);
    window.dispatchEvent(new CustomEvent(ORB_ACTIVATE_EVENT));
    setTimeout(() => setPulsing(false), 1300);
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <AnimatePresence>
        {pulsing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.16, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 65% 45%, rgba(167,139,250,0.9) 0%, rgba(139,124,255,0.35) 35%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] mx-auto select-none">
        <motion.div
          className="absolute inset-0 rounded-full border border-gold/10"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {ORBITERS.map((o, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-left"
              style={{
                width: o.radius,
                height: 1,
                transform: `rotate(${o.startAngle}deg)`,
                background: `linear-gradient(90deg, ${o.color}55, transparent)`,
              }}
            />
          ))}
        </motion.div>

        {ORBITERS.map((o, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-9 h-9 -ml-[18px] -mt-[18px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: pulsing ? o.duration / 2.5 : o.duration,
              repeat: Infinity,
              ease: "linear",
              delay: -(o.startAngle / 360) * o.duration,
            }}
            style={{ transformOrigin: "50% 50%" }}
          >
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                left: o.radius,
                background: `${o.color}1a`,
                border: `1px solid ${o.color}55`,
                boxShadow: `0 0 20px -4px ${o.color}80`,
              }}
            >
              <o.Icon size={16} style={{ color: o.color }} />
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {pulsing &&
            [0, 0.15, 0.3].map((delay, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.6, opacity: 0.6 }}
                animate={{ scale: 3.4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay, ease: "easeOut" }}
                className="absolute inset-[30%] rounded-full border-2 border-gold-bright pointer-events-none"
              />
            ))}
        </AnimatePresence>

        <button
          onClick={handlePulse}
          aria-label="Pulse network"
          className="absolute inset-[30%] rounded-full flex items-center justify-center cursor-pointer group"
          style={{
            background: "linear-gradient(140deg, #1a1830, #0a0c12)",
            border: "1px solid rgba(167,139,250,0.35)",
            boxShadow: pulsing ? "0 0 70px 6px rgba(167,139,250,0.5)" : "0 0 45px 2px rgba(167,139,250,0.25)",
            transition: "box-shadow 0.5s ease",
          }}
        >
          <motion.div
            animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.06, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Fingerprint
              size={40}
              strokeWidth={1.4}
              style={{ color: "#a78bfa", filter: "drop-shadow(0 0 10px rgba(167,139,250,0.6))" }}
            />
          </motion.div>
          <span className="absolute inset-0 rounded-full ring-1 ring-transparent group-hover:ring-gold-bright/40 transition-all duration-300" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {pulsing ? (
          <motion.p
            key="syncing"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-bright"
          >
            ● Syncing network
          </motion.p>
        ) : (
          <motion.button
            key="prompt"
            onClick={handlePulse}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-ivory-dim/70 hover:text-gold-bright transition-colors duration-300"
          >
            ○ Click to activate
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}