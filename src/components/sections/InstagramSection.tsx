import React from "react";
import Image from "next/image";
import { Instagram, Facebook, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const instagramFeedMock = [
  {
    id: "ig-1",
    imageUrl: "/images/instagram/ig-1.jpg",
    likes: 142,
    comments: 18,
    caption: "Mais um jardim de inverno finalizado em Lages! 🌿✨ #jardinagem #serracatarinense",
  },
  {
    id: "ig-2",
    imageUrl: "/images/instagram/ig-2.jpg",
    likes: 215,
    comments: 24,
    caption: "Gramado esmeralda verde e impecável antes da chegada do fim de semana. 🍃",
  },
  {
    id: "ig-3",
    imageUrl: "/images/instagram/ig-3.jpg",
    likes: 189,
    comments: 12,
    caption: "Caminho de dormentes com lavandas perfumadas. Perfeito para relaxar. 🌸",
  },
  {
    id: "ig-4",
    imageUrl: "/images/instagram/ig-4.jpg",
    likes: 310,
    comments: 35,
    caption: "Poda artística de buxinhos e hortênsias prontas para florir. 🌾",
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-brand-surface border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Conecte-se Conosco</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-brown font-brand">
              Acompanhe Nosso Dia a Dia no Instagram
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1">
              Dicas botânicas, bastidores das obras e novidades em tempo real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>@jardinsdaserra</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm shadow-md transition-all"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Grid de Fotos do Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramFeedMock.map((post) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-64 md:h-72 rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-end">
                  <Instagram className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-xs line-clamp-3 mb-3">{post.caption}</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-white/90">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current text-pink-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

