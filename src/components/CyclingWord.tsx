"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type CyclingItem = { text: string; color: string; colorTo: string };

export default function CyclingWord({
  items,
  startDelay = 0,
  interval = 2400,
}: {
  items: CyclingItem[];
  startDelay?: number;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [started, items.length, interval]);

  const active = items[index];

  return (
    <span
      className="relative inline-grid align-baseline overflow-hidden"
      style={{ verticalAlign: "baseline" }}
    >
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {items.reduce((a, b) => (a.text.length >= b.text.length ? a : b)).text}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={active.text}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="col-start-1 row-start-1"
          style={{
            backgroundImage: `linear-gradient(90deg, ${active.color}, ${active.colorTo})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {active.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}