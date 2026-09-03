import { StaticImageData } from "next/image";
import { Card } from "@/app/components/ProjectCard/Card";
import { Link } from "@/app/utils/Link";
import { PROJECTS } from "@/app/data/project-data";

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

export const STATIC_PROJECTS: StaticProject[] = PROJECTS.map((p) => ({
  id: p.slug,
  src: p.thumbnail,
  alt: p.thumbnailAlt,
  color: p.color,
  type: p.type,
  text: "View Details",
  href: `/projects/${p.slug}`,
  dataText: "View Details",
  ariaLabel: `View ${p.title} project details`,
  isExternal: false,
}));

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
