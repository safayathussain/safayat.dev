import React from "react"
import { ProjectsGrid } from "./ProjectsGrid"
import { AnimatedText } from "./AnimatedText"
import Link from "next/link"
import { Icon } from "./Icon"
import { SITE_SLUGS } from "@/config/siteConfig"

export const ProjectsSection: React.FC = () => {
  return (
    <section className="inside-container">
      {/* overlay heading */}
      <div className="pointer-events-none relative z-5 mix-blend-exclusion">
        <AnimatedText
          text="Latest Projects"
          margin={200}
          once={true}
          className="inline-block text-4xl leading-9 tracking-tighter whitespace-nowrap text-white md:text-5xl md:leading-12 lg:text-6xl"
        />
      </div>

      <ProjectsGrid />

      <Link href={SITE_SLUGS.projects} className="group relative mx-auto mt-8 flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-3.5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(120,119,198,0.2)]">
        {/* Shine animation on hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        
        <span className="relative z-10 text-lg font-medium leading-6 tracking-tight text-slate-300 transition-colors group-hover:text-white md:text-xl">
          View More Projects
        </span>
        <Icon name="arrow-right" height={20} width={20} className="relative z-10 text-slate-300 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-white" strokeWidth={0.5} />
      </Link>
    </section>
  )
}
