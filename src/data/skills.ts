import {
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  Figma,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Server,
  Smartphone,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

export type SkillItem = {
  name: string;
  icon: LucideIcon;
  proficiency: number;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: Layout, proficiency: 94 },
      { name: "CSS", icon: Layers, proficiency: 91 },
      { name: "JavaScript", icon: Code2, proficiency: 88 },
      { name: "TypeScript", icon: Code2, proficiency: 84 },
      { name: "React", icon: Globe, proficiency: 89 },
      { name: "Next.js", icon: Globe, proficiency: 85 },
      { name: "Tailwind CSS", icon: Layout, proficiency: 90 },
      { name: "Framer Motion", icon: Box, proficiency: 82 },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native", icon: Smartphone, proficiency: 79 },
      { name: "Flutter", icon: Smartphone, proficiency: 67 },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Python", icon: Cpu, proficiency: 78 },
      { name: "Java", icon: Cpu, proficiency: 73 },
      { name: "C++", icon: Cpu, proficiency: 68 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server, proficiency: 80 },
      { name: "Express", icon: Server, proficiency: 78 },
      { name: "Django", icon: Database, proficiency: 74 },
      { name: "Flask", icon: Database, proficiency: 75 },
      { name: "REST APIs", icon: Database, proficiency: 86 },
      { name: "GraphQL", icon: Database, proficiency: 69 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: Cloud, proficiency: 70 },
      { name: "Firebase", icon: Cloud, proficiency: 79 },
      { name: "Vercel", icon: Cloud, proficiency: 86 },
      { name: "Docker", icon: Box, proficiency: 71 },
      { name: "Git", icon: GitBranch, proficiency: 88 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Figma", icon: Figma, proficiency: 77 },
      { name: "GitHub", icon: GitBranch, proficiency: 90 },
      { name: "Postman", icon: TestTube2, proficiency: 83 },
      { name: "Testing libs", icon: TestTube2, proficiency: 72 },
    ],
  },
];
