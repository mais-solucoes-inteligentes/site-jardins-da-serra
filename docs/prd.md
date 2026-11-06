# Site Jardins da Serra - Product Requirements Document (PRD)

**Versão:** 2.0.0  
**Data:** 06/11/2026  
**Autores:** Pax (@po - Product Owner) & Morgan (@pm - Product Manager)  
**Status:** Aprovado / Alinhado com o Brand Book Oficial  

---

## 1. Goals and Background Context

### 1.1 Goals
* Prover uma vitrine digital profissional e encantadora para a empresa **Jardins da Serra**, destacando sua autoridade em **Jardinagem, Montagem e Paisagismo** na Serra Catarinense.
* Maximizar a geração de leads para **solicitação de orçamentos e agendamentos de visitas técnicas** através de canais diretos (WhatsApp e formulário rápido).
* Exibir um **Portfólio interativo** de trabalhos realizados (jardins residenciais, comerciais, antes/depois e manutenção).
* Demonstrar credibilidade com **Depoimentos e Avaliações reais** de clientes da região.
* Fomentar a comunidade e presença nas **Redes Sociais** (Instagram, Facebook e WhatsApp).
* Garantir velocidade máxima de carregamento, responsividade e fidelidade total ao Manual de Identidade Visual da marca.

### 1.2 Background Context
A empresa **Jardins da Serra** (sediada em Lages/SC) atua no mercado de jardinagem, montagem, manutenção e projetos de paisagismo inspirados na vegetação e clima característico da Serra Catarinense. Para competir e fechar contratos de alto ticket (projetos completos e manutenções mensais), a empresa precisa de uma presença web moderna que valorize a estética botânica, transmita solidez e ofereça atendimento imediato via WhatsApp.

### 1.3 Change Log
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 06/11/2026 | 1.0.0 | Criação inicial do PRD (YOLO Mode) | Morgan (@pm) |
| 06/11/2026 | 1.1.0 | Detalhamento de Seções e Redes Sociais | Pax (@po) |
| 06/11/2026 | 2.0.0 | **Pivot e Alinhamento com o Brand Book Oficial:** Jardinagem & Paisagismo, Cores Pantone/Hex, Portfólio de Obras e Serviços Botânicos | Pax (@po) |

---

## 2. Identidade Visual & Diretrizes da Marca (Brand Book Oficial)

### 2.1 Cores Oficiais da Marca
* **Verde Natureza (`#65A631` | Pantone 7489C | RGB: 101, 166, 49):**
  * *Significado no Manual:* Calma, energia vital, natureza, crescimento e prosperidade.
  * *Uso no Site:* Botões de ação principais, ícones de destaque, molduras e detalhes ativos.
* **Marrom Terra (`#663124` | Pantone 4705C | RGB: 102, 49, 36):**
  * *Significado no Manual:* A cor da terra fértil, estabilidade, aconchego e solidez.
  * *Uso no Site:* Títulos principais, textos em destaque, rodapés e elementos de estrutura.
* **Amarelo Solar / Apoio (`#FFF688` | Pantone 100C | RGB: 255, 246, 136):**
  * *Significado no Manual:* Pattern e apoio luminoso.
  * *Uso no Site:* Fundo de cards especiais, banners de destaque e badges comemorativas.
* **Cores Neutras Complementares:**
  * Branco Puro (`#FFFFFF`) e Cinza Suave (`#F8F9FA`) para respiro e contraste.

### 2.2 Logotipo Oficial
* Símbolo em proporção áurea (Fibonacci) composto por folhas estilizadas e contorno em folha envolvente.
* Aplicação em formato SVG ou PNG transparente no Header (versão horizontal/compacta) e Rodapé.
* Arquivos salvos no repositório:
  * [`docs/assets/logo.png`](file:///c:/Doc/Dev/site-jardins-da-serra/docs/assets/logo.png) (transparente)
  * [`docs/assets/logo-card.jpg`](file:///c:/Doc/Dev/site-jardins-da-serra/docs/assets/logo-card.jpg) (fundo amarelo)

### 2.3 Tipografia Oficial
* **Tipografia da Marca:** *Fontastique* (sem serifa, traços orgânicos curvos nas extremidades, caixa alta).
* **Tipografia Web / UI:** Fonte sans-serif geométrica moderna e legível (ex: *Poppins*, *Plus Jakarta Sans* ou *Inter*).

---

## 3. Público-Alvo e Segmentos de Clientes

### 3.1 Persona Residencial: Proprietários de Casas e Chácaras
* **Necessidade:** Querem um jardim florido, gramado verde uniforme e plantas saudáveis, mas não têm tempo ou conhecimento técnico para manter.
* **Decisão de Compra:** Valorizam fotos de projetos anteriores parecidos com sua casa e facilidade de agendar um orçamento sem compromisso.

### 3.2 Persona Corporativa: Gestores de Empresas, Pousadas e Clínicas
* **Necessidade:** Manter a fachada e áreas de convivência sempre bem cuidadas para transmitir profissionalismo e acolhimento aos seus clientes.
* **Decisão de Compra:** Contratos de manutenção periódica (mensal), pontualidade, equipe uniformizada e nota fiscal.

---

## 4. Requisitos Funcionais (FR)

### 4.1 Navegação & Apresentação
* **FR1 - Header Fixo com Logo e Contatos Rápidos:** Logotipo oficial da Jardins da Serra, menu de ancoragem (*Início*, *Serviços*, *Portfólio*, *Sobre Nós*, *Depoimentos*, *Contato*), botão direto de WhatsApp e telefone `(49) 9 8423-5653`.
* **FR2 - Hero Section Cênica:** Imagem/vídeo de fundo de jardim exuberante na serra, headline de impacto (*"Paisagismo e Jardinagem que Transformam seu Espaço na Serra Catarinense"*), subtítulo sobre serviços residenciais e comerciais, e dois CTAs: *"Solicitar Orçamento Gratuito"* e *"Ver Portfólio de Jardins"*.

### 4.2 Catálogo de Serviços
* **FR3 - Seção de Serviços Especializados:** Cards modernos ilustrados com ícones e fotos para os serviços:
  1. *Projetos de Paisagismo 2D/3D*
  2. *Execução e Montagem Completa de Jardins*
  3. *Manutenção Preventiva, Podas e Limpeza Periódica*
  4. *Instalação de Peças Decorativas, Pedras e Vasos Nobres*
  5. *Recuperação de Gramados e Controle de Pragas*

### 4.3 Portfólio de Trabalhos (Vitrine Botânica)
* **FR4 - Galeria Interativa de Projetos:**
  * Grade responsiva de fotos em alta qualidade de trabalhos realizados.
  * Filtros de visualização por aba: `[ Todos ]`, `[ Jardins Residenciais ]`, `[ Comerciais ]`, `[ Antes e Depois ]`, `[ Vasos & Decoração ]`.
  * Visualizador em tela cheia (**Lightbox / Modal**) com zoom e descrição botânica das plantas utilizadas.

### 4.4 Prova Social & Autoridade
* **FR5 - Depoimentos de Clientes & Parceiros:** Carrossel de avaliações reais de proprietários e empresários da região da serra, com foto, nome, bairro/cidade e relato da experiência.
* **FR6 - Selos de Confiança e Diferenciais:** Ícones com garantias: *Plantas adaptadas ao clima frio da serra*, *Equipe qualificada e uniformizada*, *Atendimento pontual em Lages e região*.

### 4.5 Integração com Redes Sociais & Contato
* **FR7 - Conexão com Redes Sociais:**
  * Seção *"Siga o Jardins da Serra no Instagram"* com feed preview de postagens do dia a dia.
  * Links diretos para Facebook (`facebook.com/jardinsdaserra.net.br`) e Instagram.
* **FR8 - Botão Flutuante do WhatsApp:** Ícone oficial do WhatsApp no canto inferior direito com mensagem personalizada (*"Olá! Gostaria de um orçamento para meu jardim."*).
* **FR9 - Formulário de Orçamento / Visita Técnica:** Campos: Nome Completo, WhatsApp/Telefone, Bairro/Cidade, Tipo de Serviço (Paisagismo / Montagem / Manutenção) e Foto opcional do espaço atual.
* **FR10 - Rodapé Institucional:** Logotipo, endereço e dados de atendimento de Lages - SC, links de redes sociais, mapa do site e direitos reservados.

---

## 5. Requisitos Não-Funcionais (NFR)

* **NFR1 - Performance & Core Web Vitals:** Carregamento ultraveloz (LCP < 2.0s em 4G móvel) e nota Lighthouse >= 90.
* **NFR2 - Responsividade Perfeita:** Mobile-First, adaptando-se sem quebras desde smartphones pequenos (360px) até monitores 4K.
* **NFR3 - Otimização de Mídias:** Compressão automática de fotos de jardins em WebP/AVIF com lazy loading.
* **NFR4 - Acessibilidade:** Conformidade WCAG 2.1 AA (contraste de cor marrom/verde testado, textos alternativos nas imagens botânicas).

---

## 6. Próximos Passos (Workflow AIOS)

1. **Aprovação do PO:** Alinhamento completo com os ativos oficiais.
2. **Handoff para `@architect`:** Criação da arquitetura de software (Next.js 15 + Tailwind CSS + Lucide Icons) incorporando as cores hex oficiais (`#65A631`, `#663124`, `#FFF688`) e os assets do logo.
3. **Handoff para `@sm`:** Geração das histórias técnicas em `docs/stories/`.
