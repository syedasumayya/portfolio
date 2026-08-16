"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Eye,
  Cpu,
  Code2,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "AI & Machine Learning",
    subtitle: "Neural Networks & Deep Learning",
    level: 90,
    icon: Brain,
    color: "#a78bfa",
    colorTo: "#67e8f9",
    items: ["TensorFlow", "Keras", "CNNs"],
  },
  {
    title: "AI Research & LLM",
    subtitle: "LLM Integration & Prompting",
    level: 84,
    icon: Sparkles,
    color: "#f472b6",
    colorTo: "#c084fc",
    items: ["Claude API", "Researcher", "RAG"],
  },
  {
    title: "Computer Vision",
    subtitle: "Detection & Classification",
    level: 88,
    icon: Eye,
    color: "#22d3ee",
    colorTo: "#38bdf8",
    items: ["OpenCV", "Object Detection", "CV Pipelines"],
  },
  {
    title: "Robotics",
    subtitle: "Autonomous Systems",
    level: 85,
    icon: Cpu,
    color: "#fb923c",
    colorTo: "#fbbf24",
    items: ["ROS 2", "Sensor Fusion", "Control Systems"],
  },
  {
    title: "Web Development",
    subtitle: "Full Stack Engineering",
    level: 92,
    icon: Code2,
    color: "#60a5fa",
    colorTo: "#818cf8",
    items: ["Next.js", "Node.js", "FastAPI"],
  },
  {
    title: "Engineering Practice",
    subtitle: "SDLC & Version Control",
    level: 80,
    icon: GitBranch,
    color: "#34d399",
    colorTo: "#2dd4bf",
    items: ["Agile / Scrum", "Git / GitHub", "SDLC"],
  },
  {
    title: "QA Engineering",
    subtitle: "Testing & Reliability",
    level: 78,
    icon: ShieldCheck,
    color: "#fb7185",
    colorTo: "#f43f5e",
    items: ["Manual Testing", "API Testing", "Bug Tracking"],
  },
  {
    title: "Tools & Collaboration",
    subtitle: "Workflow & Platforms",
    level: 85,
    icon: Wrench,
    color: "#818cf8",
    colorTo: "#a78bfa",
    items: ["VS Code", "Postman", "Jira"],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="04 — Technical Arsenal" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => {
            const Icon = g.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.07 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -4 }}
                className="scan-frame glass-panel p-6 transition-[background-color,border-color,box-shadow] duration-300"
                style={{
                  borderColor: isHovered ? `${g.color}80` : undefined,
                  backgroundColor: isHovered ? `${g.color}0d` : undefined,
                  boxShadow: isHovered
                    ? `0 0 0 1px ${g.color}30, 0 12px 40px -12px ${g.color}55`
                    : undefined,
                }}
              >
                <span className="corner-tl" />
                <span className="corner-br" />

                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${g.color}1a`,
                      border: `1px solid ${g.color}40`,
                    }}
                  >
                    <Icon size={20} style={{ color: g.color }} />
                  </div>
                  <span
                    className="font-mono text-[11px] tracking-[0.2em] text-ivory-dim/40 transition-colors duration-300"
                    style={{ color: isHovered ? g.color : undefined }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-lg text-ivory mb-1">{g.title}</h3>
                <p className="text-xs text-ivory-dim/60 mb-5">{g.subtitle}</p>

                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim/50 transition-colors duration-300"
                    style={{ color: isHovered ? `${g.color}cc` : undefined }}
                  >
                    Proficiency
                  </span>
                  <span className="font-mono text-xs font-semibold tabular-nums" style={{ color: g.color }}>
                    {g.level}%
                  </span>
                </div>

                <div className="h-[3px] w-full bg-surface-2 mb-5 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.level}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${g.color}, ${g.colorTo})` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[10px] text-ivory-dim/80 bg-surface-2 border border-gold/10 px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}