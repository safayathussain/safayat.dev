import { AnimatedElement } from "@/app/components/ui/AnimatedElement";

export const WorkHero: React.FC = () => {
  return (
    <div className="inside-container-large">
      <div className="flex flex-col items-center gap-6 max-md:px-5.5">
        <h1 className="xs:text-5xl relative z-5 text-center text-4xl leading-[1] font-medium tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
          <AnimatedElement
            element="span"
            offsetPx={20}
            fadeDirection="left"
            className="inline-block"
          >
            My Most
          </AnimatedElement>{" "}
          <br />
          <AnimatedElement
            element="span"
            offsetPx={40}
            delay={0.2}
            fadeDirection="top"
            className="inline-block"
          >
            Recent Work
          </AnimatedElement>
        </h1>
        <AnimatedElement
          element="p"
          delay={0.6}
          className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-400 md:max-w-sm md:pr-4 md:text-base"
        >
          A collection of my work — including real-world applications and
          impactful client projects. See Live Site for more details.
        </AnimatedElement>
      </div>
    </div>
  );
};
