"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

const PALETTE = ["#a78bfa", "#f472b6", "#60a5fa", "#34d399", "#fb923c", "#22d3ee"];

// repos already featured in the Projects section — skip these here to avoid duplicates
const EXCLUDE = new Set([
  "gridcore360",
  "graphcite-rag-system",
  "medipredict",
  "dodobot-perception",
  "syedasumayya",
  "portfolio",
]);

// keywords that flag a repo as an AI/ML project, so these surface first
const AI_KEYWORDS = [
  "ai", "ml", "rag", "agent", "llm", "cnn", "neural", "predict",
  "vision", "gpt", "model", "learning", "nlp", "gan", "bot",
];

function isAiRepo(repo: Repo) {
  const text = `${repo.name} ${repo.description ?? ""}`.toLowerCase();
  return AI_KEYWORDS.some((k) => text.includes(k));
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/users/syedasumayya/repos?sort=updated&per_page=100")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (cancelled) return;
        const filtered = data
          .filter((r) => !EXCLUDE.has(r.name.toLowerCase()))
          .sort((a, b) => {
            const aiDiff = Number(isAiRepo(b)) - Number(isAiRepo(a));
            if (aiDiff !== 0) return aiDiff;
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 6);
        setRepos(filtered);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="py-28 md:py-36 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="06 — GitHub" title="Live Repositories" />
        <p className="text-ivory-dim/70 -mt-8 mb-10 max-w-xl">
          A live view of public repositories from my GitHub profile.
        </p>

        {error ? (
          <p className="text-ivory-dim/60 text-sm">
            Couldn&apos;t load repositories right now — check them directly on{" "}
            <a
              href="https://github.com/syedasumayya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-bright underline"
            >
              GitHub
            </a>
            .
          </p>
        ) : !repos ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="glass-panel h-40 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => {
              const color = PALETTE[i % PALETTE.length];
              return (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="scan-frame glass-panel p-6 flex flex-col justify-between transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${color}55`;
                    e.currentTarget.style.boxShadow = `0 12px 32px -14px ${color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <span className="corner-tl" />
                  <span className="corner-br" />

                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color, boxShadow: `0 0 8px 2px ${color}80` }}
                      />
                      <ArrowUpRight size={16} className="text-ivory-dim/50" />
                    </div>
                    <h3 className="font-display text-lg text-ivory mb-1.5">{repo.name}</h3>
                    <p className="text-sm text-ivory-dim/70 leading-relaxed line-clamp-2">
                      {repo.description || "Public GitHub repository."}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gold/10">
                    {repo.language && (
                      <span className="font-mono text-[11px] text-ivory-dim/60">{repo.language}</span>
                    )}
                    <span className="flex items-center gap-1 font-mono text-[11px] text-ivory-dim/60">
                      <Star size={11} /> {repo.stargazers_count}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/syedasumayya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.15em] uppercase text-ivory border border-gold/20 rounded-full px-7 py-3.5 transition-all duration-300 hover:border-[#a78bfa]/60 hover:shadow-[0_0_24px_-6px_rgba(167,139,250,0.6)] hover:bg-[#a78bfa]/10 group"
          >
            View GitHub Profile
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}