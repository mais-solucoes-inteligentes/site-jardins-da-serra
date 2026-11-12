import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, MapPin } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Prova Social"
          title="O Que Nossos Clientes Dizem"
          subtitle="A confiança e o carinho de famílias e empresas que transformaram seus jardins conosco."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-brand-surface rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-brand-green/20 group-hover:text-brand-green/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-brand-brown font-brand text-base">
                    {t.author}
                  </h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-brand-green" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

