"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-base/90 backdrop-blur-md border-b border-gold/10"
          : "bg-gradient-to-b from-base/80 via-base/40 to-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="font-display text-2xl tracking-wide text-ivory hover:text-gold transition-colors">
          Syeda <span className="text-gold">S</span>umayya
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 relative group ${
                  isActive(l.href) ? "text-gold" : "text-ivory-dim hover:text-gold"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${
                  isActive(l.href) ? "w-full" : "w-0"
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-gold flex flex-col gap-1.5 w-7">
          <span className={`h-px bg-gold transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`h-px bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-gold transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-8 bg-base/95 backdrop-blur-md border-b border-gold/10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-[0.12em] uppercase transition-colors ${
                  isActive(l.href) ? "text-gold" : "text-ivory-dim hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}