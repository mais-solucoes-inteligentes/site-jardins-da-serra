import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white/90 pt-16 pb-8 border-t border-brand-brown-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Coluna 1: Sobre & Logo */}
          <div className="space-y-4">
            <div className="relative w-44 h-14 bg-white/95 p-1 rounded-xl shadow-inner">
              <Image
                src="/images/logo.png"
                alt="Jardins da Serra"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Empresa especializada em jardinagem, montagem e projetos de paisagismo inspirados
              na exuberância e no clima da Serra Catarinense.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors text-white"
                aria-label="Instagram da Jardins da Serra"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors text-white"
                aria-label="Facebook da Jardins da Serra"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-base font-bold text-brand-yellow uppercase tracking-wider mb-4 font-brand">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Nossos Serviços */}
          <div>
            <h3 className="text-base font-bold text-brand-yellow uppercase tracking-wider mb-4 font-brand">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>• Projetos de Paisagismo 2D/3D</li>
              <li>• Montagem de Jardins Residenciais</li>
              <li>• Manutenção Periódica & Podas</li>
              <li>• Limpeza e Recuperação de Gramados</li>
              <li>• Decoração com Pedras e Vasos</li>
              <li>• Jardins Comerciais e Fachadas</li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Atendimento */}
          <div className="space-y-3.5">
            <h3 className="text-base font-bold text-brand-yellow uppercase tracking-wider mb-4 font-brand">
              Atendimento
            </h3>
            <div className="flex items-start gap-3 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone className="w-4 h-4 text-brand-green shrink-0" />
              <span>{siteConfig.contact.phonePrimary} / {siteConfig.contact.phoneSecondary}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Mail className="w-4 h-4 text-brand-green shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/80">
              <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <span>{siteConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Linha Divisória & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Jardins da Serra. Todos os direitos reservados.</p>
          <p>Lages, SC - Brasil | Paisagismo e Jardinagem Profissional</p>
        </div>
      </div>
    </footer>
  );
}

