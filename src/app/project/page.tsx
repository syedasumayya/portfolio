import type { Metadata } from "next";
import ProjectsDeck from "@/components/ProjectsDeck";

export const metadata: Metadata = {
  title: "Projects — Syeda Sumayya Zahid",
  description:
    "AI, robotics, and full-stack projects by Syeda Sumayya Zahid — from a flagship enterprise platform to autonomous robot perception and CNN-powered diagnostic web apps.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative z-0 pt-40 pb-16 max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Archive
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl text-balance">
          Everything I&apos;ve <span className="italic text-gold-bright">built</span>.
        </h1>
        <p className="mt-6 text-ivory-dim font-light text-lg max-w-xl">
          Robotics, machine learning, and full-stack systems — click through
          each one.
        </p>
      </section>

      <ProjectsDeck />
    </main>
  );
}