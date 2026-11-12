export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Dr. Roberto Silveira",
    role: "Proprietário Residencial",
    location: "Lages, SC",
    content:
      "A equipe da Jardins da Serra transformou completamente o quintal da nossa casa. Eles entendem exatamente quais plantas sobrevivem ao inverno da serra. Pontuais, educados e deixaram tudo impecável!",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Juliana Mendes",
    role: "Gestora de Pousada",
    location: "Serra Catarinense, SC",
    content:
      "Temos contrato de manutenção mensal há mais de um ano. Os hóspedes sempre elogiam as flores e a grama verdinha logo na entrada da pousada. É uma tranquilidade não precisar se preocupar com nada.",
    rating: 5,
  },
  {
    id: "test-3",
    author: "Eng. Marcos Zanin",
    role: "Síndico de Condomínio",
    location: "Lages, SC",
    content:
      "A poda ornamental e o cuidado com as árvores do condomínio ficaram perfeitos. Emitiram nota fiscal certinha e a equipe trabalha sempre uniformizada com EPIs. Recomendo com certeza!",
    rating: 5,
  },
];
