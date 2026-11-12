import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trees, Shovel, Scissors, Sparkles, Check, ArrowRight } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  Trees,
  Shovel,
  Scissors,
  Sparkles,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-surface">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          badge="O Que Fazemos"
          title="Serviços Especializados de Jardinagem & Paisagismo"
          subtitle="Cuidamos de cada metro quadrado com a técnica e o carinho que a natureza merece."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Trees;
            const whatsappUrl = formatWhatsAppLink(
              siteConfig.contact.whatsAppNumber,
              `Olá! Gostaria de um orçamento para o serviço de: ${service.title}.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-brand-brown mb-3 font-brand group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-8">
                    {service.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm bg-gray-50 hover:bg-brand-green hover:text-white text-brand-brown transition-colors border border-gray-200 hover:border-brand-green"
                >
                  <span>Orçamento deste serviço</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

