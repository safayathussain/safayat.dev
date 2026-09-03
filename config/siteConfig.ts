export const DOMAIN_URL = "https://www.safayat.dev";

export const SITE_CONFIG = {
  title: "Safayat Hussain Chowdhury",
  description:
    "Portfolio of Safayat Hussain Chowdhury, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url:
    DOMAIN_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000",
  siteName: "Safayat Hussain Chowdhury",
  keywords: [
    "Safayat Hussain Chowdhury",
    "React Zero-UI",
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack Engineer",
  ],
  ogImage: "/profile.png",
  logo: "/logo.png",
} as const;

export const SITE_NAP = {
  name: "Safayat Hussain Chowdhury",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Safayat Hussain Chowdhury",
  contactTitle: "CEO",
  email: "safayatofficial1@gmail.com",
  phone: "+8801786673089",
  formattedPhone: "+880 01786673089",
  addressLink:
    "https://www.google.com/maps/search/?api=1&query=Safayat+Hussain+Chowdhury",
  street: "12601 NE 124th ST",
  city: "Sylhet",
  state: "Sylhet",
  zipCode: "3103",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  // googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/safayat.dev",
    linkedIn: "https://www.linkedin.com/in/safayathussain/",
    github: "https://github.com/safayathussain",
    x: "https://x.com/",
    resume:
      "https://docs.google.com/document/d/1KZt5Ai6sCwHWtRCKDbxe6UYUPgklvx8xGJlBq4ows6M/edit?usp=sharing",
  } as const,
  logo: "/favicon.ico",
  favicon: "/favicon.ico",
} as const;

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-safayat",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    travelAi: "/projects/travelAi",
    shineMen: "/projects/shineMen",
  },
} as const;

export const externalLinks = {
  shineMen: "https://men-s-skin-care.web.app",
  orbital_client: "https://orbital-coaching-client.vercel.app/",
  travelAI: "https://ziarah.ai",
  phoneSwapZone: "https://phoneswapzone.web.app",
} as const;

const flattenSlugs = (
  obj: Record<string, string | Record<string, string>>
): string[] => {
  return Object.values(obj).flatMap((value) =>
    typeof value === "string" ? [value] : flattenSlugs(value)
  );
};

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) =>
  typeof value === "string" ? [value] : flattenSlugs(value)
);
