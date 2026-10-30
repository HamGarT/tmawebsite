import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Laptop,
  Maximize2,
  MonitorPlay,
  Play,
  Presentation,
  Sparkles,
  X,
} from 'lucide-react';
import { presentationSlides } from '@/data/presentacion';

const highlights = [
  {
    icon: Laptop,
    title: '100% remoto o presencial',
    description: 'Nos adaptamos a la modalidad que necesites para revisar tu documentación.',
  },
  {
    icon: FileText,
    title: 'Documentación de ingeniería',
    description: 'Planos, memorias, expedientes y documentos técnicos revisados por especialistas.',
  },
  {
    icon: MonitorPlay,
    title: 'Respuesta oportuna',
    description: 'Soporte ágil para resolver consultas y mantener tus proyectos en marcha.',
  },
];

const featuredIndexes = [5, 2, 0];

export default function Presentacion() {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const showSlide = useCallback((index: number) => {
    setActiveSlide((index + presentationSlides.length) % presentationSlides.length);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === null ? null : (current + 1) % presentationSlides.length,
    );
  }, []);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === null
        ? null
        : (current - 1 + presentationSlides.length) % presentationSlides.length,
    );
  }, []);

  const closeViewer = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
    setActiveSlide(null);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      viewerRef.current?.requestFullscreen?.().catch(() => undefined);
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    if (activeSlide === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowRight' || event.key === 'PageDown') nextSlide();
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') previousSlide();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSlide, closeViewer, nextSlide, previousSlide]);

  const currentSlide = activeSlide === null ? null : presentationSlides[activeSlide];

  return (
    <div className="w-full bg-[#f5f7fb] font-sans text-gray-800">
      <section className="relative overflow-hidden bg-[#041a3d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(245,166,35,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(19,93,183,0.45),transparent_48%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f5a623]/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#135db7]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f5a623]/40 bg-[#f5a623]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f8c15c]">
              <Presentation size={15} />
              Presentación técnica
            </span>

            <h1 className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-[42px] lg:text-[52px]">
              Asistencia técnica
              <span className="block text-[#f5a623]">remota y presencial</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
              Conoce nuestra propuesta de soporte especializado para operaciones mineras e
              industriales: documentación de ingeniería, optimización de plantas, gestión ambiental
              y acompañamiento técnico en cada etapa de tu proyecto.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => showSlide(0)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#081a38] shadow-lg shadow-[#f5a623]/20 transition-colors hover:bg-[#e0961b]"
              >
                <Play size={17} fill="currentColor" />
                Ver presentación completa
              </button>
              <a
                href="#diapositivas"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#f5a623] hover:bg-white/10"
              >
                Explorar contenido
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-extrabold text-[#f5a623]">10</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-300">
                  Diapositivas
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#f5a623]">100%</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-300">
                  Adaptable a tu operación
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#f5a623]">360°</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-300">
                  Soporte técnico
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[270px] w-full max-w-[500px] sm:h-[340px] lg:h-[420px]">
            {featuredIndexes.map((slideIndex, position) => {
              const slide = presentationSlides[slideIndex];
              const styles = [
                'left-[4%] top-[30%] z-10 w-[62%] -rotate-6 opacity-90',
                'right-[2%] top-[2%] z-20 w-[60%] rotate-[5deg] opacity-95',
                'left-[17%] top-[17%] z-30 w-[76%] -rotate-1',
              ];

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => showSlide(slideIndex)}
                  aria-label={`Abrir diapositiva ${slideIndex + 1}: ${slide.title}`}
                  className={`group absolute overflow-hidden rounded-2xl border border-white/15 bg-[#0a1c3f] text-left shadow-2xl shadow-black/40 transition-all duration-500 hover:z-40 hover:-translate-y-2 hover:rotate-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f5a623]/60 ${styles[position]}`}
                >
                  <img
                    src={slide.thumbnail}
                    alt={slide.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041a3d]/80 via-transparent to-transparent" />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#041a3d]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-4 py-2 text-xs font-bold text-[#081a38]">
                      <Play size={14} fill="currentColor" />
                      Abrir
                    </span>
                  </span>
                  <span className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <span className="rounded-md bg-[#f5a623] px-2 py-0.5 text-[10px] font-extrabold text-[#081a38]">
                      {slide.id}
                    </span>
                    <span className="line-clamp-1 text-[11px] font-semibold text-white">
                      {slide.title}
                    </span>
                  </span>
                </button>
              );
            })}

            <div className="absolute -bottom-2 right-4 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-[#071c3d]/90 px-4 py-2 text-[11px] font-semibold text-gray-200 shadow-lg backdrop-blur">
              <Sparkles size={14} className="text-[#f5a623]" />
              Haz clic para ampliar
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-[#0a1c3f]/5 md:grid-cols-3 md:p-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl p-3 text-left transition-colors hover:bg-[#f5f7fb] md:p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f5a623]/15 text-[#c27f0a]">
                <item.icon size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight text-[#0a1c3f]">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="diapositivas" className="scroll-mt-8 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 text-left md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c27f0a]">
                Contenido de la presentación
              </p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-[#0a1c3f] md:text-4xl">
                Una mirada completa a nuestra propuesta
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-right">
              Explora las 10 diapositivas y descubre cómo podemos acompañarte a resolver los retos
              técnicos de tu operación.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {presentationSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => showSlide(index)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a623]/60 hover:shadow-xl hover:shadow-[#0a1c3f]/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f5a623]/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1c3f]">
                  <img
                    src={slide.thumbnail}
                    alt={slide.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a3d]/85 via-[#041a3d]/10 to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-[#f5a623] px-2 text-[11px] font-extrabold text-[#081a38] shadow">
                    {slide.id}
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white/85">
                    {slide.category}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#041a3d]/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0a1c3f] shadow-lg">
                      <Play size={13} fill="currentColor" />
                      Ver diapositiva
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[13px] font-bold leading-snug text-[#0a1c3f]">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
                    {slide.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[11px] font-bold text-[#c27f0a] opacity-0 transition-opacity group-hover:opacity-100">
                    Abrir diapositiva
                    <ChevronRight size={13} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a1c3f] px-6 py-9 md:px-12 md:py-11">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(245,166,35,0.22),transparent_45%)]" />
            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
              <div className="max-w-2xl text-left">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f5a623]">
                  <CheckCircle2 size={15} />
                  Asistencia técnica a tu medida
                </span>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white md:text-3xl">
                  ¿Necesitas revisar o actualizar tu documentación de ingeniería?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Coordinemos una reunión con nuestros especialistas y revisemos juntos los
                  siguientes pasos para tu proyecto.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <button
                  type="button"
                  onClick={() => showSlide(0)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5a623] px-6 py-3.5 text-sm font-bold text-[#081a38] transition-colors hover:bg-[#e0961b]"
                >
                  <Presentation size={17} />
                  Ver presentación
                </button>
                <NavLink
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#f5a623] hover:bg-white/10"
                >
                  <Calendar size={17} />
                  Agendar asesoría
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentSlide && activeSlide !== null && (
        <div
          ref={viewerRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Visor de presentación: ${currentSlide.title}`}
          className="fixed inset-0 z-[100] flex flex-col bg-white/95 backdrop-blur-sm"
        >
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-gray-200 bg-white px-4 py-3 md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f5a623]/15 text-[#c27f0a] sm:flex">
                <Presentation size={19} />
              </span>
              <div className="min-w-0 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c27f0a]">
                  TMA Ingenieros · Presentación
                </p>
                <p className="truncate text-sm font-bold text-[#0a1c3f] md:text-base">
                  {currentSlide.title}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span
                aria-live="polite"
                className="hidden rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700 sm:inline-flex"
              >
                {activeSlide + 1} / {presentationSlides.length}
              </span>
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label="Pantalla completa"
                className="hidden h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-100 sm:flex"
              >
                <Maximize2 size={18} />
              </button>
              <button
                type="button"
                onClick={closeViewer}
                aria-label="Cerrar presentación"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors hover:border-[#f5a623] hover:bg-[#f5a623]/10"
              >
                <X size={20} />
              </button>
            </div>
          </header>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-3 md:px-20 md:py-6">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Diapositiva anterior"
              className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0a1c3f] shadow-lg transition-colors hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white md:left-6 md:h-12 md:w-12"
            >
              <ChevronLeft size={22} />
            </button>

            <img
              key={currentSlide.image}
              src={currentSlide.image}
              alt={`Diapositiva ${activeSlide + 1}: ${currentSlide.title}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl shadow-black/15"
            />

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Diapositiva siguiente"
              className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0a1c3f] shadow-lg transition-colors hover:border-[#f5a623] hover:bg-[#f5a623] hover:text-white md:right-6 md:h-12 md:w-12"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <footer className="shrink-0 border-t border-gray-200 bg-white px-3 py-3 md:px-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <ArrowLeft size={14} className="text-[#c27f0a]" />
                <p className="text-[11px] text-gray-500">
                  Usa las flechas del teclado para navegar
                </p>
              </div>
              <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-bold text-gray-700 sm:hidden">
                {activeSlide + 1} / {presentationSlides.length}
              </span>
              <NavLink
                to="/contacto"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c27f0a] transition-colors hover:text-[#e0961b]"
              >
                Agendar asesoría
                <ArrowRight size={13} />
              </NavLink>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {presentationSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => showSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}: ${slide.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  className={`relative shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                    index === activeSlide
                      ? 'border-[#f5a623] opacity-100'
                      : 'border-transparent opacity-[0.55] hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.thumbnail}
                    alt=""
                    className="h-11 w-[78px] object-cover md:h-14 md:w-24"
                  />
                  <span className="absolute bottom-0 left-0 right-0 bg-white/90 py-0.5 text-center text-[9px] font-bold text-[#0a1c3f]">
                    {slide.id}
                  </span>
                </button>
              ))}
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
