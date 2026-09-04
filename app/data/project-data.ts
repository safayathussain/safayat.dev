import { StaticImageData } from "next/image";

export interface ProjectFeatureItem {
  title: string;
  description: string;
}

export interface ProjectFeatureSection {
  title: string;
  items: ProjectFeatureItem[];
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  type: string;
  color: string;
  thumbnail: StaticImageData | string;
  thumbnailAlt: string;
  description: string[];
  technologies: string[];
  images: { src: StaticImageData | string; alt: string; caption?: string }[];
  liveUrl?: string; // optional
  githubUrl?: string; // optional
  year: string;
  role: string;
  featureSections: ProjectFeatureSection[];
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "nepgov",
    title: "NepGov",
    tagline: "Civic data, dynamic public polling & real-time electoral analytics platform",
    subtitle: "Civic Data, Public Opinion Polling & Real-Time Electoral Analytics Platform",
    type: "Civic Intelligence & Polling Platform",
    color: "#06B6D4",
    thumbnail: "/projects/nepgov/home.png",
    thumbnailAlt: "NepGov Civic Data & Polling Platform Preview",
    year: "2026",
    role: "Full Stack Engineer",
    liveUrl: "https://nepgov.com",
    description: [
      "NepGov (nepgov.com) is a full-stack civic data, public opinion polling, and analytics platform built to bridge citizens in Nepal and the global diaspora with transparent public discourse.",
      "Engineered with full bilingual support (English/Nepali) and a high-performance, responsive UI, the web application tracks and visualizes real-time public sentiment through secure, anonymous survey panels.",
    ],
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Redis",
      "Tailwind CSS",
      "Socket.io",
    ],
    images: [
      {
        src: "/projects/nepgov/home.png",
        alt: "NepGov — Civic Data & Public Opinion Polling Homepage",
        caption: "Public Portal: Real-time public sentiment tracking, active civic surveys, and bilingual interface.",
      },
      {
        src: "/projects/nepgov/election.png",
        alt: "NepGov — Dynamic Election Hub",
        caption: "Dynamic Election Hub (/election/*): Real-time poll aggregation and interactive candidate dashboards across FPTP and PR electoral systems.",
      },
      {
        src: "/projects/nepgov/tracker.png",
        alt: "NepGov — Dynamic Trackers & Public Opinion Polling",
        caption: "Modular Trackers: Real-time polling engine with dynamic voter-verification filters to prevent bot distortion.",
      },
      {
        src: "/projects/nepgov/admin-home.png",
        alt: "NepGov — Admin Dashboard & Management Architecture",
        caption: "Admin Operations: Dynamic RBAC permission controls, election engine, live survey controller, and headless CMS.",
      },
    ],
    featureSections: [
      {
        title: "Frontend & Interactive Capabilities",
        items: [
          {
            title: "Dynamic Election Hub (/election/*)",
            description:
              "A fully generalized, multi-election portal that dynamically renders real-time poll aggregation, electoral candidate data, and interactive dashboards across both First-Past-The-Post (FPTP) and Proportional Representation (PR) electoral systems for any election cycle.",
          },
          {
            title: "Dynamic Trackers & Surveys",
            description:
              "Modular, real-time polling engines capable of serving any user survey or custom metric tracker on demand with high concurrency.",
          },
          {
            title: "Methodological Integrity Safeguards",
            description:
              "Dynamic voter-verification filters that enforce in-country resident eligibility for targeted surveys—eliminating non-voter distortion and automated bot manipulation.",
          },
          {
            title: "Civic Insights & Content Hub",
            description:
              "Centralized editorial hub publishing data-driven breakdowns of electoral rules, policy updates, and diaspora topics.",
          },
        ],
      },
      {
        title: "Admin Dashboard & Management Architecture",
        items: [
          {
            title: "Dynamic Role-Based Access Control (RBAC)",
            description:
              "Granular permission system allowing Superadmins to create custom roles, configure administrative rights, and delegate platform modules dynamically.",
          },
          {
            title: "Dynamic Election Engine",
            description:
              "Flexible administration management system capable of configuring, inputting, and updating both Local and General Election cycles, including candidates, constituencies, vote tallies, and electoral metadata.",
          },
          {
            title: "Live Survey Controller",
            description:
              "Full administrative control over survey lifecycle management—allowing admins to create, schedule, filter, and review live response analytics in real time.",
          },
          {
            title: "Integrated Email Marketing Suite",
            description:
              "Direct email tool built into the panel for user list segmentation, campaign management, automated newsletter distribution, and community updates.",
          },
          {
            title: "Headless Content Management System (CMS)",
            description:
              "Complete dynamic control over all website content, articles, dynamic translations, and UI blocks without requiring backend redeployments.",
          },
        ],
      },
    ],
  },
  {
    slug: "maxlive",
    title: "MaxLive",
    tagline: "Multi-tiered administrative and financial ecosystem for live-streaming platforms",
    subtitle: "Multi-Tiered Admin Infrastructure, Point Economy & Agency Operations Ecosystem",
    type: "Enterprise Admin & Fintech Platform",
    color: "#8B5CF6",
    thumbnail: "/projects/maxlive/maxlive-super.png",
    thumbnailAlt: "MaxLive Enterprise Multi-Tier Admin Architecture Preview",
    year: "2024",
    role: "Full Stack Engineer",
    description: [
      "MaxLive is a live-streaming ecosystem supported by a multi-tiered administrative and financial backend.",
      "Engineered to manage streamer performance, a multi-role point economy, agency operations, and manual financial tracking, the infrastructure is built across four distinct web panels tailored to specific administrative tiers.",
    ],
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Redis",
      "Tailwind CSS",
    ],
    images: [
      {
        src: "/projects/maxlive/maxlive-super.png",
        alt: "MaxLive — Super Admin Dashboard",
        caption: "Super Admin Panel: Central platform governance, streaming telemetry, transaction auditing, and global security.",
      },
      {
        src: "/projects/maxlive/maxlive-admin.png",
        alt: "MaxLive — Country Operations Admin Panel",
        caption: "Country Admin Panel: Regional governance dashboard to oversee operations, localized metrics, and regional agencies.",
      },
      {
        src: "/projects/maxlive/maxlive-agent.png",
        alt: "MaxLive — Agency Admin Management Hub",
        caption: "Agency Admin Panel: Operational hub to recruit streamers, monitor point accruals, and log manual payout settlements.",
      },
      {
        src: "/projects/maxlive/maxlive-reseller.png",
        alt: "MaxLive — Reseller Distribution Portal",
        caption: "Reseller Panel: Point distribution interface for authorized resellers to manage point inventory, sales, and agency payouts.",
      },
    ],
    featureSections: [
      {
        title: "Four-Tiered Admin Panel Architecture",
        items: [
          {
            title: "Super Admin Panel",
            description:
              "Central platform management system with full access to app-wide streaming telemetry, global security, system-wide transaction auditing, platform rules, and top-tier access control.",
          },
          {
            title: "Country Admin Panel",
            description:
              "Regional governance dashboard designed to oversee platform operations, monitor localized performance metrics, and supervise regional agencies within assigned territories.",
          },
          {
            title: "Agency Admin Panel",
            description:
              "Operational management hub for broadcasting agencies to recruit streamers, track live performance, monitor point accruals, oversee agency point inventories, and log manual payout settlements to resellers.",
          },
          {
            title: "Reseller Panel",
            description:
              "Point distribution interface for authorized resellers to manage point purchases, log sales transactions, handle end-user distribution, and track pending and completed payouts from agency admins.",
          },
        ],
      },
      {
        title: "Core Administrative & Economic Features",
        items: [
          {
            title: "Streamer Point Economy & Gamification",
            description:
              "Tracking systems that calculate real-time point generation accrued by content creators through live streaming performance and audience interaction.",
          },
          {
            title: "Multi-Directional Point Marketplace",
            description:
              "Complete administrative oversight for the point lifecycle—enabling and monitoring buying, selling, gifting, and peer-to-peer point transfers across the platform.",
          },
          {
            title: "Agency & Reseller Settlement Tracking",
            description:
              "A dedicated ledger system designed to log, track, and verify manual payout workflows, commission settlements, and point inventory balances between Agency Admins and Resellers.",
          },
          {
            title: "Strict Multi-Tenant Access Control",
            description:
              "Role-based security enforcing strict data isolation, audit trails, and operational boundaries across all four distinct admin panels.",
          },
        ],
      },
    ],
  },
  {
    slug: "holago",
    title: "Holago",
    tagline: "Streamlined apparel e-commerce platform & two-tier retail management",
    subtitle: "Streamlined Clothing E-Commerce Platform & Two-Tier Retail Management System",
    type: "Apparel E-Commerce Platform",
    color: "#F59E0B",
    thumbnail: "/projects/holago/holago-report.png",
    thumbnailAlt: "Holago Apparel E-Commerce Store Admin Preview",
    year: "2024",
    role: "Full Stack Developer",
    description: [
      "Holago is a streamlined clothing e-commerce application focused on delivering core online retail functionality without unnecessary complexity.",
      "Engineered for clean navigation, straightforward product management, and efficient checkout, the application is divided into two main interfaces tailored for buyers and store owners.",
    ],
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Redis",
      "Tailwind CSS",
    ],
    images: [
      {
        src: "/projects/holago/holago-report.png",
        alt: "Holago — Sales Analytics & Reports",
        caption: "Commerce Analytics: Revenue tracking, inventory deduction metrics, and sales report generation.",
      },
      {
        src: "/projects/holago/holago-orders.png",
        alt: "Holago — Store Admin & Order Management",
        caption: "Store Admin Panel: Centralized incoming order processing, fulfillment status transitions, and inventory control.",
      },
    ],
    featureSections: [
      {
        title: "Two-Tier System Architecture",
        items: [
          {
            title: "Customer Storefront",
            description:
              "User-facing store featuring clean product browsing, size and color filtering, persistent cart management, secure checkout, and basic order status tracking.",
          },
          {
            title: "Store Admin Panel",
            description:
              "Essential management dashboard allowing store owners to handle core catalog items, monitor incoming orders, track inventory levels, and update fulfillment statuses.",
          },
        ],
      },
      {
        title: "Core Administrative & Commerce Features",
        items: [
          {
            title: "Product Catalog & Variant Management",
            description:
              "Simple database setup for apparel items, supporting essential variations like sizing (S, M, L, XL), colors, stock counts, and pricing.",
          },
          {
            title: "Shopping Cart & Checkout Flow",
            description:
              "Streamlined cart state retention paired with a direct checkout process for address collection and payment processing.",
          },
          {
            title: "Order & Fulfillment Tracking",
            description:
              "Direct admin workflow to view incoming customer orders, update shipping statuses (Pending, Shipped, Delivered), and manage basic inventory deductions.",
          },
          {
            title: "Essential Authentication & Profiles",
            description:
              "Role-based access separating standard customer accounts from administrative store management using secure authentication token handling.",
          },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
