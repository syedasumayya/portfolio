"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function Projects({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {showHeading && <SectionHeading eyebrow="03 — Selected Work" title="Projects" />}

        <div className="grid md:grid-cols-2 gap-8">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/projects/${p.slug}`} className="group block">
                <div className="scan-frame relative w-full aspect-video overflow-hidden glass-panel">
                  <span className="corner-tl" />
                  <span className="corner-br" />
                  <div className="absolute inset-0">
                    <ProjectVisual project={p} />
                  </div>
                  <div className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.2em] text-gold-bright bg-base/70 backdrop-blur-sm px-2 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/70">{p.role}</p>
                    <span className="font-mono text-[11px] text-ivory-dim/50">{p.year}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-[26px] text-ivory mt-2 mb-3 leading-snug group-hover:text-gold-bright transition-colors duration-300">
                    {p.title} {p.titleAccent}
                  </h3>
                  <p className="text-ivory-dim text-[14px] leading-relaxed font-light mb-4 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 border border-gold/20 text-ivory-dim/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && projects.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-ivory-dim hover:text-gold-bright transition-colors duration-300 border border-gold/20 px-6 py-3"
            >
              View All {projects.length} Projects →
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}