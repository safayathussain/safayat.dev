import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { Icon } from "./Icon"
import profilePhoto from "@/public/profile.jpg"
import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import { BlackButtonLink } from "./ui/BlackButtonLink"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

export const RecruiterContact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/5">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center gap-7 rounded-2xl border border-white/10 bg-white/5 p-5.5 max-lg:text-center max-sm:px-1 sm:p-8"
        >
          <div className="flex w-fit items-center gap-3 p-2 max-lg:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-slate-200">
              <Image src={profilePhoto} alt="Safayat Hussain Chowdhury" fill sizes="80px" className="object-cover" />
            </div>
            <div className="flex flex-col items-start text-sm whitespace-nowrap text-slate-300">
              <h2 className="font-medium text-slate-100">Safayat Hussain Chowdhury</h2>
              <p className="text-slate-400">Full Stack Web Engineer</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 max-lg:items-center">
            <H3 className="text-center font-normal tracking-tight">
              <span>
                Building Something Amazing? <br />
              </span>
              <span className="text-slate-400">Let&apos;s chat.</span>
            </H3>
            <Text className="max-w-2xl text-center text-balance">
              I build fast, accessible web apps with React, Next.js, and TypeScript. I&apos;m looking for teams that value product quality, performance, and
              thoughtful UX.
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-4 max-lg:justify-center">
            <BlackButtonLink href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncJHmmpSJhGccCRlkkwPMhQLnNkcgXQbCmvpGlzbbCpZmgBrjgNcSWPTTfFdGHJDBLVCT`}>
              <Mail height={18} width={18} className="h-[18px] w-[18px] text-white" />
              Email me
            </BlackButtonLink>

            <WhiteButtonLink href={SITE_NAP.profiles.linkedIn}>
              <Icon name="linkedin" height={18} width={18} className="h-[18px] w-[18px]" />
              LinkedIn
            </WhiteButtonLink>
            <WhiteButtonLink href={SITE_NAP.profiles.github}>
              <Icon name="github" height={18} width={18} className="h-[18px] w-[18px]" />
              GitHub
            </WhiteButtonLink>
          </div>

          <div className="flex items-center gap-3  max-lg:justify-center  ">
            {/* <WhiteButtonLink href={"https://calendly.com/nasirchy252/coffee-chat?month=2025-09"} className="relative text-black font-semibold">
              <Icon name="calendar" height={18} width={18} className="h-[18px] w-[18px]  " />
              Book a call
            </WhiteButtonLink> */}
            <WhiteButtonLink href={SITE_NAP.profiles.resume} className="relative text-black font-semibold">

              Resume
            </WhiteButtonLink>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
