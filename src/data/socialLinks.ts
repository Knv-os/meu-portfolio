import { Github, Linkedin, Mail } from "lucide-react";

export type SocialLink = {
  icon: typeof Github;
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/Knv-os", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kevin-de-oliveira-sousa-976376234/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kevindevweb@gmail.com", label: "E-mail" },
];
