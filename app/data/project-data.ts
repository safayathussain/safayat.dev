import { StaticImageData } from "next/image";
import phoneSwapZone from "@/app/images/phoneswapzone.png";
import travelAi from "@/app/images/travel.png";
import shineMen from "@/app/images/shinemen.png";
import orbital_coaching from "@/app/images/orbital.png";

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  color: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  description: string[];
  technologies: string[];
  images: { src: StaticImageData | string; alt: string; caption?: string }[];
  liveUrl?: string; // optional
  githubUrl?: string; // optional
  year: string;
  role: string;
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "travelai",
    title: "Ziarah Travel AI",
    tagline: "AI-powered travel planning & booking platform",
    type: "AI Powered Travel Website",
    color: "#DA961A",
    thumbnail: travelAi,
    thumbnailAlt: "Ziarah Travel AI Preview",
    year: "2024",
    role: "Full-Stack Developer",
    description: [
      "Ziarah is an AI-powered travel platform designed to simplify trip planning for modern travelers. It leverages large language models to generate personalized itineraries, suggest destinations, and streamline the booking process.",
      "The platform features real-time AI chat, dynamic itinerary generation, and a clean, responsive interface built for speed and usability across all devices.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Node.js",
      "TailwindCSS",
      "MongoDB",
      "Vercel",
    ],
    images: [
      { src: travelAi, alt: "Ziarah Travel AI — Hero Section" },
    ],
    liveUrl: "https://ziarah.ai",
  },
  {
    slug: "shinemen",
    title: "Shine Men",
    tagline: "Premium men's skincare e-commerce experience",
    type: "Men's Skincare Website",
    color: "#024EFC",
    thumbnail: shineMen,
    thumbnailAlt: "Shine Men Preview",
    year: "2024",
    role: "Frontend Developer",
    description: [
      "Shine Men is a premium men's skincare brand website built to deliver an elevated shopping experience. The focus was on pixel-perfect design, smooth animations, and a product-first layout that converts visitors into buyers.",
      "The project included custom product pages, cart functionality, and a fully responsive layout optimized for mobile-first browsing.",
    ],
    technologies: [
      "React",
      "Firebase",
      "CSS Animations",
      "Responsive Design",
      "JavaScript",
    ],
    images: [
      { src: shineMen, alt: "Shine Men — Homepage" },
    ],
    liveUrl: "https://men-s-skin-care.web.app",
  },
  {
    slug: "orbital-coaching",
    title: "Orbital Coaching Center",
    tagline: "High-converting coaching center landing page",
    type: "Landing Page",
    color: "#13739C",
    thumbnail: orbital_coaching,
    thumbnailAlt: "Orbital Coaching Center Preview",
    year: "2024",
    role: "Full-Stack Developer",
    description: [
      "A high-performance marketing and booking website for Orbital Coaching Center. The site was built to maximize lead capture and showcase the center's programs, instructors, and success stories.",
      "Key features include animated sections, a fully responsive layout, booking flow, and SEO optimization for local search ranking.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
      "Vercel",
    ],
    images: [
      { src: orbital_coaching, alt: "Orbital Coaching Center — Landing Page" },
    ],
    liveUrl: "https://orbital-coaching-client.vercel.app/",
  },
  {
    slug: "phoneswapzone",
    title: "PhoneSwapZone",
    tagline: "Full-stack phone resale & trade marketplace",
    type: "Phone Resale Platform",
    color: "#3B06D1",
    thumbnail: phoneSwapZone,
    thumbnailAlt: "PhoneSwapZone Preview",
    year: "2023",
    role: "Full-Stack Developer",
    description: [
      "PhoneSwapZone is a full-featured phone resale and trade marketplace. Users can list devices, browse verified listings, communicate with sellers, and complete secure transactions — all within the platform.",
      "The backend handles complex listing management, real-time messaging, user authentication, and a robust admin panel for moderation and analytics.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JWT Auth",
      "REST API",
      "Firebase Storage",
    ],
    images: [
      { src: phoneSwapZone, alt: "PhoneSwapZone — Marketplace" },
    ],
    liveUrl: "https://phoneswapzone.web.app",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
