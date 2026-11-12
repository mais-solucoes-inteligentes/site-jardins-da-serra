import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatWhatsAppLink } from "@/lib/utils";

export function HeroSection() {
  const whatsappUrl = formatWhatsAppLink(
    siteConfig.contact.whatsAppNumber,
    siteConfig.social.whatsappDefaultMessage
  );

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=2000&q=85"
          alt="Paisagismo exuberante Jardins da Serra"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white max-w-4xl pt-8">
        {/* Badge da Região */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm animate-fadeIn">
          <MapPin className="w-3.5 h-3.5 text-brand-green-light" />
          <span>Lages & Região da Serra Catarinense</span>
        </div>

        {/* Headline Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-brand leading-tight drop-shadow-md">
          A beleza viva da natureza no{" "}
          <span className="text-brand-yellow underline decoration-brand-green decoration-4 underline-offset-8">
            seu jardim
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow font-light">
          Projetos de paisagismo, montagem, limpeza e manutenção especializada para
          residências, sítios e empresas com o clima único da serra.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white text-base md:text-lg font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Solicitar Orçamento Gratuito</span>
          </a>

          <Link
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-base md:text-lg font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all"
          >
            <span>Ver Nosso Portfólio</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow" />
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Plantas da Serra</p>
              <p className="text-xs text-white/70">Adaptadas ao frio e geadas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Equipe Própria</p>
              <p className="text-xs text-white/70">Uniformizada e pontual</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0">
              <span className="text-brand-yellow font-black text-sm">100%</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Garantia de Pegamento</p>
              <p className="text-xs text-white/70">Em mudas e gramados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

