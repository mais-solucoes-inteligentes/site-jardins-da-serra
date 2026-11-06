# Project Brief: Site Jardins da Serra

**Data:** 06/11/2026  
**Autor:** Morgan (@pm - Product Manager)  
**Status:** Rascunho Proposto (YOLO Mode)  
**Versão:** 1.0.0  

---

## 1. Executive Summary

O **Site Jardins da Serra** é a plataforma digital oficial e vitrine de apresentação e vendas do empreendimento imobiliário/residencial **Jardins da Serra**. O produto tem como objetivo central transformar visitantes qualificados em leads comerciais através de uma experiência imersiva, elegante e de alta conversão, destacando o contato com a natureza, a segurança, o lazer e a infraestrutura exclusiva do local.

* **Problema Principal:** Dificuldade de transmitir o valor e a atmosfera de exclusividade do empreendimento através de canais tradicionais ou redes sociais, resultando em menor conversão de potenciais compradores e investidores.
* **Mercado-Alvo:** Famílias e indivíduos de média-alta e alta renda buscando segunda residência, refúgio na serra ou moradia definitiva com qualidade de vida, além de investidores imobiliários.
* **Proposta de Valor:** Uma vitrine digital sofisticada, rápida e responsiva que proporciona tour visual completo pelos diferenciais do empreendimento e conecta o visitante imediatamente à equipe de corretores/consultores via WhatsApp e formulário inteligente.

---

## 2. Problem Statement

Atualmente, o lançamento ou comercialização de lotes e imóveis em áreas serranas enfrenta:
1. **Falta de uma presença digital centralizada e moderna:** Informações dispersas dificultam a tomada de decisão de clientes que muitas vezes moram em grandes centros e compram à distância.
2. **Baixa taxa de conversão em leads:** Campanhas de tráfego pago perdem tração quando direcionam para páginas lentas, genéricas ou mal adaptadas para dispositivos móveis.
3. **Necessidade de validação de valor antes da visita física:** Por se tratar de um produto com apelo sensorial (natureza, tranquilidade, vista panorâmica), o site precisa antecipar essa experiência visual com imagens em alta resolução, mapa do local e catálogo de amenidades.

---

## 3. Proposed Solution

Desenvolvimento de uma Landing Page institucional e comercial de alta performance com:
* **Design Visual Premium & Imersivo:** Paleta e tipografia conectadas à natureza (tons terrosos, verde oliva, off-white), valorizando fotografia e vídeo do local.
* **Apresentação Clara dos Pilares:** Natureza preservada, infraestrutura urbana completa, segurança 24h, lazer para a família e localização estratégica.
* **Mecanismos Rápidos de Conversão:**
  * Botão flutuante de atendimento instantâneo via WhatsApp com mensagem pré-configurada.
  * Formulário de contato/agendamento de visita simples e objetivo.
  * Chamadas para download de material exclusivo (Brochura / Caderno de Lotes).

---

## 4. Target Users

### Primary User Segment: Comprador Final (Famílias & Casais de Alta Renda)
* **Perfil:** Idade 32 a 60 anos, residentes em capitais ou polos urbanos, buscam qualidade de vida, segurança, lazer para filhos e contato com o verde nos fins de semana ou para trabalho remoto.
* **Dores:** Estresse urbano, trânsito, falta de segurança e falta de opções reais de lazer ao ar livre para a família.
* **Objetivo no Site:** Conhecer a localização, visualizar fotos/vídeos reais, entender o padrão das construções e agendar uma visita presencial.

### Secondary User Segment: Investidores Imobiliários
* **Perfil:** Profissionais buscando diversificação de patrimônio em ativos com alto potencial de valorização na serra.
* **Dores:** Falta de clareza sobre o estágio das obras, infraestrutura legal e prazos de entrega.
* **Objetivo no Site:** Conferir credibilidade da incorporadora/loteamento, dados de infraestrutura e condições de pagamento/contato rápido com especialistas.

---

## 5. Goals & Success Metrics

### Business Objectives
* Estabelecer a identidade e autoridade digital do empreendimento Jardins da Serra.
* Gerar fluxo contínuo de leads qualificados para o time comercial.
* Proporcionar suporte a campanhas de tráfego pago (Google Ads, Meta Ads).

### Key Performance Indicators (KPIs)
* **Taxa de Conversão de Visitantes em Leads:** Alvo >= 4% (soma de cliques no WhatsApp + formulários enviados).
* **Tempo de Carregamento (Core Web Vitals):** LCP < 2.0s no mobile, Performance Score Lighthouse >= 90.
* **Taxa de Rejeição (Bounce Rate):** < 45% em tráfego qualificado.

---

## 6. MVP Scope

### Core Features (Must Have - MVP)
1. **Hero Section de Impacto:** Chamada envolvente, imagem de capa de alta qualidade e CTA primário ("Fale com um Consultor" / "Agende sua Visita").
2. **Seção "O Empreendimento":** Descrição conceitual dos Jardins da Serra (proposta ecológica, tranquilidade, requinte).
3. **Galeria de Atributos & Diferenciais:** Cards interativos destacando trilhas ecológicas, clube de lazer, segurança monitorada, cabeamento subterrâneo e mirante.
4. **Localização e Acesso:** Mapa ilustrativo/Google Maps indicando distâncias até centros comerciais, aeroportos ou atrações turísticas.
5. **Formulário de Agendamento/Contato:** Campos: Nome, E-mail, Telefone (WhatsApp) e Mensagem opcional.
6. **Integração WhatsApp:** Botão flutuante e CTAs ao longo da página que abrem conversa direta com mensagem contextualizada.
7. **Rodapé Completo:** Dados da incorporadora/loteamento, registro imobiliário, links de privacidade e mídias sociais.

### Out of Scope for MVP
* Sistema de reserva ou compra online com gateway de pagamento.
* Área logada para condôminos / proprietários.
* Mapa interativo de lotes 3D dinâmico em tempo real (previsto para Fase 2).

### MVP Success Criteria
* Site 100% responsivo (desktop, tablet, mobile), funcional sem erros no console, com formulário ativo e métricas prontas para disparo de tags (Google Tag Manager/Analytics).

---

## 7. Technical Considerations

* **Frontend:** Framework moderno (Next.js ou Vite + React + Tailwind CSS) focado em SEO, performance e fidelidade visual.
* **Tipografia e Estilo:** Combinação de tipografia elegante (serifada para títulos ou sans contemporânea) com iconografia moderna (Lucide Icons).
* **Deploy:** Vercel ou Netlify (CDN global, HTTPS automático e deploy contínuo integrado ao GitHub).
* **Formulário:** Integração sem backend complexo via Webhook, Formspree ou Supabase.

---

## 8. Next Steps & PM Handoff

1. **Aprovação do Briefing:** Validação pelo stakeholder/usuário.
2. **Elaboração do PRD detalhado:** `@pm *create-prd` para especificar cada requisito funcional (FR) e não-funcional (NFR).
3. **Arquitetura Técnica:** Passar para `@architect` para scaffolding do projeto (Next.js/React + Tailwind).
