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
    imageUrl:
      "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80",
    aspect: "horizontal",
  },
];
