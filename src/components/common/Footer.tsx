import React from 'react';
import { PageView } from '../../types';
import { ShieldCheck, MessageCircle, MapPin, Mail, Phone, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-[#180E10] text-white border-t border-brand-rose-gold/20 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/15">
          
          {/* Brand Column (Col 5) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-rose-300/60 bg-[#281719] flex items-center justify-center text-rose-200 font-serif font-bold text-base sm:text-lg shadow-md shrink-0">
                KE
              </div>
              <div>
                <span className="font-serif text-base sm:text-lg font-bold text-white block leading-tight">
                  DRA. KATHERYN ESCORCIA MALDONADO
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-rose-300 uppercase font-semibold">
                  MEDICINA ESTÉTICA &amp; ARMONIZACIÓN
                </span>
              </div>
            </div>

            <p className="text-xs text-white/85 font-light leading-relaxed max-w-sm">
              Formación médica especializada en bioestimulación facial, armonización avanzada y anatomía de seguridad vascular. Diseñado para médicos que buscan excelencia y cero complicaciones.
            </p>

            <div className="flex items-center gap-2 text-xs text-rose-300 font-mono font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-rose-300" />
              <span>Protección Biomédica &middot; Pagos Seguros Stripe</span>
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase text-white tracking-wider">
              Enlaces Directos
            </h4>
            <ul className="space-y-2.5 text-xs text-white/90">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-rose-300 transition"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-rose-300 transition"
                >
                  Diplomados &amp; Cursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-rose-300 transition"
                >
                  Sobre la Dra. Katheryn
                </button>
              </li>
            </ul>
          </div>

          {/* Locations & Support (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase text-white tracking-wider">
              Sedes &amp; Atención WhatsApp
            </h4>
            
            <div className="space-y-2.5 text-xs text-white/90">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-300 shrink-0" />
                <span>República Dominicana (Santiago &amp; Santo Domingo) &middot; Colombia (Barranquilla)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-300 shrink-0" />
                <span>WhatsApp Oficial: +1 (829) 763-9971</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-300 shrink-0" />
                <span>inscripciones@drakatherynescorcia.com</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20comunicarme%20con%20atenci%C3%B3n%20al%20alumno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B05C55] text-white font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#8F423C] transition shadow-md shadow-brand-rose/25"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>Chat Directo por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar (High Contrast) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Dra. Katheryn Escorcia &middot; Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-rose-300">
              <Lock className="w-3.5 h-3.5 text-rose-300" />
              DRM Watermark Protection
            </span>
            <span>&middot;</span>
            <button
              onClick={onOpenAdmin}
              className="text-rose-300/80 hover:text-rose-200 transition underline underline-offset-4 flex items-center gap-1 font-bold"
              title="Panel exclusivo para la Dra. Katheryn (Ver tickets de Stripe y subir cursos)"
            >
              <span>Acceso Dra. Katheryn (Admin)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
