"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Brain, ShieldCheck, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    role: "AI Engineer",
    org: "Arbotrix",
    period: "March 2026 — Present",
    location: "Onsite",
    current: true,
    icon: Cpu,
    color: "#a78bfa",
    summary:
      "Developing AI/ML models and ROS 2 robotic systems, integrating real-time decision-making into production robotics.",
    tags: ["ROS 2", "CNNs", "Full-Stack AI"],
    points: [
      "Developed and trained ML/DL models (CNNs, neural networks) for intelligent robotics and AI-driven production applications.",
      "Engineered ROS 2-based robotic software systems covering node communication, sensor integration, and autonomous operations.",
      "Designed and deployed full-stack web applications with RESTful APIs, responsive frontends, and scalable backend architectures.",
      "Integrated trained AI models into live robotic workflows enabling real-time decision-making and adaptive system behaviour.",
      "Performed end-to-end dataset preprocessing, model evaluation, hyperparameter tuning, and performance optimisation.",
      "Contributed to robotics software debugging, hardware-software interfacing, and system-level testing.",
      "Collaborated with cross-functional engineering teams to architect and deliver scalable AI-powered robotics solutions.",
      "Participated in R&D initiatives for next-generation AI, automation, and autonomous robotics technologies.",
    ],
  },
  {
    role: "AI Model Trainer",
    org: "TechKnock.tech",
    period: "March 2025 — Feb 2026",
    location: "Remote",
    current: false,
    icon: Brain,
    color: "#22d3ee",
    summary:
      "Trained and optimized ML/DL models with end-to-end data pipelines for high-accuracy, low-latency inference.",
    tags: ["Model Training", "Data Pipelines", "MLOps"],
    points: [
      "Trained and optimised ML and DL models targeting high accuracy and low-latency real-time inference.",
      "Designed and managed end-to-end data pipelines: collection, cleaning, augmentation, and versioning for reproducible experiments.",
      "Conducted rigorous model evaluation and validation cycles to benchmark and improve reliability across diverse use cases.",
      "Collaborated with autonomous systems teams to integrate trained models into robotic and software application workflows.",
    ],
  },
  {
    role: "Software Quality Tester",
    org: "Firnas.tech",
    period: "2024 — 2025",
    location: "On-site",
    current: false,
    icon: ShieldCheck,
    color: "#60a5fa",
    summary:
      "Executed comprehensive manual and API testing across web and mobile applications throughout the SDLC/STLC.",
    tags: ["Manual Testing", "SDLC", "STLC"],
    points: [
      "Designed and executed comprehensive manual test cases and test scenarios to ensure software functionality, usability, and reliability.",
      "Identified, documented, tracked, and verified software defects using bug-tracking tools, collaborating closely with developers to ensure timely resolution.",
      "Performed functional, regression, smoke, integration, and user acceptance testing (UAT) across web and mobile applications.",
      "Developed and maintained detailed test documentation, including test plans, test cases, bug reports, and test execution reports.",
      "Validated software against business requirements and technical specifications to ensure high-quality product releases.",
      "Collaborated with developers, UI/UX designers, and product managers throughout the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC).",
    ],
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="02 — Career" title="Experience" />

        <div className="relative pl-10 md:pl-12">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px"
            style={{
              background: `linear-gradient(to bottom, ${experience.map((e) => e.color).join(", ")})`,
              opacity: 0.35,
            }}
          />

          <div className="space-y-6">
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              const isHovered = hovered === i;
              const isOpen = expanded === i;
              const active = exp.current || isHovered;

              return (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  <span
                    className="absolute -left-10 md:-left-12 top-7 w-3 h-3 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: exp.current ? exp.color : "transparent",
                      border: `2px solid ${exp.color}`,
                      boxShadow: exp.current ? `0 0 14px 3px ${exp.color}80` : "none",
                    }}
                  />

                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="scan-frame glass-panel p-6 cursor-pointer transition-[background-color,border-color,box-shadow] duration-300"
                    style={{
                      borderColor: active ? `${exp.color}70` : undefined,
                      backgroundColor: active ? `${exp.color}0a` : undefined,
                      boxShadow: active
                        ? `0 0 0 1px ${exp.color}25, 0 16px 44px -18px ${exp.color}55`
                        : undefined,
                    }}
                  >
                    <span className="corner-tl" />
                    <span className="corner-br" />

                    <div className="flex flex-col md:flex-row md:items-start gap-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${exp.color}1a`, border: `1px solid ${exp.color}40` }}
                      >
                        <Icon size={22} style={{ color: exp.color }} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="font-display text-xl md:text-2xl text-ivory">{exp.role}</h3>
                          <span className="font-mono text-xs text-ivory-dim/50 tracking-wide">{exp.period}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mt-2 mb-4">
                          <span className="text-sm" style={{ color: exp.color }}>{exp.org}</span>
                          <span
                            className="font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border"
                            style={{ borderColor: `${exp.color}60`, color: exp.color }}
                          >
                            {exp.current ? "Currently Working" : "Completed"}
                          </span>
                          <span className="text-xs text-ivory-dim/40">{exp.location}</span>
                        </div>

                        <p className="text-ivory-dim text-sm leading-relaxed font-light mb-4">{exp.summary}</p>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-[10px] text-ivory-dim/80 bg-surface-2 border border-gold/10 px-2.5 py-1 rounded-full"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpanded(isOpen ? null : i);
                            }}
                            className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-ivory-dim/60 hover:text-ivory transition-colors duration-300 shrink-0"
                          >
                            {isOpen ? "Hide details" : "Full details"}
                            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                              <ChevronDown size={13} />
                            </motion.span>
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-5 pt-5 border-t border-gold/10 space-y-2.5">
                                {exp.points.map((p) => (
                                  <li key={p} className="text-ivory-dim text-[14px] leading-relaxed font-light flex gap-3">
                                    <span className="shrink-0" style={{ color: `${exp.color}90` }}>—</span>
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}