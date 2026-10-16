import React from 'react';
import { Course } from '../../types';
import { Calendar, MapPin, Radio, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface AgendaSectionProps {
  courses: Course[];
  onEnroll: (course: Course) => void;
  onViewDetails: (course: Course) => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({
  courses,
  onEnroll,
  onViewDetails,
}) => {
  // Filter live and offline events for Agenda
  const agendaCourses = courses
    .filter((c) => c.modality === 'en-vivo' || c.modality === 'presencial')
    .slice(0, 3);

  return (
    <section className="bg-[#FAF6F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="agenda">
      
      {/* Subtle ambient light in background */}
      <div className="absolute top-10 right-0 w-80 h-80 rose-ambient-glow rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-brand-border/70 pb-5 sm:pb-6">
          <div>
            <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-rose" />
              <span>Agenda Académica 2026 - 2027</span>
            </p>
            <h2 className="font-serif text-[#1A1012] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Próximos Eventos & Masterclasses
            </h2>
            <p className="text-[#80706B] text-xs sm:text-base mt-2 max-w-xl font-light">
              Entrenamientos intensivos en directo con la Dra. Katheryn Escorcia. Grupos selectos con resolución de casos clínicos en vivo.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase text-brand-rose font-bold bg-brand-rose-blush px-3.5 py-1.5 rounded-xs border border-brand-rose/20">
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span>Inscripción con Validación Directa</span>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendaCourses.map((course) => {
            const dateParts = course.nextDate ? course.nextDate.split('·')[0].trim() : '28 NOV';
            
            return (
              <article
                key={course.id}
                className="bg-white border border-[#E8D7CF] rounded-sm overflow-hidden flex flex-col hover:shadow-2xl hover:border-brand-rose/60 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
              >
                {/* Flyer Cover */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#241719]">
                  <img
                    src={course.heroImage || '/images/carousel_01.png'}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {course.isNew && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider uppercase rounded-xs bg-[#B05C55] text-white shadow-md">
                        Convocatoria Abierta
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-wider uppercase rounded-xs bg-black/60 text-brand-rose-blush border border-white/20 backdrop-blur-xs">
                      {course.spotsAvailable ? `Quedan ${course.spotsAvailable} cupos` : 'Cupos Limitados'}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs font-mono">
                    <span className="bg-black/70 px-2 py-0.5 rounded-xs border border-white/10 uppercase text-[10px] text-brand-rose-light">
                      {course.category}
                    </span>
                    <span className="text-[11px] text-brand-rose-gold font-semibold">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="flex flex-col flex-1 p-4 sm:p-6 space-y-3 sm:space-y-4">
                  
                  {/* Date + Modality Row in Rose Blush */}
                  <div className="flex items-center gap-3">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center bg-brand-rose-blush border border-brand-rose/30 rounded-xs px-3 sm:px-3.5 py-1.5 min-w-[54px] sm:min-w-[58px]">
                      <span className="font-serif text-base sm:text-lg font-bold text-brand-rose leading-none">
                        {dateParts.split(' ')[0] || '28'}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-brand-rose uppercase tracking-wider font-mono">
                        {dateParts.split(' ')[1] || 'NOV'}
                      </span>
                    </div>

                    {/* Modality Details */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1A1012]">
                        {course.modality === 'en-vivo' ? (
                          <>
                            <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                            <span>Virtual En Vivo</span>
                          </>
                        ) : (
                          <>
                            <MapPin className="w-3.5 h-3.5 text-brand-rose" />
                            <span>Presencial Hands-On</span>
                          </>
                        )}
                      </div>
                      <span className="text-[11px] sm:text-xs text-[#80706B] font-light">
                        {course.location ? course.location.split('·')[0] : 'Plataforma Privada'}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => onViewDetails(course)}
                    className="font-serif text-[#1A1012] text-lg sm:text-2xl font-bold uppercase leading-snug sm:leading-tight tracking-tight hover:text-brand-rose transition cursor-pointer line-clamp-2"
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#80706B] font-light leading-relaxed line-clamp-2 flex-1">
                    {course.subtitle}
                  </p>

                  {/* "Ver temario" link */}
                  <button
                    type="button"
                    onClick={() => onViewDetails(course)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1A1012] border-b-2 border-brand-rose self-start pb-0.5 hover:text-brand-rose transition-colors"
                  >
                    <span>Ver temario completo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Price and CTA row */}
                  <div className="pt-3 border-t border-[#E8D7CF]/60 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#80706B] block">Inversión</span>
                      <span className="font-serif text-2xl font-bold text-[#1A1012]">
                        ${course.price} <span className="text-xs font-sans font-normal text-[#80706B]">USD</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onEnroll(course)}
                      className="px-5 py-2.5 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md shadow-[#B05C55]/20 flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Inscribirme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
