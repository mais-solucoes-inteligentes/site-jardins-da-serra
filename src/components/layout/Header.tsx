"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatWhatsAppLink } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = formatWhatsAppLink(
    siteConfig.contact.whatsAppNumber,
    siteConfig.social.whatsappDefaultMessage
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-gradient-to-b from-black/70 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2 group">
          <div className="relative w-36 md:w-44 h-12 md:h-14 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Jardins da Serra Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isScrolled
                  ? "text-brand-brown hover:text-brand-green"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contact.phonePrimary.replace(/\D/g, "")}`}
            className={`hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-brand-brown hover:bg-brand-brown/5"
                : "text-white/90 hover:bg-white/10"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-brand-green" />
            <span>{siteConfig.contact.phonePrimary}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-4 py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir Orçamento</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-brand-brown" : "text-white"
          }`}
          aria-label="Abrir menu de navegação"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-brown hover:text-brand-green font-semibold text-base py-1 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-xl font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Orçamento via WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phonePrimary.replace(/\D/g, "")}`}
                className="w-full flex items-center justify-center gap-2 border border-brand-brown/20 text-brand-brown py-3 rounded-xl font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-green" />
                <span>Ligar: {siteConfig.contact.phonePrimary}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
