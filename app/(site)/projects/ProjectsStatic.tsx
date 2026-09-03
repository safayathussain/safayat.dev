import { StaticImageData } from "next/image";
import { Card } from "@/app/components/ProjectCard/Card";
import phoneSwapZone from "@/app/images/phoneswapzone.png";
import shineMen from "@/app/images/shinemen.png";
import orbital_coaching from "@/app/images/orbital.png";
import { Link } from "@/app/utils/Link";
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig";
import travelAi from "@/app/images/travel.png";

type StaticProject = {
  id: string;
  src: string | StaticImageData;
  alt: string;
  color: string;
  type: string;
  text: string;
  href: string;
  dataText: string;
  ariaLabel: string;
  isExternal: boolean;
};

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "PhoneSwapZone",
    src: phoneSwapZone,
    alt: "PhoneSwapZone - Preview",
    color: "#3B06D1",
    type: "Phone Resale Platform",
    text: "Visit Live Site",
    href: externalLinks.phoneSwapZone,
    dataText: "Visit Live Site",
    ariaLabel: "View Live Site",
    isExternal: true,
  },
  {
    id: "Shine Men",
    src: shineMen,
    alt: "Shinemen Preview",
    color: "#024EFC",
    type: "Men's Skincare Website",
    text: "Visit Live Site",
    href: externalLinks.shineMen,
    dataText: "Visit Live Site",
    ariaLabel: "Visit Live Site",
    isExternal: true,
  },
  {
    id: "Orbital Coaching Center",
    src: orbital_coaching,
    alt: "Orbital Coaching Center Preview",
    color: "#DA961AA5",
    type: "Orbital Coaching Center Website",
    text: "View Website",
    href: externalLinks.orbital_client,
    dataText: "View Website",
    ariaLabel: "View Saas Landing Page",
    isExternal: true,
  },
  {
    id: "TravelAi",
    src: travelAi,
    alt: "Ziarah Preview",
    color: "#DA961AA5",
    type: "Ai Powered Travel Website",
    text: "View Website",
    href: externalLinks.travelAI,
    dataText: "View Website",
    ariaLabel: "View Entitled Website",
    isExternal: true,
  },
];

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-white/5">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link;
            const wrapperProps = project.isExternal
              ? {
                href: project.href,
                target: "_blank",
                rel: "noopener",
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
              }
              : {
                href: project.href,
                "data-text": project.dataText,
                "aria-label": project.ariaLabel,
                prefetch: true,
              };

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card
                  src={project.src}
                  alt={project.alt}
                  color={project.color}
                  type={project.type}
                  reveal={false}
                  text={project.text}
                />
              </ProjectWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
