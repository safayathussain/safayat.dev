import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ExperienceSectionV2 } from "../components/ExperienceSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Safayat Hussain",
  description:
    "Explore the web developer portfolio of Safayat Hussain Chowdhury, a full-stack engineer building fast, modern web applications. See what a professional coding portfolio looks like, featuring projects in React, Next.js, and the custom-built React-Zero-UI library.",

  keywords: [
    "Web Developer Portfolio",
    "Safayat Hussain Chowdhury",
    "Serbyte",
    "React Zero-UI",
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack Engineer",
    "Seattle",

    "React Developer Portfolio",
  ],
  authors: [{ name: "Safayat Hussain Chowdhury" }],
  creator: "Safayat Hussain Chowdhury",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="relative bg-[#030014] overflow-hidden">
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
        <HeroV2 />
        <div className="border-b border-white/5" />
        <ProjectsSection />
        <AboutSectionV2 />
        <ExperienceSectionV2 />
        <ServicesSectionV2 />
        <RecruiterContact />
        {/* <FAQSection /> */}
      </div>
    </main>
  )
}
export default PortfolioPage
