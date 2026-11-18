import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(phone: string, message: string) {
  let cleanPhone = phone.replace(/\D/g, "");

  // Corrige formato comum no Brasil como 55049... removendo o 0 da operadora/DDD
  if (cleanPhone.startsWith("550")) {
    cleanPhone = "55" + cleanPhone.substring(3);
  } else if (cleanPhone.startsWith("0")) {
    cleanPhone = cleanPhone.substring(1);
  }

  // Garante DDI 55 do Brasil
  if (!cleanPhone.startsWith("55") && (cleanPhone.length === 10 || cleanPhone.length === 11)) {
    cleanPhone = `55${cleanPhone}`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

