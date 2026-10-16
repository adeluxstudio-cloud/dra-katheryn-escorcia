import React, { useState, useEffect } from 'react';
import { PageView } from '../../types';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adaptive contrast: Dark header on black Hero at the top of home page;
  // Dynamic light luxury header with dark letters when scrolling into white/cream sections or on other pages
  const isDarkHeader = currentPage === 'home' && !isScrolled;

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 backdrop-blur-md ${
        isDarkHeader
          ? 'border-b border-rose-300/20 shadow-lg py-3.5 sm:py-4'
          : 'border-b border-[#E8D7CF] shadow-md py-3 sm:py-3.5'
      }`}
      style={{
        backgroundColor: isDarkHeader ? 'rgba(24, 14, 16, 0.96)' : 'rgba(250, 246, 240, 0.98)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Adaptive Contrast */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <div className="relative shrink-0">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center font-serif font-bold text-base sm:text-lg shadow-md transition-all group-hover:scale-105 ${
                isDarkHeader
                  ? 'border-rose-300/60 bg-[#251719] text-rose-200 group-hover:border-rose-200'
                  : 'border-brand-rose/60 bg-[#1A1012] text-white group-hover:border-brand-rose'
              }`}>
                KE
              </div>
              <div className="absolute -inset-1 rounded-full bg-brand-rose/30 blur-xs -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex flex-col">
              <span className={`font-serif text-sm sm:text-base md:text-xl font-bold tracking-wide leading-tight transition-colors ${
                isDarkHeader
                  ? 'text-white group-hover:text-rose-200'
                  : 'text-[#1A1012] group-hover:text-brand-rose'
              }`}>
                <span className="hidden sm:inline">DRA. KATHERYN ESCORCIA MALDONADO</span>
                <span className="sm:hidden">DRA. KATHERYN ESCORCIA</span>
              </span>
              <span className={`text-[9px] sm:text-[10px] uppercase font-mono tracking-widest font-semibold transition-colors ${
                isDarkHeader ? 'text-rose-300' : 'text-brand-rose'
              }`}>
                MEDICINA ESTÉTICA &amp; ARMONIZACIÓN
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with Adaptive Colors */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('home')}
              className={`relative py-1.5 transition-colors ${
                currentPage === 'home'
                  ? isDarkHeader
                    ? 'text-rose-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-300'
                    : 'text-brand-rose font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-rose'
                  : isDarkHeader
                    ? 'text-white/90 hover:text-rose-200'
                    : 'text-[#2E2024] hover:text-brand-rose'
              }`}
            >
              Inicio
            </button>

            <button
              onClick={() => handleNavClick('courses')}
              className={`relative py-1.5 transition-colors ${
                currentPage === 'courses'
                  ? isDarkHeader
                    ? 'text-rose-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-300'
                    : 'text-brand-rose font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-rose'
                  : isDarkHeader
                    ? 'text-white/90 hover:text-rose-200'
                    : 'text-[#2E2024] hover:text-brand-rose'
              }`}
            >
              Diplomados & Cursos
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`relative py-1.5 transition-colors ${
                currentPage === 'about'
                  ? isDarkHeader
                    ? 'text-rose-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-300'
                    : 'text-brand-rose font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-rose'
                  : isDarkHeader
                    ? 'text-white/90 hover:text-rose-200'
                    : 'text-[#2E2024] hover:text-brand-rose'
              }`}
            >
              Sobre la Doctora
            </button>
          </nav>

          {/* Right Action: Rose Terracotta WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20informaci%C3%B3n%20sobre%20sus%20cursos%20m%C3%A9dicos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current text-white" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Right Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20informaci%C3%B3n%20sobre%20sus%20cursos%20m%C3%A9dicos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow-md active:scale-95"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition ${
                isDarkHeader ? 'text-white hover:text-rose-200' : 'text-[#1A1012] hover:text-brand-rose'
              }`}
              aria-label="Abrir Menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      {isMobileMenuOpen && (
        <div 
          className={`md:hidden border-b px-5 py-5 space-y-4 animate-fadeIn shadow-2xl backdrop-blur-xl ${
            isDarkHeader ? 'border-rose-300/30' : 'border-[#E8D7CF]'
          }`}
          style={{
            backgroundColor: isDarkHeader ? 'rgba(24, 14, 16, 0.98)' : 'rgba(250, 246, 240, 0.98)'
          }}
        >
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-3 rounded-xs text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'home'
                  ? isDarkHeader
                    ? 'bg-white/10 text-rose-200 font-bold border-l-2 border-rose-300'
                    : 'bg-brand-rose-blush text-brand-rose font-bold border-l-2 border-brand-rose'
                  : isDarkHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#1A1012] hover:text-brand-rose'
              }`}
            >
              <span>Inicio</span>
              {currentPage === 'home' && <span className={`w-1.5 h-1.5 rounded-full ${isDarkHeader ? 'bg-rose-300' : 'bg-brand-rose'}`} />}
            </button>
            <button
              onClick={() => handleNavClick('courses')}
              className={`text-left py-2.5 px-3 rounded-xs text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'courses'
                  ? isDarkHeader
                    ? 'bg-white/10 text-rose-200 font-bold border-l-2 border-rose-300'
                    : 'bg-brand-rose-blush text-brand-rose font-bold border-l-2 border-brand-rose'
                  : isDarkHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#1A1012] hover:text-brand-rose'
              }`}
            >
              <span>Diplomados & Cursos</span>
              {currentPage === 'courses' && <span className={`w-1.5 h-1.5 rounded-full ${isDarkHeader ? 'bg-rose-300' : 'bg-brand-rose'}`} />}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 px-3 rounded-xs text-sm font-semibold transition flex items-center justify-between ${
                currentPage === 'about'
                  ? isDarkHeader
                    ? 'bg-white/10 text-rose-200 font-bold border-l-2 border-rose-300'
                    : 'bg-brand-rose-blush text-brand-rose font-bold border-l-2 border-brand-rose'
                  : isDarkHeader
                    ? 'text-white/80 hover:text-white'
                    : 'text-[#1A1012] hover:text-brand-rose'
              }`}
            >
              <span>Sobre la Doctora</span>
              {currentPage === 'about' && <span className={`w-1.5 h-1.5 rounded-full ${isDarkHeader ? 'bg-rose-300' : 'bg-brand-rose'}`} />}
            </button>
          </nav>

          <div className="pt-2 border-t border-black/10">
            <a
              href="https://wa.me/18297639971?text=Hola%20Dra.%20Katheryn,%20deseo%20informaci%C3%B3n%20sobre%20sus%20cursos%20m%C3%A9dicos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xs bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Directo (+1 829 763-9971)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
