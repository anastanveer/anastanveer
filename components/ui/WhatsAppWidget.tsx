"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/971542435418?text=Hi%20Anas%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anas Tanveer on WhatsApp"
      className="group fixed bottom-6 left-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_36px_rgba(37,211,102,0.62)] sm:pl-4 sm:pr-5 lg:bottom-8 lg:left-8"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-65" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      <MessageCircle size={17} className="shrink-0 text-white" />
      <span className="text-sm font-semibold text-white">
        <span className="hidden sm:inline">Chat on </span>WhatsApp
      </span>
    </a>
  );
}
