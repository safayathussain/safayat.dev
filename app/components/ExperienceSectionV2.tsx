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
        company: "Zecho",
        role: "Frontend Engineer Intern",
        duration: "Aug 2023 - Jan 2024",
        description: "",
        achievements: [
            "Built dynamic, responsive, and user-friendly websites with React.js in collaboration with the development team.",
            "Developed key features such as an online code editor with GitHub integration, enabling users to write, test, and push code to GitHub seamlessly with a single click.",
            "Gained hands-on experience with modern frameworks like Next.js, enhancing website performance, and scalability."
        ],
        technologies: ["React", "Next.js", "TypeScript", "Redux"],
        color: "#0E172B"
    },
    {
        company: "KoWorkerAi",
        role: "Full Stack Engineer Intern",
        duration: "Feb 2024 - Sep 2024",
        description: "",
        achievements: [
            "Optimized complex state management with Redux Toolkit, boosting maintainability and developer productivity.",
            "Collaborated with the development team to maintain and enhance both frontend and backend codebases for a Video AI SaaS platform, ensuring smooth functionality and scalability",
            "Integrated a powerful video editing API to enable seamless, real-time video processing and editing capabilities."

        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Typescript", "Figma", "Eleven labs", "Redux"],
        color: "#0E172B"
    },
    {
        company: "Ziarah",
        role: "Full Stack Engineer ",
        duration: "Oct 2024 - Present",
        description: "",
        achievements: [
            "Developed a hotel booking service that allowed users to efficiently search, filter, and book hotels, improving the overall booking flow",
            "Built the frontend for a Travel Agent AI platform, enabling users to seamlessly book hotels, flights, travel packages, and activities through an interactive interface",
            "Took leadership responsibility within the team, guiding implementation, and ensuring smooth collaboration across the development process"
        ],
        technologies: ["Node.js", "Express", "MongoDB", "React", "Next.js"],
        color: "#0E172B"
    }
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
                    className=" grid gap-8 md:grid-cols-1 lg:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                    {experiences.map((experience, index) => (
                        <MotionLi key={experience.company} variants={cardVariants}>
                            <MotionDiv
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:shadow-xl"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {/* Color accent */}
                                <div
                                    className="absolute left-0 top-0 h-1 w-full"
                                    style={{ backgroundColor: experience.color }}
                                />

                                {/* Company & Role */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-white transition-colors">
                                        {experience.company}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-300 mt-1">
                                        {experience.role}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                        {experience.duration}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-xs mb-6 text-slate-300 ">
                                    {experience.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-100 mb-3">
                                        Key Achievements
                                    </h4>
                                    <MotionUl
                                        className="space-y-2"
                                        variants={container}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {experience.achievements.map((achievement, achievementIndex) => (
                                            <MotionLi
                                                key={achievementIndex}
                                                variants={achievementVariants}
                                                className="flex items-start gap-2"
                                            >
                                                <div
                                                    className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: experience.color }}
                                                />
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    {achievement}
                                                </p>
                                            </MotionLi>
                                        ))}
                                    </MotionUl>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
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
