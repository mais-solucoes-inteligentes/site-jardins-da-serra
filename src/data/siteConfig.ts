/**
 * ==============================================================================
 * ARQUIVO CENTRAL DE CONFIGURAÇÃO DE CONTATO, REDES SOCIAIS E METADADOS
 * ==============================================================================
 * Altere aqui todas as informações da Jardins da Serra sempre que necessário.
 * Qualquer alteração neste arquivo atualizará automaticamente todo o site
 * (Header, Footer, Botões de WhatsApp, Seção de Contato, SEO e Redes Sociais).
 */

export const siteConfig = {
  name: "Jardins da Serra",
  tagline: "Jardinagem, Montagem e Projetos de Paisagismo na Serra Catarinense",
  description:
    "Especialistas em projetos de paisagismo, montagem, manutenção e cuidados de jardins para residências, condomínios e empresas em Lages e região.",
  url: "https://jardinsdaserra.com.br",
  ogImage: "/images/logo.png",

  // Analytics & Tags
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-57364PDM",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",

  // Dados de Contato e Atendimento
  contact: {
    // Número oficial único para ligações e WhatsApp: 55 049 98434-7166
    phonePrimary: "+55 (49) 98434-7166",
    phoneDisplay: "55 049 98434-7166",
    whatsAppNumber: "5549984347166",
    email: "contato@jardinsdaserra.com.br",
    city: "Lages",
    state: "SC",
    country: "Brasil",
    address: "Lages, Santa Catarina - Atendimento em toda a Região Serrana",
    businessHours: "Segunda a Sexta: 08h às 18h | Sábado: 08h às 12h",
  },

  // Redes Sociais e Mensagens
  social: {
    instagram: "https://instagram.com/jardinsdaserra",
    instagramHandle: "@jardinsdaserra",
    facebook: "https://facebook.com/jardinsdaserra.com.br",
    whatsappDefaultMessage:
      "Olá! Gostaria de solicitar um orçamento para serviços de jardinagem e paisagismo.",
  },

  // Navegação Principal
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
};
