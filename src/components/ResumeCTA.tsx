"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="py-16 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel px-7 py-9 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-3">
              My Resume
            </p>
            <h3 className="font-display text-2xl md:text-4xl text-ivory leading-snug max-w-xl">
              Want to know more{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                about my journey?
              </span>
            </h3>
            <p className="mt-3 text-ivory-dim/70">
              Explore my education, skills, projects, experience and certifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #a78bfa, #22d3ee)", color: "#0a0c12" }}
            >
              Preview Resume
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-gold/25 text-ivory hover:border-gold/50 transition-colors duration-300"
            >
              Download PDF
              <Download size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}