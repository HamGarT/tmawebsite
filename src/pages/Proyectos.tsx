import React from 'react';
import {
    Users,
    FolderOpen,
    Settings,
    MapPin,
    Calendar,
    CheckCircle2,
    Droplet,
    ChevronRight
} from 'lucide-react';
import { NavLink } from 'react-router';
import Hero1Image from '@/assets/images/proyectosHero1.webp';
import Hero2Image from '@/assets/images/proyectosHero2.webp';
import Proyectos1Image from '@/assets/images/proyectos1.webp';
import Proyectos2Image from '@/assets/images/proyectos2.webp';
import Proyectos3Image from '@/assets/images/proyectos3.webp';
import Proyectos4Image from '@/assets/images/proyectos4.webp';
import Proyectos6Image from '@/assets/images/proyectos6.webp';
import clientIcon from '@/assets/icons/client_icon.webp';
import Proyectos7Image from '@/assets/images/proyectos7.webp';
import Proyectos8Image from '@/assets/images/proyectos8.webp';
import Proyectos9Image from '@/assets/images/proyectos9.webp';
import Proyectos10Image from '@/assets/images/proyectos10.webp';
import Proyectos11Image from '@/assets/images/proyectos11.webp';
import Proyectos12Image from '@/assets/images/proyectos12.webp';

// Constantes de colores para mantener la consistencia
const COLORS = {
    navy: "#0B1B42",
    yellow: "#F5A623",
    lightBg: "#F8F9FA",
    blueText: "#3b5998",
    blueTextVariant: "#053092"
};

const proyectosParte1 = [
    { id: "01", cliente: "BVN San Gabriel", proyecto: "PTARI de 15 L/s", alcance: "Diseño, suministro, construcción, operación y start-up de la planta", ubicacion: "Moquegua", fecha: "2022 - 2023", imagen: Proyectos1Image },
    { id: "02", cliente: "BVN Orcopampa", proyecto: "Operación Planta DETOX", alcance: "Operación de la planta de tratamiento de aguas cianuradas", ubicacion: "Arequipa / Orcopampa", fecha: "2024 - 2025", imagen: Proyectos2Image },
    { id: "03", cliente: "BVN Orcopampa", proyecto: "Operación Planta DETOX", alcance: "Operación de la planta de tratamiento de aguas cianuradas", ubicacion: "Arequipa / Orcopampa", fecha: "2021 - 2022", imagen: Proyectos3Image },
    { id: "04", cliente: "Minera Yanacocha / BASF Peruana", proyecto: "Operación Planta DETOX", alcance: "Operación y control de reactivos químicos, Planta La Quinua", ubicacion: "Cajamarca", fecha: "2014 - 2017", imagen: Proyectos4Image },
    { id: "05", cliente: "BVN Yumpag", proyecto: "PTARI de 450 L/s", alcance: "Ingeniería de factibilidad del proyecto", ubicacion: "Lima / Oyón", fecha: "2022", imagen: Proyectos3Image },
    { id: "06", cliente: "BVN San Gabriel", proyecto: "PTARI de 5 L/s", alcance: "Diseño, construcción y operación de la planta", ubicacion: "Moquegua", fecha: "2017", imagen: Proyectos6Image }
];

const proyectosParte2 = [
    { id: "01", cliente: "BVN JULCANI", proyecto: "PTARI Acchilla", descripcion: "Diseño del manejo de aguas para la PTARI", ubicacion: "Huancavelica", fecha: "2020", imagen: Proyectos7Image },
    { id: "02", cliente: "BVN JULCANI", proyecto: "PTARI", descripcion: "Diseño del manejo de aguas para la PTARI", ubicacion: "Huancavelica", fecha: "2020", imagen: Proyectos8Image },
    { id: "03", cliente: "MINERA YANAQUIHUA", proyecto: "Manejo Integral de Aguas", descripcion: "Diseño integral del manejo de aguas", ubicacion: "Perú", fecha: "2014", imagen: Proyectos9Image },
    { id: "04", cliente: "BVN JULCANI", proyecto: "Diseño de Tolva", descripcion: "Ingeniería de detalle de la tolva de gruesos", ubicacion: "Huancavelica", fecha: "2021 - 2022", imagen: Proyectos10Image },
    { id: "05", cliente: "FERREYROS S.A.", proyecto: "Operación y Mantenimiento PTARD", descripcion: "Operación y mantenimiento de la PTARD", ubicacion: "Perú", fecha: "2019 - 2021", imagen: Proyectos11Image },
    { id: "06", cliente: "BVN YUMPAG", proyecto: "PTARI de 250 L/s", descripcion: "Ingeniería de factibilidad", ubicacion: "Lima / Oyón", fecha: "2025", imagen: Proyectos12Image }
];

export default function Proyectos() {
    return (
        <main className="w-full overflow-hidden bg-white font-sans text-slate-700">

            {/* =========================================================
          SECCIÓN 1: Proyectos Destacados (Tabla a pantalla completa)
      ========================================================= */}
            <section id="proyectos-1" className="w-full ">

                {/* HERO SECCIÓN 1 */}
                <div className="relative w-full px-5 py-10 sm:px-12 xl:px-16 flex items-center min-h-[250px] bg-white text-left">
                    <div className="relative z-10 w-full lg:w-[55%]">
                        <h1
                            className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold leading-tight mb-4 tracking-tight"
                            style={{ color: COLORS.navy }}
                        >
                            Proyectos <span style={{ color: COLORS.blueTextVariant }}>destacados</span>
                        </h1>

                        <div
                            className="mt-4 mb-5 h-[4px] w-20"
                            style={{ backgroundColor: COLORS.yellow }}
                        />

                        <p
                            className="font-medium text-base sm:text-lg max-w-[580px]"
                            style={{ color: COLORS.navy }}
                        >
                            Proyectos representativos de tratamiento de aguas, operación de plantas y puesta en marcha.
                        </p>
                    </div>

                    {/* Imagen curva de fondo derecha (solo desktop) */}
                    <div className="absolute right-0 top-0 w-[55%] h-[120%] hidden lg:block overflow-hidden rounded-bl-[100px]  z-0">
                        <img src={Hero1Image} alt="Fondo Planta" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* CONTENEDOR DE LA TABLA (Con scroll horizontal si es muy pequeña la pantalla) */}
                <div className="px-5 sm:px-12 xl:px-16 pb-12 relative z-10">
                    <div className="w-full overflow-x-auto shadow-sm rounded-lg border border-gray-200">
                        <div className="min-w-[1300px] bg-white">

                            {/* Cabecera de Tabla */}
                            <div
                                className="flex text-white rounded-t-lg text-sm font-bold uppercase py-4"
                                style={{ backgroundColor: COLORS.navy }}
                            >
                                <div className="w-16 shrink-0"></div>
                                <div className="w-[232px] shrink-0"></div>
                                <div className="w-56 shrink-0 flex items-center gap-2 pl-4"><Users size={16} style={{ color: COLORS.yellow }} /> CLIENTE</div>
                                <div className="w-64 shrink-0 flex items-center gap-2"><FolderOpen size={16} style={{ color: COLORS.yellow }} /> PROYECTO</div>
                                <div className="flex-1 flex items-center gap-2"><Settings size={16} style={{ color: COLORS.yellow }} /> ALCANCE</div>
                                <div className="w-48 shrink-0 flex items-center gap-2"><MapPin size={16} style={{ color: COLORS.yellow }} /> UBICACIÓN</div>
                                <div className="w-36 shrink-0 flex items-center gap-2"><Calendar size={16} style={{ color: COLORS.yellow }} /> FECHA</div>
                            </div>

                            {/* Filas de Tabla */}
                            <div className="flex flex-col">
                                {proyectosParte1.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`flex items-center text-[15px] py-2.5 px-1 border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 !== 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                                    >
                                        {/* ID */}
                                        <div className="w-16 flex justify-center shrink-0">
                                            <div
                                                className="text-white font-bold w-10 h-10 flex items-center justify-center rounded-md"
                                                style={{ backgroundColor: COLORS.navy }}
                                            >
                                                {item.id}
                                            </div>
                                        </div>

                                        {/* Imagen */}
                                        <div className="w-[232px] flex justify-center shrink-0">
                                            <div className="w-[232px] h-14 bg-slate-200 rounded overflow-hidden">
                                                <img src={item.imagen} alt={`Proyecto ${item.id}`} className="w-full h-full object-cover" />
                                            </div>
                                        </div>

                                        {/* Cliente */}
                                        <div className="w-56 pl-4 flex items-center gap-3 font-semibold shrink-0 text-left" style={{ color: COLORS.navy }}>
                                            <div className="w-6 shrink-0 flex justify-center">
                                                {/* Imagotipo / Nubes */}
                                                <img src={clientIcon} alt="Icon" className="w-10 h-10 object-contain" />
                                            </div>
                                            <span className="leading-tight">{item.cliente}</span>
                                        </div>

                                        {/* Proyecto */}
                                        <div className="w-64 pr-4 flex items-center gap-2 shrink-0">
                                            <FolderOpen size={18} className="text-gray-300 shrink-0" />
                                            <span className="font-semibold" style={{ color: COLORS.blueText }}>{item.proyecto}</span>
                                        </div>

                                        {/* Alcance */}
                                        <div className="flex-1 pr-4 flex items-start gap-2 text-gray-600 text-left">
                                            <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: COLORS.yellow }} />
                                            <span className="leading-snug text-sm">{item.alcance}</span>
                                        </div>

                                        {/* Ubicación */}
                                        <div className="w-48 flex items-center gap-2 font-semibold shrink-0" style={{ color: COLORS.navy }}>
                                            <MapPin size={18} className="shrink-0" style={{ color: COLORS.navy }} />
                                            {item.ubicacion}
                                        </div>

                                        {/* Fecha */}
                                        <div className="w-36 flex items-center gap-2 font-semibold shrink-0" style={{ color: COLORS.navy }}>
                                            <Calendar size={18} className="shrink-0" style={{ color: COLORS.navy }} />
                                            {item.fecha}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Footer Sección 1 */}
                    <NavLink to="/proyectos/experiencias" className="mt-5 bg-gray-50 rounded-lg p-5 flex flex-col md:flex-row items-center border border-gray-200 shadow-sm text-left">
                        <div className="flex items-center flex-1 mb-4 md:mb-0">
                            <div
                                className="w-12 h-12 rounded-full border-[2.5px] flex items-center justify-center shrink-0 mr-4"
                                style={{ borderColor: COLORS.navy, color: COLORS.navy }}
                            >
                                <Droplet size={24} />
                            </div>
                            <div className="border-l-2 pl-4" style={{ borderColor: COLORS.yellow }}>
                                <p className="font-bold text-[15px] sm:text-base leading-snug" style={{ color: COLORS.navy }}>
                                    Soluciones integrales que garantizan eficiencia,
                                    <br className="hidden sm:block" />
                                    cumplimiento normativo y sostenibilidad en cada proyecto.
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0">
                            <ChevronRight size={36} className="opacity-20 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '0ms' }} />
                            <ChevronRight size={36} className="opacity-40 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '150ms' }} />
                            <ChevronRight size={36} className="opacity-70 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '300ms' }} />
                            <ChevronRight size={36} className="text-gray-400 animate-chevron-wave" style={{ animationDelay: '450ms' }} />
                        </div>

                        <style>{`
    @keyframes chevron-wave {
        0%, 100% { opacity: 0.2; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(4px); }
    }
    .animate-chevron-wave {
        animation: chevron-wave 1.2s ease-in-out infinite;
    }
`}</style>
                    </NavLink>
                </div>
            </section>

            {/* =========================================================
          SEPARADOR (Línea amarilla)
      ========================================================= */}
            <div className="relative h-2 w-full">
                <div className="absolute inset-0" style={{ backgroundColor: COLORS.yellow }} />
            </div>

            {/* =========================================================
          SECCIÓN 2: Proyectos Destacados II (Grid a pantalla completa)
      ========================================================= */}
            <section id="proyectos-2" className="w-full pb-20 bg-[#F8F9FB]">

                {/* HERO SECCIÓN 2 CON CORTE DIAGONAL */}
                <div className="grid min-h-[300px] grid-cols-1 lg:grid-cols-[45%_55%] w-full bg-white text-left">

                    {/* Texto (Izquierda) */}
                    <div className="relative flex items-center bg-white px-5 py-14 sm:px-12 xl:px-16">
                        <div className="relative z-20 w-full max-w-[600px]">
                            <h2
                                className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.05] tracking-tight uppercase"
                                style={{ color: COLORS.navy }}
                            >
                                Proyectos
                            </h2>
                            <h2
                                className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-tight tracking-tight uppercase mb-4"
                                style={{ color: COLORS.yellow }}
                            >
                                Destacados II
                            </h2>
                            <p
                                className="font-medium text-base sm:text-lg max-w-[540px] leading-snug"
                                style={{ color: COLORS.navy }}
                            >
                                Proyectos representativos de diseño de manejo de aguas, ingeniería de detalle y operación de sistemas.
                            </p>
                        </div>
                    </div>

                    {/* Imagen (Derecha) con diagonal Navy */}
                    <div className="relative min-h-[280px]  lg:min-h-full overflow-hidden">
                        {/* Corte Diagonal azul marino para dividir */}

                        <img src={Hero2Image} alt="Fondo Planta II" className="w-full h-full object-cover relative z-0" />
                    </div>
                </div>

                {/* GRID DE CARDS */}
                <div className="px-5 py-12 sm:px-12 xl:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {proyectosParte2.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex overflow-hidden min-h-[200px] sm:h-[180px]"
                            >
                                {/* Imagen de la Card */}
                                <div className="w-[45%] bg-slate-200 relative shrink-0">
                                    <div
                                        className="absolute top-0 left-0 z-10 w-11 h-11 flex items-center justify-center shadow-sm [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"
                                        style={{ backgroundColor: '#F5A623' }}
                                    >
                                        <div
                                            className="w-10 h-16 flex items-center justify-center text-white font-bold text-sm [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"
                                            style={{ backgroundColor: COLORS.navy }}
                                        >
                                            {item.id}
                                        </div>
                                    </div>
                                    <img src={item.imagen} alt={`Proyecto ${item.id}`} className="w-full h-full object-cover absolute inset-0" />
                                </div>

                                {/* Contenido de la Card */}
                                <div className="p-5 flex flex-col justify-between w-[55%]">
                                    <div>
                                        <h3 className="font-extrabold text-[15px] leading-tight mb-1 text-left" style={{ color: COLORS.navy }}>{item.cliente}</h3>
                                        <h4 className="font-bold text-sm mb-2 text-left" style={{ color: COLORS.yellow }}>{item.proyecto}</h4>

                                        <div className="w-full border-b border-dotted border-gray-300 mb-2"></div>

                                        <p className="text-gray-600 text-[13px] leading-tight line-clamp-3 text-left">
                                            {item.descripcion}
                                        </p>
                                    </div>

                                    <div className="flex flex-col 2xl:flex-row 2xl:justify-between items-start 2xl:items-end mt-auto pt-2 gap-1.5 2xl:gap-0 overflow-hidden w-full">
                                        <div className="flex items-center gap-1.5 text-xs font-bold w-full" style={{ color: COLORS.navy }}>
                                            <MapPin size={14} className="shrink-0" style={{ color: COLORS.navy }} />
                                            <span className="truncate">{item.ubicacion}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                                            <Calendar size={14} className="shrink-0 text-gray-400" />
                                            <span className="whitespace-nowrap">{item.fecha}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Sección 2 */}
                    <NavLink to="/proyectos/experiencias" className="mt-8 bg-white rounded-lg p-5 flex flex-col md:flex-row items-center border border-gray-200 shadow-sm text-left" >
                        <div className="flex items-center flex-1 mb-4 md:mb-0">
                            <div
                                className="w-12 h-12 rounded-full border-[2.5px] flex items-center justify-center shrink-0 mr-4"
                                style={{ borderColor: COLORS.navy, color: COLORS.navy }}
                            >
                                <Droplet size={24} />
                            </div>
                            <div className="border-l-2 pl-4" style={{ borderColor: COLORS.yellow }}>
                                <p className="font-bold text-[15px] sm:text-base leading-snug" style={{ color: COLORS.navy }}>
                                    Experiencia adicional en Huanza, Minera Quinchía, La Arena
                                    <br className="hidden sm:block" />
                                    y proyectos complementarios de Yumpag y Julcani.
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0">
                            <ChevronRight size={36} className="opacity-20 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '0ms' }} />
                            <ChevronRight size={36} className="opacity-40 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '150ms' }} />
                            <ChevronRight size={36} className="opacity-70 -mr-5 text-gray-400 animate-chevron-wave" style={{ animationDelay: '300ms' }} />
                            <ChevronRight size={36} className="animate-chevron-wave" style={{ color: COLORS.yellow, animationDelay: '450ms' }} />
                        </div>

                        <style>{`
    @keyframes chevron-wave {
        0%, 100% { opacity: 0.2; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(4px); }
    }
    .animate-chevron-wave {
        animation: chevron-wave 1.2s ease-in-out infinite;
    }
`}</style>
                    </NavLink>
                </div>
            </section>

        </main>
    );
}