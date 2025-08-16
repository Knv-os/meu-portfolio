export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Log Nature",
    description:
      "E-commerce especializado em equipamentos e tecnologias para conservação da biodiversidade. Plataforma completa com catálogo de produtos, sistema de carrinho, blog e parcerias com fornecedores especializados.",
    image: "/images/lognature.png",
    technologies: ["React", "E-commerce", "SEO", "Responsive Design"],
    githubUrl: "https://github.com",
    liveUrl: "https://lognature.com.br/",
    featured: true,
  },
  {
    id: 2,
    title: "Nature Experience",
    description:
      "Site institucional para o primeiro evento da América Latina focado em tecnologia para conservação da biodiversidade. Interface moderna com sistema de ingressos e gestão de palestrantes.",
    image: "/images/nx.png",
    technologies: ["React", "Event Management", "Modern UI", "Responsive"],
    githubUrl: "https://github.com",
    liveUrl: "https://natureexperience.com.br/",
    featured: true,
  },
  {
    id: 3,
    title: "Bionote",
    description:
      "Frontend do site oficial do Bionote (portal de download) e também do app com React Native e Electron, que usa IA para triagem e verificação de presença de animais em vídeos de câmeras trap. Foco em performance, acessibilidade e integração com o ecossistema do produto.",
    image: "/images/bionote.png",
    technologies: [
      "React",
      "TypeScript",
      "Google Cognito",
      "Nodemailer",
      "React Native",
      "Electron",
      "IA",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://bionote.com.br/",
    featured: true,
  },
];
