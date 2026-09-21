// "use client";

// import { motion } from "framer-motion";
// import SectionHeading from "./SectionHeading";

// const PALETTE = [
//   { color: "#a78bfa", colorTo: "#67e8f9" },
//   { color: "#60a5fa", colorTo: "#818cf8" },
// ];

// const education = [
//   {
//     degree: "BS Software Engineering",
//     school: "COMSATS University Islamabad, Abbottabad Campus",
//     period: "2022 — 2026",
//     grade: "Grade: A+",
//     activities: ["Senior Advisor, Software Society", "Membership Officer, IET", "Quiz Competition Winner"],
//   },
//   {
//     degree: "FSc (Pre-Engineering)",
//     school: "Islamia College, Peshawar",
//     period: "2019 — 2021",
//     grade: "Grade: A+",
//     activities: ["President, College Society", "Badminton Player", "Best Prefect"],
//   },
// ];

// export default function Education() {
//   return (
//     <section id="education" className="py-28 md:py-36 border-t border-gold/10">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <SectionHeading eyebrow="05 — Academics" title="Education" />
//         <div className="grid md:grid-cols-2 gap-8">
//           {education.map((e, i) => {
//             const { color, colorTo } = PALETTE[i % PALETTE.length];
//             return (
//               <motion.div
//                 key={e.degree}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 className="scan-frame glass-panel overflow-hidden transition-all duration-300"
//                 style={{ borderColor: `${color}30` }}
//                 onMouseEnter={(e2) => {
//                   e2.currentTarget.style.borderColor = `${color}70`;
//                   e2.currentTarget.style.boxShadow = `0 16px 44px -18px ${color}55`;
//                 }}
//                 onMouseLeave={(e2) => {
//                   e2.currentTarget.style.borderColor = `${color}30`;
//                   e2.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <span className="corner-tl" />
//                 <span className="corner-br" />

//                 <div className="p-8">
//                   <p className="font-mono text-xs tracking-wide mb-3" style={{ color }}>
//                     {e.period}
//                   </p>
//                   <h3 className="font-display text-2xl text-ivory mb-2">{e.degree}</h3>
//                   <p className="text-ivory-dim text-sm mb-1">{e.school}</p>
//                   <p className="text-sm font-medium" style={{ color: colorTo }}>
//                     {e.grade}
//                   </p>
//                 </div>

//                 <div
//                   className="border-t px-8 py-8"
//                   style={{
//                     borderColor: `${color}20`,
//                     background: `linear-gradient(to bottom, ${color}0a, transparent)`,
//                   }}
//                 >
//                   <p
//                     className="font-mono text-[10px] tracking-[0.25em] uppercase mb-5"
//                     style={{ color: `${color}90` }}
//                   >
//                     Activities &amp; Achievements
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     {e.activities.map((a) => (
//                       <span
//                         key={a}
//                         className="inline-flex items-center gap-2.5 text-ivory text-sm bg-surface-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
//                         style={{
//                           borderColor: `${color}30`,
//                           boxShadow: `0 0 16px -4px ${color}40`,
//                         }}
//                       >
//                         <span
//                           className="w-1.5 h-1.5 rounded-full"
//                           style={{ backgroundColor: colorTo, boxShadow: `0 0 8px 2px ${colorTo}70` }}
//                         />
//                         {a}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PALETTE = [
  { color: "#a78bfa", colorTo: "#67e8f9" },
  { color: "#60a5fa", colorTo: "#818cf8" },
];

const education = [
  {
    degree: "BS Software Engineering",
    school: "COMSATS University Islamabad, Abbottabad Campus",
    period: "2022 — 2026",
    grade: "Grade: A+",
    activities: ["Senior Advisor, Software Society", "Membership Officer, IET", "Quiz Competition Winner"],
  },
  {
    degree: "FSc (Pre-Engineering)",
    school: "Islamia College, Peshawar",
    period: "2019 — 2021",
    grade: "Grade: A+",
    activities: ["President, College Society", "Badminton Player", "Best Prefect"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="05 — Academics" title="Education" />
        <div className="space-y-6">
          {education.map((e, i) => {
            const { color, colorTo } = PALETTE[i % PALETTE.length];
            return (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="scan-frame glass-panel overflow-hidden transition-all duration-300"
                style={{ borderColor: `${color}30` }}
                onMouseEnter={(e2) => {
                  e2.currentTarget.style.borderColor = `${color}70`;
                  e2.currentTarget.style.boxShadow = `0 16px 44px -18px ${color}55`;
                }}
                onMouseLeave={(e2) => {
                  e2.currentTarget.style.borderColor = `${color}30`;
                  e2.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="corner-tl" />
                <span className="corner-br" />

                <div className="grid md:grid-cols-[1fr_1.5fr]">
                  {/* left: degree info */}
                  <div className="p-8 md:p-9">
                    <p className="font-mono text-xs tracking-wide mb-3" style={{ color }}>
                      {e.period}
                    </p>
                    <h3 className="font-display text-2xl md:text-[28px] text-ivory mb-2">
                      {e.degree}
                    </h3>
                    <p className="text-ivory-dim text-sm mb-1">{e.school}</p>
                    <p className="text-sm font-medium" style={{ color: colorTo }}>
                      {e.grade}
                    </p>
                  </div>

                  {/* right: activities, side by side on wide screens */}
                  <div
                    className="border-t md:border-t-0 md:border-l px-8 py-8 md:p-9 flex flex-col justify-center"
                    style={{
                      borderColor: `${color}20`,
                      background: `linear-gradient(to right, ${color}0a, transparent)`,
                    }}
                  >
                    <p
                      className="font-mono text-[10px] tracking-[0.25em] uppercase mb-5"
                      style={{ color: `${color}90` }}
                    >
                      Activities &amp; Achievements
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {e.activities.map((a) => (
                        <span
                          key={a}
                          className="inline-flex items-center gap-2.5 text-ivory text-sm bg-surface-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
                          style={{
                            borderColor: `${color}30`,
                            boxShadow: `0 0 16px -4px ${color}40`,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: colorTo, boxShadow: `0 0 8px 2px ${colorTo}70` }}
                          />
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}