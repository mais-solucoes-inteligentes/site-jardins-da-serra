export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "paisagismo",
    title: "Projetos de Paisagismo",
    shortDescription:
      "Planejamento botânico 2D e 3D personalizado respeitando a topografia e a vegetação nativa da Serra Catarinense.",
    fullDescription:
      "Desenvolvemos conceitos únicos de paisagismo para residências, condomínios fechados e empresas, escolhendo espécies florais e arbustivas resistentes às geadas e adaptadas ao clima serrano.",
    iconName: "Trees",
    highlights: [
      "Plantas adaptadas ao clima frio da serra",
      "Projeto 3D e memorial botânico completo",
      "Integração com iluminação cênica e caminhos",
    ],
  },
  {
    id: "montagem",
    title: "Montagem & Execução de Jardins",
    shortDescription:
      "Preparação do solo, nivelamento, correção de acidez, adubação e plantio de gramados e mudas selecionadas.",
    fullDescription:
      "Transformamos o terreno bruto em um jardim exuberante com rapidez e técnica. Seleção das melhores gramas (Esmeralda, São Carlos, Batatais) e árvores ornamentais.",
    iconName: "Shovel",
    highlights: [
      "Preparação e correção profissional do solo",
      "Plantio de gramas em rolos com alta densidade",
      "Plantio de mudas saudáveis e adubadas",
    ],
  },
  {
    id: "manutencao",
    title: "Manutenção & Limpeza Periódica",
    shortDescription:
      "Planos mensais ou quinzenais de corte de grama, podas técnicas, combate a pragas e adubação contínua.",
    fullDescription:
      "Seu jardim sempre verde, podado e florido o ano inteiro. Cuidamos de cada detalhe com equipe uniformizada, equipamentos próprios e descarte ecológico dos resíduos.",
    iconName: "Scissors",
    highlights: [
      "Podas de formação, limpeza e artísticas",
      "Controle fitossanitário e adubação sazonal",
      "Planos residenciais e corporativos",
    ],
  },
  {
    id: "decoracao",
    title: "Decoração & Pedras Ornamentais",
    shortDescription:
      "Instalação de caminhos de pedras nobres, vasos decorativos, dormentes, cascas de pinus e pergolados.",
    fullDescription:
      "Agregamos sofisticação e funcionalidade aos canteiros com elementos minerais e madeira nobre, criando caminhos agradáveis e áreas de contemplação.",
    iconName: "Sparkles",
    highlights: [
      "Seixos, britas decorativas e pedras da serra",
      "Vasos vietnamitas e cimento queimado",
      "Canteiros delineados com separadores ecológicos",
    ],
  },
];

