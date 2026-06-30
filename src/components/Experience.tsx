"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    role: "AI Engineer",
    org: "Arbotrix",
    period: "March 2026 — Present",
    location: "Onsite",
    points: [
      "Developed and trained ML/DL models (CNNs, neural networks) for intelligent robotics and AI-driven production applications.",
      "Engineered ROS 2-based robotic software systems covering node communication, sensor integration, and autonomous operations.",
      "Designed and deployed full-stack web applications with RESTful APIs, responsive frontends, and scalable backend architectures.",
      "Integrated trained AI models into live robotic workflows enabling real-time decision-making and adaptive system behaviour.",
    ],
  },
  {
    role: "AI Model Trainer",
    org: "TechKnock.tech",
    period: "March 2025 — Feb 2026",
    location: "Remote",
    points: [
      "Trained and optimised ML and DL models targeting high accuracy and low-latency real-time inference.",
      "Designed and managed end-to-end data pipelines: collection, cleaning, augmentation, and versioning for reproducible experiments.",
      "Conducted rigorous model evaluation and validation cycles to benchmark and improve reliability across diverse use cases.",
    ],
  },
  {
    role: "Software Quality Tester",
    org: "Firnas.tech",
    period: "2024 — 2025",
    location: "On-site",
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
  return (
    <section
      id="experience"
      className="py-28 md:py-36 border-t border-gold/10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="02 — Career" title="Experience" />

        <div className="relative">
          <div className="absolute left-0 md:left-[180px] top-2 bottom-2 w-px bg-gold/15" />

          <div className="space-y-16">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 pl-8 md:pl-0"
              >
              <div className="absolute left-[-5px] md:left-[175px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold" />

                <div className="md:text-right pr-3">
                  <p className="font-mono text-xs text-gold tracking-wide">
                    {exp.period}
                  </p>
                  <p className="text-xs text-ivory-dim/60 mt-1">
                    {exp.location}
                  </p>
                </div>

               <div className="md:pl-12">
                  <h3 className="font-display text-2xl md:text-3xl text-ivory">
                    {exp.role}
                  </h3>
                  <p className="text-gold-bright text-sm mt-1 mb-5">
                    {exp.org}
                  </p>
                  <ul className="space-y-3">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="text-ivory-dim text-[15px] leading-relaxed font-light flex gap-3"
                      >
                        <span className="text-gold/60 shrink-0">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
