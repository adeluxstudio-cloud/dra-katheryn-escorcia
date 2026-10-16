import React from 'react';
import { Course } from '../../types';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  Radio, 
  ShieldCheck, 
  FileText, 
  Award, 
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Play
} from 'lucide-react';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onBack,
  onEnroll,
}) => {
  return (
    <div className="pt-24 pb-20 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#80706B] hover:text-[#1A1012] transition mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 text-brand-rose group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Catálogo de Cursos</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info Column (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#1A1012] text-brand-rose-blush text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs">
                  {course.category}
                </span>
                {course.modality === 'en-vivo' && (
                  <span className="px-3 py-1 bg-rose-600 text-white text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs flex items-center gap-1 shadow-xs">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>En Vivo</span>
                  </span>
                )}
                {course.modality === 'presencial' && (
                  <span className="px-3 py-1 bg-[#B05C55] text-white text-[10px] font-mono uppercase font-bold tracking-wider rounded-xs flex items-center gap-1 shadow-xs">
                    <MapPin className="w-3 h-3" />
                    <span>Presencial</span>
                  </span>
                )}
              </div>

              <h1 className="font-serif text-[#1A1012] text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-[#80706B] text-base sm:text-lg mt-3 font-light leading-relaxed">
                {course.subtitle}
              </p>

              {/* Meta indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-[#1A1012] border-t border-[#E8D7CF] mt-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-rose" />
                  <span>Duración: <strong>{course.duration}</strong></span>
                </span>
                {course.nextDate && (
                  <span className="flex items-center gap-1.5 text-brand-rose">
                    <Calendar className="w-4 h-4" />
                    <span>Fecha: <strong>{course.nextDate}</strong></span>
                  </span>
                )}
                {course.location && (
                  <span className="flex items-center gap-1.5 text-brand-rose">
                    <MapPin className="w-4 h-4" />
                    <span>Sede: <strong>{course.location}</strong></span>
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-brand-rose" />
                  <span>Certificación Médica Oficial</span>
                </span>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white p-7 rounded-sm border border-[#E8D7CF] space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1A1012] uppercase">
                Acerca de este Programa
              </h2>
              <p className="text-sm text-[#80706B] font-light leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Objectives */}
            <div className="bg-white p-7 rounded-sm border border-[#E8D7CF] space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1A1012] uppercase">
                Objetivos de Aprendizaje Clínico
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#332325] font-light leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules / Temario */}
            <div className="bg-white p-7 rounded-sm border border-[#E8D7CF] space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-[#1A1012] uppercase">
                  Temario &amp; Módulos del Video
                </h2>
                <span className="text-xs font-mono uppercase text-brand-rose font-bold">
                  {course.modules.length} Módulos Especializados
                </span>
              </div>

              <div className="space-y-4">
                {course.modules.map((mod, index) => (
                  <div key={mod.id} className="border border-[#E8D7CF] rounded-xs p-5 bg-brand-rose-blush/40">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-rose text-white font-mono text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-[#1A1012]">
                          {mod.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-[#80706B]">
                        {mod.duration}
                      </span>
                    </div>

                    <div className="space-y-2 pl-8">
                      {mod.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center justify-between text-xs text-[#332325] py-1 border-b border-[#E8D7CF]/40 last:border-0">
                          <div className="flex items-center gap-2">
                            <Play className="w-3.5 h-3.5 text-brand-rose" />
                            <span className="font-medium">{lesson.title}</span>
                          </div>
                          <span className="font-mono text-[11px] text-[#80706B]">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar Purchase Box (Col 4) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border-2 border-brand-rose/40 rounded-sm shadow-xl p-6 sm:p-7 space-y-6">
              
              {/* Cover preview on sidebar */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-[#241719]">
                <img
                  src={course.heroImage || '/images/carousel_01.png'}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Price */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#80706B] block">
                  Inversión Total
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-bold text-[#1A1012]">
                    ${course.price}
                  </span>
                  <span className="text-xs text-[#80706B] font-mono">USD</span>
                  {course.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${course.originalPrice} USD
                    </span>
                  )}
                </div>
              </div>

              {/* Big CTA */}
              <button
                type="button"
                onClick={() => onEnroll(course)}
                className="w-full py-4 btn-rose-shimmer text-white font-bold text-sm uppercase tracking-wider rounded-xs transition shadow-lg shadow-brand-rose/30 flex items-center justify-center gap-2 transform active:scale-95 hover:scale-[1.02]"
              >
                <span>Inscribirme con Stripe</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 3 Step Reassurance */}
              <div className="bg-brand-rose-blush/70 p-4 rounded-xs border border-brand-rose/25 space-y-2.5 text-xs text-[#332325]">
                <p className="font-bold text-brand-rose uppercase font-mono text-[11px]">
                  Flujo de Inscripción Simple:
                </p>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-rose">1.</span>
                  <span>Pagas seguro con tarjeta vía Stripe SSL.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-rose">2.</span>
                  <span>Se genera tu Ticket Oficial con código QR y monto exacto.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-brand-rose">3.</span>
                  <span>Envías tu ticket a WhatsApp y recibes tu acceso (Google Drive / Video 4K).</span>
                </div>
              </div>

              {/* Includes checklist */}
              <div className="pt-2 border-t border-[#E8D7CF]/60 space-y-2 text-xs text-[#80706B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acceso a lecciones de video en 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protocolos clínicos y consentimientos en PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certificado oficial con verificación biomédica</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protección anti-piratería DRM con marca de agua</span>
                </div>
              </div>

              {/* WhatsApp direct assistance */}
              <div className="pt-3 border-t border-[#E8D7CF]/60 text-center">
                <a
                  href={`https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20tengo%20preguntas%20sobre%20el%20curso%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-rose hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>¿Tienes dudas? Pregúntanos por WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
