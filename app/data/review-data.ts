import { StaticImageData } from "next/image";

export interface ReviewProps {
  quote: React.ReactNode;
  name: string;
  title: string;
  img: StaticImageData | string;
  id?: string;
}

export const REVIEWS = [
  {
    id: "phoneSwapZone",
    img: "/client-photos/yassine-rhamani-profile-photo.jpeg",
    name: "Yassine Ramani",
    title: "CEO, Entitled",
    quote:
      "Safayat is an exceptional developer. He delivered what I wanted and always does it on time. He has great work ethics and professionalism. He helped me with developing both backend and frontend with next js and node js for a social media platform with advanced database design and clean code. The work was done in a very short amount of time and exceeded all my expectations with pixel perfect design! I am impressed with the quality of the work! Everything was done exactly as I wanted in every small detail. I would certainly recommend him for any web development needs. Thank you Safayat",
  },
  {
    id: "herba-naturals",
    img: "/brands/herba-naturals-logo.png",
    name: "Sami Raheem",
    title: "Owner, Herba Naturals",
    quote:
      "He is Very hard working and timely. you are a very good team player with outstanding logical thinking. I am impressed with the quality of the work! Everything was done exactly as I wanted in every small detail. I would certainly recommend him for any web development needs. I’m quite pleased with the outcome and look forward to collaborating with him on future projects",
  },
  {
    id: "vets-choice",
    img: "/brands/vets-choice-insurance-logo.png",
    name: "Rob Dow",
    title: "Co-Founder, Vets Choice Insurance",
    quote:
      "I'm happy to report that, despite my initial nervousness, I successfully placed my first Fiverr order with Safayat. He was very understanding of my design and specifications, and he took the time to answer all of my queries. Safayat used Node.js and Next.js to create an incredible, fully responsive CRM Admin Panel that flawlessly manages sales pipelines, customer data, and interactions. He fulfilled all of my requests and attended to all of my demands. I’m quite pleased with the outcome and look forward to collaborating with him on future projects. Highly recommended! Thanks Safayat",
  },
  {
    id: "bespoke",
    img: "/client-photos/bespoke-tint-owner-kris-256.webp",
    name: "Kris Meyer",
    title: "Owner, Bespoke Tint",
    quote:
      "Safayat is an exceptional developer. He delivered what I wanted and always does it on time. He has great work ethics and professionalism. He helped me with developing both backend and frontend with next js and node js for a social media platform with advanced database design and clean code. The work was done in a very short amount of time and exceeded all my expectations with pixel perfect design! I am impressed with the quality of the work! Everything was done exactly as I wanted in every small detail. I would certainly recommend him for any web development needs. Thank you Safayat!",
  },
  {
    id: "iao",
    img: "/client-photos/aleksandr-butowicz-iron-oak-profile-photo.jpg",
    name: "Aleks Butokowitz",
    title: "CEO, Iron & Oak",
    quote:
      "He is Very hard working and timely. you are a very good team player with outstanding logical thinking. I am impressed with the quality of the work! Everything was done exactly as I wanted in every small detail. I would certainly recommend him for any web development needs. I’m quite pleased with the outcome and look forward to collaborating with him on future projects",
  },
] as const satisfies readonly ReviewProps[];

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(
  REVIEWS.map((r) => [r.id, r])
);

export function getReview(id: string) {
  return REVIEW_MAP[id];
}
