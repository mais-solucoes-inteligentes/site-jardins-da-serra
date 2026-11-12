import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Heart, Leaf } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-surface border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna Imagem com Card de Apoio */}
          <div className="relative">
            <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe Jardins da Serra trabalhando na serra catarinense"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/30 text-brand-brown flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-brown">Tradição & Amor</p>
                <p className="text-xs text-gray-500">Inspirados na Serra Catarinense</p>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo Institucional */}
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
              Nossa História & Princípios
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-brown font-brand leading-tight">
              Cultivando a harmonia entre as pessoas e a natureza da serra
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              O nome <strong>Jardins da Serra</strong> nasceu inspirado nos campos, nas araucárias
              e no ar puro da Serra Catarinense. Acreditamos que um jardim bem planejado e cuidado
              traz paz, aconchego e valoriza qualquer imóvel, seja uma residência acolhedora ou uma
              empresa de destaque.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Nosso símbolo, inspirado na sequência de Fibonacci, representa as formas harmônicas
              das folhas e árvores. Cada poda, plantio e projeto que executamos segue o mais rigoroso
              cuidado técnico, garantindo que as plantas resistam ao frio e floresçam ano após ano.
            </p>

            {/* Bullet points de diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm font-medium text-gray-800">Equipe uniformizada e com EPIs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm font-medium text-gray-800">Conhecimento do clima de altitude</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm font-medium text-gray-800">Equipamentos modernos e silenciosos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm font-medium text-gray-800">Emissão de Nota Fiscal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
