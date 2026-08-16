const links = [
  { label: "LNKDN", href: "https://www.linkedin.com/in/sumayya-zahid11" },
  { label: "GITHUB", href: "https://github.com/syedasumayya" },
  { label: "MAIL", href: "mailto:syedasumayya764@gmail.com" },
  { label: "BLOG", href: "https://www.blogger.com/profile/16214197526729610194" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-xl text-ivory">
          Syeda <span className="text-gold">S</span>umayya
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
           <a 
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.15em] text-ivory-dim hover:text-gold transition-colors duration-300"
            >
              {l.label}<span className="ml-1">↗</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-ivory-dim/40 font-mono tracking-wide">
          © {new Date().getFullYear()} Syeda Sumayya Zahid
        </p>
      </div>
    </footer>
  );
}