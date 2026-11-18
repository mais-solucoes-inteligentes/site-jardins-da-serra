export const siteConfig = {
  name: "Jardins da Serra",
  tagline: "Jardinagem, Montagem e Projetos de Paisagismo na Serra Catarinense",
  description:
    "Especialistas em projetos de paisagismo, montagem, manutenção e cuidados de jardins para residências, condomínios e empresas em Lages e região.",
  url: "https://jardinsdaserra.com.br",
  ogImage: "/images/logo.png",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  contact: {
    phonePrimary: "(49) 9 8423-5653",
    phoneSecondary: "(49) 9 9931-2452",
    whatsAppNumber: "49984235653",
    email: "contato@jardinsdaserra.com.br",
    city: "Lages",
    state: "SC",
    country: "Brasil",
    address: "Lages, Santa Catarina - Atendimento em toda a Região Serrana",
    businessHours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
  },
  social: {
    instagram: "https://instagram.com/jardinsdaserra",
    facebook: "https://facebook.com/jardinsdaserra.com.br",
    whatsappDefaultMessage:
      "Olá! Gostaria de solicitar um orçamento para serviços de jardinagem e paisagismo.",
  },
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
};
