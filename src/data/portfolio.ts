export interface PortfolioItem {
  id: string;
  title: string;
  category: "residencial" | "comercial" | "manutencao" | "decoracao";
  categoryLabel: string;
  location: string;
  description: string;
  imageUrl: string;
  aspect: string;
}

export const portfolioCategories = [
  { id: "todos", label: "Todos os Projetos" },
  { id: "residencial", label: "Jardins Residenciais" },
  { id: "comercial", label: "Comercial & Empresas" },
  { id: "manutencao", label: "Manutenção & Podas" },
  { id: "decoracao", label: "Decoração & Caminhos" },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "Jardim Residencial em Condomínio Fechado",
    category: "residencial",
    categoryLabel: "Residencial",
    location: "Lages, SC",
    description:
      "Implantação completa de gramado esmeralda com canteiros floridos de azaléias, buxinhos podados e iluminação solar embutida.",
    imageUrl: "/images/portfolio/proj-1.jpg",
    aspect: "horizontal",
  },
  {
    id: "proj-2",
    title: "Fachada Verde e Recepção Corporativa",
    category: "comercial",
    categoryLabel: "Comercial",
    location: "Centro, Lages, SC",
    description:
      "Paisagismo imponente para entrada de clínica médica, com palmeiras resistentes ao frio, seixos brancos e vasos vietnamitas.",
    imageUrl: "/images/portfolio/proj-2.jpg",
    aspect: "horizontal",
  },
  {
    id: "proj-3",
    title: "Revitalização e Poda Artística de Chácara",
    category: "manutencao",
    categoryLabel: "Manutenção",
    location: "Região Serrana, SC",
    description:
      "Recuperação de 2.000m² de gramado castigado pela geada, limpeza de encostas e poda ornamental de arbustos e copas.",
    imageUrl: "/images/portfolio/proj-3.jpg",
    aspect: "horizontal",
  },
  {
    id: "proj-4",
    title: "Caminho de Pedras com Pergolado Rústico",
    category: "decoracao",
    categoryLabel: "Decoração",
    location: "Lages, SC",
    description:
      "Trilha de dormentes de trem e pedra moída com lavandas e agapantos floridos nas laterais, convidando ao descanso.",
    imageUrl: "/images/portfolio/proj-4.jpg",
    aspect: "horizontal",
  },
  {
    id: "proj-5",
    title: "Jardim de Inverno com Plantas Tropicais Aclimatadas",
    category: "residencial",
    categoryLabel: "Residencial",
    location: "Coral, Lages, SC",
    description:
      "Espaço interno envidraçado com samambaias nobres, costelas-de-adão e fonte natural de água com pedras de rio.",
    imageUrl: "/images/portfolio/proj-5.jpg",
    aspect: "horizontal",
  },
  {
    id: "proj-6",
    title: "Manutenção Contínua em Pousada da Serra",
    category: "comercial",
    categoryLabel: "Comercial",
    location: "Serra Catarinense",
    description:
      "Contrato mensal de conservação de canteiros de hortênsias e gramados amplos para receber hóspedes de inverno.",
    imageUrl: "/images/portfolio/proj-6.jpg",
    aspect: "horizontal",
  },
];

