"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioCategories, portfolioData, PortfolioItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, ZoomIn, X, MessageCircle } from "lucide-react";
import { formatWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "todos"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Galeria de Projetos"
          title="Nosso Portfólio de Jardins & Paisagismo"
          subtitle="Inspire-se com fotos reais de projetos concluídos, manutenções e revitalizações na serra."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? "bg-brand-brown text-white shadow-md scale-105"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-brand-surface rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-64 md:h-72 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-green/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ver ampliado</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-brown" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown mb-2 font-brand group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-bold text-brand-brown hover:text-brand-green transition-colors inline-flex items-center gap-1"
                  >
                    Ver detalhes
                  </button>
                  <a
                    href={formatWhatsAppLink(
                      siteConfig.contact.whatsAppNumber,
                      `Olá! Gostei do projeto "${item.title}" do portfólio e gostaria de algo semelhante.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-green hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quero um assim</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-fadeIn"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Fechar visualizador"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-brand-green/10 text-brand-green px-3 py-1 rounded-full uppercase">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-brown" />
                    {selectedItem.location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-brown mb-3 font-brand">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    Gostou deste projeto? Peça um orçamento personalizado para sua propriedade.
                  </p>
                  <a
                    href={formatWhatsAppLink(
                      siteConfig.contact.whatsAppNumber,
                      `Olá! Gostei do projeto "${selectedItem.title}" do portfólio e gostaria de um orçamento.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Orçar Projeto Semelhante</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
