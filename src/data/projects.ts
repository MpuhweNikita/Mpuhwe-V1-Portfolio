export type ProjectCategory = "all" | "frontend" | "mobile" | "full-stack";

export type Project = {
  id: string;
  title: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string;
  results: string;
};

export const projects: Project[] = [
  {
    id: "ubaka",
    title: "Ubaka",
    role: "Fullstack Developer & Mobile Developer",
    shortDescription: "A platform connecting truck owners with clients needing building materials.",
    longDescription: "A logistics platform that connects construction clients with truck owners for materials delivery, including real-time mapping and price negotiation features.",
    category: "full-stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    challenges: "Building a reliable real-time negotiation and bidding system between truck owners and clients.",
    results: "Launched a highly requested platform that centralizes construction logistics in the local market.",
  },
  {
    id: "sarura",
    title: "Sarura",
    role: "Frontend Developer",
    shortDescription: "An app that modernizes agriculture by helping farmers detect plant diseases early.",
    longDescription: "Sarura provides treatment solutions and connects farmers directly to markets, significantly reducing the reliance on middlemen. Features early plant disease detection through image analysis.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    tech: ["React", "Next.js", "Tailwind CSS"],
    challenges: "Creating an accessible, intuitive interface for rural farmers with varying degrees of tech literacy.",
    results: "Delivered a clean, robust frontend that successfully bridged the gap between modern tech and traditional farming.",
  },
  {
    id: "minelynx",
    title: "MineLynx",
    role: "Embedded Systems Engineer & Assistant Frontend Developer",
    shortDescription: "A software and mobile app that improves mining safety by detecting environmental changes.",
    longDescription: "MineLynx alerts users of potential dangers inside mining sites through integrated embedded systems sensors that constantly monitor environmental data.",
    category: "full-stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["C++", "Arduino", "React Native", "MQTT"],
    challenges: "Syncing low-latency hardware sensor data with the mobile application reliably in poor network conditions.",
    results: "Developed a functional prototype that improved on-site situational awareness and response times.",
  },
  {
    id: "feedguard",
    title: "FeedGuard",
    role: "Frontend Developer",
    shortDescription: "A system that helps leaders understand citizens' living conditions.",
    longDescription: "An analytics and reporting system built to assist governmental and organizational leaders in better planning and resource allocation by tracking real living conditions.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tech: ["React.js", "Typescript", "TailwindCSS", "Chart.js"],
    challenges: "Visualizing massive datasets in an accessible and performant way for decision makers.",
    results: "Created intuitive, fast-loading dashboard interfaces that drastically cut down report generation time.",
  },
  {
    id: "brainlycode",
    title: "Brainly Code",
    role: "Designer",
    shortDescription: "A software that helps learners learn coding basics.",
    longDescription: "An interactive educational platform designed to introduce beginners to coding through engaging courses, challenges, and step-by-step logic puzzles.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tech: ["Figma", "UI/UX", "Prototyping"],
    challenges: "Designing an interface that feels encouraging and gamified without being distracting.",
    results: "Produced a complete, highly-rated design system and prototype that guided the development team.",
  },
  
];
