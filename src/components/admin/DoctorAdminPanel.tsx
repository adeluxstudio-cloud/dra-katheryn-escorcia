import React, { useState } from 'react';
import { Course, StripeTicket, CourseModality } from '../../types';
import { 
  ArrowLeft, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Search, 
  Plus, 
  FolderDown, 
  Trash2, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Laptop,
  Radio,
  MapPin,
  Calendar,
  Layers,
  BookOpen
} from 'lucide-react';

interface DoctorAdminPanelProps {
  courses: Course[];
  tickets: StripeTicket[];
  onBackToWeb: () => void;
  onAddCourse: (newCourse: Course) => void;
  onDeleteCourse: (courseId: string) => void;
  onUpdateTicketStatus: (ticketId: string, status: 'completado_pendiente_whatsapp' | 'entregado') => void;
}

export const DoctorAdminPanel: React.FC<DoctorAdminPanelProps> = ({
  courses,
  tickets,
  onBackToWeb,
  onAddCourse,
  onDeleteCourse,
  onUpdateTicketStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'courses'>('tickets');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'delivered'>('all');

  // Form state to upload a new course effortlessly
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newModality, setNewModality] = useState<CourseModality>('online');
  const [newPrice, setNewPrice] = useState<number>(190);
  const [newDuration, setNewDuration] = useState('4 Horas de Video Clínico');
  const [newDeliveryUrl, setNewDeliveryUrl] = useState('https://drive.google.com/drive/folders/ejemplo-dra-katheryn');
  const [newHeroImage, setNewHeroImage] = useState('/images/carousel_01.png');
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  // Filtered tickets
  const filteredTickets = tickets.filter((t) => {
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      t.ticketId.toLowerCase().includes(q) ||
      t.studentName.toLowerCase().includes(q) ||
      t.studentPhone.includes(q) ||
      t.courseTitle.toLowerCase().includes(q) ||
      t.studentEmail.toLowerCase().includes(q);

    if (!matchesQuery) return false;
    if (statusFilter === 'pending') return t.status !== 'entregado';
    if (statusFilter === 'delivered') return t.status === 'entregado';
    return true;
  });

  // Calculate metrics
  const totalRevenue = tickets.reduce((acc, t) => acc + (t.amount || 0), 0);
  const totalStudents = tickets.length;
  const pendingTickets = tickets.filter((t) => t.status !== 'entregado').length;

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const courseSlug = newTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30);
    const createdCourse: Course = {
      id: `${courseSlug}-${Date.now()}`,
      title: newTitle.trim(),
      subtitle: newSubtitle.trim() || 'Formación especializada dictada por la Dra. Katheryn Escorcia.',
      modality: newModality,
      modalityBadge: newModality === 'en-vivo' ? 'Virtual En Vivo' : newModality === 'presencial' ? 'Hands-On Presencial' : 'Online Inmediato',
      category: 'Medicina Estética & Bioestimulación',
      level: 'Intermedio a Avanzado',
      duration: newDuration,
      price: Number(newPrice) || 190,
      heroImage: newHeroImage,
      rating: 5.0,
      reviewCount: 1,
      description: newSubtitle.trim() || 'Curso médico enfocado en protocolos de seguridad vascular y técnicas de armonización.',
      objectives: [
        'Dominio de planos de inyección segura',
        'Protocolo de dilución y vectorización',
        'Prevención y manejo de eventos adversos'
      ],
      targetAudience: ['Médicos', 'Odontólogos', 'Especialistas Estéticos'],
      includes: [
        'Acceso a carpeta de Google Drive / Video 4K',
        'Protocolos clínicos en PDF descargables',
        'Certificado avalado por la Dra. Katheryn Escorcia'
      ],
      modules: [
        {
          id: 'mod-1',
          title: 'Módulo 1: Fundamentos y Técnica Clínica',
          duration: newDuration,
          lessons: [
            {
              id: 'les-1',
              title: 'Demostración práctica en paciente real',
              duration: newDuration,
              videoUrl: 'https://vimeo.com/demo',
              summary: 'Abordaje anatómico paso a paso con cánula.'
            }
          ]
        }
      ],
      deliveryUrl: newDeliveryUrl.trim(),
    };

    onAddCourse(createdCourse);
    setIsSuccessAlert(true);
    setTimeout(() => setIsSuccessAlert(false), 4000);

    // Reset form
    setNewTitle('');
    setNewSubtitle('');
    setNewPrice(190);
  };

  return (
    <div className="min-h-screen bg-[#140C0E] text-white flex flex-col font-sans">
      
      {/* Top Admin Navbar */}
      <header className="bg-[#1C1013] border-b border-rose-300/20 px-4 sm:px-8 py-4 sticky top-0 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWeb}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-rose-300" />
              <span>Volver a la Web</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h1 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  Panel Administrativo Dra. Katheryn Escorcia
                </h1>
              </div>
              <p className="text-[11px] font-mono text-rose-300/80">
                Control de Compras Stripe &middot; Gestión Rápida de Cursos &middot; Entrega Drive
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-[#281719] p-1 rounded-sm border border-rose-300/20">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                activeTab === 'tickets'
                  ? 'bg-[#B05C55] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Ventas &amp; Tickets ({tickets.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                activeTab === 'courses'
                  ? 'bg-[#B05C55] text-white shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Subir Cursos ({courses.length})</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1E1214] p-5 rounded-sm border border-rose-300/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-rose-200 font-bold block">
                Total Recaudado Stripe
              </span>
              <p className="font-serif text-3xl font-bold text-white mt-1">
                ${totalRevenue} <span className="text-xs text-rose-300 font-sans font-normal">USD</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#1E1214] p-5 rounded-sm border border-rose-300/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-rose-200 font-bold block">
                Alumnos / Compras
              </span>
              <p className="font-serif text-3xl font-bold text-white mt-1">
                {totalStudents} <span className="text-xs text-rose-300 font-sans font-normal">Registrados</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-300">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#1E1214] p-5 rounded-sm border border-rose-300/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-rose-200 font-bold block">
                Pendientes de Entrega
              </span>
              <p className="font-serif text-3xl font-bold text-amber-400 mt-1">
                {pendingTickets} <span className="text-xs text-rose-300 font-sans font-normal">Tickets</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#1E1214] p-5 rounded-sm border border-rose-300/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-rose-200 font-bold block">
                Cursos Publicados
              </span>
              <p className="font-serif text-3xl font-bold text-white mt-1">
                {courses.length} <span className="text-xs text-rose-300 font-sans font-normal">En Tienda</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-300">
              <Layers className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* TAB 1: TICKETS DATABASE */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            
            {/* Filter and Search Bar */}
            <div className="bg-[#1E1214] p-4 sm:p-5 rounded-sm border border-rose-300/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-white/50 absolute left-3 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar alumno, WhatsApp o Ticket..."
                  className="w-full pl-9 pr-4 py-2.5 bg-[#2A181C] border border-white/20 rounded-xs text-sm text-white placeholder-white/40 focus:outline-none focus:border-rose-400 font-sans"
                />
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                <span className="text-xs text-white/70 font-mono">Filtrar:</span>
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition ${
                    statusFilter === 'all'
                      ? 'bg-[#B05C55] text-white'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Todos ({tickets.length})
                </button>
                <button
                  onClick={() => setStatusFilter('pending')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition ${
                    statusFilter === 'pending'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Pendientes ({pendingTickets})
                </button>
                <button
                  onClick={() => setStatusFilter('delivered')}
                  className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition ${
                    statusFilter === 'delivered'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  Entregados ({tickets.length - pendingTickets})
                </button>
              </div>
            </div>

            {/* Tickets Table / Cards */}
            <div className="space-y-3">
              {filteredTickets.length === 0 ? (
                <div className="bg-[#1E1214] p-12 text-center rounded-sm border border-white/10">
                  <p className="text-sm text-white/60">No se encontraron tickets con ese criterio de búsqueda.</p>
                </div>
              ) : (
                filteredTickets.map((ticket) => {
                  const isDelivered = ticket.status === 'entregado';
                  
                  // Match course to retrieve specific Google Drive URL if set
                  const matchedCourse = courses.find((c) => c.id === ticket.courseId || c.title.toLowerCase() === ticket.courseTitle.toLowerCase());
                  const courseDriveUrl = matchedCourse?.deliveryUrl || 'https://drive.google.com/drive/folders/dra-katheryn-material-academico';

                  // WhatsApp direct delivery link
                  const studentCleanPhone = ticket.studentPhone.replace(/[^0-9]/g, '');
                  const deliveryMessage = encodeURIComponent(
                    `¡Hola ${ticket.studentName}! Le saluda la Dra. Katheryn Escorcia Maldonado.\n\n` +
                    `Hemos recibido y confirmado su pago vía Stripe para el curso:\n` +
                    `🎓 *${ticket.courseTitle}*\n` +
                    `📋 Ticket: *${ticket.ticketId}*\n\n` +
                    `Aquí tiene su enlace oficial al video y material en Google Drive:\n` +
                    `📁 ${courseDriveUrl}\n\n` +
                    `Cualquier duda clínica que tenga, con gusto se la respondo por esta vía. ¡Bienvenido/a!`
                  );
                  const whatsappSendUrl = `https://wa.me/${studentCleanPhone}?text=${deliveryMessage}`;

                  return (
                    <div
                      key={ticket.ticketId}
                      className={`p-5 rounded-sm border transition-all duration-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 ${
                        isDelivered 
                          ? 'bg-[#180E10]/80 border-white/10 opacity-90' 
                          : 'bg-[#221316] border-rose-300/40 shadow-lg'
                      }`}
                    >
                      {/* Ticket & Student info */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-xs bg-[#B05C55] text-white">
                            {ticket.ticketId}
                          </span>
                          <span className="font-mono text-[11px] text-white/60">
                            Stripe: {ticket.stripePaymentId}
                          </span>
                          <span className="text-[11px] text-rose-300 font-mono">
                            {ticket.purchaseDate}
                          </span>
                          {isDelivered ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Drive Entregado</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-xs bg-amber-950 text-amber-300 border border-amber-500/40">
                              <Clock className="w-3 h-3" />
                              <span>Pendiente Entrega</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="font-serif text-lg font-bold text-white">
                            {ticket.studentName}
                          </h3>
                          <span className="text-xs font-mono text-rose-200">
                            📱 {ticket.studentPhone}
                          </span>
                          <span className="text-xs text-white/50">
                            &middot; {ticket.studentEmail}
                          </span>
                        </div>

                        <p className="text-xs text-white/80">
                          Curso: <strong className="text-white font-medium">{ticket.courseTitle}</strong>
                        </p>
                      </div>

                      {/* Price & Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end pt-3 lg:pt-0 border-t lg:border-t-0 border-white/10">
                        <div className="text-left lg:text-right pr-2">
                          <span className="text-[10px] font-mono uppercase text-white/50 block">Pagado en Stripe</span>
                          <span className="font-serif text-2xl font-bold text-white">
                            ${ticket.amount} <span className="text-xs font-mono font-normal text-rose-300">{ticket.currency}</span>
                          </span>
                        </div>

                        {/* WhatsApp One-Click Delivery Button */}
                        <a
                          href={whatsappSendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xs bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition active:scale-95"
                          title="Enviar mensaje directo con el enlace de Google Drive"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Enviar Drive por WhatsApp</span>
                        </a>

                        {/* Toggle Status Button */}
                        <button
                          type="button"
                          onClick={() => onUpdateTicketStatus(
                            ticket.ticketId, 
                            isDelivered ? 'completado_pendiente_whatsapp' : 'entregado'
                          )}
                          className={`px-3 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider transition border ${
                            isDelivered
                              ? 'bg-white/10 text-white/80 hover:bg-white/20 border-white/20'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400'
                          }`}
                        >
                          {isDelivered ? 'Desmarcar' : '✓ Marcar Entregado'}
                        </button>
                      </div>

                    </div>
                  );
                })
              )}
            </div>

          </div>
        )}

        {/* TAB 2: UPLOAD & MANAGE COURSES EASILY ("FÁCIL, SOLO SUBE SU CURSO") */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Upload Course Form (Col 5) */}
            <div className="lg:col-span-5 bg-[#1E1214] p-6 rounded-sm border border-rose-300/30 shadow-xl space-y-5">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase text-rose-300 font-bold tracking-widest block">
                  Sin Complicaciones Técnicas
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  Publicar Nuevo Curso
                </h2>
                <p className="text-xs text-white/70 mt-1 font-light">
                  Completa los datos y se pondrá a la venta en la web al instante con botón de Stripe.
                </p>
              </div>

              {isSuccessAlert && (
                <div className="p-3 bg-emerald-950 border border-emerald-500 text-emerald-300 rounded-xs text-xs font-bold flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>¡Curso publicado con éxito en la tienda!</span>
                </div>
              )}

              <form onSubmit={handleCreateCourse} className="space-y-4 text-xs">
                
                <div>
                  <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                    Título del Curso o Diplomado
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ej: Masterclass en Rinomodelación & Puntos de Sustentación"
                    className="w-full p-3 bg-[#2A181C] border border-white/20 rounded-xs text-sm text-white focus:outline-none focus:border-rose-400"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                    Descripción Breve
                  </label>
                  <textarea
                    rows={2}
                    value={newSubtitle}
                    onChange={(e) => setNewSubtitle(e.target.value)}
                    placeholder="Ej: Protocolo clínico con cánula 22G, anatomía vascular y casos clínicos paso a paso."
                    className="w-full p-3 bg-[#2A181C] border border-white/20 rounded-xs text-xs text-white focus:outline-none focus:border-rose-400 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                      Modalidad
                    </label>
                    <select
                      value={newModality}
                      onChange={(e) => setNewModality(e.target.value as CourseModality)}
                      className="w-full p-3 bg-[#2A181C] border border-white/20 rounded-xs text-xs text-white focus:outline-none focus:border-rose-400"
                    >
                      <option value="online">Online Inmediato (Video)</option>
                      <option value="en-vivo">Virtual En Vivo (Zoom/4K)</option>
                      <option value="presencial">Presencial Hands-On</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                      Precio de Venta ($USD)
                    </label>
                    <input
                      type="number"
                      required
                      min={10}
                      value={newPrice}
                      onChange={(e) => setNewPrice(Number(e.target.value))}
                      className="w-full p-3 bg-[#2A181C] border border-white/20 rounded-xs text-sm font-serif font-bold text-white focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                    Enlace de Entrega (Carpeta Google Drive o Video)
                  </label>
                  <div className="relative">
                    <FolderDown className="w-4 h-4 text-rose-300 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={newDeliveryUrl}
                      onChange={(e) => setNewDeliveryUrl(e.target.value)}
                      placeholder="https://drive.google.com/drive/folders/..."
                      className="w-full pl-9 pr-3 py-2.5 bg-[#2A181C] border border-white/20 rounded-xs text-xs text-white font-mono focus:outline-none focus:border-rose-400"
                    />
                  </div>
                  <p className="text-[10px] text-white/50 mt-1 font-light">
                    Este es el enlace que se le entregará al alumno por WhatsApp tras pagar.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                      Duración / Horas
                    </label>
                    <input
                      type="text"
                      value={newDuration}
                      onChange={(e) => setNewDuration(e.target.value)}
                      placeholder="Ej: 5 Horas de Práctica"
                      className="w-full p-2.5 bg-[#2A181C] border border-white/20 rounded-xs text-xs text-white focus:outline-none focus:border-rose-400"
                    />
                  </div>

                  <div>
                    <label className="block font-mono uppercase text-white/80 font-bold mb-1">
                      Portada del Curso
                    </label>
                    <select
                      value={newHeroImage}
                      onChange={(e) => setNewHeroImage(e.target.value)}
                      className="w-full p-2.5 bg-[#2A181C] border border-white/20 rounded-xs text-xs text-white focus:outline-none focus:border-rose-400"
                    >
                      <option value="/images/carousel_01.png">Foto 1 (Clínica Full Face)</option>
                      <option value="/images/carousel_02.png">Foto 2 (Bioestimulación)</option>
                      <option value="/images/carousel_03.png">Foto 3 (Rinomodelación)</option>
                      <option value="/images/carousel_04.png">Foto 4 (Toxina Botulínica)</option>
                      <option value="/images/carousel_05.png">Foto 5 (Hands-On Modelo)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition shadow-lg shadow-brand-rose/40 flex items-center justify-center gap-2 active:scale-95 mt-4"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publicar Curso en la Web Ahora</span>
                </button>

              </form>

            </div>

            {/* Right: Existing Courses List (Col 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <h3 className="font-serif text-xl font-bold text-white">
                  Cursos Actualmente a la Venta ({courses.length})
                </h3>
                <span className="text-xs font-mono text-rose-300">
                  Actualización en tiempo real
                </span>
              </div>

              <div className="space-y-3">
                {courses.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 bg-[#1E1214] rounded-sm border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-rose-300/40 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 rounded-xs overflow-hidden bg-[#241719] shrink-0 border border-white/10">
                        <img
                          src={c.heroImage || '/images/carousel_01.png'}
                          alt={c.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-xs bg-[#B05C55] text-white font-mono text-[9px] font-bold uppercase">
                            {c.modality}
                          </span>
                          <span className="text-[11px] font-mono text-white/50">{c.duration}</span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-white line-clamp-1 mt-0.5">
                          {c.title}
                        </h4>
                        <p className="text-[11px] text-white/60 line-clamp-1 font-light">
                          Entrega: {c.deliveryUrl || 'Google Drive Privado'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
                      <span className="font-serif text-xl font-bold text-white">
                        ${c.price} <span className="text-xs text-white/50 font-mono font-normal">USD</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`¿Deseas retirar el curso "${c.title}" de la venta?`)) {
                            onDeleteCourse(c.id);
                          }
                        }}
                        className="p-2 text-white/40 hover:text-rose-400 hover:bg-white/5 rounded-xs transition"
                        title="Eliminar curso"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

      </main>

    </div>
  );
};
