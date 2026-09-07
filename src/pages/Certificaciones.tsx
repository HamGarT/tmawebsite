import {
    Award,
    ShieldCheck,
    Users,
    MessageSquare,
    MapPin,
    Phone,
    Mail,
    Check,
    Droplet,
    ChevronRight,
} from "lucide-react";
import nosotrosHero2Image from "@/assets/images/nosotrosHero2.webp";
import logoIso9001 from "@/assets/icons/iso9001two_icon.webp";
import logoIso14001 from "@/assets/icons/iso14001_icon.webp";
import logoIso45001 from "@/assets/icons/iso45001_icon.webp";
import logoBureauVeritas from "@/assets/icons/bureautwo_icon.webp";
import logoSenace from "@/assets/icons/senacetwo_icon.webp";
import selloDesaUsb from "@/assets/icons/desatwo_icon.webp";
import cert1Image from "@/assets/images/cert1.webp";
import cert2Image from "@/assets/images/cert2.webp";
import cert3Image from "@/assets/images/cert3.webp";
import logoTMA from "@/assets/images/logo.webp";

/**
 * TODO: reemplaza estos placeholders por tus imports reales, por ejemplo:
 * import heroBackground from "@/assets/certificaciones/hero-planta.jpg";
 *
 * Las rutas de abajo son solo referencia para que sepas qué imagen va en cada lugar.
 */







// Ajusta estos dos valores si el azul/naranja no calzan exacto con tu marca
const NAVY = "#0B1E45";
const ORANGE = "#F5A623";

export default function Certificaciones() {
    return (
        <section className="w-full bg-white">
            {/* ===== HERO ===== */}
            <div className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
                {/* Foto de fondo (lado derecho) */}
                <div className="absolute inset-y-0 right-0 hidden w-2/3 md:block">
                    <img
                        src={nosotrosHero2Image}
                        alt="Planta de tratamiento de aguas"
                        className="h-full w-full object-cover"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to right, ${NAVY} 0%, ${NAVY}CC 22%, transparent 65%)`,
                        }}
                    />
                </div>

                <div className="relative z-10 px-6 py-10 sm:px-10 md:max-w-xl md:py-14 text-left">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Certificaciones,
                        <br />
                        registros y <span style={{ color: ORANGE }}>autorizaciones</span>
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                        Contamos con certificaciones, registros y autorizaciones que
                        respaldan nuestro compromiso con la calidad, la seguridad, el
                        cumplimiento normativo y la sostenibilidad en cada proyecto que
                        ejecutamos.
                    </p>
                </div>
            </div>

            {/* ===== TARJETAS ===== */}
            <div className="grid grid-cols-1 border-b border-slate-200 md:grid-cols-3 md:divide-x md:divide-slate-200">
                {/* --- Card 1: Sistema de gestión y homologación --- */}
                <div className="flex max-w-4xl gap-6 rounded-3xl bg-white p-6 shadow-sm md:gap-8 md:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-24 shrink-0 flex-col items-center">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-10 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-[0_0_0_3px_white]"
                            style={{ backgroundColor: NAVY }}
                        >
                            01
                        </div>
                        <div
                            className="mt-6 flex min-h-[14rem] w-full flex-col items-center justify-center rounded-2xl p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert1Image}
                                alt="Registro SENACE Emblema"
                                className="h-20 w-20 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-center pt-2 text-left">
                        <h3
                            className="mb-3 text-xl font-extrabold tracking-tight text-slate-800"
                            style={{ color: NAVY }}
                        >
                            SISTEMA DE GESTIÓN
                            <br />
                            Y HOMOLOGACIÓN
                        </h3>

                        <p className="mb-6 max-w-2xl text-[14px] font-medium leading-relaxed text-slate-700">
                            Implementamos sistemas de gestión alineados a estándares internacionales, asegurando la
                            <br className="hidden sm:block" /> excelencia en la ejecución de nuestros proyectos.
                        </p>

                        {/* Logos Grid with vertical dividers */}
                        <div className="grid grid-cols-4 divide-x divide-slate-200 pt-2">
                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoIso9001} alt="ISO 9001" className="h-16 w-16 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 9001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />de Calidad</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoIso14001} alt="ISO 14001" className="h-16 w-16 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 14001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />Ambiental</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoIso45001} alt="ISO 45001" className="h-16 w-16 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 45001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />de Seguridad y Salud<br />en el Trabajo</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoBureauVeritas} alt="Bureau Veritas" className="h-16 w-16 object-contain" />
                                <div className="flex flex-col">

                                    <span className="text-[9px] font-bold leading-tight text-red-600">EMPRESA<br />HOMOLOGADA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Card 2: Registro SENACE --- */}
                <div className="flex max-w-4xl gap-6 rounded-3xl bg-white p-6 shadow-sm md:gap-8 md:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-24 shrink-0 flex-col items-center">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-10 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-[0_0_0_3px_white]"
                            style={{ backgroundColor: NAVY }}
                        >
                            02
                        </div>
                        <div
                            className="mt-6 flex min-h-[14rem] w-full flex-col items-center justify-center rounded-2xl p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert2Image}
                                alt="Registro SENACE Emblema"
                                className="h-20 w-20 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-start pt-2 text-left">
                        <h3
                            className="mb-3 text-xl font-extrabold tracking-tight text-slate-800"
                            style={{ color: NAVY }}
                        >
                            REGISTRO SENACE
                        </h3>

                        <p className="mb-6 max-w-2xl text-[14px] font-medium leading-relaxed text-slate-700 pr-8">
                            Registro para el desarrollo de servicios y estudios ambientales vinculados a los subsectores minería, electricidad e hidrocarburos.
                        </p>

                        {/* Bottom Content: Split List and Logo Area */}
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">

                            {/* Bulleted List */}
                            <ul className="flex-1 space-y-3.5 pr-4">
                                {[
                                    "Elaboración de estudios e instrumentos de gestión ambiental",
                                    "Líneas base y monitoreos ambientales",
                                    "Planes de manejo y mitigación ambiental",
                                    "Soporte técnico para expedientes y cumplimiento regulatorio",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span
                                            className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                                        </span>
                                        <span className="text-[13px] font-semibold leading-tight text-slate-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Right Side Logo Stack */}
                            <div className="flex shrink-0 flex-col items-center text-center sm:w-32">
                                <img
                                    src={logoSenace}
                                    alt="SENACE Logo"
                                    className="h-36 object-contain mb-1"
                                />
                                <div className="leading-tight">
                                    <p className="text-[11px] font-medium text-slate-800 -mt-4.5">
                                        Registro
                                        <br />
                                        Autorizado
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* --- Card 3: Permiso DESA-USB --- */}
                <div className="flex max-w-4xl gap-6 rounded-3xl bg-white p-6 shadow-sm md:gap-8 md:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-24 shrink-0 flex-col items-center">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-10 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-[0_0_0_3px_white]"
                            style={{ backgroundColor: NAVY }}
                        >
                            03
                        </div>
                        <div
                            className="mt-6 flex min-h-[14rem] w-full flex-col items-center justify-center rounded-2xl p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert3Image}
                                alt="Registro SENACE Emblema"
                                className="h-20 w-20 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex w-full flex-col justify-start pt-2 text-left">
                        <h3
                            className="mb-3 text-xl font-extrabold uppercase tracking-tight text-slate-800"
                            style={{ color: NAVY }}
                        >
                            PERMISO DESA-USB
                            <br />
                            N° 21-2020
                        </h3>

                        <p className="mb-6 max-w-2xl pr-8 text-[14px] font-medium leading-relaxed text-slate-700">
                            Permiso de saneamiento ambiental que nos autoriza a prestar servicios especializados con altos estándares de salubridad y seguridad.
                        </p>

                        {/* Bottom Content: Split List and Seal Area */}
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">

                            {/* Bulleted List */}
                            <ul className="flex-1 space-y-3.5 pr-4">
                                {[
                                    "Saneamiento ambiental",
                                    "Limpieza y desinfección de ambientes",
                                    "Desinfección y desratización",
                                    "Control sanitario y programas preventivos",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span
                                            className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                                        </span>
                                        <span className="text-[13px] font-semibold leading-tight text-slate-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Right Side Seal */}
                            <div className="flex shrink-0 items-center justify-center sm:w-32">
                                <img
                                    src={selloDesaUsb}
                                    alt="Sello DESA-USB - Saneamiento Ambiental"
                                    className="h-24 w-24 object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* ===== ¿POR QUÉ TMA? ===== */}
            <div
                className="relative flex  flex-col items-start gap-4 overflow-hidden rounded-lg px-6 py-4 sm:flex-row sm:items-center sm:gap-6 lg:px-8 mx-6 my-4 "
                style={{ backgroundColor: NAVY }}
            >
                {/* LEFT SECTION: Icon and Title */}
                <div className="z-10 flex shrink-0 items-center gap-4">
                    {/* Hexagon Outline with Users Icon */}
                    <div className="relative flex h-14 w-14 items-center justify-center">
                        <svg
                            className="absolute inset-0 h-full w-full"
                            viewBox="0 0 100 100"
                            style={{ fill: 'none', stroke: ORANGE, strokeWidth: 4 }}
                        >
                            <polygon points="50,3 97,27 97,73 50,97 3,73 3,27" />
                        </svg>
                        <Users className="h-6 w-6" style={{ color: ORANGE }} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white sm:text-2xl whitespace-nowrap">
                        ¿Por qué <span style={{ color: ORANGE }}>TMA</span>?
                    </h2>
                </div>

                {/* DIVIDER */}
                <div className="z-10 hidden h-12 w-px bg-white/30 sm:block shrink-0" />

                {/* RIGHT SECTION: Description */}
                <p className="z-10 text-sm leading-relaxed text-white sm:text-[15px]">
                    Soluciones integrales,{' '}
                    <span style={{ color: ORANGE }}>experiencia</span> en tratamiento y manejo de aguas,{' '}
                    <span style={{ color: ORANGE }}>capacidad</span> multidisciplinaria,{' '}
                    <span style={{ color: ORANGE }}>seguridad, calidad</span> y{' '}
                    <span style={{ color: ORANGE }}>enfoque ambiental</span>.
                </p>

                {/* BACKGROUND ICON: Adjusted to sit on the far right */}
                <div className="absolute -right-4 bottom-0 top-0 flex items-center justify-center opacity-10 pointer-events-none">
                    {/* You can replace this Droplet with a custom SVG of the leaf/drop if you have one */}
                    <Droplet
                        className="h-24 w-24 text-white"
                        strokeWidth={1}
                    />
                </div>
            </div>

            {/* ===== FOOTER / CONTACTO ===== */}
            <div
                className="flex flex-col gap-6 rounded-t-2xl px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between"
                style={{ backgroundColor: NAVY }}
            >
                {/* Left Section */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-xl font-bold leading-tight text-white sm:text-2xl text-left">
                        HABLEMOS DE SU
                        <br />
                        <span style={{ color: ORANGE }}>PRÓXIMO PROYECTO</span>
                    </h4>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: ORANGE }}
                        >
                            <MessageSquare className="h-4 w-4" />
                            Solicitar propuesta técnica
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden h-16 w-px shrink-0 bg-white/20 md:block" />

                {/* Middle Section (Contact Info) */}
                <div className="space-y-2 text-sm text-white">
                    <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>Jr. San Sebastián N° 353, Cajamarca</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>945 741 482</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>gerencia@tmaingenieros.com</span>
                    </div>
                </div>

                {/* Right Section (Logo) */}
                <img
                    src={logoTMA}
                    alt="TMA Ingenieros"
                    className="h-12 shrink-0 object-contain md:h-16"
                />
            </div>
        </section>
    );
}