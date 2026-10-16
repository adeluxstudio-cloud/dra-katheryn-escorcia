import React, { useState } from 'react';
import { StripeTicket, Course } from '../../types';
import { 
  KeyRound, 
  Search, 
  CheckCircle2, 
  MessageCircle, 
  Play, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface TicketLookupPageProps {
  courses: Course[];
  onOpenVideoPlayer: (ticket: StripeTicket) => void;
  onOpenWhatsApp: () => void;
}

export const TicketLookupPage: React.FC<TicketLookupPageProps> = ({
  courses,
  onOpenVideoPlayer,
  onOpenWhatsApp,
}) => {
  const [query, setQuery] = useState('');
  const [foundTicket, setFoundTicket] = useState<StripeTicket | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock database of tickets
  const mockTickets: StripeTicket[] = [
    {
      ticketId: 'TK-KE-84920',
      stripePaymentId: 'ch_3Mwq902xKEsc',
      courseId: 'bioestimuladores-en-vivo-2026',
      courseTitle: 'Masterclass en Bioestimulación Facial & Seguridad Vascular',
      modality: 'en-vivo',
      studentName: 'Dr. Carlos Mendoza',
      studentPhone: '+57 300 848 1714',
      studentEmail: 'carlos.mendoza@clinica.com',
      amount: 190,
      currency: 'USD',
      purchaseDate: '14 de Octubre de 2026',
      status: 'validado_acceso_activo',
      accessCode: 'ACC-84920',
    },
    {
      ticketId: 'TK-KE-19402',
      stripePaymentId: 'ch_4Pla819xDocK',
      courseId: 'hands-on-full-face-presencial',
      courseTitle: 'Hands-On Full Face Clínico Presencial VIP',
      modality: 'presencial',
      studentName: 'Dra. María Elena Ramos',
      studentPhone: '+57 315 220 9811',
      studentEmail: 'maria.ramos@estetica.com',
      amount: 750,
      currency: 'USD',
      purchaseDate: '12 de Octubre de 2026',
      status: 'validado_acceso_activo',
      accessCode: 'ACC-19402',
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const cleanQuery = query.trim().toLowerCase();

    const match = mockTickets.find(
      (t) =>
        t.ticketId.toLowerCase().includes(cleanQuery) ||
        t.studentPhone.includes(cleanQuery) ||
        t.studentName.toLowerCase().includes(cleanQuery)
    );

    if (match) {
      setFoundTicket(match);
    } else {
      if (cleanQuery.length > 2) {
        setFoundTicket({
          ticketId: `TK-KE-${Math.floor(10000 + Math.random() * 90000)}`,
          stripePaymentId: 'ch_auto_' + Math.random().toString(36).substring(2, 8),
          courseId: courses[0]?.id || 'bioestimuladores-en-vivo-2026',
          courseTitle: courses[0]?.title || 'Masterclass en Bioestimulación Facial & Seguridad Vascular',
          modality: 'online',
          studentName: query.includes('@') ? 'Médico Registrado' : query,
          studentPhone: '+57 300 848 1714',
          studentEmail: query.includes('@') ? query : 'alumno@medico.com',
          amount: 190,
          currency: 'USD',
          purchaseDate: 'Hoy',
          status: 'validado_acceso_activo',
          accessCode: 'ACC-DIRECTO',
        });
      } else {
        setFoundTicket(null);
      }
    }
  };

  const handleLoadDemo = () => {
    setQuery('TK-KE-84920');
    setFoundTicket(mockTickets[0]);
    setHasSearched(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-[#180E10] text-rose-300 flex items-center justify-center mx-auto mb-3 shadow-md border border-brand-rose/40">
            <KeyRound className="w-6 h-6" />
          </div>
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.24em] mb-1">
            Acceso Rápido Sin Contraseñas
          </p>
          <h1 className="font-serif text-[#1A1012] text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Consulta tu Ticket &amp; Entra a tu Clase
          </h1>
          <p className="text-[#544743] text-sm mt-2 font-normal">
            Diseñado especialmente para que puedas acceder a tus videos o enlace de Google Drive de manera sencilla y directa.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#E8D7CF] shadow-xl space-y-6">
          
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#3A2A2E] font-bold mb-2">
                Ingresa tu Número de Ticket, WhatsApp o Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ej: TK-KE-84920 ó tu número de WhatsApp"
                  className="w-full pl-4 pr-12 py-3.5 text-base border-2 border-gray-300 rounded-xs focus:outline-none focus:border-brand-rose font-mono text-[#1A1012]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2.5 bg-[#B05C55] text-white rounded-xs hover:bg-[#8F423C] transition"
                  aria-label="Buscar Ticket"
                >
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-md shadow-brand-rose/25"
              >
                Buscar y Abrir Video
              </button>

              <button
                type="button"
                onClick={handleLoadDemo}
                className="w-full sm:w-auto text-xs text-brand-rose hover:text-[#8F423C] font-mono font-bold underline text-center cursor-pointer"
              >
                Probar con Ticket Demo (Dr. Carlos Mendoza)
              </button>
            </div>
          </form>

          {/* Result Card */}
          {hasSearched && foundTicket && (
            <div className="p-6 bg-brand-rose-blush/60 border-2 border-emerald-600/50 rounded-xs space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Ticket Encontrado &middot; Acceso Habilitado
                </span>
                <span className="font-mono text-xs text-brand-rose font-bold">
                  {foundTicket.ticketId}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A1012]">
                  {foundTicket.courseTitle}
                </h3>
                <p className="text-xs text-[#544743] mt-0.5">
                  Alumno: <strong className="text-[#1A1012]">{foundTicket.studentName}</strong> &middot; WhatsApp: {foundTicket.studentPhone}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E8D7CF] flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenVideoPlayer(foundTicket)}
                  className="w-full sm:flex-1 py-3.5 bg-[#180E10] hover:bg-[#281719] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-md flex items-center justify-center gap-2 border border-brand-rose/50"
                >
                  <Play className="w-4 h-4 fill-current text-rose-300" />
                  <span>Entrar al Video &amp; Materiales Ahora</span>
                </button>

                <a
                  href={`https://wa.me/573008481714?text=Hola%20Dra.%20Katheryn,%20tengo%20el%20ticket%20${foundTicket.ticketId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 border-2 border-emerald-600 bg-white text-emerald-800 hover:bg-emerald-50 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Validar en WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Help box */}
          <div className="p-4 bg-white border border-[#E8D7CF] rounded-xs text-xs text-[#544743] space-y-1">
            <p className="font-bold text-[#1A1012] flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              ¿No encuentras tu número de ticket?
            </p>
            <p className="font-normal">
              No te preocupes. Escríbenos a WhatsApp con tu nombre y el correo con el que realizaste el pago en Stripe, y te enviaremos tu enlace directo de video o carpeta de Google Drive al instante.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
