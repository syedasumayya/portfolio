"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ProjectsQuote() {
  return (
    <section id="projects-quote" className="py-24 md:py-32 border-t border-gold/10">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <Quote
            size={36}
            className="mx-auto mb-6 opacity-40"
            style={{ color: "#a78bfa" }}
          />
          <p className="font-display text-2xl md:text-3xl leading-relaxed text-ivory text-balance">
            Every model I train and every robot I build starts with the same
            question —{" "}
            <span
              className="italic"
              style={{
                backgroundImage: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              what if this could think a little more like us?
            </span>
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.25em] uppercase text-ivory-dim/50">
            — Syeda Sumayya Zahid
          </p>
        </motion.div>
      </div>
    </section>
  );
}