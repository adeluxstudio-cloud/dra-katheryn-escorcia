import React from 'react';
import { Award, ShieldCheck, MapPin, Sparkles, CheckCircle2, MessageCircle, HeartPulse, Activity, Zap } from 'lucide-react';

export const AboutDoctorPage: React.FC = () => {
  const authorProtocols = [
    {
      name: 'Armonilift',
      category: 'Facial No Invasivo',
      description: 'Protocolo de tensado dérmico facial, reposicionamiento de tejidos y bioestimulación de colágeno autólogo sin cirugía invasiva.',
      icon: Sparkles,
    },
    {
      name: 'Endonecklift',
      category: 'Contorno & Cuello',
      description: 'Definición del contorno y ángulo mandibular con reducción de papada mediante tecnología de láser subdérmico.',
      icon: Zap,
    },
    {
      name: 'Endobodylift',
      category: 'Tensado Corporal',
      description: 'Retracción cutánea y tensado tisular corporal enfocado en áreas de flacidez localizada.',
      icon: Activity,
    },
    {
      name: 'Bioestimuladores de Colágeno',
      category: 'Inyectables Avanzados',
      description: 'Tratamientos inyectables para regenerar densidad, firmeza y calidad dérmica con CaHA, PLLA y polinucleótidos.',
      icon: HeartPulse,
    },
    {
      name: 'Terapéutica Metabólica / Péptidos',
      category: 'Medicina Funcional',
      description: 'Manejo médico con análogos de GLP-1 y protocolos metabólicos bajo estricta supervisión clínica.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.24em] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span>Ficha Técnica Profesional &middot; Trayectoria</span>
          </p>
          <h1 className="font-serif text-[#1A1012] text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Dra. Katheryn Escorcia Maldonado
          </h1>
          <p className="text-brand-rose font-serif italic text-lg sm:text-xl font-bold mt-2">
            Medicina Estética y Armonización Facial y Corporal
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <span className="px-3 py-1 rounded-full bg-[#180E10] text-rose-200 text-xs font-mono font-bold uppercase tracking-wider border border-rose-300/30">
              Médico Estético
            </span>
            <span className="px-3 py-1 rounded-full bg-[#B05C55] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              Speaker Internacional
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-[#332325] text-xs font-mono font-bold uppercase tracking-wider border border-[#E8D7CF]">
              Entrenadora / Docente Médica
            </span>
          </div>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-sm overflow-hidden border-2 border-brand-rose/50 shadow-2xl bg-[#241719]">
              <img
                src="/images/dra_katheryn.jpg"
                alt="Dra. Katheryn Escorcia Maldonado"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-serif italic text-lg text-rose-200 font-bold block">
                  Dra. Katheryn Escorcia Maldonado
                </span>
                <p className="text-xs font-mono text-white/90 uppercase font-semibold">
                  Medicina Estética & Armonización
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#2D1F22] font-normal leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1012] uppercase">
              Pasión por la Ciencia, la Anatomía y la Naturalidad
            </h2>
            <p>
              La Dra. Katheryn Escorcia Maldonado es especialista en Medicina Estética y Armonización Facial y Corporal. Su enfoque clínico e investigación médica se concentran en la regeneración dérmica profunda, el tensado tisular no quirúrgico y el estricto apego a la anatomía vascular de seguridad.
            </p>
            <p>
              Como docente y speaker internacional, capacita a médicos y odontólogos en América Latina y el Caribe, compartiendo protocolos reproducibles y esquemas de dosificación milimétricos que garantizan resultados armónicos y cero complicaciones.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8D7CF]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-rose shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1012]">Seguridad Vascular</h4>
                  <p className="text-xs text-[#544743]">Entrenamiento riguroso en planos subdérmicos y prevención de oclusiones.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-brand-rose shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1012]">Docencia de Alto Nivel</h4>
                  <p className="text-xs text-[#544743]">Talleres hands-on presenciales y masterclasses clínicas de autor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AUTHOR PROTOCOLS SECTION ("PROCEDIMIENTOS Y PROTOCOLOS DE AUTOR") */}
        <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8D7CF] mb-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.2em] mb-1">
              Innovación Biomédica
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1012] uppercase">
              Procedimientos &amp; Protocolos de Autor
            </h3>
            <p className="text-xs sm:text-sm text-[#544743] mt-2">
              Técnicas exclusivas desarrolladas por la Dra. Katheryn Escorcia Maldonado para máxima eficacia tisular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorProtocols.map((proto, idx) => {
              const IconComp = proto.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xs bg-[#FAF6F0] border border-[#E8D7CF] hover:border-brand-rose/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-full bg-[#180E10] text-rose-300 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-rose font-bold bg-brand-rose-blush px-2 py-0.5 rounded-xs border border-brand-rose/20">
                        {proto.category}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#1A1012]">
                      {proto.name}
                    </h4>

                    <p className="text-xs text-[#544743] font-light leading-relaxed">
                      {proto.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLINICS / SEDES DE ATENCIÓN CLÍNICA */}
        <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E8D7CF] mb-16 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-wider mb-1">
              Sedes de Atención Clínica
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1012] uppercase">
              Presencia en República Dominicana &amp; Colombia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xs bg-[#FAF6F0] border border-[#E8D7CF]">
              <MapPin className="w-6 h-6 text-brand-rose mx-auto mb-2" />
              <h4 className="font-serif font-bold text-lg text-[#1A1012]">Santo Domingo, R.D.</h4>
              <p className="text-xs text-[#544743] mt-1 font-normal">Consulta Médica &middot; Armonización Facial & Bioestimulación</p>
            </div>

            <div className="p-6 rounded-xs bg-[#FAF6F0] border border-[#E8D7CF]">
              <MapPin className="w-6 h-6 text-brand-rose mx-auto mb-2" />
              <h4 className="font-serif font-bold text-lg text-[#1A1012]">Santiago de los Caballeros, R.D.</h4>
              <p className="text-xs text-[#544743] mt-1 font-normal">Sede Clínica &middot; Protocolos de Autor & Tensado Láser</p>
            </div>

            <div className="p-6 rounded-xs bg-[#FAF6F0] border border-[#E8D7CF]">
              <MapPin className="w-6 h-6 text-brand-rose mx-auto mb-2" />
              <h4 className="font-serif font-bold text-lg text-[#1A1012]">Barranquilla, Colombia</h4>
              <p className="text-xs text-[#544743] mt-1 font-normal">Consultorio Especializado &middot; Masterclasses VIP</p>
            </div>
          </div>
        </div>

        {/* WHATSAPP OFFICIAL CONTACT CALLOUT */}
        <div className="bg-[#180E10] text-white p-8 sm:p-10 rounded-sm text-center max-w-2xl mx-auto space-y-4 border border-rose-300/30 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase">
            Canales de Contacto Oficial
          </h3>
          <p className="text-xs sm:text-sm text-rose-100/90 font-light">
            WhatsApp de reservas y valoración médica directa:
          </p>
          <div className="inline-block p-2 px-4 rounded-xs bg-white/10 border border-white/20 font-mono text-sm font-bold text-rose-200">
            📱 +1 (829) 763-9971
          </div>
          <div>
            <a
              href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20agendar%20una%20valoraci%C3%B3n%20m%C3%A9dica%20o%20informaci%C3%B3n%20de%20cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-lg shadow-emerald-950/40 mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>Chatear por WhatsApp Oficial</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
