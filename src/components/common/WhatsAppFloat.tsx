import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group select-none"
    >
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#140F0E] text-white text-xs font-medium shadow-lg border border-white/10 group-hover:block transition-all opacity-95">
        ¿Dudas con tu pago o acceso? Escríbenos
      </span>

      <a
        href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20informaci%C3%B3n%20sobre%20sus%20cursos%20m%C3%A9dicos"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl flex items-center justify-center transition-transform transform hover:scale-105 active:scale-95 border-2 border-white/30"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </aside>
  );
};
