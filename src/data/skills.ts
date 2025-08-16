import { Code, Palette, Zap, Users } from "lucide-react";

export type Skill = {
  icon: typeof Code;
  title: string;
  description: string;
  color: string;
};

export const skills: Skill[] = [
  {
    icon: Code,
    title: "Desenvolvimento Frontend",
    description:
      "React, TypeScript, Material UI, React Hook Form, Redux, Tailwind CSS, Framer Motion",
    color: "bg-white",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Backend",
    description: "Node.js, REST APIs, SQL/NoSQL (PostgreSQL, MongoDB)",
    color: "bg-white",
  },
  {
    icon: Users,
    title: "DevOps & Cloud",
    description: "AWS (EC2, S3), CI/CD, Deploys",
    color: "bg-black",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma",
    color: "bg-black",
  },
];
