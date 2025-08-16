import { Mail, Phone, MapPin } from "lucide-react";

export type ContactItem = {
  icon: typeof Mail;
  title: string;
  value: string;
  href: string;
};

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    title: "E-mail",
    value: "kevindevweb@gmail.com",
    href: "mailto:kevindevweb@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(19) 99923-0626",
    href: "tel:+5519999230626",
  },
  {
    icon: MapPin,
    title: "Local",
    value: "Belo Horizonte – MG (natural de São Paulo – SP)",
    href: "#",
  },
];
