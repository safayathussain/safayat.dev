"use client";

import { Link } from "../../utils/Link";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";
import { SITE_SLUGS } from "@/config/siteConfig";
import Image from "next/image";
import { MotionDiv, MotionSpan } from "@/app/utils/lazy-ui";

const navItems = [
  { name: "Projects", href: SITE_SLUGS.projects },
  { name: "About", href: SITE_SLUGS.about },
];

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-2 left-1/2 z-[99999] flex w-full -translate-x-1/2 justify-center text-base sm:top-2.5 md:top-5  ">
      {/* Step 1: The whole pill drops down */}
      <MotionDiv
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.5 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-lg shadow-black/30 backdrop-blur-md"
      >
        <div className="relative flex flex-col text-white">
          <div className="flex items-center px-3 py-2.5 md:py-2">
            {/* Logo Image — appears first as part of the initial drop */}
            <Link href="/" className="flex items-center  font-medium text-nowrap">
              <MotionDiv
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="safayat logo"
                  height={26}
                  width={26}
                  className="rounded-full h-9 w-9 object-cover object-top shadow-md"
                />
              </MotionDiv>

              {/* Step 2: Name expands horizontally after picture */}
              <MotionDiv
                initial={{ maxWidth: 0, opacity: 0 }}
                animate={{ maxWidth: 200, opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden whitespace-nowrap"
              >
                <MotionSpan
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="font-medium text-white/90 ml-2"
                >
                  Safayat Hussain
                </MotionSpan>
              </MotionDiv>
            </Link>

            {/* Step 3: Navigation slides in from the right after name */}
            <MotionDiv
              initial={{ maxWidth: 0, opacity: 0 }}
              animate={{ maxWidth: 400, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              {/* Desktop Navigation */}
              <ul className="hidden items-center gap-1 font-medium md:flex ml-5">
                {navItems.map((item) => (
                  <li key={item.name} className="flex">
                    <Link href={item.href} className="bubble-hover px-3 py-1   text-white/80 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="flex ml-1">
                  <Link
                    href="/#contact"
                    className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1  font-medium text-white/80 duration-200 hover:bg-white/15 hover:text-white md:inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </MotionDiv>

            {/* Mobile Dots Menu */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="ml-3 mt-1"
            >
              <MobileMenuButton />
            </MotionDiv>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navItems={navItems} />
        </div>
      </MotionDiv>
    </nav>
  );
};
