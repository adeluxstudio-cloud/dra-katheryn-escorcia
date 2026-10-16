import React from 'react';
import { Course } from '../../types';
import { Award, Clock, ArrowRight, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

interface DiplomadosSectionProps {
  courses: Course[];
  onEnroll: (course: Course) => void;
  onViewDetails: (course: Course) => void;
  onViewAllCourses: () => void;
}

export const DiplomadosSection: React.FC<DiplomadosSectionProps> = ({
  courses,
  onEnroll,
  onViewDetails,
  onViewAllCourses,
}) => {
  const onlineCourses = courses.filter((c) => c.modality === 'online');

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative overflow-hidden" id="diplomados">
      
      {/* Ambient background light */}
      <div className="absolute bottom-0 left-10 w-96 h-96 rose-ambient-glow rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span>Formación Médica Continua &middot; Venta Directa</span>
          </p>
          <h2 className="font-serif text-[#1A1012] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Diplomados & Cursos Online
          </h2>
          <p className="text-[#80706B] text-xs sm:text-base mt-2 sm:mt-3 font-light leading-relaxed">
            Compra en línea &middot; Acceso inmediato a videos clínicos en alta resolución &middot; Descarga de protocolos y consentimientos informados en PDF &middot; Certificado digital avalado.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {onlineCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white border border-[#E8D7CF] rounded-sm overflow-hidden flex flex-col hover:shadow-2xl hover:border-brand-rose/60 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
            >
              {/* Cover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#241719]">
                <img
                  src={course.heroImage || '/images/carousel_04.png'}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Badges on cover */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider uppercase rounded-xs bg-[#1A1012] text-[#FAF6F0] border border-brand-rose-gold/30">
                    Certificado Incluido
                  </span>
                </div>

                {course.originalPrice && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold font-mono tracking-wider uppercase rounded-xs bg-rose-600 text-white shadow-sm">
                      Promo Especial
                    </span>
                  </div>
                )}

                <div className="absolute bottom-2.5 left-3 text-white/90 text-xs font-mono flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] bg-black/60 px-2.5 py-0.5 rounded-xs text-brand-rose-blush">
                    <Clock className="w-3 h-3 text-brand-rose-light" />
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between text-xs text-[#80706B]">
                  <span className="font-mono uppercase text-[10px] text-brand-rose font-bold">
                    {course.category}
                  </span>
                  <span className="text-[11px]">{course.modules.length} Módulos Clínicos</span>
                </div>

                <h3 
                  onClick={() => onViewDetails(course)}
                  className="font-serif text-[#1A1012] text-base sm:text-xl font-bold uppercase leading-snug tracking-tight hover:text-brand-rose transition cursor-pointer line-clamp-2"
                >
                  {course.title}
                </h3>

                <p className="text-xs text-[#80706B] font-light leading-relaxed line-clamp-2 flex-1">
                  {course.subtitle}
                </p>

                <p className="text-xs text-[#80706B]/80 font-medium">
                  Docente: Dra. Katheryn Escorcia
                </p>

                {/* "Ver más" */}
                <button
                  type="button"
                  onClick={() => onViewDetails(course)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1A1012] border-b-2 border-brand-rose self-start pb-0.5 hover:text-brand-rose transition-colors"
                >
                  <span>Ver temario</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {/* Price & Action */}
                <div className="pt-3 border-t border-[#E8D7CF]/60 flex items-center justify-between gap-3">
                  <div>
                    {course.originalPrice && (
                      <span className="text-xs text-gray-400 line-through block">
                        ${course.originalPrice} USD
                      </span>
                    )}
                    <span className="font-serif text-2xl font-bold text-[#1A1012]">
                      ${course.price} <span className="text-xs font-sans font-normal text-[#80706B]">USD</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onEnroll(course)}
                    className="px-4 py-2 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-sm shadow-[#B05C55]/20 flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Comprar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Section level CTA */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onViewAllCourses}
            className="inline-flex items-center gap-2 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xs transition-all shadow-lg shadow-[#B05C55]/25 hover:scale-105 active:scale-95"
          >
            <span>Ver Todos los Cursos & Diplomados</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
