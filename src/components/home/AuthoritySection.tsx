import React from 'react';
import { Award, ShieldCheck, Users, Sparkles } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="bg-[#180E10] text-[#FAF6F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative" id="autoridad">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rose-ambient-glow rounded-full blur-3xl pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left: Portrait + Signature (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4 sm:gap-5">
            <div className="relative w-56 sm:w-72 aspect-[3/4] border-2 border-rose-300/40 rounded-sm overflow-hidden shadow-2xl bg-[#241719] group">
              <img
                src="/images/dra_katheryn.jpg"
                alt="Dra. Katheryn Escorcia"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-sm font-serif italic text-rose-200 font-bold block">
                  Dra. Katheryn Escorcia Maldonado
                </span>
                <p className="text-[10px] uppercase font-mono tracking-wider text-white/90">
                  Médica Estética & Speaker Internacional
                </p>
              </div>
            </div>

            {/* Signature Badge */}
            <div className="flex items-center gap-2 text-rose-200 font-serif italic text-xl sm:text-2xl font-bold tracking-wide">
              <span>Katheryn Escorcia Maldonado M.D.</span>
            </div>
          </div>

          {/* Right: Content & Metrics (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            
            <div>
              <p className="text-rose-300 font-mono font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                <span>Docencia Médica &amp; Protocolos de Autor</span>
              </p>
              <h2 className="font-serif text-white text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
                Por Qué Formarte con la Dra. Katheryn Escorcia Maldonado
              </h2>
            </div>

            <p className="text-white/90 font-light text-xs sm:text-base leading-relaxed">
              Médica especialista en Armonización Facial y Corporal, speaker internacional y docente. Creadora de protocolos de autor como <strong className="text-rose-200 font-medium">Armonilift</strong> (tensado y bioestimulación sin cirugía), <strong className="text-rose-200 font-medium">Endonecklift</strong> (definición mandibular con láser subdérmico) y <strong className="text-rose-200 font-medium">Endobodylift</strong>.
            </p>

            <p className="text-white/90 font-light text-xs sm:text-base leading-relaxed">
              Con sedes de atención clínica en <strong className="text-white">Santo Domingo, Santiago de los Caballeros (R.D.) y Barranquilla (Colombia)</strong>, su método prioriza la <strong className="text-rose-200 font-semibold underline decoration-brand-rose/60">anatomía de seguridad, prevención de oclusión vascular y naturalidad</strong>, capacitando a médicos y odontólogos en bioestimulación de colágeno y terapéutica avanzada.
            </p>

            {/* Metrics Strip (High Contrast Numbers and Labels) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-white/20">
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-rose-300 font-bold">
                  8+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-bold mt-1">
                  Años de Experiencia
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-rose-300 font-bold">
                  1.500+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-bold mt-1">
                  Médicos Capacitados
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-rose-300 font-bold">
                  100%
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-bold mt-1">
                  Casos Clínicos Reales
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl text-rose-300 font-bold">
                  3
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-bold mt-1">
                  Sedes Internacionales
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
