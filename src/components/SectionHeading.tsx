"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-ivory">
        {title}
      </h2>
      <div className="mt-5 w-16 h-px bg-gold" />
    </motion.div>
  );
}
