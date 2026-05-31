import React from "react";
import { Phone, MessageCircle } from "lucide-react";

function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-4 pb-[env(safe-area-inset-bottom)] sm:bottom-6 sm:right-6">
      <a
        href="tel:8807395891"
        aria-label="Call Muhammadhu Aadhil"
        title="Call"
        className="glass-panel flex h-12 w-12 items-center justify-center rounded-full text-[var(--color-accent-2)] transition duration-200 hover:scale-110 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] active:scale-95"
      >
        <Phone size={20} />
      </a>

      <a
        href="https://wa.me/918807395891"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        className="theme-button-primary flex h-12 w-12 items-center justify-center rounded-full text-white transition duration-200 hover:scale-110 active:scale-95"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}

export default FloatingButtons;
