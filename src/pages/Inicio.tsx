import {
    FileText, Play, Droplets, Leaf, Settings, HardHat, ChevronRight, MapPin, Calendar, Check,
    ClipboardList,
    Video,
    Cloud,
    ShieldCheck,
    ArrowRight,
    Laptop
} from 'lucide-react';

import ImageHero from '@/assets/images/inicio1.webp'
import ImageCard1 from '@/assets/images/inicio2.webp'
import ImageCard2 from '@/assets/images/inicio3.webp'
import ImageCard3 from '@/assets/images/inicio4.webp'
import ImageCard4 from '@/assets/images/inicio5.webp'
import ImageCard5 from '@/assets/images/inicio6.webp'
import ImageCard6 from '@/assets/images/inicio7.webp'
import ImageCard7 from '@/assets/images/inicio8.webp'
import { NavLink } from 'react-router-dom';
import ProposalLink from '@/components/common/ProposalLink';

export default function Inicio() {
    return (
        <div className="w-full bg-gray-50 font-sans text-gray-800 relative">

            {/* 1. HERO SECTION */}
            {/* AJUSTE: min-h-[520px] para asegurar espacio en pantallas muy pequeñas */}
            <section className="relative h-[70vh] md:h-[60vh] min-h-[520px] md:min-h-[420px] bg-[#031b40] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-full md:w-[70%] z-0">
                    <img src={ImageHero} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031b40] via-[#031b40]/70 md:via-[#031b40]/40 to-transparent/10"></div>
                </div>

                {/* AJUSTE: pb-28 (bastante espacio inferior) y quité el mt-8 que lo empujaba hacia abajo */}
                <div className="relative z-10 w-full md:w-[65%] px-5 md:px-12 flex flex-col justify-center md:gap-4 py-0 my-0 lg:pb-28 pb-20 md:pb-0">
                    <h1 className="text-[28px] sm:text-[32px] md:text-[60px] font-extrabold leading-[1.15] text-white tracking-tight text-left">
                        Ingeniería, construcción<span className="hidden md:inline"><br /></span>{' '} y gestión
                        ambiental para<span className="hidden md:inline"><br /></span>{' '} <span className="text-[#fca311]">minería <span className="text-white">e</span> industria</span>
                    </h1>

                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-200 leading-snug max-w-[100%] md:max-w-[90%] font-medium text-left">
                        Diseñamos, construimos, operamos y mantenemos sistemas{' '}<span className="hidden md:inline"><br /></span>
                        de tratamiento
                        de aguas, plantas industriales y soluciones{' '}<span className="hidden md:inline"><br /></span> ambientales con enfoque
                        técnico, seguridad y cumplimiento normativo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto mt-2 md:mt-0">
                        <ProposalLink
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#e6940e] text-white text-[14px] font-bold py-3 md:py-2.5 px-4 rounded-md transition-colors shadow-sm whitespace-nowrap"
                        >
                            <ClipboardList className="w-4 h-4" /> Solicitar propuesta técnica
                        </ProposalLink>
                        <NavLink to="/servicios" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#031b40]/60 md:bg-[#031b40]/40 border border-[#fca311] hover:bg-white/10 text-white text-[14px] font-bold py-3 md:py-2.5 px-4 rounded-md transition-colors whitespace-nowrap">
                            <Play className="w-4 h-4" fill="currentColor" /> Ver servicios
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* 2. ASISTENCIA REMOTA MINI HERO */}
            <section className="relative z-20 px-4 md:px-12 -mt-12 md:-mt-10 w-full">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="px-5 md:px-8 py-6 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-0">

                        {/* Título + descripción */}
                        <div className="flex items-center gap-4 xl:pr-6 xl:max-w-[36%] w-full xl:w-auto">
                            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#fca311]/15 flex items-center justify-center">
                                <Laptop className="w-9 h-9 md:w-11 md:h-11 text-[#fca311]" strokeWidth={1.5} />
                            </div>
                            <div className="text-left">
                                <h2 className="text-xl md:text-2xl font-extrabold text-[#0a1c3f] leading-tight tracking-tight">
                                    Asistencia remota
                                    <span className="block text-[#fca311]">de documentos de ingeniería</span>
                                </h2>
                                <p className="text-[12px] md:text-[13px] text-gray-600 leading-snug mt-2">
                                    Te acompañamos en la revisión, validación y asesoría de tus planos, memorias y documentos técnicos, sin importar dónde te encuentres.
                                </p>
                            </div>
                        </div>

                        {/* Características */}
                        <div className="grid grid-cols-2 md:grid-cols-4 w-full xl:w-auto xl:flex-1 gap-y-4">
                            {[
                                { icon: FileText, desc: 'Revisión, Elaboración de planos\ny documentos técnicos' },
                                { icon: Video, desc: 'Reuniones virtuales\ncon especialistas' },
                                { icon: Cloud, desc: 'Acceso seguro\na tu documentación' },
                                { icon: ShieldCheck, desc: 'Respuestas rápidas\ny confiables' },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-2 px-3 xl:border-l xl:border-gray-200">
                                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                        <item.icon size={22} strokeWidth={1.8} className="text-[#0a1c3f]" />
                                    </div>
                                    <p className="text-[16px] md:text-[18px] font-semibold text-gray-700 whitespace-pre-line leading-tight">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Botón */}
                        <div className="xl:pl-6 xl:border-l xl:border-gray-200 w-full xl:w-auto">
                            <NavLink to="/presentacion" className="flex items-center justify-center gap-3 bg-[#fca311] hover:bg-[#e6940e] text-white text-sm md:text-base font-bold py-3.5 px-7 rounded-xl transition-colors whitespace-nowrap shadow-md">
                                <Play size={18} fill="currentColor" /> Ver presentación <ArrowRight size={18} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MIDDLE ROW: SERVICES + WHY US */}
            <section className="px-4 md:px-12 mt-8 md:mt-8 mb-4 flex flex-col md:flex-row gap-6 md:gap-4">
                <div className="w-full md:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 md:h-[300px]">
                    {[
                        {
                            title: 'Tratamiento, manejo de aguas y relaves',
                            Icon: Droplets,
                            description: 'Diseño, construcción y operación de sistemas de tratamiento de aguas para mineria e industria.',
                            image: ImageCard1,
                            iconBg: 'bg-[#0a1e3f]', 
                        },
                        {
                            title: 'Gestión ambiental',
                            Icon: Leaf,
                            description: 'Estudios, monitoreo y gestión ambiental para cumplir con las normativas y estándares de sostenibilidad.',
                            image: ImageCard2,
                            iconBg: 'bg-emerald-600', 
                        },
                        {
                            title: 'Operación y mantenimiento de plantas',
                            Icon: Settings,
                            description: 'Operación, mantenimiento y optimización de plantas de tratamiento e instalaciones industriales.',
                            image: ImageCard3,
                            iconBg: 'bg-[#0a1e3f]', 
                        },
                        {
                            title: 'Ingeniería y construcción',
                            Icon: HardHat,
                            description: 'Ingeniería de detalle, construcción y montaje de plantas e instalaciones industriales.',
                            image: ImageCard4,
                            iconBg: 'bg-[#fca311]', 
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full relative"
                        >
                            <div className="h-48 sm:h-44 md:h-[60%] relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className={`absolute -bottom-4 left-4 md:left-3 ${service.iconBg} text-white p-2 rounded-full border-2 border-white shadow-sm flex items-center justify-center`}
                                >
                                    <service.Icon size={30} className="md:w-[35px] md:h-[35px]" />
                                </div>
                            </div>
                            <div className="px-4 md:px-2.5 pb-4 md:pb-1.5 flex-1 flex flex-col justify-start pt-7 md:pt-6">
                                <h3 className="font-bold text-[#0a1e3f] text-[16px] md:text-[15px] leading-tight mb-1.5 md:mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] md:text-[12px] text-gray-600 leading-tight">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-[35%] bg-[#f5f8fc] rounded-xl p-5 md:p-4 h-full flex flex-col items-start justify-start">
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#112347] mb-4 md:mb-3 text-left w-full tracking-tight">
                        ¿Por qué <span className="text-[#fca311]">TMA</span>?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 md:gap-y-4 w-full">
                        {[
                            {
                                t: 'Experiencia en minería e industria',
                                d: 'Amplio conocimiento en proyectos de tratamiento de aguas y operaciones industriales.',
                            },
                            {
                                t: 'Seguridad, calidad y enfoque ambiental',
                                d: 'Comprometidos con seguridad, la calidad y la sostenibilidad en cada proyecto.',
                            },
                            {
                                t: 'Capacidad multidisciplinaria',
                                d: 'Equipo técnico especializado en diversas disciplinas para soluciones integrales.',
                            },
                            {
                                t: 'Soporte técnico especializado',
                                d: 'Acompañamiento tecnico en todas las etapas del proyecto y soporte post-implementation.',
                            },
                        ].map((point, i) => (
                            <div key={i} className="flex items-start gap-3 md:gap-2 text-left">
                                <div className="bg-[#112347] rounded-full p-1.5 md:p-1 shrink-0 mt-0.5 flex items-center justify-center">
                                    <Check className="w-3 h-3 md:w-3 md:h-3 text-white" strokeWidth={4} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-[#112347] text-[14px] md:text-[13px] leading-tight mb-1 md:mb-0.5">
                                        {point.t}
                                    </h4>
                                    <p className="text-[13px] md:text-[12px] text-[#4b5563] leading-snug">
                                        {point.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BOTTOM ROW: PROJECTS */}
            <section className="px-4 md:px-12 py-4 md:py-2 flex flex-col">
                <div className="flex justify-between items-center mb-4 md:mb-2 shrink-0">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a1e3f]">Proyectos destacados</h2>
                    <NavLink to="/proyectos" className="flex items-center gap-1 text-[12px] md:text-[11px] font-semibold text-[#0a1e3f]">
                        Ver todos <ChevronRight size={14} className="bg-[#0a1e3f] text-white rounded-full p-[2px] md:w-[12px] md:h-[12px] md:p-[1px]" />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-4">
                    {[{ img: ImageCard5, title: 'PTARI 15 L/s - BVN San Gabriel', desc: 'Diseño, suministro, construcción, operación y start-up de planta de tratamiento de aguas.', ubicacion: 'Moquegua', fecha: '2022 - 2023' }
                        , { img: ImageCard6, title: 'Operación Planta DETOX-BVN Orcopampa', desc: 'Operación de planta de tratamiento de aguas clarauradas y control de reactivos quimicos.', ubicacion: 'Arequipa/Orcopampa', fecha: '2024 - 2025' }
                        , { img: ImageCard7, title: 'PTARI 450 L/s-BVN Yumpag', desc: 'Ingenieria de factibilidad, diseño y operaciónde planta de tratamiento de aguas.', ubicacion: 'Lima/Oyón', fecha: '2022' }
                    ].map((project, i) => (
                        <div key={i} className="flex flex-col sm:flex-row min-h-[auto] sm:min-h-32 md:h-32 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            <img src={project.img} alt="Proyecto" className="w-full h-40 sm:h-full object-cover flex-shrink-0 sm:w-[35%] md:w-[35%]" />
                            <div className="p-4 sm:p-3 flex flex-col justify-center flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-2 sm:mb-1">
                                    <span className="bg-[#0a1e3f] text-white text-[10px] md:text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0">
                                        Agua
                                    </span>
                                    <h4 className="font-bold text-[15px] sm:text-[13px] text-[#0a1e3f] leading-tight line-clamp-1">
                                        {project.title}
                                    </h4>
                                </div>
                                <div className="flex gap-3 sm:gap-2 text-[12px] sm:text-[11px] text-gray-500 mb-2 sm:mb-1">
                                    <span className="flex items-center gap-1 sm:gap-0.5"><MapPin size={12} className="sm:w-[10px] sm:h-[10px]" /> {project.ubicacion}</span>
                                    <span className="flex items-center gap-1 sm:gap-0.5"><Calendar size={12} className="sm:w-[10px] sm:h-[10px]" /> {project.fecha}</span>
                                </div>
                                <p className="text-[13px] sm:text-[11px] text-gray-600 line-clamp-2 leading-tight text-left">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FOOTER BANNER */}
            <section className="bg-[#0a1e3f] px-4 md:px-12 py-5 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 md:mt-4 mb-4 md:mb-0 text-center sm:text-left rounded-lg md:rounded-none mx-4 md:mx-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 text-white">
                    <FileText size={24} className="opacity-80 shrink-0 md:w-[20px] md:h-[20px]" />
                    <div className="leading-tight">
                        <h3 className="text-[14px] md:text-[13px] font-bold uppercase tracking-wide mb-1 md:mb-0">¿Tienes un proyecto en marcha?</h3>
                        <p className="text-[12px] md:text-[10px] text-gray-300">Hablemos de cómo podemos ayudarte a hacerlo realidad.</p>
                    </div>
                </div>
                <ProposalLink
                    className="w-full sm:w-auto flex items-center justify-center gap-1 bg-[#fca311] hover:bg-[#e6940e] text-white text-[13px] md:text-[11px] font-bold py-2.5 md:py-1.5 px-4 rounded transition-colors whitespace-nowrap"
                >
                    Solicitar propuesta técnica <ChevronRight size={16} className="md:w-[14px] md:h-[14px]" />
                </ProposalLink>
            </section>

        </div>
    );
}