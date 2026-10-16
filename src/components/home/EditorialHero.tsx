import React, { useState, useEffect } from 'react';
import { Course } from '../../types';
import { Calendar, ArrowRight, ShieldCheck, CheckCircle2, Radio } from 'lucide-react';

interface EditorialHeroProps {
  featuredCourse: Course;
  onEnroll: (course: Course) => void;
  onViewDetails: (course: Course) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  featuredCourse,
  onEnroll,
  onViewDetails,
}) => {
  // Countdown target date (28 de Noviembre de 2026 a las 19:00 COT)
  const targetDate = new Date('2026-11-28T19:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 12,
    minutes: 35,
    seconds: 18,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (n: number) => String(Math.max(0, n)).padStart(2, '0');

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#180E10] pt-20 sm:pt-24 pb-12 sm:pb-16">
      
      {/* Background editorial texture with subtle luminosity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/carousel_01.png')" }}
      />
      
      {/* Deep Rose Gradient scrim overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to right, rgba(24,14,16,0.98) 0%, rgba(24,14,16,0.95) 45%, rgba(24,14,16,0.85) 70%, rgba(24,14,16,0.65) 100%)'
        }}
      />

      {/* Ambient Rose and Rose-Gold floating glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rose-ambient-glow rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] gold-ambient-glow rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Protagonist Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">

            {/* Mobile-Friendly Doctor Identity Pill (Instant trust & personal authority) */}
            <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white/5 border border-rose-300/30 backdrop-blur-md self-start shadow-md">
              <img 
                src="/images/dra_katheryn.jpg" 
                alt="Dra. Katheryn Escorcia Maldonado" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top border border-rose-300/80 shrink-0 shadow-sm"
              />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xs sm:text-sm font-bold text-white tracking-wide">
                    Dra. Katheryn Escorcia M.
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 font-medium">
                  Médica Estética &middot; Speaker Internacional
                </span>
              </div>
            </div>

            {/* Main Headline: Minimalist, Bold & Typographically Balanced */}
            <h1 className="font-serif text-white uppercase text-[1.85rem] sm:text-3xl md:text-4xl lg:text-[3.2rem] font-bold leading-[1.12] tracking-tight">
              Aprende Técnicas de <span className="text-rose-200 italic font-normal underline decoration-brand-rose/60">Bioestimulación Facial</span> y Seguridad Vascular
            </h1>

            {/* Subtitle: High clarity, no fluff */}
            <p className="text-rose-100/90 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              Masterclass intensiva con transmisión en vivo 4K. Planimetría anatómica, diluciones exactas y prevención inmediata de complicaciones.
            </p>

            {/* Date & Schedule Tag Strip (Minimalist & High Contrast) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-black/50 border border-rose-300/40 text-white font-mono shadow-inner backdrop-blur-xs">
                <Calendar className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                <span className="font-bold text-white tracking-wide">28 NOV &middot; 7:00 PM</span>
                <span className="text-rose-300 text-[10px] hidden sm:inline">(Hora Col / Miami)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#241719] border border-rose-400/30 text-rose-200 font-mono text-[11px]">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span>En Vivo 4K + Grabación</span>
              </div>
            </div>

            {/* Minimalist Countdown Ticker (Compact & Luxury Glassmorphism) */}
            <div className="bg-[#241719]/80 border border-rose-300/30 rounded-xs p-3 sm:p-4 max-w-md backdrop-blur-md shadow-lg shadow-black/40">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-rose-200 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                  <span>Cierre de Convocatoria:</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">7 cupos disponibles</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center font-serif text-white">
                <div className="bg-black/40 rounded-xs py-1.5 sm:py-2 px-1 border border-white/10">
                  <span className="text-xl sm:text-3xl font-bold block leading-none">{padZero(timeLeft.days)}</span>
                  <span className="text-[9px] font-mono uppercase text-rose-300 font-semibold block mt-1">Días</span>
                </div>
                <div className="bg-black/40 rounded-xs py-1.5 sm:py-2 px-1 border border-white/10">
                  <span className="text-xl sm:text-3xl font-bold block leading-none">{padZero(timeLeft.hours)}</span>
                  <span className="text-[9px] font-mono uppercase text-rose-300 font-semibold block mt-1">Horas</span>
                </div>
                <div className="bg-black/40 rounded-xs py-1.5 sm:py-2 px-1 border border-white/10">
                  <span className="text-xl sm:text-3xl font-bold block leading-none">{padZero(timeLeft.minutes)}</span>
                  <span className="text-[9px] font-mono uppercase text-rose-300 font-semibold block mt-1">Min</span>
                </div>
                <div className="bg-black/40 rounded-xs py-1.5 sm:py-2 px-1 border border-white/10">
                  <span className="text-xl sm:text-3xl font-bold text-rose-300 block leading-none">{padZero(timeLeft.seconds)}</span>
                  <span className="text-[9px] font-mono uppercase text-rose-300 font-semibold block mt-1">Seg</span>
                </div>
              </div>
            </div>

            {/* CTAs Row: Thumb-Friendly on Mobile, Inline on Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => onEnroll(featuredCourse)}
                className="btn-rose-shimmer text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-xs transition-all duration-300 shadow-xl shadow-brand-rose/40 flex items-center justify-center gap-2 transform active:scale-95 text-center w-full sm:w-auto"
              >
                <span>Inscribirme con Stripe — ${featuredCourse.price} USD</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onViewDetails(featuredCourse)}
                className="px-5 py-3 sm:py-4 border border-white/40 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xs hover:bg-white/10 transition-colors text-center flex items-center justify-center w-full sm:w-auto"
              >
                Ver Agenda y Temario
              </button>
            </div>

            {/* Minimalist Trust & Reassurance Strip */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-y-2 gap-x-4 pt-2 text-[11px] font-mono text-white/90 border-t border-white/10 sm:border-0 sm:pt-0">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                <span>Pago Seguro Stripe</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                <span>Ticket a WhatsApp</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-300 shrink-0" />
                <span>Drive &middot; Certificado</span>
              </span>
            </div>

          </div>

          {/* Right Column: Editorial Doctor Flyer Card (Responsive & Compact on Mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
              
              {/* Soft Rose Glow behind card */}
              <div 
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none animate-pulse-glow"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, #B05C55 0%, #D4867F 40%, transparent 70%)' }}
              />

              {/* Flyer Card with Bright Rose Border */}
              <div className="relative rounded-lg overflow-hidden border-2 border-rose-300/50 shadow-2xl bg-[#241719] group hover:border-rose-300 transition-all duration-500">
                <div className="relative aspect-[4/4.8] overflow-hidden bg-[#1E1214]">
                  <img
                    src="/images/dra_katheryn.jpg"
                    alt="Dra. Katheryn Escorcia - Bioestimulación y Armonización Facial"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180E10] via-black/20 to-transparent opacity-90" />
                  
                  {/* Floating Rose Badge on flyer */}
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="inline-flex items-center gap-1.5 text-white bg-[#180E10]/95 border border-rose-300/60 font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-xs shadow-lg backdrop-blur-xs">
                      <Calendar className="w-3.5 h-3.5 text-rose-300" />
                      <span>Virtual En Vivo &middot; 28 NOV 2026</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
