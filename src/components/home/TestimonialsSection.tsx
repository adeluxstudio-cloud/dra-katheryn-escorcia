import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Alejandro Restrepo',
      specialty: 'Médico Cirujano Estético · Medellín',
      program: 'Masterclass en Bioestimuladores En Vivo',
      quote: 'El enfoque en la vectorización y la seguridad vascular de la Dra. Katheryn transformó mi práctica diaria. La claridad para explicar la dilución de hidroxiapatita de calcio es inigualable.',
      rating: 5,
    },
    {
      name: 'Dra. Patricia Valenzuela',
      specialty: 'Dermatóloga Clínica · Santiago de Chile',
      program: 'Diplomado Online en Skin Quality & Matriz',
      quote: 'Poder acceder de inmediato a los videos en 4K y tener los protocolos de dosificación listos para imprimir me dio una seguridad absoluta. El soporte por WhatsApp es rápido y profesional.',
      rating: 5,
    },
    {
      name: 'Dr. Manuel Tejada',
      specialty: 'Cirujano Plástico Facial · Santo Domingo',
      program: 'Hands-On Presencial Full Face',
      quote: 'La calidad docente de la doctora es excepcional. Es de las pocas profesionales que realmente te enseña el "cómo hacer" sin guardarse secretos anatómicos ni de producto.',
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#FAF6F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8" id="testimonios">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.2em] mb-2">
            Testimonios de Colegas
          </p>
          <h2 className="font-serif text-[#1C1614] text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Lo Que Dicen Quienes Ya Se Formaron
          </h2>
          <p className="text-[#544743] text-xs sm:text-base mt-2 font-normal">
            Médicos y especialistas de toda Latinoamérica que elevaron sus resultados clínicos con nuestros cursos.
          </p>
        </div>

        {/* Testimonials Grid (Equal height cards like Francisco España) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-md p-5 sm:p-7 flex flex-col justify-between border border-[#E8D7CF] hover:border-brand-rose/60 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Rose Quote Mark */}
                <div className="font-serif text-brand-rose text-5xl leading-none select-none mb-2" aria-hidden="true">
                  &#8220;
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans italic text-sm text-[#332925] leading-relaxed mb-6 font-normal">
                  {t.quote}
                </p>
              </div>

              <div>
                {/* Program Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-brand-rose-blush text-brand-rose text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-brand-rose/30">
                    {t.program}
                  </span>
                </div>

                {/* Author Row */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#180E10] border border-rose-300/40 flex items-center justify-center text-rose-200 font-serif font-bold text-sm shrink-0">
                    {t.name.split(' ')[1]?.[0] || 'D'}
                  </div>
                  <div>
                    <p className="font-serif text-sm font-bold text-[#1C1614] leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-[#544743] font-sans font-medium">
                      {t.specialty}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
