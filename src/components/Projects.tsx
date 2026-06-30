"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "DODO Robot",
    role: "AI & Robotics Engineer",
    description:
      "Integrated AI models into robotic workflows for automation and decision-making, with sensor handling, robot communication, and control system implementation.",
    tags: ["ROS 2", "AI Integration", "Sensor Fusion"],
    image: "/dodo1.png",

  },
  {
    title: "Tera X — Autonomous Robot Hardware",
    role: "Hardware Engineer",
    description:
      "Designed and assembled the Tera X robotic hardware platform — wiring actuators, cameras, and proximity sensors, and implementing hardware-software interfacing with ROS 2 for autonomous navigation.",
    tags: ["ROS 2", "Hardware Design", "Embedded Systems"],
    image: "/tera-x.png",
  },
  {
    title: "Arbotrix — Company & Portfolio Website",
    role: "Full Stack Developer",
    description:
      "Designed and developed the official company website using Next.js, Node.js, and Tailwind CSS — server-side rendered for fast load times and SEO, with responsive UI components and backend API routes for dynamic content.",
    tags: ["Next.js", "Node.js", "Tailwind CSS", "SSR", "REST API"],
    image: "/arbotrix.png",
  },
  {
    title: "AI-Powered Emergency Response System",
    role: "AI & System Development — Final Year Project",
    description:
      "An AI-powered application detecting threats through voice emotion recognition and movement analysis, with real-time emergency identification and alert generation.",
    tags: ["Voice Emotion AI", "Real-Time Detection", "Python"],
    image: "/emergencysystem.png",
  },
  {
    title: "Emotion Detection — EffectNet Dataset",
    role: "AI & Model Trainer",
    description:
      "Trained emotion recognition models on facial expression data using computer vision and augmentation techniques, evaluating and optimizing for accuracy.",
    tags: ["Computer Vision", "TensorFlow", "Model Training"],
    image: "/dataset.jpg",
  },
  {
    title: "Al Rehman Welfare — Charity Management Web App",
    role: "Full Stack Developer",
    description:
      "A full-stack platform for donation tracking, volunteer coordination, and event management, with an admin dashboard for monitoring activity and generating reports.",
    tags: ["Full Stack", "Database Integration", "Admin Dashboard"],
    image: "/alrehman.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="03 — Selected Work" title="Projects" />

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  reversed ? "" : ""
                }`}
              >
                
                <div
                  className={`relative w-full aspect-video overflow-hidden border border-gold/15 group ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className={reversed ? "md:order-1" : "md:order-2"}>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-3">
                    {p.role}
                  </p>
                  <h3 className="font-display text-3xl md:text-[34px] text-ivory mb-5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-ivory-dim text-[15px] leading-relaxed font-light mb-6">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 border border-gold/20 text-ivory-dim/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/syedasumayya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ivory-dim hover:text-gold transition-colors duration-300"
          >
            <GithubIcon size={16} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}