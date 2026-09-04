"use client";
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard";
import { PROJECTS } from "@/app/data/project-data";
import clsx from "clsx";
import { useOffset } from "../hooks/useOffset";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useRef, useEffect } from "react";
import { useScroll, useSpring } from "motion/react";
import { useUI } from "@react-zero-ui/core";

const ids = ["nepgov", "maxlive", "holago"];

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawOffsets = useOffset(ids);
  const isMobile = useIsMobile();
  const isSmallScreen = useIsMobile(576);
  const responsiveScale = isMobile ? 0.34 : 0.8;
  const [, setReveal] = useUI<"true" | "false">("reveal", "false");

  const { scrollYProgress } = useScroll({
    offset: isMobile
      ? ["start start", "8% start"]
      : ["start start", "12% start"],
  });
  const stiffness = isMobile ? 120 : 220;
  const damping = isMobile ? 50 : 90;

  const progress = useSpring(scrollYProgress, { stiffness, damping });

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    nepgov: {
      rot: -2,
      s: responsiveScale,
      dx: isMobile ? -230 : -45,
      dy: isMobile ? -130 : -35,
    },
    maxlive: {
      rot: 4,
      s: responsiveScale,
      dx: isMobile ? -225 : -30,
      dy: isMobile ? -125 : -20,
    },
    holago: {
      rot: 9,
      s: responsiveScale,
      dx: isMobile ? -220 : -15,
      dy: isMobile ? -120 : -5,
    },
  };

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id];
      const t = OFFSET_TUNING[id];

      if (!base || !t) {
        console.warn(`Missing offset data for ${id}`);
        return [id, { x: 0, y: 0, rot: 0, s: 1 }];
      }

      return [
        id,
        {
          x: (base.x || 0) + (t.dx || 0),
          y: (base.y || 0) + (t.dy || 0),
          rot: t.rot || 0,
          s: t.s ?? 1,
        },
      ];
    })
  );

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5;
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true");
      } else {
        setReveal("false");
      }
    });

    return unsubscribe;
  }, [progress, setReveal, triggerProgress]);

  return (
    <section
      id="projects-grid"
      className={clsx("relative scroll-mt-36", className)}
      ref={ref}
    >
      <div className="relative z-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <AnimatedCard
            key={project.slug}
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            title={project.title}
            offset={offsets[project.slug] ?? { x: 0, y: 0, rot: 0, s: 1 }}
            gridId={project.slug}
            color={project.color}
            type={project.type}
            progress={progress}
            href={`/projects/${project.slug}`}
            dataText="View Details"
            zIndex={PROJECTS.length - index}
          />
        ))}
      </div>
    </section>
  );
}
