import clsx from "clsx";
import { Text } from "../ui/Elements";
import { AnimatedH2 } from "./ui/AnimatedH2";
import { MotionDiv, MotionUl, MotionLi } from "../utils/lazy-ui";
import type { Variants } from "motion";

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
    achievements: string[];
    technologies: string[];
    color: string;
}

const experiences: Experience[] = [
    {
        company: "Syscomatic",
        role: "Full Stack Engineer",
        duration: "2022 - Present",
        description: "",
        achievements: [
            "Built and maintained dynamic, responsive, and user-friendly web applications in collaboration with cross-functional development teams.",
            "Developed complex frontend and backend features with a focus on performance, scalability, and maintainability.",
            "Worked across the full development lifecycle, including UI development, API integration, database management, debugging, and deployment.",
            "Contributed to large-scale projects, solving challenging technical problems and adapting to evolving business requirements."
        ],
        technologies: ["React", "Next.js", "Express", "Redux Toolkit", "MongoDB", "PostgreSQL", "Django"],
        color: "#6366F1"
    },
    {
        company: "NepGov",
        role: "Full Stack Engineer",
        duration: "2025 - 2026",
        description: "",
        achievements: [
            "Designed and developed a feature-rich web platform with a comprehensive admin dashboard and management system.",
            "Built role-based, permission-based access control and a real-time survey system with complex data and user interactions.",
            "Independently handled end-to-end development, from feature planning and UI/UX design to development, debugging, and deployment.",
            "Managed production deployment, server configuration, and application maintenance."
        ],
        technologies: [ "Next.js", "Express", "MongoDB", "Redux Toolkit", "Redis", "Tailwind", "Socket.io"],
        color: "#06B6D4"
    },
];

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
};

const achievementVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export const ExperienceSectionV2 = ({ className = "" }: { className?: string }) => {
    return (
        <section
            id="experience"
            className={clsx("border-y border-white/5 ", className)}
        >
            <div className="inside-container relative z-2">
                {/* HEADLINE */}
                <AnimatedH2 className="text-xl">
                    Professional<br />
                    <span className="text-slate-400 lg:text-5xl text-4xl">Experience</span>
                </AnimatedH2>

                {/* EXPERIENCE CARDS */}
                <MotionUl
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    {experiences.map((experience) => (
                        <MotionLi key={experience.company} variants={cardVariants} className="h-full">
                            <MotionDiv
                                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-xl"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Color accent */}
                                <div
                                    className="absolute left-0 top-0 h-1 w-full"
                                    style={{ backgroundColor: experience.color }}
                                />

                                <div>
                                    {/* Company & Role */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-white transition-colors">
                                                {experience.company}
                                            </h3>
                                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
                                                {experience.duration}
                                            </span>
                                        </div>
                                        <p className="text-base font-medium text-slate-300 mt-1.5">
                                            {experience.role}
                                        </p>
                                    </div>

                                    {/* Description (if provided) */}
                                    {experience.description ? (
                                        <p className="text-xs mb-6 text-slate-300 ">
                                            {experience.description}
                                        </p>
                                    ) : null}

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-100 mb-3">
                                            Key Achievements
                                        </h4>
                                        <MotionUl
                                            className="space-y-3"
                                            variants={container}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {experience.achievements.map((achievement, achievementIndex) => (
                                                <MotionLi
                                                    key={achievementIndex}
                                                    variants={achievementVariants}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <div
                                                        className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                                        style={{ backgroundColor: experience.color }}
                                                    />
                                                    <p className="text-sm text-slate-300 leading-relaxed">
                                                        {achievement}
                                                    </p>
                                                </MotionLi>
                                            ))}
                                        </MotionUl>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {experience.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:bg-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                            </MotionDiv>
                        </MotionLi>
                    ))}
                </MotionUl>

                {/* Bottom CTA */}
                <MotionDiv
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <Text size="lg" className="text-slate-300 mb-4">
                        Ready to bring this experience to your team?
                    </Text>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-200 hover:bg-slate-200 hover:scale-105"
                    >
                        Let&apos;s work together
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </MotionDiv>
            </div>
        </section >
    );
};
