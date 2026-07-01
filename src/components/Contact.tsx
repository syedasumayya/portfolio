"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, BookOpen } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumayya-zahid11",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/syedasumayya",
    icon: GithubIcon,
  },
  {
    label: "Blog",
    href: "https://www.blogger.com/profile/16214197526729610194",
    icon: BookOpen,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-4">
            06 — Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory text-balance">
            Let&apos;s build something{" "}
            <span className="italic text-gold-bright">intelligent</span>{" "}
            together.
          </h2>
          <p className="mt-6 text-ivory-dim font-light text-lg">
            Open to opportunities in AI engineering, robotics, and full-stack
            development. Reach out — I&apos;d love to hear about your project.
          </p>
          <form
  action="https://formspree.io/f/mzdljejn"
  method="POST"
  className="mt-10 w-full max-w-lg mx-auto flex flex-col gap-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="bg-surface border border-gold/20 text-ivory placeholder:text-ivory-dim/40 px-5 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="bg-surface border border-gold/20 text-ivory placeholder:text-ivory-dim/40 px-5 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="bg-surface border border-gold/20 text-ivory placeholder:text-ivory-dim/40 px-5 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors resize-none"
  />
  <button
    type="submit"
    className="px-9 py-4 border border-gold text-gold text-sm tracking-[0.1em] uppercase hover:bg-gold hover:text-base transition-all duration-300"
  >
    Send Message
  </button>
</form>

          <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-ivory-dim">
            <span className="inline-flex items-center gap-2">
              <Mail size={15} className="text-gold" />
              syedasumayya764@gmail.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={15} className="text-gold" />
              +329-099-2077
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-gold" />
              Islamabad, Pakistan
            </span>
          </div>

          <div className="mt-10 flex justify-center gap-8">
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

        <p className="mt-24 text-center text-xs text-ivory-dim/40 font-mono tracking-wide">
          © {new Date().getFullYear()} Syeda Sumayya Zahid. Designed &amp;
          built with care.
        </p>
      </div>
    </section>
  );
}
