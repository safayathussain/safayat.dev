import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsSchema, breadcrumbSchema } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Md Nasirul Islam Chowdhury - Projects & Case Studies",
  description: "Featured work by Md Nasirul Islam Chowdhury: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Md Nasirul Islam Chowdhury", "Projects", "Case" , "Next.js", "React", "TypeScript", "Serbyte", "Seattle"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative bg-[#030014]">
      {/* Fixed Grid Pattern and Gradient Glows (spanning the whole page) */}
      <div className="fixed inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]">
        {/* Top Center Glow */}
        <div className="absolute left-1/2 top-[-10%] -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[rgba(120,119,198,0.08)] blur-[120px]"></div>
        {/* Middle Left Glow */}
        <div className="absolute left-[-10%] top-[40%] -z-10 h-[600px] w-[600px] rounded-full bg-[rgba(120,119,198,0.06)] blur-[120px]"></div>
        {/* Bottom Right Glow */}
        <div className="absolute right-[-10%] bottom-[-10%] -z-10 h-[700px] w-[700px] rounded-full bg-[rgba(120,119,198,0.06)] blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([projectsSchema, breadcrumbSchema]),
          }}
        />
        <WorkHero />
        <ProjectsStatic />
        <RecruiterContact />
      </div>
    </main>
  )
}

export default page
