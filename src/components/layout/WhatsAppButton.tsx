"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const url = formatWhatsAppLink(
    siteConfig.contact.whatsAppNumber,
    siteConfig.social.whatsappDefaultMessage
  );

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-110 active:scale-95"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <span className="sr-only">Fale conosco pelo WhatsApp</span>
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-50" />
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 hidden md:group-hover:inline-block bg-brand-brown text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-all">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
}
