"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "BS Software Engineering",
    school: "COMSATS University Islamabad, Abbottabad Campus",
    period: "2022 — 2026",
    grade: "Grade: A+",
    activities: [
      "Senior Advisor, Software Society",
      "Membership Officer, IET",
      "Quiz Competition Winner",
    ],
  },
  {
    degree: "FSc (Pre-Engineering)",
    school: "Islamia College, Peshawar",
    period: "2019 — 2021",
    grade: "Grade: A+",
    activities: [
      "President, College Society",
      "Badminton Player",
      "Best Prefect",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 md:py-36 border-t border-gold/10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="05 — Academics" title="Education" />

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-gold/15 bg-surface hover:border-gold/35 transition-colors duration-300 overflow-hidden"
            >
              <div className="p-8">
                <p className="font-mono text-xs text-gold tracking-wide mb-3">
                  {e.period}
                </p>
                <h3 className="font-display text-2xl text-ivory mb-2">
                  {e.degree}
                </h3>
                <p className="text-ivory-dim text-sm mb-1">{e.school}</p>
                <p className="text-gold-bright text-sm">{e.grade}</p>
              </div>

             <div className="border-t border-gold/15 px-8 py-8 bg-gradient-to-b from-surface-2 to-surface">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-5">
                  Activities &amp; Achievements
                </p>
                <div className="flex flex-wrap gap-3">
                  {e.activities.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-2.5 text-ivory text-sm bg-surface-2 px-4 py-2.5 rounded-full border border-gold/25 shadow-[0_0_16px_-2px_rgba(212,175,106,0.3)] hover:shadow-[0_0_24px_-2px_rgba(212,175,106,0.55)] hover:border-gold/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-bright shadow-[0_0_8px_2px_rgba(227,196,135,0.7)]" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
        
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
