// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import SectionHeading from "./SectionHeading";

// const focus = [
//   "Robotics — ROS 2 & Autonomous Systems",
//   "Machine Learning & Deep Learning",
//   "Computer Vision",
//   "Full-Stack Web Development",
//   "Software Quality Engineer",
// ];

// export default function About() {
//   return (
//     <section id="about" className="py-28 md:py-36 border-t border-gold/10">
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <SectionHeading eyebrow="01 — Profile" title="About" />

//         <div className="grid md:grid-cols-5 gap-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7 }}
//             className="md:col-span-3"
//           >
//             <p className="text-lg md:text-xl text-ivory-dim leading-relaxed font-light">
//               I&apos;m a results-driven Software Engineer with comprehensive
//               experience spanning full-stack web development, intelligent
//               automation, and distributed robotic software systems. My work
//               sits at the intersection of artificial intelligence and
//               physical systems — training neural networks for real-time
//               decision-making, then engineering the ROS&nbsp;2 architecture
//               that lets a robot act on them.
//             </p>
//             <p className="mt-6 text-lg md:text-xl text-ivory-dim leading-relaxed font-light">
//               I bring the same precision to the web: architecting scalable
//               applications and responsive interfaces with Next.js, Node.js,
//               and Tailwind CSS, grounded in Agile practice and the full
//               software development lifecycle.
//             </p>

//             <div className="mt-10 grid grid-cols-2 gap-4">
//               {focus.map((f) => (
//                 <div
//                   key={f}
//                   className="flex items-start gap-3 text-sm text-ivory-dim"
//                 >
//                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
//                   {f}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//          <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//             className="md:col-span-2"
//           >
//             <div className="relative w-full h-full min-h-[480px] border border-gold/15 overflow-hidden">
//               <Image
//                 src="/profile.jpeg"
//                 alt="Syeda Sumayya Zahid"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function BookOpenIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sumayya-zahid11", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/syedasumayya", icon: GithubIcon },
  { label: "Blog", href: "https://www.blogger.com/profile/16214197526729610194", icon: BookOpenIcon },
];

const focus = [
  "Robotics — ROS 2 & Autonomous Systems",
  "Machine Learning & Deep Learning",
  "Computer Vision",
  "Full-Stack Web Development",
  "Software Quality Engineer",
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="01 — Profile" title="About" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-lg md:text-xl text-ivory-dim leading-relaxed font-light">
              I&apos;m a results-driven Software Engineer with comprehensive
              experience spanning full-stack web development, intelligent
              automation, and distributed robotic software systems. My work
              sits at the intersection of artificial intelligence and
              physical systems — training neural networks for real-time
              decision-making, then engineering the ROS&nbsp;2 architecture
              that lets a robot act on them.
            </p>
            <p className="mt-6 text-lg md:text-xl text-ivory-dim leading-relaxed font-light">
              I bring the same precision to the web: architecting scalable
              applications and responsive interfaces with Next.js, Node.js,
              and Tailwind CSS, grounded in Agile practice and the full
              software development lifecycle.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {focus.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm text-ivory-dim">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* Social icon links — under the focus list */}
            <div className="mt-12 flex gap-10">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-ivory-dim hover:text-gold transition-colors duration-300 group"
                >
                  <l.icon size={20} />
                  <span className="text-[11px] font-mono tracking-wide uppercase opacity-70 group-hover:opacity-100">
                    {l.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-2"
          >
            <div className="relative w-full h-full min-h-[480px] border border-gold/15 overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Syeda Sumayya Zahid"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}