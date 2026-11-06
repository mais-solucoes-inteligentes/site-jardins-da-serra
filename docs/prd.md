# Site Jardins da Serra - Product Requirements Document (PRD)

**Versão:** 1.1.0  
**Data:** 06/11/2026  
**Autores:** Pax (@po - Product Owner) & Morgan (@pm - Product Manager)  
**Status:** Detalhado & Pronto para Arquitetura  

---

## 1. Goals and Background Context

### 1.1 Goals
* Prover uma vitrine digital oficial de alto padrão para o empreendimento **Jardins da Serra**.
* Maximizar a captura de leads qualificados (famílias e investidores) com canais diretos de conversão (WhatsApp e formulário inteligente).
* Transmitir a atmosfera sensorial e exclusiva da serra: natureza preservada, arquitetura integrada, segurança e sofisticação.
* Apresentar portfólio tangível de projetos e infraestrutura para eliminar dúvidas de compra.
* Gerar forte prova social através de depoimentos de clientes, moradores e arquitetos parceiros.
* Integrar os pontos de contato da marca com suas redes sociais oficiais (Instagram, YouTube, etc.).
* Garantir performance mobile impecável (Lighthouse 90+ e LCP < 2.0s).

### 1.2 Background Context
O **Jardins da Serra** é um empreendimento imobiliário de serra que combina sustentabilidade, infraestrutura de ponta e privacidade. Compradores de alto padrão tomam decisões baseadas em confiança, reputação visual e sensação de exclusividade. Este PRD detalha as funcionalidades indispensáveis para construir essa percepção desde o primeiro clique: do logotipo e identidade visual até a prova social e a exibição de portfólio.

### 1.3 Change Log
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 06/11/2026 | 1.0.0 | Criação inicial do PRD (YOLO Mode) | Morgan (@pm) |
| 06/11/2026 | 1.1.0 | Detalhamento de Público-Alvo, Guia de Pesquisa/Benchmarks, Logo, Portfólio de Projetos, Depoimentos e Redes Sociais | Pax (@po) |

---

## 2. Público-Alvo Aprofundado (Target Audience)

Para orientar a linguagem visual, a arquitetura de informação e as copies do site, definimos três perfis prioritários:

### 2.1 Persona 1: Famílias em Busca de Refúgio e Qualidade de Vida (Comprador Principal)
* **Perfil:** Casais entre 34 e 58 anos com filhos pequenos ou adolescentes. Moram em grandes centros e buscam um refúgio para finais de semana, férias ou nova residência fixa.
* **Motivações:** Desejo de desconexão da rotina caótica da cidade; convivência familiar em segurança; contato direto dos filhos com a natureza e animais.
* **Comportamento Digital:** Navegam primariamente via iPhone/iPad; valorizam fotos reais em alta resolução, vídeos de drone e depoimentos de famílias que já vivem a experiência.
* **Foco no Site:** Querem ver segurança da portaria, áreas de lazer infantil, clube social e facilidade de acesso.

### 2.2 Persona 2: Executivos e Profissionais Liberais (Anywhere Office / Segunda Moradia)
* **Perfil:** Profissionais de tecnologia, mercado financeiro, médicos e advogados (30 a 50 anos) com rotina de trabalho híbrida ou flexível.
* **Motivações:** Equilíbrio entre alta produtividade e bem-estar; ambiente calmo para concentração com excelente infraestrutura tecnológica.
* **Necessidades Críticas:** Confirmação de internet de alta velocidade (fibra óptica), proximidade com aeroportos/rodovias e infraestrutura urbana subterrânea sem poluição visual.
* **Foco no Site:** Buscam dados técnicos de infraestrutura, portfólio de casas modelo modernas e atendimento ágil sem burocracia.

### 2.3 Persona 3: Investidores Imobiliários e Patrimoniais
* **Perfil:** Homens e mulheres de 40 a 65 anos com patrimônio diversificado buscando proteção contra inflação e valorização acima da média em ativos de serra.
* **Motivações:** Aquisição de lotes no lançamento ou primeiras fases com margem de valorização à medida que as obras avançam.
* **Foco no Site:** Credibilidade da incorporadora, prazos de entrega, potencial de valorização da região e canal direto com consultores de investimento.

---

## 3. O que Pesquisar para a Criação (Benchmarks & Referências)

Para garantir que o design e a experiência estejam no mesmo patamar dos melhores empreendimentos do país e do mundo:

### 3.1 Benchmarks de Referência
* **Nacionais:**
  * *Fazenda Boa Vista (JHSF):* Referência máxima em elegância minimalista, valorização de paisagismo e fotografia editorial de arquitetura.
  * *Quinta da Baroneza / Haras Larissa:* Excelente estrutura de apresentação de infraestrutura de lazer, haras, golfe e preservação natural.
  * *Condomínios de Serra (Campos do Jordão, Gramado e Serra Gaúcha):* Estudo de paletas de cores quentes, materiais nobres (madeira e pedra) e clima acolhedor.
* **Internacionais:**
  * *Projetos em Aspen, Jackson Hole e Alpes Suíços:* Sites de empreendimentos de montanha que utilizam tipografia refinada com serifa, vídeos cinematográficos em slow-motion e transições fluidas.

### 3.2 Tópicos de Pesquisa & Validação
1. **Fotografia e Vídeo:** Pesquisar banco de imagens de serra com iluminação golden hour, neblina matinal, vegetação nativa exuberante e texturas naturais.
2. **Copywriting Sensorial:** Termos e frases que evocam sensações ("Onde o tempo desacelera", "A natureza como extensão da sua sala", "O ar puro da serra").
3. **Padrões de Conversão de Alto Padrão:** O CTA não deve parecer agressivo como um e-commerce popular; deve convidar para experiências exclusivas ("Solicitar Apresentação Privada", "Conversar com um Especialista", "Agendar Visita Personalizada").

---

## 4. Requisitos de Identidade Visual & Branding (Logo)

* **Logotipo Oficial:**
  * Área reservada no Header e Footer com suporte a logo em formato SVG de alta nitidez.
  * Variações de exibição: versão monocromática/branca para fundos escuros (Hero) e versão com cores oficiais para header fixo com fundo claro ao rolar a página.
  * Favicon e Web App Manifest configurados para bookmarking em smartphones.
* **Paleta de Cores do Empreendimento:**
  * **Verde Serra / Floresta Profunda (`#1A382B`):** Transmite natureza, solidez e tradição.
  * **Dourado Champagne / Areia Nobre (`#C2A26A`):** Destaque para requinte, exclusividade e botões de ação.
  * **Off-White / Linho Suave (`#F7F8F5`):** Fundo principal limpo e agradável à leitura.
  * **Grafite Vulcânico (`#222625`):** Textos e contrastes de alta legibilidade.
* **Tipografia Recomendada:**
  * Títulos: *Cinzel*, *Playfair Display* ou *Cormorant Garamond* (elegância atemporal).
  * Textos Corridos e UI: *Plus Jakarta Sans* ou *Inter* (clareza moderna e legibilidade em telas pequenas).

---

## 5. Functional Requirements (FR)

### 5.1 Navegação & Identidade
* **FR1 - Header com Logo & Menu Sticky:** Header inteligente que se mantém visível ao rolar a página com o Logotipo do Jardins da Serra, links rápidos de navegação (*O Empreendimento*, *Diferenciais*, *Portfólio*, *Depoimentos*, *Localização*, *Contato*) e botão CTA *"Agendar Visita"*.
* **FR2 - Hero Section de Grande Impacto:** Vídeo de fundo ou banner em alta resolução com título inspirador, subtítulo de valor e dois CTAs claros (um para rolagem até o portfólio e outro para o WhatsApp).

### 5.2 Conteúdo & Proposta de Valor
* **FR3 - Seção Conceito & Pilares da Serra:** Narrativa institucional com ícones e fotos sobre preservação ambiental, ar puro, segurança e conveniência.
* **FR4 - Galeria de Diferenciais / Infraestrutura:** Cards interativos com fotos e descritivos: portaria blindada 24h, clube com piscina aquecida, quadras de tênis/beach tennis, trilhas ecológicas, fiação subterrânea e mirante panorâmico.

### 5.3 Portfólio & Demonstração Real (Novo)
* **FR5 - Área de Portfólio de Projetos:**
  * Vitrine visual exibindo:
    * Casas Conceito / Casas Modelo sugeridas para o loteamento.
    * Infraestrutura entregue e em andamento (fotos reais da portaria, ruas pavimentadas, paisagismo).
    * Exemplos de topografia e vista dos lotes.
  * Filtros por categoria para facilitar a exploração: `[ Todos ]`, `[ Casas Conceito ]`, `[ Obras & Infraestrutura ]`, `[ Natureza & Lazer ]`.
  * Visualizador em Lightbox (zoom e visualização em tela cheia das fotos).

### 5.4 Prova Social & Autoridade (Novo)
* **FR6 - Área de Depoimentos & Avaliações:**
  * Carrossel responsivo ou grade de depoimentos com citações autênticas de:
    * Primeiros compradores/moradores sobre a decisão de investir no Jardins da Serra.
    * Arquiteto renomado ou paisagista responsável pelo conceito do projeto.
  * Cada depoimento deve conter: Foto de perfil, Nome, Perfil ("Morador da Fase 1" ou "Investidor") e texto com a experiência vivenciada.

### 5.5 Presença Social & Conectividade (Novo)
* **FR7 - Integração com Redes Sociais:**
  * Links diretos e ícones estilizados para os perfis oficiais: Instagram (`@jardinsdaserra`), YouTube, Facebook e LinkedIn no topo, rodapé e seção dedicada.
  * Seção *"Acompanhe o Jardins da Serra no Instagram"*: Mosaico visual com preview de fotos recentes do dia a dia no empreendimento, convidando o usuário a seguir a página.
  * Meta Tags Open Graph completas (imagem, título e descrição customizados para pré-visualização elegante quando o link do site for compartilhado no WhatsApp ou Instagram).

### 5.6 Conversão & Contato
* **FR8 - Mapa de Localização e Proximidades:** Mapa integrado indicando as vias de acesso, tempo até centros urbanos e atrações regionais.
* **FR9 - Formulário de Agendamento e Contato:** Formulário com validação em tempo real contendo campos: Nome Completo, E-mail, Telefone/WhatsApp com máscara, e seleção de interesse.
* **FR10 - Botão Flutuante do WhatsApp:** Botão persistente com animação discreta no canto inferior direito abrindo conversa imediata com mensagem contextualizada.
* **FR11 - Rodapé Completo:** Logo oficial, dados cadastrais da empresa/incorporadora, links de conformidade legal (LGPD, Termos de Uso), selo CRECI e mapa do site.

---

## 6. Non-Functional Requirements (NFR)

* **NFR1 - Mobile-First:** Experiência nativa e ágil em smartphones (navegação por toque, imagens responsivas, botões de toque com tamanho mínimo de 48px).
* **NFR2 - Performance & Core Web Vitals:** LCP < 2.0s em conexões 4G; pontuação Lighthouse >= 90 em Performance, Acessibilidade e SEO.
* **NFR3 - Otimização de Imagens:** Suporte obrigatório a formatos de última geração (WebP e AVIF) com carregamento preguiçoso (*lazy loading*).
* **NFR4 - Acessibilidade:** Conformidade WCAG 2.1 nível AA (contraste mínimo de 4.5:1 para textos, suporte a leitor de tela e navegação por teclado).
* **NFR5 - Segurança & Privacidade:** Conformidade com a LGPD (checkbox de aceite e política de privacidade transparente no formulário).

---

## 7. Próximos Passos & Handoff do PO

1. **Validação do PO:** Escopo do PRD balanceado entre valor comercial de conversão e viabilidade técnica ágil.
2. **Handoff para `@architect`:** Criação da especificação de arquitetura técnica (`docs/architecture/tech-stack.md` e estrutura de componentes React/Next.js).
3. **Handoff para `@ux-design-expert`:** Estruturação dos wireframes e Design Tokens com as cores e tipografias aprovadas.
4. **Handoff para `@sm`:** Geração das primeiras histórias de implementação em `docs/stories/`.
