import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, PROJECTS } from "@/app/data/project-data";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers, CheckCircle2, Sparkles, Layout } from "lucide-react";

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
    title: `${project.title} — ${project.subtitle} | ${SITE_CONFIG.siteName}`,
    description: project.subtitle || project.description[0],
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.tagline,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-cyan-500/30">
      {/* Background grid + glows */}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none">
        <div
          className="absolute left-1/2 top-[-10%] -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ background: `${project.color}20` }}
        />
        <div className="absolute right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[rgba(120,119,198,0.08)] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-32 pt-24 md:px-10 lg:px-6">

        {/* ── Back button ── */}
        <Link
          href="/projects"
          className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* ── Hero thumbnail ── */}
        <div className="relative mb-12 h-72 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[420px]">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            className="object-cover object-top"
            priority
          />
          {/* Subtle gradient vignette */}
          <div
            className="absolute inset-0"
            style={{
              // background: `linear-gradient(to top, #030014ee 0%, #03001440 1%, transparent 100%)`,
            }}
          />
          {/* Type badge */}
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span
              className="rounded-full border border-white/20 bg-black/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md shadow-lg"
              style={{ borderColor: `${project.color}60` }}
            >
              {project.type}
            </span>
          </div>
        </div>

        {/* ── Title, Custom Subtitle & CTA row ── */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between border-b border-white/10 pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {project.title}
              </h1>
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: project.color }}
              />
            </div>
            
            {/* Customized Subtitle */}
            <p className="mt-3 text-lg font-medium leading-snug text-slate-300 md:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              {project.tagline}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02] active:scale-95"
              >
                <ExternalLink className="h-4 w-4" />
                Live Platform
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
        <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-5 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/5 p-2 text-slate-400">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Year</p>
              <p className="text-sm font-medium text-slate-200">{project.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/5 p-2 text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Role</p>
              <p className="text-sm font-medium text-slate-200">{project.role}</p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
            <div className="rounded-lg bg-white/5 p-2 text-slate-400">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Category</p>
              <p className="text-sm font-medium text-slate-200">{project.type}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* ── Left: Overview + Architecture & Features + Screenshots ── */}
          <div className="flex flex-col gap-12">

            {/* Platform Overview */}
            <section className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                <Sparkles className="h-4 w-4" />
                Platform Overview
              </div>
              <div className="flex flex-col gap-4">
                {project.description.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-slate-300 md:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Architecture & Feature Breakdown */}
            {project.featureSections && project.featureSections.length > 0 && (
              <div className="flex flex-col gap-10">
                {project.featureSections.map((section, idx) => (
                  <section key={idx} className="flex flex-col gap-5">
                    <div className="flex items-center gap-2.5">
                      <Layout className="h-5 w-5 text-slate-400" />
                      <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-1">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                              <CheckCircle2
                                className="h-4 w-4"
                                style={{ color: project.color }}
                              />
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-slate-100">
                                {item.title}
                              </h3>
                              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {/* Screenshots Gallery */}
            {project.images && project.images.length > 0 && (
              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    System Screenshots & Architecture
                  </h2>
                  <span className="text-xs text-slate-400">
                    {project.images.length} interfaces
                  </span>
                </div>

                <div className="flex flex-col gap-8">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl transition-all duration-300 hover:border-white/25"
                    >
                      <div className="relative w-full overflow-hidden bg-slate-950">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1920}
                          height={1080}
                          className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                        />
                      </div>
                      {img.caption && (
                        <div className="border-t border-white/8 bg-white/[0.03] p-4 text-xs font-medium text-slate-300 md:text-sm">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right: Tech stack sidebar ── */}
          <aside className="self-start">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Tech Stack & Tools
                </h2>
                <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/5 px-3.5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-white/20 hover:text-white"
                    >
                      <span
                        className="h-2 w-2 flex-shrink-0 rounded-full shadow-[0_0_8px]"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: `0 0 8px ${project.color}`,
                        }}
                      />
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black shadow-md transition-all duration-200 hover:bg-slate-100 active:scale-95"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* ── Next / Previous Project Navigation ── */}
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
    <div className="mt-20 flex items-center justify-between gap-4 border-t border-white/10 pt-10">
      <Link
        href={`/projects/${prev.slug}`}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 pr-6 text-sm text-slate-300 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        <div>
          <p className="text-xs text-slate-500">Previous Project</p>
          <p className="font-semibold text-slate-200">{prev.title}</p>
        </div>
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 pl-6 text-sm text-slate-300 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
      >
        <div className="text-right">
          <p className="text-xs text-slate-500">Next Project</p>
          <p className="font-semibold text-slate-200">{next.title}</p>
        </div>
        <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
