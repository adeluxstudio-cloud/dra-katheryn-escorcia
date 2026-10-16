import React, { useState } from 'react';
import { COURSES_DATA } from './data/coursesData';
import { Course, PageView, StripeTicket } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';
import { EditorialHero } from './components/home/EditorialHero';
import { AgendaSection } from './components/home/AgendaSection';
import { DiplomadosSection } from './components/home/DiplomadosSection';
import { AuthoritySection } from './components/home/AuthoritySection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FaqSection } from './components/home/FaqSection';
import { CoursesPage } from './components/pages/CoursesPage';
import { CourseDetailPage } from './components/pages/CourseDetailPage';
import { AboutDoctorPage } from './components/pages/AboutDoctorPage';
import { SimpleVideoPlayerPage } from './components/video/SimpleVideoPlayerPage';
import { StripeCheckoutModal } from './components/checkout/StripeCheckoutModal';
import { TicketModal } from './components/checkout/TicketModal';
import { DoctorAdminPanel } from './components/admin/DoctorAdminPanel';

export const App: React.FC = () => {
  // Courses managed with localStorage persistence so the doctor can add courses effortlessly
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem('ke_courses_boceto2');
      return saved ? JSON.parse(saved) : COURSES_DATA;
    } catch {
      return COURSES_DATA;
    }
  });

  // Tickets / Orders database (persisted so doctor sees purchases)
  const [tickets, setTickets] = useState<StripeTicket[]>(() => {
    try {
      const saved = localStorage.getItem('ke_tickets_boceto2');
      if (saved) return JSON.parse(saved);
      return [
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
          status: 'completado_pendiente_whatsapp',
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
          status: 'entregado',
          accessCode: 'ACC-19402',
        }
      ];
    } catch {
      return [];
    }
  });

  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES_DATA[0]);
  
  // Checkout & Ticket state
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);
  const [courseToEnroll, setCourseToEnroll] = useState<Course | null>(null);
  
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<StripeTicket | null>(null);

  // Featured hero course
  const featuredHeroCourse = courses.find((c) => c.id === 'bioestimuladores-en-vivo-2026') || courses[0];

  // Actions
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnrollCourse = (course: Course) => {
    setCourseToEnroll(course);
    setIsStripeModalOpen(true);
  };

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = (ticket: StripeTicket) => {
    setIsStripeModalOpen(false);
    setCurrentTicket(ticket);
    setIsTicketModalOpen(true);

    // Persist ticket into the database so the doctor sees the purchase in her admin panel
    setTickets((prev) => {
      const updated = [ticket, ...prev];
      try {
        localStorage.setItem('ke_tickets_boceto2', JSON.stringify(updated));
      } catch (err) {
        console.error('Error saving tickets:', err);
      }
      return updated;
    });
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses((prev) => {
      const updated = [newCourse, ...prev];
      try {
        localStorage.setItem('ke_courses_boceto2', JSON.stringify(updated));
      } catch (err) {
        console.error('Error saving courses:', err);
      }
      return updated;
    });
  };

  const handleDeleteCourse = (courseId: string) => {
    setCourses((prev) => {
      const updated = prev.filter((c) => c.id !== courseId);
      try {
        localStorage.setItem('ke_courses_boceto2', JSON.stringify(updated));
      } catch (err) {
        console.error('Error saving courses:', err);
      }
      return updated;
    });
  };

  const handleUpdateTicketStatus = (ticketId: string, status: 'completado_pendiente_whatsapp' | 'entregado') => {
    setTickets((prev) => {
      const updated = prev.map((t) => (t.ticketId === ticketId ? { ...t, status } : t));
      try {
        localStorage.setItem('ke_tickets_boceto2', JSON.stringify(updated));
      } catch (err) {
        console.error('Error updating ticket status:', err);
      }
      return updated;
    });
  };

  const handleOpenVideoPlayer = (ticket: StripeTicket) => {
    const matched = courses.find((c) => c.id === ticket.courseId) || courses[0];
    setSelectedCourse(matched);
    setCurrentTicket(ticket);
    setIsTicketModalOpen(false);
    setCurrentPage('video-player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDistractionFree = currentPage === 'video-player' || currentPage === 'admin';

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1614] flex flex-col font-sans selection:bg-[#B05C55] selection:text-white">
      
      {/* Header (hidden in admin panel & video player) */}
      {!isDistractionFree && (
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
      )}

      {/* Main Pages Router */}
      <main className="flex-1">
        
        {/* PAGE 1: HOME (EDITORIAL ALTA CONVERSIÓN INSPIRADO EN FRANCISCO ESPAÑA) */}
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* High-Impact Hero with Live Countdown */}
            <EditorialHero
              featuredCourse={featuredHeroCourse}
              onEnroll={handleEnrollCourse}
              onViewDetails={handleViewDetails}
            />

            {/* Agenda: Upcoming Live & Hands-on Workshops */}
            <AgendaSection
              courses={courses}
              onEnroll={handleEnrollCourse}
              onViewDetails={handleViewDetails}
            />

            {/* Diplomados & Online Masterclasses */}
            <DiplomadosSection
              courses={courses}
              onEnroll={handleEnrollCourse}
              onViewDetails={handleViewDetails}
              onViewAllCourses={() => handleNavigate('courses')}
            />

            {/* Authority Section (Doctor bio, portrait, metrics, signature) */}
            <AuthoritySection />

            {/* Testimonials of Medical Colleagues */}
            <TestimonialsSection />

            {/* Clear FAQs */}
            <FaqSection />
          </div>
        )}

        {/* PAGE 2: COURSES CATALOG */}
        {currentPage === 'courses' && (
          <div className="animate-fadeIn">
            <CoursesPage
              courses={courses}
              onEnroll={handleEnrollCourse}
              onViewDetails={handleViewDetails}
            />
          </div>
        )}

        {/* PAGE 3: COURSE DETAIL PAGE */}
        {currentPage === 'course-detail' && selectedCourse && (
          <div className="animate-fadeIn">
            <CourseDetailPage
              course={selectedCourse}
              onBack={() => handleNavigate('courses')}
              onEnroll={handleEnrollCourse}
            />
          </div>
        )}

        {/* PAGE 4: ABOUT DOCTOR */}
        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            <AboutDoctorPage />
          </div>
        )}

        {/* PAGE 5: DOCTOR ADMINISTRATIVE DASHBOARD (VENTAS STRIPE & SUBIDA DE CURSOS) */}
        {currentPage === 'admin' && (
          <div className="animate-fadeIn">
            <DoctorAdminPanel
              courses={courses}
              tickets={tickets}
              onBackToWeb={() => handleNavigate('home')}
              onAddCourse={handleAddCourse}
              onDeleteCourse={handleDeleteCourse}
              onUpdateTicketStatus={handleUpdateTicketStatus}
            />
          </div>
        )}

        {/* PAGE 6: VIDEO CLASSROOM WITH ANTI-PIRACY DRM */}
        {currentPage === 'video-player' && selectedCourse && currentTicket && (
          <div className="animate-fadeIn">
            <SimpleVideoPlayerPage
              course={selectedCourse}
              ticket={currentTicket}
              onBackToHome={() => handleNavigate('home')}
            />
          </div>
        )}

      </main>

      {/* Footer (hidden in admin and video player) */}
      {!isDistractionFree && (
        <Footer
          onNavigate={handleNavigate}
          onOpenAdmin={() => handleNavigate('admin')}
        />
      )}

      {/* Floating WhatsApp Button */}
      {!isDistractionFree && <WhatsAppFloat />}

      {/* Stripe Checkout Modal */}
      <StripeCheckoutModal
        course={courseToEnroll}
        isOpen={isStripeModalOpen}
        onClose={() => setIsStripeModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Digital Ticket Modal (Boarding pass style with QR & WhatsApp Share) */}
      <TicketModal
        ticket={currentTicket}
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        onOpenVideoPlayer={handleOpenVideoPlayer}
      />

    </div>
  );
};

export default App;
