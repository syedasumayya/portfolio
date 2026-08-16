"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">06 — Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory text-balance">
            Let&apos;s build something <span className="italic text-gold-bright">intelligent</span> together.
          </h2>
          <p className="mt-6 text-ivory-dim font-light text-lg">
            Open to opportunities in AI engineering, robotics, and full-stack development.
          </p>
          <Link href="/contact" className="mt-10 inline-block px-9 py-4 border border-gold text-gold text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-base transition-all duration-300">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}