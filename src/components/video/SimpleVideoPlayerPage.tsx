import React, { useState, useEffect } from 'react';
import { Course, StripeTicket } from '../../types';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  Volume2, 
  Maximize2, 
  Download, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  MessageCircle, 
  FolderDown,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface SimpleVideoPlayerPageProps {
  course: Course;
  ticket: StripeTicket;
  onBackToHome: () => void;
}

export const SimpleVideoPlayerPage: React.FC<SimpleVideoPlayerPageProps> = ({
  course,
  ticket,
  onBackToHome,
}) => {
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(30);

  // Floating anti-piracy DRM watermark coordinates
  const [watermarkPos, setWatermarkPos] = useState({ top: 20, left: 30 });

  useEffect(() => {
    // Watermark moves periodically to prevent screen recording and cropping
    const interval = setInterval(() => {
      const top = Math.floor(15 + Math.random() * 65);
      const left = Math.floor(10 + Math.random() * 70);
      setWatermarkPos({ top, left });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentModule = course.modules[selectedModuleIndex] || course.modules[0];
  const currentLesson = currentModule?.lessons[selectedLessonIndex] || currentModule?.lessons[0];

  return (
    <div className="min-h-screen bg-[#100A0C] text-white flex flex-col">
      
      {/* Top Bar with Rose Accents */}
      <header className="bg-[#180E10] border-b border-brand-rose-gold/20 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/10 hover:bg-white/20 text-xs text-white/90 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4 text-brand-rose-gold" />
            <span>Volver a la Web</span>
          </button>

          <div className="hidden sm:block">
            <h1 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-1">
              {course.title}
            </h1>
            <p className="text-[11px] font-mono text-brand-rose-light">
              Lección: {currentLesson?.title || 'Introducción Clínica'}
            </p>
          </div>
        </div>

        {/* Doctor and DRM Watermark Pill */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden md:inline">Licencia Activa:</span>
            <span>{ticket.ticketId} &middot; {ticket.studentName.split(' ')[0]}</span>
          </div>

          <a
            href={`https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20tengo%20una%20duda%20sobre%20el%20video%20del%20ticket%20${ticket.ticketId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-xs bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold flex items-center gap-1.5 transition"
            title="Soporte y dudas por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden sm:inline">Dudas Clínicas</span>
          </a>
        </div>
      </header>

      {/* Main Content: Player + Playlist */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Col 8): Video Player & Downloadable Resources */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Responsive 16:9 Video Canvas */}
          <div className="relative aspect-video bg-black rounded-sm overflow-hidden border border-brand-rose-gold/30 shadow-2xl group select-none">
            
            {/* Background simulation image */}
            <img
              src="/images/carousel_05.png"
              alt="Demostración clínica"
              className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-90' : 'opacity-60'}`}
            />

            {/* FLOATING ANTI-PIRACY DRM WATERMARK */}
            <div 
              className="absolute pointer-events-none transition-all duration-1000 ease-in-out px-3 py-1 rounded bg-black/45 border border-white/20 text-[10px] font-mono text-brand-rose-blush/70 tracking-wider shadow-sm select-none"
              style={{
                top: `${watermarkPos.top}%`,
                left: `${watermarkPos.left}%`,
              }}
            >
              DRM PROTEGIDO &middot; {ticket.studentName} &middot; {ticket.ticketId}
            </div>

            {/* Play/Pause Center Button Overlay when paused */}
            {!isPlaying && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer backdrop-blur-xs"
              >
                <div className="w-20 h-20 rounded-full bg-[#B05C55] text-white flex items-center justify-center shadow-2xl pl-1 hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
                <p className="font-serif text-lg font-bold text-white mt-4 tracking-wide">
                  Reproducir Clase Clínica (4K)
                </p>
                <span className="text-xs text-brand-rose-light font-mono mt-1">
                  {currentLesson?.duration || '45 minutos'}
                </span>
              </div>
            )}

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex flex-col gap-2">
              {/* Progress track in Rose */}
              <div 
                className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = Math.floor(((e.clientX - rect.left) / rect.width) * 100);
                  setVideoProgress(pct);
                }}
              >
                <div 
                  className="bg-[#B05C55] h-full transition-all duration-200"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>

              {/* Controls row */}
              <div className="flex items-center justify-between text-xs text-white/80">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 hover:text-white transition"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <Volume2 className="w-4 h-4" />
                  <span className="font-mono text-[11px]">18:40 / 48:20</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase bg-brand-rose/20 text-brand-rose-blush border border-brand-rose/40 px-2 py-0.5 rounded-xs">
                    Ultra HD 4K
                  </span>
                  <button 
                    onClick={() => {
                      if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen().catch(() => {});
                      } else {
                        document.exitFullscreen().catch(() => {});
                      }
                    }}
                    className="hover:text-white transition"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Lesson Overview & Drive Delivery Callout */}
          <div className="bg-[#180E10] p-6 rounded-sm border border-brand-rose-gold/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {currentLesson?.title || 'Módulo Principal'}
              </h2>

              {/* Google Drive Option */}
              <button
                type="button"
                onClick={() => alert(`Enlace Privado de Google Drive para ${ticket.studentName}:\nCarpeta compartida con videos originales y presentaciones clínicas en alta resolución.`)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#B05C55]/20 hover:bg-[#B05C55]/30 border border-brand-rose/40 text-brand-rose-blush text-xs font-mono font-bold transition"
              >
                <FolderDown className="w-3.5 h-3.5 text-brand-rose" />
                <span>Abrir Carpeta Google Drive</span>
                <ExternalLink className="w-3 h-3 text-white/50" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              {currentLesson?.summary || 'En esta lección clínica la Dra. Katheryn Escorcia detalla el abordaje paso a paso en paciente real, vectorización con cánula 22G y criterios de dilución anatómica para máxima bioestimulación dérmica.'}
            </p>
          </div>

          {/* Downloadable PDF Protocols */}
          <div className="bg-[#180E10] p-6 rounded-sm border border-brand-rose-gold/20 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-rose" />
                <span>Protocolos Clínicos Descargables (PDF)</span>
              </h3>
              <span className="text-[10px] font-mono text-brand-rose-light font-bold uppercase">
                Acceso Ilimitado
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs flex items-center justify-between hover:bg-white/10 transition">
                <div>
                  <p className="text-xs font-bold text-white">Protocolo de Dilución CaHA &amp; PLLA</p>
                  <span className="text-[10px] font-mono text-white/50">PDF Imprimible &middot; 2.4 MB</span>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Descargando Protocolo Clínico Oficial de la Dra. Katheryn Escorcia')}
                  className="p-2 rounded-xs bg-[#B05C55] text-white hover:bg-[#8F423C] transition"
                  title="Descargar PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xs flex items-center justify-between hover:bg-white/10 transition">
                <div>
                  <p className="text-xs font-bold text-white">Consentimiento Informado Pacientes</p>
                  <span className="text-[10px] font-mono text-white/50">DOC &middot; Listo para Clínica</span>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Descargando Consentimiento Informado Oficial')}
                  className="p-2 rounded-xs bg-[#B05C55] text-white hover:bg-[#8F423C] transition"
                  title="Descargar Consentimiento"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Col 4): Module & Lessons Playlist */}
        <div className="lg:col-span-4 bg-[#180E10] p-6 rounded-sm border border-brand-rose-gold/20 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-brand-rose font-bold block">
                Plan de Estudios
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Contenido del Video
              </h3>
            </div>
            <span className="text-xs font-mono text-white/60">
              {course.modules.length} Módulos
            </span>
          </div>

          {/* Modules Accordion */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
            {course.modules.map((mod, modIdx) => (
              <div key={mod.id} className="border border-white/10 rounded-xs overflow-hidden">
                <div 
                  onClick={() => setSelectedModuleIndex(modIdx)}
                  className={`p-3.5 flex items-center justify-between cursor-pointer transition ${
                    selectedModuleIndex === modIdx ? 'bg-[#251719] text-brand-rose-gold border-l-2 border-brand-rose' : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-[10px] font-mono flex items-center justify-center">
                      {modIdx + 1}
                    </span>
                    <span className="font-serif text-sm font-bold line-clamp-1">{mod.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">{mod.duration}</span>
                </div>

                {/* Lessons list */}
                {selectedModuleIndex === modIdx && (
                  <div className="bg-black/40 p-2 space-y-1">
                    {mod.lessons.map((lesson, lessIdx) => {
                      const isCurrent = selectedLessonIndex === lessIdx;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setSelectedLessonIndex(lessIdx);
                            setIsPlaying(true);
                          }}
                          className={`w-full text-left p-2.5 rounded-xs text-xs flex items-center justify-between transition ${
                            isCurrent 
                              ? 'bg-brand-rose/20 text-brand-rose-blush border-l-2 border-brand-rose font-bold' 
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2 pr-2">
                            <Play className="w-3.5 h-3.5 shrink-0 text-brand-rose" />
                            <span className="line-clamp-1">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] font-mono text-white/40 shrink-0">
                            {lesson.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Direct Help */}
          <div className="pt-4 border-t border-white/10">
            <a
              href={`https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20tengo%20una%20pregunta%20sobre%20la%20lecci%C3%B3n`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#B05C55]/20 hover:bg-[#B05C55]/30 border border-brand-rose/40 text-brand-rose-blush rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
              <span>Soporte 1 a 1 por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
