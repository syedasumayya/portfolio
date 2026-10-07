"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Workflow,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const PALETTE = [
  { color: "#a78bfa", colorTo: "#67e8f9" },
  { color: "#f472b6", colorTo: "#c084fc" },
  { color: "#60a5fa", colorTo: "#818cf8" },
  { color: "#34d399", colorTo: "#22d3ee" },
];

const steps = [
  {
    icon: Search,
    title: "Understand the problem",
    description:
      "I clarify the real-world need, the data available, success metrics, and constraints — before touching a model or a line of code.",
  },
  {
    icon: Workflow,
    title: "Design the system",
    description:
      "I architect the pipeline: model choice, ROS 2 node structure, or API design — whatever the problem actually needs, not a default template.",
  },
  {
    icon: Code2,
    title: "Build & train",
    description:
      "I implement the backend, train and evaluate the models, wire up the robotics stack, and build the frontend that puts it in front of real users.",
  },
  {
    icon: Rocket,
    title: "Test, deploy & hand off",
    description:
      "I validate against real data, fix the rough edges, document what I built, and ship it — production-ready, not just a notebook demo.",
  },
];

const deliverables = [
  { title: "Fast clarity", desc: "You know what's being built, why it works, and what's next." },
  { title: "Research-backed engineering", desc: "Decisions grounded in real evaluation, not guesswork." },
  { title: "Production-ready delivery", desc: "Code that's documented, tested, and easy to maintain." },
];

const bestFit = [
  "AI model training & deployment",
  "Robotics software (ROS 2)",
  "Computer vision pipelines",
  "LLM integration & RAG",
  "Full-stack web applications",
  "QA & systematic testing",
];

export default function HowIWork() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10 mb-14 items-end"
        >
          <div>
            <p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: PALETTE[0].color }}
            >
              How I Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-ivory text-balance">
              A practical process that turns ideas into{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${PALETTE[0].color}, ${PALETTE[3].colorTo})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                intelligent systems.
              </span>
            </h2>
          </div>
          <p className="text-ivory-dim/70 leading-relaxed">
            Clients and collaborators stay confident when they understand how
            the work moves forward. My process is simple: understand the
            problem, design the system, build and train it properly, then
            ship something that actually holds up in production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* left: process steps */}
          <div className="space-y-5">
            {steps.map((s, i) => {
              const { color } = PALETTE[i % PALETTE.length];
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="scan-frame glass-panel p-6 transition-all duration-300"
                  style={{ borderColor: `${color}25` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}60`;
                    e.currentTarget.style.boxShadow = `0 14px 36px -18px ${color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}25`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="corner-tl" />
                  <span className="corner-br" />
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}1a`, border: `1px solid ${color}40` }}
                    >
                      <Icon size={19} style={{ color }} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="font-mono text-xs" style={{ color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg text-ivory">{s.title}</h3>
                      </div>
                      <p className="text-sm text-ivory-dim/70 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* right: what you get + best fit */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="scan-frame glass-panel p-7"
              style={{ borderColor: `${PALETTE[1].color}25` }}
            >
              <span className="corner-tl" />
              <span className="corner-br" />
              <div className="flex items-center justify-between mb-1">
                <p
                  className="font-mono text-xs tracking-[0.2em] uppercase"
                  style={{ color: PALETTE[1].color }}
                >
                  Project Readiness
                </p>
                <span
                  className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full border"
                  style={{ borderColor: `${PALETTE[3].color}50`, color: PALETTE[3].color }}
                >
                  Reliable
                </span>
              </div>
              <h3 className="font-display text-xl text-ivory mb-5">What you get from me</h3>

              <div className="space-y-3">
                {deliverables.map((d) => (
                  <div
                    key={d.title}
                    className="px-4 py-3.5 rounded-lg border border-gold/10 bg-surface-2"
                  >
                    <p className="text-sm font-medium text-ivory">{d.title}</p>
                    <p className="text-xs text-ivory-dim/60 mt-1">{d.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="scan-frame glass-panel p-7"
              style={{ borderColor: `${PALETTE[2].color}25` }}
            >
              <span className="corner-tl" />
              <span className="corner-br" />
              <h3 className="font-display text-xl text-ivory mb-5">Best fit projects</h3>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {bestFit.map((b, i) => {
                  const { color } = PALETTE[i % PALETTE.length];
                  return (
                    <span
                      key={b}
                      className="text-sm px-4 py-2 rounded-full border text-ivory-dim"
                      style={{ borderColor: `${color}30`, backgroundColor: `${color}0a` }}
                    >
                      {b}
                    </span>
                  );
                })}
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-transform duration-300 hover:scale-[1.02]"
                style={{ background: `linear-gradient(90deg, ${PALETTE[0].color}, ${PALETTE[2].color})`, color: "#0a0c12" }}
              >
                Discuss a project
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 glass-panel px-7 py-9 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-7"
          style={{ borderColor: `${PALETTE[0].color}25` }}
        >
          <div>
            <p
              className="font-mono text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: PALETTE[0].color }}
            >
              Ready When You Are
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ivory leading-snug max-w-xl mb-4">
              Need an engineer who can handle AI, robotics, and full-stack
              development?
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["3+ years experience", "11+ projects shipped", "AI + Robotics + Full-Stack"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-gold/15 text-ivory-dim/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
  href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            style={{ background: `linear-gradient(90deg, ${PALETTE[0].color}, ${PALETTE[3].colorTo})`, color: "#0a0c12" }}
        
         >
  Start a Conversation
  <ArrowRight className="h-4 w-4" />
</a>
        </motion.div>
      </div>
    </section>
  );
}