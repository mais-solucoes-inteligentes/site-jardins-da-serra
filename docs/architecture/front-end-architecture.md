# Site Jardins da Serra - Frontend Architecture Document

**Versão:** 1.0.0  
**Data:** 12/11/2026  
**Autor:** Aria (@architect - System Architect)  
**Status:** Aprovado  
**Documentos Relacionados:** [`docs/prd.md`](file:///c:/Doc/Dev/site-jardins-da-serra/docs/prd.md), [`docs/brief.md`](file:///c:/Doc/Dev/site-jardins-da-serra/docs/brief.md)  

---

## 1. Visão Geral da Arquitetura & Escolha de Framework

O projeto **Site Jardins da Serra** é uma aplicação web moderna, responsiva e de alta performance desenvolvida para apresentar os serviços de **Jardinagem, Montagem de Jardins e Projetos de Paisagismo** da empresa, com foco na captação de clientes residenciais e corporativos na Serra Catarinense.

### 1.1 Decisão Tecnológica: Next.js 15 (App Router) + React 19 + TypeScript
* **Por que Next.js (App Router)?**
  * **SEO Superior & Metadata:** Essencial para indexação de serviços locais em Lages e região (*"jardinagem em Lages", "paisagismo serra catarinense"*). Suporte nativo a Open Graph dinâmico e JSON-LD (`LocalBusiness`).
  * **Static Site Generation (SSG / Export):** Gera páginas estáticas ultrarrápidas distribuídas globalmente por CDN, garantindo LCP < 1.5s e custo de hospedagem zero (Vercel ou Netlify).
  * **Image Optimization:** Otimização automática e conversão sob demanda para WebP/AVIF através de `next/image`.
  * **Developer Experience & Tipagem:** TypeScript em 100% da base para evitar erros de runtime.

---

## 2. Frontend Tech Stack

| Camada / Função | Tecnologia | Versão | Propósito & Justificativa |
| :--- | :--- | :--- | :--- |
| **Framework Base** | Next.js | `^15.x` | App Router, Server Components para SEO e SSG de alta performance |
| **Biblioteca de UI** | React | `^19.x` | Ecossistema maduro, componentes declarativos e hooks |
| **Tipagem** | TypeScript | `^5.x` | Tipagem estática rigorosa para dados de portfólio, serviços e forms |
| **Estilização** | Tailwind CSS | `^3.4.x` | Utility-first CSS com configuração de tokens oficiais do Brand Book |
| **Ícones** | Lucide React | `^0.4x` | Biblioteca de ícones SVG limpos, leves e temáticos (botânica, contato, etc.) |
| **Animações Sutis** | Framer Motion / CSS Transitions | `^11.x` | Microinterações de scroll, abertura suave de Lightbox e transições de abas |
| **Validação de Forms** | React Hook Form + Zod | `^7.x` | Validação client-side rápida e sem renderizações desnecessárias |

---

## 3. Design Tokens & Configuração do Tema (Brand Book Oficial)

A configuração do Tailwind CSS estende a paleta corporativa definida no **Manual de Identidade Visual (Março 2017)**:

```javascript
// tailwind.config.ts - Excert
theme: {
  extend: {
    colors: {
      brand: {
        green: {
          DEFAULT: '#65A631', // Pantone 7489C (RGB: 101, 166, 49)
          light: '#7fc446',
          dark: '#4e8224',
        },
        brown: {
          DEFAULT: '#663124', // Pantone 4705C (RGB: 102, 49, 36)
          light: '#803e2e',
          dark: '#4c241a',
        },
        yellow: {
          DEFAULT: '#FFF688', // Pantone 100C (RGB: 255, 246, 136)
          light: '#fff9ab',
          dark: '#e6dc70',
        },
        surface: '#FDFEFD',
        darkText: '#222625',
        muted: '#6B7280',
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      brand: ['Fontastique', 'var(--font-sans)', 'sans-serif'], // Fonte da marca
    }
  }
}
```

---

## 4. Arquitetura de Componentes & Estrutura de Pastas

A estrutura segue o padrão modular do Next.js App Router:

```
src/
├── app/
│   ├── layout.tsx              # Root Layout (Metadados, fontes, Header e Footer globais)
│   ├── page.tsx                # Página principal (Landing Page One-Page estruturada)
│   ├── globals.css             # Diretivas do Tailwind e variáveis CSS
│   ├── robots.ts               # Diretivas para motores de busca
│   └── sitemap.ts              # Sitemap XML dinâmico
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Header sticky com Logo SVG/PNG, menu e CTA WhatsApp
│   │   ├── Footer.tsx          # Rodapé com dados de contato (Lages/SC), redes e links
│   │   └── WhatsAppButton.tsx  # Botão flutuante persistente com pulso discreto
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Apresentação de impacto, headline botânica e CTAs
│   │   ├── ServicesSection.tsx # Grid de serviços (Paisagismo, Montagem, Manutenção, Peças)
│   │   ├── PortfolioSection.tsx# Galeria categorizada de fotos de jardins com abas de filtro
│   │   ├── AboutSection.tsx    # Narrativa da empresa (inspiração na Serra Catarinense)
│   │   ├── TestimonialsSection.tsx # Prova social com depoimentos e fotos de clientes
│   │   ├── InstagramSection.tsx# Grid de fotos do feed do Instagram com convite para seguir
│   │   └── ContactSection.tsx  # Formulário de orçamento com validação e mapa de atendimento
│   │
│   └── ui/
│       ├── Button.tsx          # Componente de botão padronizado com variantes
│       ├── SectionHeading.tsx  # Cabeçalho de seção com identidade visual verde/marrom
│       ├── Lightbox.tsx        # Modal de visualização ampliada de fotos do portfólio
│       └── Badge.tsx           # Tags de categorias e destaques
│
├── data/
│   ├── services.ts             # Dados estruturados dos serviços e descrições técnicas
│   ├── portfolio.ts            # Lista de itens do portfólio (categoria, imagem, descrição)
│   ├── testimonials.ts         # Depoimentos de clientes e perfis
│   └── siteConfig.ts           # Telefones, links sociais, coordenadas e metadados globais
│
└── lib/
    ├── utils.ts                # Utilitários auxiliares (cn, máscaras de telefone)
    └── schema.ts               # Schema.org JSON-LD para SEO local (LocalBusiness)
```

---

## 5. Fluxo de Dados & Estado da Aplicação

Como se trata de uma Landing Page focada em conversão e velocidade:
1. **Estado do Portfólio (Client Component):**
   * Filtro ativo: `'todos' | 'residencial' | 'comercial' | 'antes-depois' | 'decoracao'`.
   * Foto ativa no Lightbox: `PortfolioItem | null` para abertura fluida em modal sem recarregar a página.
2. **Estado do Formulário de Orçamento (React Hook Form):**
   * Validação em tempo real dos campos obrigatórios (Nome, WhatsApp válido com DDD, Tipo de Serviço).
   * Feedback visual imediato com mensagem de sucesso após envio e opção de redirecionamento opcional para o WhatsApp com os dados preenchidos.
3. **Dados Estáticos Centralizados:**
   * Todos os textos, fotos e depoimentos vivem em `src/data/`, facilitando edições futuras sem tocar na lógica dos componentes.

---

## 6. SEO, Metadados & Otimização de Performance

* **Open Graph & Twitter Cards:** Configurados em `layout.tsx` utilizando as imagens do logo em `docs/assets/logo.png`.
* **JSON-LD LocalBusiness:**
  * Nome: *Jardins da Serra - Jardinagem e Paisagismo*
  * Endereço: *Lages, Santa Catarina, Brasil*
  * Telefone: `+55 49 98423-5653`
  * Serviços: *Landscape Service, Gardening Service*
* **Imagens:** Formato WebP/AVIF com `priority` configurado apenas na imagem de Hero; todas as outras com `loading="lazy"` automático.

---

## 7. Próximos Passos de Execução

1. **Scaffold da Aplicação:** Criar a estrutura base de arquivos do projeto (`package.json`, `tsconfig.json`, `tailwind.config.ts`, `src/`).
2. **Handoff para `@dev`:** Implementação modular dos componentes da Landing Page seguindo a lista de histórias de desenvolvimento.
3. **Validação de Qualidade com `@qa`:** Garantir que o build, o lint e o typecheck passem com 100% de sucesso.

