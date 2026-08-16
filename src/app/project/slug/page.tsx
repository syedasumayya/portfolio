import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectVisual from "@/components/ProjectVisual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} ${project.titleAccent} — Syeda Sumayya Zahid`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="pt-32 pb-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-dim hover:text-gold-bright transition-colors duration-300 mb-10"
        >
          ← All Projects
        </Link>

        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/70">
            {project.role}
          </p>
          <span className="font-mono text-[11px] text-ivory-dim/50">
            {project.year}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl text-ivory text-balance mb-8">
          {project.title} {project.titleAccent}
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 border border-gold/20 text-ivory-dim/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="scan-frame relative w-full aspect-video overflow-hidden glass-panel mb-14">
          <span className="corner-tl" />
          <span className="corner-br" />
          <ProjectVisual project={project} />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5">
            {project.longDescription.map((para, i) => (
              <p
                key={i}
                className="text-ivory-dim text-[15px] md:text-base leading-relaxed font-light"
              >
                {para}
              </p>
            ))}
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold/60 mb-5">
              Highlights
            </p>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-ivory-dim text-sm leading-relaxed flex gap-3"
                >
                  <span className="text-gold-bright shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-gold/10 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 max-w-[45%]"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim/50">
              ← Previous
            </span>
            <span className="text-ivory group-hover:text-gold-bright transition-colors duration-300 truncate">
              {prev.title} {prev.titleAccent}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-1 items-end max-w-[45%] text-right"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim/50">
              Next →
            </span>
            <span className="text-ivory group-hover:text-gold-bright transition-colors duration-300 truncate">
              {next.title} {next.titleAccent}
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}