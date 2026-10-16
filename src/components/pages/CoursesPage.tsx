import React, { useState } from 'react';
import { Course, CourseModality } from '../../types';
import { Radio, MapPin, Laptop, Clock, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface CoursesPageProps {
  courses: Course[];
  onEnroll: (course: Course) => void;
  onViewDetails: (course: Course) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  onEnroll,
  onViewDetails,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | CourseModality>('all');

  const filteredCourses = courses.filter((c) => {
    if (selectedFilter === 'all') return true;
    return c.modality === selectedFilter;
  });

  return (
    <div className="pt-24 pb-20 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-brand-rose font-mono font-bold text-xs uppercase tracking-[0.24em] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-rose" />
            <span>Catálogo Oficial de Formación</span>
          </p>
          <h1 className="font-serif text-[#1A1012] text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Diplomados, Masterclasses & Talleres
          </h1>
          <p className="text-[#80706B] text-sm sm:text-base mt-3 font-light">
            Programas médicos diseñados para elevar la destreza técnica, la vectorización y la seguridad vascular en medicina estética.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2.5 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition ${
              selectedFilter === 'all'
                ? 'bg-[#1A1012] text-brand-rose-blush shadow-sm'
                : 'bg-white text-[#80706B] border border-[#E8D7CF] hover:border-brand-rose'
            }`}
          >
            Todos ({courses.length})
          </button>

          <button
            onClick={() => setSelectedFilter('en-vivo')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition ${
              selectedFilter === 'en-vivo'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white text-[#80706B] border border-[#E8D7CF] hover:border-rose-400'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>En Vivo</span>
          </button>

          <button
            onClick={() => setSelectedFilter('presencial')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition ${
              selectedFilter === 'presencial'
                ? 'bg-[#B05C55] text-white shadow-sm'
                : 'bg-white text-[#80706B] border border-[#E8D7CF] hover:border-[#B05C55]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Presenciales Hands-On</span>
          </button>

          <button
            onClick={() => setSelectedFilter('online')}
            className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xs font-mono text-xs font-bold uppercase tracking-wider transition ${
              selectedFilter === 'online'
                ? 'bg-brand-rose text-white shadow-sm'
                : 'bg-white text-[#80706B] border border-[#E8D7CF] hover:border-brand-rose'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Diplomados Online</span>
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white border border-[#E8D7CF] rounded-sm overflow-hidden flex flex-col hover:shadow-2xl hover:border-brand-rose/60 hover:-translate-y-1 transition-all duration-300 group shadow-sm"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#241719]">
                <img
                  src={course.heroImage || '/images/carousel_01.png'}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Modality Tag */}
                <div className="absolute top-3 left-3">
                  {course.modality === 'en-vivo' ? (
                    <span className="px-2.5 py-0.5 rounded-xs bg-rose-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Radio className="w-3 h-3 animate-pulse" />
                      <span>En Vivo</span>
                    </span>
                  ) : course.modality === 'presencial' ? (
                    <span className="px-2.5 py-0.5 rounded-xs bg-[#B05C55] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <MapPin className="w-3 h-3" />
                      <span>Presencial</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-xs bg-[#1A1012] text-brand-rose-blush font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/20">
                      <Laptop className="w-3 h-3" />
                      <span>Online Inmediato</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 left-3 text-white/90 text-xs font-mono flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] bg-black/60 px-2 py-0.5 rounded-xs text-brand-rose-blush">
                    <Clock className="w-3 h-3 text-brand-rose-light" />
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#80706B]">
                  <span className="font-mono uppercase text-[10px] text-brand-rose font-bold">
                    {course.category}
                  </span>
                  <span>{course.modules.length} Módulos</span>
                </div>

                <h3 
                  onClick={() => onViewDetails(course)}
                  className="font-serif text-[#1A1012] text-xl font-bold uppercase leading-tight tracking-tight hover:text-brand-rose transition cursor-pointer line-clamp-2"
                >
                  {course.title}
                </h3>

                <p className="text-xs text-[#80706B] font-light leading-relaxed line-clamp-2 flex-1">
                  {course.subtitle}
                </p>

                {/* Date or Location */}
                <div className="pt-2 text-[11px] font-medium text-[#1A1012] flex items-center justify-between border-t border-[#E8D7CF]/60">
                  {course.location ? (
                    <span className="flex items-center gap-1 text-brand-rose">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{course.location}</span>
                    </span>
                  ) : course.nextDate ? (
                    <span className="flex items-center gap-1 text-brand-rose font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{course.nextDate}</span>
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-semibold">Acceso Inmediato 24/7</span>
                  )}

                  <button
                    type="button"
                    onClick={() => onViewDetails(course)}
                    className="text-[#1A1012] hover:text-brand-rose text-xs font-bold border-b border-brand-rose"
                  >
                    Ver Temario
                  </button>
                </div>

                {/* Price and CTA */}
                <div className="pt-3 border-t border-[#E8D7CF]/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#80706B] block">Inversión</span>
                    <span className="font-serif text-2xl font-bold text-[#1A1012]">
                      ${course.price} <span className="text-xs font-sans font-normal text-[#80706B]">USD</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onEnroll(course)}
                    className="px-5 py-2.5 bg-[#B05C55] hover:bg-[#8F423C] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-sm shadow-[#B05C55]/20 flex items-center gap-1.5 active:scale-95"
                  >
                    <span>Inscribirme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
