import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"
      }`}
    >
      {badge && (
        <span
          className={`inline-block px-3.5 py-1.5 mb-3 text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full ${
            light
              ? "bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30"
              : "bg-brand-green/10 text-brand-green border border-brand-green/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight font-brand ${
          light ? "text-white" : "text-brand-brown"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

