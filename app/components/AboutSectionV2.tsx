import Image from "next/image";
import clsx from "clsx";
import profilePhoto from "@/public/profile.jpg";
import { Text, Typography } from "../ui/Elements";
import { AnimatedH2 } from "./ui/AnimatedH2";
import { ImageReveal } from "./ImageReveal";
import { MotionDiv } from "../utils/lazy-ui";

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section
      id="about"
      className={clsx("border-y border-white/5 ", className)}
    >
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-400">About</span>
          <br />
          Safayat Hussain
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal
              src={profilePhoto}
              alt="Safayat Hussain Chowdhury"
              className="custom-shadow aspect-[4/4.5]"
            />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium text-slate-100">
                Safayat Hussain Chowdhury
              </Text>
              <p className="text-sm text-slate-400">
                Full-Stack Engineer
              </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography
            as="article"
            size="lg"
            className="[flex:1.5_0_0px] space-y-8 text-slate-400"
          >
            <p>


              <strong className="font-semibold text-slate-100">
                I build
                reliable, scalable production systems
              </strong>{" "}



              and craft custom solutions when off-the-shelf tools fall short. My focus is on performance, clean architecture, and shipping products that last in the real world.
            </p>

            <p>
              <strong className="font-semibold text-slate-100">
                I ship v1s in weeks and iterate in days
              </strong>
              . Leveraging tools server-first React, typed APIs, background
              jobs and observability. Small PRs, rapid feedback, no
              ceremony.
            </p>
            <p>
              <strong className="font-semibold text-slate-100">
                My core philosophy is simplicity
              </strong>
              . if complexity balloons, I delete it and design the simpler path.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  );
};
