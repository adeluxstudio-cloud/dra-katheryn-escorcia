import React from 'react';
import { StripeTicket } from '../../types';
import { 
  CheckCircle2, 
  MessageCircle, 
  Play, 
  QrCode, 
  Printer, 
  X, 
  ShieldCheck, 
  FolderDown, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface TicketModalProps {
  ticket: StripeTicket | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenVideoPlayer: (ticket: StripeTicket) => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  ticket,
  isOpen,
  onClose,
  onOpenVideoPlayer,
}) => {
  if (!isOpen || !ticket) return null;

  // Build the WhatsApp message tailored to the exact course and flexible delivery (Drive / Aula)
  const whatsappMessage = encodeURIComponent(
    `¡Hola Dra. Katheryn! Acabo de pagar en Stripe el curso:\n\n` +
    `📋 Ticket Oficial: *${ticket.ticketId}*\n` +
    `🎓 Curso: *${ticket.courseTitle}*\n` +
    `👨‍⚕️ Médico/Alumno: *${ticket.studentName}*\n` +
    `📱 WhatsApp: *${ticket.studentPhone}*\n` +
    `💳 Inversión Pagada: *$${ticket.amount} ${ticket.currency} (Stripe Aprobado)*\n` +
    `🔑 Ref Stripe: *${ticket.stripePaymentId}*\n\n` +
    `Adjunto mi comprobante para que me envíen el enlace del video y materiales (Google Drive / Sala de Video). ¡Muchas gracias!`
  );

  const whatsappUrl = `https://wa.me/18297639971?text=${whatsappMessage}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-sm shadow-2xl border-2 border-brand-rose overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Announcement Bar in Emerald */}
        <div className="bg-emerald-700 text-white p-3 px-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Pago Aprobado con Éxito en Stripe</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Ticket Header (Luxury Rose & Gold Medical Pass) */}
        <div className="bg-[#180E10] text-white p-6 pb-5 border-b border-brand-rose-gold/20 text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-full border border-brand-rose-gold bg-[#281719] mx-auto flex items-center justify-center text-brand-rose-gold font-serif font-bold text-xl mb-2 shadow-lg">
            KE
          </div>
          <p className="font-mono text-[10px] tracking-widest text-brand-rose-light uppercase font-semibold">
            COMPROBANTE &amp; TICKET OFICIAL DE INSCRIPCIÓN
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
            Academia Médica Dra. Katheryn Escorcia
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-brand-rose/20 border border-brand-rose/40 text-brand-rose-blush text-xs font-mono font-bold">
            <span>Ticket: {ticket.ticketId}</span>
            <span>&middot;</span>
            <span>Ref: {ticket.stripePaymentId}</span>
          </div>
        </div>

        {/* Ticket Body */}
        <div className="p-6 space-y-6">
          
          {/* Important Instruction: Send to WhatsApp for Drive / Link Delivery */}
          <div className="p-4 bg-brand-rose-blush border border-brand-rose/30 rounded-xs text-xs text-[#1A1012] space-y-1.5">
            <p className="font-bold flex items-center gap-1.5 text-brand-rose uppercase font-mono">
              <Sparkles className="w-4 h-4 text-brand-rose" />
              Paso Final: Envía tu Ticket a WhatsApp
            </p>
            <p className="font-light text-[#80706B] leading-relaxed">
              La Dra. Katheryn y su equipo validarán tu comprobante y te entregarán tu enlace privado de acceso (Google Drive, Sala de Video 4K o grupo del evento) directamente a tu celular.
            </p>
          </div>

          {/* Ticket Details Grid (Generated specifically for this course payment) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xs bg-[#FAF6F0] border border-[#E8D7CF] text-xs">
            <div>
              <span className="font-mono uppercase text-[10px] text-[#80706B] block">Médico / Alumno</span>
              <strong className="text-[#1A1012] text-sm block mt-0.5">{ticket.studentName}</strong>
            </div>

            <div>
              <span className="font-mono uppercase text-[10px] text-[#80706B] block">WhatsApp Registrado</span>
              <strong className="text-[#1A1012] text-sm block mt-0.5">{ticket.studentPhone}</strong>
            </div>

            <div>
              <span className="font-mono uppercase text-[10px] text-[#80706B] block">Inversión Pagada</span>
              <strong className="text-brand-rose font-serif text-xl block leading-none mt-0.5 font-bold">
                ${ticket.amount} {ticket.currency}
              </strong>
            </div>

            <div className="sm:col-span-2">
              <span className="font-mono uppercase text-[10px] text-[#80706B] block">Curso Adquirido</span>
              <strong className="text-[#1A1012] block mt-0.5 font-medium text-xs leading-snug">{ticket.courseTitle}</strong>
            </div>

            <div>
              <span className="font-mono uppercase text-[10px] text-[#80706B] block">Fecha de Compra</span>
              <span className="text-[#80706B] block mt-0.5">{ticket.purchaseDate.split(',')[0]}</span>
            </div>
          </div>

          {/* Delivery Note & QR Code */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-dashed border-[#E8D7CF] rounded-xs bg-white">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-gray-300 bg-[#FAF6F0] rounded-xs shrink-0">
                <QrCode className="w-16 h-16 text-[#1A1012]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase text-brand-rose font-bold block">
                  Entrega de Video &amp; Materiales
                </span>
                <span className="font-mono font-bold text-sm text-[#1A1012]">{ticket.accessCode}</span>
                <p className="text-[11px] text-[#80706B] font-light mt-0.5">
                  Vía Google Drive / Aula con Marca de Agua Anti-Plagio.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-gray-300 hover:bg-gray-50 text-xs text-[#1A1012] font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Ticket</span>
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-1">
            
            {/* 1. Send to WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-sm uppercase tracking-wider rounded-xs transition shadow-lg flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>1. Enviar Ticket a WhatsApp para Entrega (Drive / Video)</span>
            </a>

            {/* 2. Direct Video / Material Access */}
            <button
              type="button"
              onClick={() => onOpenVideoPlayer(ticket)}
              className="w-full py-4 bg-[#180E10] hover:bg-[#281719] text-brand-rose-gold font-bold text-sm uppercase tracking-wider rounded-xs transition shadow-md flex items-center justify-center gap-2 active:scale-95 border border-brand-rose/50"
            >
              <Play className="w-4 h-4 fill-current text-brand-rose-light" />
              <span>2. Ver Video &amp; Protocolos Ahora (Acceso Directo)</span>
            </button>
          </div>

          {/* Reassurance note */}
          <p className="text-center text-[11px] text-[#80706B] font-light">
            Conserva tu número de ticket como comprobante oficial respaldado por Stripe. Tu compra ya quedó registrada en la base de datos de la academia.
          </p>

        </div>

      </div>
    </div>
  );
};
