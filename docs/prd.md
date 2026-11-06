# Site Jardins da Serra - Product Requirements Document (PRD)

**Versão:** 1.0.0  
**Data:** 06/11/2026  
**Autor:** Morgan (@pm)  
**Status:** Aprovado / Em Refinamento  

---

## 1. Goals and Background Context

### 1.1 Goals
* Prover uma vitrine digital oficial de alta sofisticação para o empreendimento **Jardins da Serra**.
* Maximizar a captura de leads qualificados (famílias e investidores) com canais diretos de contato (WhatsApp e formulário).
* Apresentar de forma clara e atraente os atributos do empreendimento: contato com a natureza, segurança, comodidades e localização.
* Garantir velocidade extrema de carregamento e experiência fluida em smartphones (Mobile-First).

### 1.2 Background Context
O empreendimento **Jardins da Serra** reúne o charme e o clima da serra com infraestrutura urbana de alto padrão. Para atrair e converter compradores — em sua maioria residentes em centros urbanos distantes — é indispensável um site que transmita o padrão estético, a segurança e a sensação de refúgio ecológico do empreendimento antes mesmo da primeira visita presencial.

### 1.3 Change Log
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 06/11/2026 | 1.0.0 | Criação inicial do PRD (YOLO Mode) | Morgan (@pm) |

---

## 2. Requirements

### 2.1 Functional Requirements (FR)

* **FR1 - Hero Section de Apresentação:** A tela inicial deve conter chamada principal de impacto, subtítulo com a proposta de valor, imagem/vídeo de fundo de alta definição e botões de ação (CTA) para "Conhecer o Projeto" e "Falar com Consultor".
* **FR2 - Seção Conceito & Atributos:** Exibir narrativa institucional ilustrada destacando os pilares do empreendimento: ar puro, privacidade, preservação ambiental e qualidade de vida.
* **FR3 - Galeria de Diferenciais / Infraestrutura:** Apresentar em grid responsivo os itens de infraestrutura (portaria 24h, clube social, quadras esportivas, trilhas ecológicas, heliponto ou mirante).
* **FR4 - Mapa de Localização & Acessos:** Mapa interativo ou ilustrado demonstrando as principais vias de acesso e tempo estimado até cidades vizinhas e pontos turísticos.
* **FR5 - Formulário de Contato e Agendamento:** Formulário com validação em tempo real contendo campos: Nome Completo, E-mail, Telefone/WhatsApp com máscara e seleção de interesse (Ex: "Quero agendar uma visita", "Quero receber a tabela de valores", "Falar com um corretor").
* **FR6 - Integração Direta com WhatsApp:** Botão flutuante persistente no canto inferior direito com mensagem pré-configurada (ex: *"Olá! Gostaria de saber mais sobre o Jardins da Serra."*).
* **FR7 - Feedback de Envio:** Exibição de mensagem visual de sucesso imediata após submissão do formulário, sem recarregamento de página (AJAX/State).
* **FR8 - Rodapé Informativo:** Rodapé com informações legais, dados de contato, registro imobiliário/CRECI e links para termos e redes sociais.

### 2.2 Non-Functional Requirements (NFR)

* **NFR1 - Responsividade Total:** O layout deve se adaptar com perfeição a dispositivos Mobile (360px+), Tablets e Desktops (até 4K).
* **NFR2 - Performance & Core Web Vitals:** Tempo de carregamento do LCP (Largest Contentful Paint) inferior a 2.0s em redes móveis 4G; pontuação Lighthouse >= 90 em Performance e SEO.
* **NFR3 - Acessibilidade:** Conformidade com padrões WCAG 2.1 AA (contraste de cores adequado, suporte a leitores de tela e navegação por teclado).
* **NFR4 - Otimização de Imagens:** Todas as imagens devem ser servidas em formatos modernos (WebP ou AVIF) com lazy loading para seções abaixo da dobra.
* **NFR5 - Segurança:** Sanitização completa de dados nos formulários contra injeção e proteção contra spam (Rate limiting ou reCAPTCHA v3/Turnstile).

---

## 3. User Interface Design Goals

* **Identidade Visual:** Sofisticada, acolhedora e conectada ao ambiente natural da serra.
* **Paleta de Cores Sugerida:**
  * Primária: Verde Floresta Profundo (`#1E3A2F`)
  * Secundária / Destaque: Dourado Suave / Champanhe (`#C5A880`)
  * Neutros: Off-white (`#F8F9F6`), Cinza Ardósia (`#2D3748`) e Branco Puro.
* **Tipografia:** Fonte serifada contemporânea para títulos (ex: *Playfair Display* ou *Cinzel*) e sem serifa clean para corpo de texto (ex: *Inter* ou *Plus Jakarta Sans*).

---

## 4. Out of Scope (Fora do Escopo MVP)

* Sistema de e-commerce ou pagamento de reservas online.
* Portal restrito com login para condôminos.
* Mapa 3D interativo com seleção de lotes em tempo real (previsto para Fase 2).

---

## 5. Next Steps

1. **Revisão e Aprovação:** Usuário confirma o escopo do PRD.
2. **Definição de Arquitetura (`@architect`):** Seleção de stack (React/Next.js + Tailwind CSS) e scaffold inicial.
3. **Criação de Stories (`@sm`):** Decomposição do PRD em tarefas de implementação em `docs/stories/`.
