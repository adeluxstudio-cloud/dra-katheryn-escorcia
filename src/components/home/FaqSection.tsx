import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo accedo a los videos una vez realizado el pago en Stripe?',
      a: 'Al completar el pago, el sistema genera inmediatamente tu Ticket Digital Oficial con un botón directo para enviarlo a nuestro WhatsApp. Nuestro equipo realiza la validación y te entrega tu enlace de Google Drive o video en 4K con 1 solo clic desde tu celular o computador, sin contraseñas complejas ni procesos difíciles.',
    },
    {
      q: '¿Qué métodos de pago son aceptados por Stripe?',
      a: 'Aceptamos todas las tarjetas de crédito y débito internacionales (Visa, Mastercard, American Express) con procesamiento seguro y encriptación bancaria de Stripe. La confirmación y la emisión del ticket es instantánea.',
    },
    {
      q: 'No soy muy hábil con la tecnología, ¿alguien me ayudará a ingresar?',
      a: '¡Totalmente! Hemos simplificado todo al máximo para evitar complicaciones. Además, tienes soporte personalizado 1 a 1 por WhatsApp con el equipo de la Dra. Katheryn para resolver cualquier duda y asegurarnos de que estés viendo tu clase sin tropiezos.',
    },
    {
      q: '¿Los cursos incluyen certificado médico avalado?',
      a: 'Sí. Todos nuestros diplomados y masterclasses incluyen certificado digital con código QR de verificación biomédica y firma de la Dra. Katheryn Escorcia, válido para tu hoja de vida profesional.',
    },
    {
      q: '¿Puedo ver las clases grabadas si no puedo asistir al evento en vivo?',
      a: 'Sí. Para los eventos en vivo, las grabaciones completas en alta resolución quedan disponibles en tu enlace de acceso (Google Drive o plataforma) para que puedas repasarlas las veces que necesites a tu propio ritmo.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.2em] mb-2">
            Respuestas Claras &middot; Proceso Simple
          </p>
          <h2 className="font-serif text-[#1A1012] text-2xl sm:text-4xl font-bold uppercase tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#544743] text-xs sm:text-sm mt-2 font-normal">
            Todo lo que necesitas saber sobre el pago, validación por WhatsApp y entrega de tus clases (Drive / Video 4K).
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E8D7CF] rounded-sm overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-brand-rose-blush/40 transition-colors"
                >
                  <span className="font-serif text-[#1A1012] text-sm sm:text-lg font-bold pr-3">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 sm:w-5 h-4 sm:h-5 text-brand-rose shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-brand-rose-blush/30 text-xs sm:text-sm text-[#3A2A2E] font-normal leading-relaxed border-t border-[#E8D7CF]/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help callout (High Contrast!) */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-7 rounded-sm bg-[#180E10] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-rose-300/30 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-rose/25 border border-rose-400 flex items-center justify-center text-rose-300 shrink-0">
              <HelpCircle className="w-6 h-6 text-rose-300" />
            </div>
            <div>
              <p className="font-serif font-bold text-lg text-white">¿Tienes alguna pregunta adicional?</p>
              <p className="text-xs text-rose-100/90 font-light mt-0.5">Escríbenos y te asesoramos de inmediato por WhatsApp.</p>
            </div>
          </div>

          <a
            href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20tengo%20una%20pregunta%20antes%20de%20inscribirme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-lg shadow-brand-rose/30 whitespace-nowrap flex items-center gap-2 transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current text-white" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
