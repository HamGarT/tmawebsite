import {
    FileText, Play, Droplets, Leaf, Settings, HardHat, ChevronRight, MapPin, Calendar, Check,
    ClipboardList,
    FileSearch
} from 'lucide-react';

import ImageHero from '@/assets/images/inicio1.webp'
import ImageCard1 from '@/assets/images/inicio2.webp'
import ImageCard2 from '@/assets/images/inicio3.webp'
import ImageCard3 from '@/assets/images/inicio4.webp'
import ImageCard4 from '@/assets/images/inicio5.webp'
import ImageCard5 from '@/assets/images/inicio6.webp'
import ImageCard6 from '@/assets/images/inicio7.webp'
import ImageCard7 from '@/assets/images/inicio8.webp'
import BureauVeritasLogo from '@/assets/icons/bureau_icon.webp'
import Iso9001Logo from '@/assets/icons/iso9001_icon.webp'
import Iso14001Logo from '@/assets/icons/iso14001_icon.webp'
import Iso45001Logo from '@/assets/icons/iso45001_icon.webp'
import SenaceLogo from '@/assets/icons/senace_icon.webp'

export default function Inicio() {
    return (
        <div className="w-full bg-gray-50 font-sans text-gray-800 relative">

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] min-h-[420px] bg-[#031b40] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-[70%] z-0">
                    <img src={ImageHero} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#031b40] via-[#031b40]/40 to-transparent/10"></div>
                </div>

                <div className="relative z-10 w-full md:w-[65%] px-6 md:px-12 flex flex-col justify-center gap-3 md:gap-4 py-0 my-0">
                    <h1 className="text-[28px] md:text-[40px] font-extrabold leading-[1.15] text-white tracking-tight  text-left">
                        Ingeniería, construcción<br /> y gestión
                        ambiental para<br/> <span className="text-[#fca311]">minería <span className="text-white">e</span> industria</span>
                    </h1>

                    <p className="text-[13px] md:text-[15px] text-gray-200 leading-snug max-w-[90%] font-medium text-left">
                        Diseñamos, construimos, operamos y mantenemos sistemas <br/> de tratamiento
                        de aguas, plantas industriales y soluciones <br/> ambientales con enfoque
                        técnico, seguridad y cumplimiento normativo.
                    </p>

                    <div className="flex gap-3 shrink-0">
                        <button className="flex items-center gap-2 bg-[#fca311] hover:bg-[#e6940e] text-white text-[13px] md:text-[14px] font-bold py-2.5 px-4 rounded-md transition-colors shadow-sm whitespace-nowrap">
                            <ClipboardList className="w-4 h-4" /> Solicitar propuesta técnica
                        </button>
                        <button className="flex items-center gap-2 bg-[#031b40]/40 border border-[#fca311] hover:bg-white/10 text-white text-[13px] md:text-[14px] font-bold py-2.5 px-4 rounded-md transition-colors whitespace-nowrap">
                            <Play className="w-4 h-4" fill="currentColor" /> Ver servicios
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. CERTIFICATIONS BAR (absolute, straddles the hero/services boundary) */}
            <div className="relative z-20 px-4 md:px-12 -mt-11 full-cont">
                <div className="bg-white py-4 px-6 md:px-8 rounded-xl shadow-lg flex items-center pointer-events-auto overflow-x-auto gap-6 md:gap-8 border border-gray-100 justify-between">
                    {[
                        { img: Iso9001Logo, title: 'ISO 9001', desc: 'Sistema de Gestión\nde Calidad' },
                        { img: Iso14001Logo, title: 'ISO 14001', desc: 'Sistema de Gestión\nAmbiental' },
                        { img: Iso45001Logo, title: 'ISO 45001', desc: 'Sistema de Gestión\nde Seguridad y Salud\nen el Trabajo' },
                        { img: BureauVeritasLogo, title: 'BUREAU VERITAS', desc: 'EMPRESA\nHOMOLOGADA', descColor: 'text-[#dc2626]' },
                        { img: SenaceLogo, title: null, desc: 'REGISTRO\nSENACE' },
                        { icon: FileSearch, title: 'PERMISO\nDESA-USB\nN° 21-2020', desc: null },
                    ].map((cert, i) => (



                        <div key={i} className="flex items-center gap-3.5 shrink-0">
                            {cert.img ? (
                                <img src={cert.img} alt={cert.title || 'Certificación'} className="w-12 h-12 object-contain" />
                            ) : cert.icon ? (
                                <cert.icon size={42} strokeWidth={1.5} className="text-[#0b1a4a]" />
                            ) : null}

                            <div className="flex flex-col text-left justify-center">
                                {cert.title && (
                                    <h4 className="font-bold text-[15px] text-[#0b1a4a] whitespace-pre-line leading-tight">
                                        {cert.title}
                                    </h4>
                                )}
                                {cert.desc && (
                                    <p className={`text-[13px] font-semibold whitespace-pre-line leading-[1.2] ${cert.title ? 'mt-1' : ''} ${cert.descColor ? cert.descColor : 'text-[#0b1a4a]/80'}`}>
                                        {cert.desc}
                                    </p>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            {/* 3. MIDDLE ROW: SERVICES + WHY US */}
            <section className="px-6 md:px-12 mt-8 mb-2 flex gap-4">
                <div className="w-[65%] grid grid-cols-4 gap-3 h-[300px]">
                    {[
                        {
                            title: 'Tratamiento y manejo de aguas',
                            Icon: Droplets,
                            description: 'Diseño, construcción y operación de sistemas de tratamiento de aguas para mineria e industria.',
                            image: ImageCard1,
                            iconBg: 'bg-[#0a1e3f]', // Blue
                        },
                        {
                            title: 'Gestión ambiental',
                            Icon: Leaf,
                            description: 'Estudios, monitoreo y gestión ambiental para cumplir con las normativas y estándares de sostenibilidad.',
                            image: ImageCard2,
                            iconBg: 'bg-emerald-600', // Green
                        },
                        {
                            title: 'Operación y mantenimiento de plantas',
                            Icon: Settings,
                            description: 'Operación, mantenimiento y optimización de plantas de tratamiento e instalaciones industriales.',
                            image: ImageCard3,
                            iconBg: 'bg-[#0a1e3f]', // Blue
                        },
                        {
                            title: 'Ingeniería y construcción',
                            Icon: HardHat,
                            description: 'Ingeniería de detalle, construcción y montaje de plantas e instalaciones industriales.',
                            image: ImageCard4,
                            iconBg: 'bg-[#fca311]', // Yellow / Accent
                        },
                    ].map((service, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full relative"
                        >
                            <div className="h-[60%] relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dynamic background color applied here */}
                                <div
                                    className={`absolute -bottom-4 left-3 ${service.iconBg} text-white p-2 rounded-full border-2 border-white shadow-sm flex items-center justify-center`}
                                >
                                    <service.Icon size={35} />
                                </div>
                            </div>
                            <div className="px-2.5 pb-1.5 flex-1 flex flex-col justify-start pt-6">
                                <h3 className="font-bold text-[#0a1e3f] text-[15px] leading-tight mb-1">
                                    {service.title}
                                </h3>
                                <p className="text-[12px] text-gray-600 leading-tight line-clamp-2">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-[35%] bg-[#f5f8fc] rounded-xl p-4 h-full flex flex-col items-start justify-start">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#112347] mb-3 text-left w-full tracking-tight">
                        ¿Por qué <span className="text-[#fca311]">TMA</span>?
                    </h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 w-full">
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
                            <div key={i} className="flex items-start gap-2 text-left">
                                <div className="bg-[#112347] rounded-full p-1 shrink-0 mt-0.5 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-[#112347] text-[13px] leading-tight mb-0.5">
                                        {point.t}
                                    </h4>
                                    <p className="text-[12px] text-[#4b5563] leading-snug line-clamp-2">
                                        {point.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BOTTOM ROW: PROJECTS */}
            <section className="px-6 md:px-12 py-2 flex flex-col">
                <div className="flex justify-between items-center mb-2 shrink-0">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a1e3f]">Proyectos destacados</h2>
                    <a href="#" className="flex items-center gap-1 text-[11px] font-semibold text-[#0a1e3f]">
                        Ver todos <ChevronRight size={12} className="bg-[#0a1e3f] text-white rounded-full p-[1px]" />
                    </a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[{ img: ImageCard5, title: 'PTARI 15 L/s - BVN San Gabriel', desc: 'Diseño, suministro, construcción, operación y start-up de planta de tratamiento de aguas.', ubicacion: 'Moquegua', fecha: '2022 - 2023' }
                        , { img: ImageCard6, title: 'Operación Planta DETOX-BVN Orcopampa', desc: 'Operación de planta de tratamiento de aguas clarauradas y control de reactivos quimicos.', ubicacion: 'Arequipa/Orcopampa', fecha: '2024 - 2025' }
                        , { img: ImageCard7, title: 'PTARI 450 L/s-BVN Yumpag', desc: 'Ingenieria de factibilidad, diseño y operaciónde planta de tratamiento de aguas.', ubicacion: 'Lima/Oyón', fecha: '2022' }
                    ].map((project, i) => (
                        <div key={i} className="flex h-32 bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                            <img src={project.img} alt="Proyecto" className="w-[35%] h-full object-cover flex-shrink-0" />
                            <div className="p-3 flex flex-col justify-center flex-1 min-w-0">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="bg-[#0a1e3f] text-white text-[10px] font-bold px-1.5  rounded flex-shrink-0">
                                        Agua
                                    </span>
                                    <h4 className="font-bold text-[13px] text-[#0a1e3f] leading-tight line-clamp-1">
                                        {project.title}
                                    </h4>
                                </div>
                                <div className="flex gap-2 text-[11px] text-gray-500 mb-1">
                                    <span className="flex items-center gap-0.5"><MapPin size={10} /> {project.ubicacion}</span>
                                    <span className="flex items-center gap-0.5"><Calendar size={10} /> {project.fecha}</span>
                                </div>
                                <p className="text-[11px] text-gray-600 line-clamp-2 leading-tight text-left">
                                    {project.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FOOTER BANNER */}
            <section className="bg-[#0a1e3f] px-6 md:px-12 py-4 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 text-white">
                    <FileText size={20} className="opacity-80" />
                    <div className="leading-tight">
                        <h3 className="text-[13px] font-bold uppercase tracking-wide">¿Tienes un proyecto en marcha?</h3>
                        <p className="text-[10px] text-gray-300">Hablemos de cómo podemos ayudarte a hacerlo realidad.</p>
                    </div>
                </div>
                <button className="flex items-center gap-1 bg-[#fca311] hover:bg-[#e6940e] text-white text-[11px] font-bold py-1.5 px-4 rounded transition-colors whitespace-nowrap">
                    Solicitar propuesta técnica <ChevronRight size={14} />
                </button>
            </section>

        </div>
    );
}