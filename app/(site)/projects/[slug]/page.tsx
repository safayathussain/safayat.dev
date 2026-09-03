import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, PROJECTS } from "@/app/data/project-data";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${SITE_CONFIG.siteName}`,
    description: project.description[0],
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-[#030014]">
      {/* Background grid + glows */}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]">
        <div
          className="absolute left-1/2 top-[-10%] -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: `${project.color}18` }}
        />
        <div className="absolute right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[rgba(120,119,198,0.06)] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-32 pt-24 md:px-10 lg:px-6">

        {/* ── Back button ── */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* ── Hero thumbnail ── */}
        <div className="relative mb-12 h-64 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-96">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            className="object-cover"
            priority
          />
          {/* Color overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${project.color}cc 0%, transparent 60%)`,
            }}
          />
          {/* Type badge */}
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {project.type}
          </span>
        </div>

        {/* ── Title & CTA row ── */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-base text-slate-400">{project.tagline}</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10 active:scale-95"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* ── Meta info row ── */}
        <div className="mb-12 flex flex-wrap gap-6 border-t border-b border-white/8 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="h-4 w-4 text-slate-500" />
            <span className="text-slate-300">{project.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <User className="h-4 w-4 text-slate-500" />
            <span className="text-slate-300">{project.role}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Layers className="h-4 w-4 text-slate-500" />
            <span className="text-slate-300">{project.type}</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* ── Left: Description + Screenshots ── */}
          <div className="flex flex-col gap-12">

            {/* Description */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Overview
              </h2>
              <div className="flex flex-col gap-4">
                {project.description.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-slate-300">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Additional screenshots */}
            {project.images.length > 1 && (
              <section>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Screenshots
                </h2>
                <div className="flex flex-col gap-5">
                  {project.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-xl border border-white/8"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={900}
                        height={500}
                        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {img.caption && (
                        <p className="border-t border-white/8 bg-white/3 px-4 py-2 text-xs text-slate-500">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right: Tech stack sidebar ── */}
          <aside className="self-start">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
              <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Tech Stack
              </h2>
              <ul className="flex flex-col gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/5 px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/15 hover:text-slate-100"
                  >
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: project.color }}
                    />
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Live site button — repeated in sidebar for easy access */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black shadow-md transition-all duration-200 hover:bg-slate-100 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Site
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* ── Next project nav ── */}
        <NextProjectNav currentSlug={project.slug} />
      </div>
    </main>
  );
}

function NextProjectNav({ currentSlug }: { currentSlug: string }) {
  const idx = PROJECTS.findIndex((p) => p.slug === currentSlug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="mt-20 flex items-center justify-between gap-4 border-t border-white/8 pt-10">
      <Link
        href={`/projects/${prev.slug}`}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 p-4 pr-6 text-sm text-slate-400 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-slate-200"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        <div>
          <p className="text-xs text-slate-600">Previous</p>
          <p className="font-medium text-slate-300">{prev.title}</p>
        </div>
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 p-4 pl-6 text-sm text-slate-400 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-slate-200"
      >
        <div className="text-right">
          <p className="text-xs text-slate-600">Next</p>
          <p className="font-medium text-slate-300">{next.title}</p>
        </div>
        <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
