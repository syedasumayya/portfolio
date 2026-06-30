"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "Keras",
      "Neural Networks",
      "CNNs",
      "Transfer Learning",
      "Hyperparameter Tuning",
      "Model Evaluation",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "OpenCV",
      "Object Detection",
      "Image Classification",
      "Facial Expression Recognition",
      "Real-Time Video Processing",
    ],
  },
  {
    title: "Robotics & Autonomous Systems",
    items: [
      "ROS 2",
      "Sensor Integration & Fusion",
      "Hardware-Software Interfacing",
      "Robot Simulation",
      "Control Systems",
    ],
  },
  {
    title: "Web Development",
    items: [
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
      "RESTful APIs",
      "Server-Side Rendering",
      "Database Integration",
    ],
  },
  {
    title: "Engineering",
    items: [
      "SDLC",
      "Agile / Scrum",
      "Version Control",
      "Git / GitHub",
    ],
  },{
    title: "QA Engineering",
    items: [
      "Manual Testing",
      "API Testing",
      "Test Case Design",
      "Bug Tracking & Reporting",
      "Regression Testing",
      "Postman",
      "Jira",
    ],
  },
  {
    title: "Tools & Collaboration",
    items: ["VS Code", "Postman", "Jira", "Google Colab", "Slack", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="04 — Toolkit" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <h3 className="font-display text-xl text-gold-bright mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-ivory-dim border border-gold/15 px-3 py-1.5 hover:border-gold/50 hover:text-ivory transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
