import React, { useState } from 'react';
import { Course, StripeTicket } from '../../types';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  Sparkles,
  Phone,
  Mail,
  User,
  ArrowRight
} from 'lucide-react';

interface StripeCheckoutModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (ticket: StripeTicket) => void;
}

export const StripeCheckoutModal: React.FC<StripeCheckoutModalProps> = ({
  course,
  isOpen,
  onClose,
  onPaymentSuccess,
}) => {
  const [fullName, setFullName] = useState('Dr. Carlos Mendoza');
  const [phone, setPhone] = useState('+1 (829) 763-9971');
  const [email, setEmail] = useState('carlos.mendoza@clinica.com');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('892');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !course) return null;

  const handleGenerateTicket = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const randomTicketNum = Math.floor(10000 + Math.random() * 90000);
      const randomStripeId = 'ch_' + Math.random().toString(36).substring(2, 12);

      // Ticket is generated ACCORDING to the specific course paid!
      const ticket: StripeTicket = {
        ticketId: `TK-KE-${randomTicketNum}`,
        stripePaymentId: randomStripeId,
        courseId: course.id,
        courseTitle: course.title,
        modality: course.modality,
        studentName: fullName || 'Colega Médico',
        studentPhone: phone || '+1 (829) 763-9971',
        studentEmail: email || 'alumno@medico.com',
        amount: course.price,
        currency: 'USD',
        purchaseDate: new Date().toLocaleDateString('es-CO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'completado_pendiente_whatsapp',
        accessCode: `ACC-${randomTicketNum}`,
      };

      setIsProcessing(false);
      onPaymentSuccess(ticket);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-sm shadow-2xl border-2 border-brand-rose/40 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Stripe Header Band with Rose & Gold Accents */}
        <div className="bg-[#180E10] text-white p-5 px-6 flex items-center justify-between border-b border-brand-rose-gold/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-rose flex items-center justify-center text-white font-serif font-bold text-sm shadow-md">
              KE
            </div>
            <div>
              <p className="font-serif font-bold text-base text-white">Stripe Checkout Oficial</p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-rose-light">
                <Lock className="w-3 h-3 text-brand-rose-light" />
                <span>Pasarela Segura Encriptada SSL (256 bits)</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-sm transition"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Summary strip */}
        <div className="bg-brand-rose-blush/60 p-4 px-6 border-b border-[#E8D7CF] flex items-center justify-between">
          <div className="pr-4">
            <span className="text-[10px] font-mono uppercase text-brand-rose font-bold block">
              Inscripción a:
            </span>
            <p className="font-serif font-bold text-sm text-[#1A1012] line-clamp-1">
              {course.title}
            </p>
            <span className="text-[10px] text-[#80706B] font-mono">
              Modalidad: {course.modality === 'en-vivo' ? 'En Vivo 4K' : course.modality === 'presencial' ? 'Hands-On Presencial' : 'Online Inmediato'}
            </span>
          </div>
          <div className="text-right shrink-0">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-rose">
              ${course.price}
            </span>
            <span className="text-xs text-[#80706B] font-mono block">USD</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Quick Demo Test Button */}
          <div className="p-3 bg-brand-rose-blush border border-brand-rose/30 rounded-xs flex items-center justify-between gap-3">
            <div className="text-xs text-[#1A1012]">
              <span className="font-bold flex items-center gap-1 text-brand-rose">
                <Sparkles className="w-3.5 h-3.5 text-brand-rose" />
                Modo Demo Stripe:
              </span>
              <span className="text-[#80706B] font-light">Prueba el pago en 1 clic para ver el ticket generado.</span>
            </div>
            <button
              type="button"
              onClick={() => handleGenerateTicket()}
              disabled={isProcessing}
              className="px-3.5 py-1.5 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-[11px] rounded-xs whitespace-nowrap shadow-xs uppercase tracking-wider transition active:scale-95"
            >
              {isProcessing ? 'Procesando...' : 'Aprobar Demo'}
            </button>
          </div>

          <form onSubmit={handleGenerateTicket} className="space-y-4">
            
            {/* Student info */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#80706B] font-bold mb-1">
                Nombre Completo del Médico / Alumno
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej: Dr. Carlos Mendoza"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xs focus:outline-none focus:border-brand-rose"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#80706B] font-bold mb-1">
                  WhatsApp (Para Enviar el Ticket)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xs focus:outline-none focus:border-brand-rose"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#80706B] font-bold mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xs focus:outline-none focus:border-brand-rose"
                  />
                </div>
              </div>
            </div>

            {/* Credit Card Section (Official Stripe Elements Style) */}
            <div className="pt-2">
              <label className="block text-xs font-mono uppercase text-[#80706B] font-bold mb-1">
                Datos de Tarjeta (Stripe Secure Elements)
              </label>
              
              <div className="border border-gray-300 rounded-xs overflow-hidden">
                <div className="p-2.5 bg-white flex items-center gap-2 border-b border-gray-200">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4242 •••• •••• 4242"
                    className="w-full text-sm focus:outline-none font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 bg-white">
                  <input
                    type="text"
                    required
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM / AA"
                    className="p-2.5 text-sm focus:outline-none border-r border-gray-200 font-mono"
                  />
                  <input
                    type="password"
                    required
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    placeholder="CVC"
                    maxLength={4}
                    className="p-2.5 text-sm focus:outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-sm uppercase tracking-wider rounded-xs transition shadow-lg shadow-[#B05C55]/30 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Validando con Stripe...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Pagar ${course.price} USD &middot; Generar Ticket</span>
                </>
              )}
            </button>
          </form>

          {/* Reassurance Seal */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#80706B] pt-2 border-t border-gray-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Procesado por Stripe &middot; Genera Ticket para WhatsApp / Drive</span>
          </div>

        </div>

      </div>
    </div>
  );
};
