"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatWhatsAppLink } from "@/lib/utils";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "Lages",
    servico: "Projetos de Paisagismo",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Preparar mensagem automática para o WhatsApp com os dados
    const autoMessage = `Olá! Meu nome é ${formData.nome}. Gostaria de um orçamento para o serviço de ${formData.servico} em ${formData.cidade}. ${formData.mensagem ? `Mensagem: ${formData.mensagem}` : ""}`;
    const link = formatWhatsAppLink(siteConfig.contact.whatsAppNumber, autoMessage);

    // Abrir o WhatsApp após 1 segundo
    setTimeout(() => {
      window.open(link, "_blank");
    }, 800);
  };

  const whatsappDirectUrl = formatWhatsAppLink(
    siteConfig.contact.whatsAppNumber,
    siteConfig.social.whatsappDefaultMessage
  );

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          badge="Fale Conosco"
          title="Solicite um Orçamento Sem Compromisso"
          subtitle="Preencha o formulário ou fale diretamente pelo WhatsApp com nossa equipe em Lages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Coluna 1: Informações de Contato Rápidas */}
          <div className="lg:col-span-5 bg-brand-surface p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                Atendimento Regional
              </span>
              <h3 className="text-2xl font-bold text-brand-brown font-brand mt-1 mb-3">
                Jardins da Serra
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Atendemos residências, sítios, chácaras, condomínios e estabelecimentos comerciais
                em Lages e em toda a Serra Catarinense.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Telefones / WhatsApp</p>
                  <p className="text-base font-bold text-brand-brown">
                    {siteConfig.contact.phonePrimary}
                  </p>
                  <p className="text-sm text-gray-600">{siteConfig.contact.phoneSecondary}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">E-mail Comercial</p>
                  <p className="text-sm font-semibold text-brand-brown">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Localização</p>
                  <p className="text-sm font-semibold text-brand-brown">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Horário de Funcionamento</p>
                  <p className="text-sm text-gray-600">{siteConfig.contact.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Banner WhatsApp Direto */}
            <div className="p-5 rounded-2xl bg-brand-green/10 border border-brand-green/20">
              <p className="text-sm font-bold text-brand-green mb-1">
                Prefere atendimento instantâneo?
              </p>
              <p className="text-xs text-gray-600 mb-4">
                Nossos jardineiros e paisagistas respondem rapidamente no WhatsApp.
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green-dark text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Agora</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Formulário Interativo */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-brown font-brand">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                  Obrigado, <strong>{formData.nome}</strong>! Você será redirecionado para o nosso
                  WhatsApp comercial para darmos continuidade ao seu atendimento.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-bold text-brand-green hover:underline uppercase tracking-wider"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(49) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      Bairro ou Cidade *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Centro, Lages"
                      value={formData.cidade}
                      onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                      Tipo de Serviço Desejado *
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm bg-white transition-all"
                    >
                      <option value="Projetos de Paisagismo">Projetos de Paisagismo 2D/3D</option>
                      <option value="Montagem e Execução de Jardins">Montagem & Plantio de Jardins</option>
                      <option value="Manutenção e Podas Periódicas">Manutenção Periódica & Podas</option>
                      <option value="Decoração e Pedras Ornamentais">Decoração, Pedras & Vasos</option>
                      <option value="Outro Serviço">Outro Serviço</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                    Detalhes do Espaço ou Mensagem (Opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte um pouco sobre o tamanho do terreno, plantas que você gosta ou o que gostaria de mudar..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base text-white bg-brand-green hover:bg-brand-green-dark shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitação de Orçamento</span>
                </button>

                <p className="text-center text-xs text-gray-400">
                  🔒 Seus dados estão seguros e serão utilizados exclusivamente para o retorno do seu orçamento.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

