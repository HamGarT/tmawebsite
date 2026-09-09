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

const NAVY = "#0B1E45";
const ORANGE = "#F5A623";

export default function Certificaciones() {
    return (
        <section className="w-full bg-white">
            {/* ===== HERO ===== */}

            <div className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
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

                {/* Ajuste: Se agregó md:pb-28 para dar espacio libre abajo y que las tarjetas no tapen el texto al subir */}
                <div className="relative z-10 px-5 py-12 pb-16 sm:px-10 md:max-w-xl md:py-14 md:pb-28 text-left">
                    <h2 className="text-[28px] leading-tight font-bold text-white sm:text-4xl">
                        Certificaciones,
                        <br />
                        registros y <span style={{ color: ORANGE }}>autorizaciones</span>
                    </h2>
                    <p className="mt-4 max-w-md text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
                        Contamos con certificaciones, registros y autorizaciones que
                        respaldan nuestro compromiso con la calidad, la seguridad, el
                        cumplimiento normativo y la sostenibilidad en cada proyecto que
                        ejecutamos.
                    </p>
                </div>
            </div>

            {/* ===== TARJETAS ===== */}
            {/* 
                Ajustes: 
                - relative z-20 y md:-mt-16 para superponerlas al hero.
                - px-4 md:px-8 para separarlas de los bordes de la pantalla.
                - gap-6 md:gap-6 lg:gap-8 para separarlas entre sí (efecto tarjetas independientes).
                - Se eliminaron border-b y divide-x.
            */}
            <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 -mt-8 md:-mt-16 mb-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-2 lg:gap-2">

                {/* --- Card 1: Sistema de gestión y homologación --- */}
                {/* Ajuste: shadow-lg y border-slate-100 para que resalten más como tarjetas individuales */}
                <div className="flex w-full gap-4 rounded-2xl bg-white p-5 shadow-lg border border-slate-100 sm:gap-6 sm:rounded-3xl sm:p-6 xl:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-16 shrink-0 flex-col items-center sm:w-20 xl:w-24">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-8 w-10 items-center justify-center rounded-md text-sm font-bold text-white shadow-[0_0_0_3px_white] sm:-left-2 sm:h-10 sm:w-12 sm:rounded-lg sm:text-lg"
                            style={{ backgroundColor: NAVY }}
                        >
                            01
                        </div>
                        <div
                            className="mt-4 flex min-h-[10rem] w-full flex-col items-center justify-center rounded-xl p-2 sm:mt-6 sm:min-h-[14rem] sm:rounded-2xl sm:p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert1Image}
                                alt="Registro SENACE Emblema"
                                className="h-10 w-10 object-contain sm:h-16 xl:h-20 sm:w-16 xl:w-20"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-center pt-1 sm:pt-2 text-left">
                        <h3
                            className="mb-2 text-[17px] font-extrabold tracking-tight text-slate-800 sm:mb-3 md:text-[16px] xl:text-xl"
                            style={{ color: NAVY }}
                        >
                            SISTEMA DE GESTIÓN
                            <br />
                            Y HOMOLOGACIÓN
                        </h3>

                        <p className="mb-4 max-w-2xl text-[13px] font-medium leading-relaxed text-slate-700 sm:mb-6 sm:text-[14px] md:text-[12px] xl:text-[14px]">
                            Implementamos sistemas de gestión alineados a estándares internacionales, asegurando la
                            <br className="hidden sm:block" /> excelencia en la ejecución de nuestros proyectos.
                        </p>

                        <div className="grid grid-cols-2 gap-y-5 pt-2 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-slate-200 md:grid-cols-2 md:gap-y-4 xl:grid-cols-4 xl:gap-y-0">
                            <div className="flex flex-col items-center gap-2 px-1 text-center sm:px-2">
                                <img src={logoIso9001} alt="ISO 9001" className="h-12 w-12 object-contain sm:h-14 xl:h-16 sm:w-14 xl:w-16" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-extrabold sm:text-[11px]" style={{ color: NAVY }}>ISO 9001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />de Calidad</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-1 text-center sm:px-2">
                                <img src={logoIso14001} alt="ISO 14001" className="h-12 w-12 object-contain sm:h-14 xl:h-16 sm:w-14 xl:w-16" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-extrabold sm:text-[11px]" style={{ color: NAVY }}>ISO 14001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />Ambiental</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-1 text-center sm:px-2">
                                <img src={logoIso45001} alt="ISO 45001" className="h-12 w-12 object-contain sm:h-14 xl:h-16 sm:w-14 xl:w-16" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-extrabold sm:text-[11px]" style={{ color: NAVY }}>ISO 45001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Gestión de<br />Seguridad</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-1 text-center sm:px-2">
                                <img src={logoBureauVeritas} alt="Bureau Veritas" className="h-12 w-12 object-contain sm:h-14 xl:h-16 sm:w-14 xl:w-16" />
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold leading-tight text-red-600 mt-2 sm:mt-0">EMPRESA<br />HOMOLOGADA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Card 2: Registro SENACE --- */}
                <div className="flex w-full gap-4 rounded-2xl bg-white p-5 shadow-lg border border-slate-100 sm:gap-6 sm:rounded-3xl sm:p-6 xl:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-16 shrink-0 flex-col items-center sm:w-20 xl:w-24">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-8 w-10 items-center justify-center rounded-md text-sm font-bold text-white shadow-[0_0_0_3px_white] sm:-left-2 sm:h-10 sm:w-12 sm:rounded-lg sm:text-lg"
                            style={{ backgroundColor: NAVY }}
                        >
                            02
                        </div>
                        <div
                            className="mt-4 flex min-h-[10rem] w-full flex-col items-center justify-center rounded-xl p-2 sm:mt-6 sm:min-h-[14rem] sm:rounded-2xl sm:p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert2Image}
                                alt="Registro SENACE Emblema"
                                className="h-10 w-10 object-contain sm:h-16 xl:h-20 sm:w-16 xl:w-20"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-start pt-1 sm:pt-2 text-left w-full">
                        <h3
                            className="mb-2 text-[17px] font-extrabold tracking-tight text-slate-800 sm:mb-3 md:text-[16px] xl:text-xl"
                            style={{ color: NAVY }}
                        >
                            REGISTRO SENACE
                        </h3>

                        <p className="mb-5 max-w-2xl pr-0 text-[13px] font-medium leading-relaxed text-slate-700 sm:mb-6 pb-4 sm:pr-4 md:text-[12px] xl:text-[14px] ">
                            Registro para el desarrollo de servicios y estudios ambientales vinculados a los subsectores minería, electricidad e hidrocarburos.
                        </p>

                        <div className="flex flex-col items-start gap-5 xl:flex-row xl:items-start xl:justify-between w-full">
                            <ul className="flex-1 space-y-3 pr-0 sm:space-y-3.5 sm:pr-2 xl:pr-4 w-full">
                                {[
                                    "Elaboración de estudios e instrumentos de gestión ambiental",
                                    "Líneas base y monitoreos ambientales",
                                    "Planes de manejo y mitigación ambiental",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span
                                            className="mt-[3px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full sm:h-[18px] sm:w-[18px]"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                                        </span>
                                        <span className="text-[12.5px] font-semibold leading-tight text-slate-700 sm:text-[13px] md:text-[11.5px] xl:text-[13px]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex shrink-0 flex-col items-center self-center text-center xl:w-28 xl:self-auto">
                                <img
                                    src={logoSenace}
                                    alt="SENACE Logo"
                                    className="mb-1 h-20 sm:h-24 xl:h-28 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Card 3: Permiso DESA-USB --- */}
                <div className="flex w-full gap-4 rounded-2xl bg-white p-5 shadow-lg border border-slate-100 sm:gap-6 sm:rounded-3xl sm:p-6 xl:p-8">
                    {/* Left Sidebar Graphic */}
                    <div className="relative flex w-16 shrink-0 flex-col items-center sm:w-20 xl:w-24">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-8 w-10 items-center justify-center rounded-md text-sm font-bold text-white shadow-[0_0_0_3px_white] sm:-left-2 sm:h-10 sm:w-12 sm:rounded-lg sm:text-lg"
                            style={{ backgroundColor: NAVY }}
                        >
                            03
                        </div>
                        <div
                            className="mt-4 flex min-h-[10rem] w-full flex-col items-center justify-center rounded-xl p-2 sm:mt-6 sm:min-h-[14rem] sm:rounded-2xl sm:p-4"
                            style={{ backgroundColor: NAVY }}
                        >
                            <img
                                src={cert3Image}
                                alt="Registro SENACE Emblema"
                                className="h-10 w-10 object-contain sm:h-16 xl:h-20 sm:w-16 xl:w-20"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex w-full flex-col justify-start pt-1 sm:pt-2 text-left">
                        <h3
                            className="mb-2 text-[17px] font-extrabold uppercase tracking-tight text-slate-800 sm:mb-3 md:text-[16px] xl:text-xl"
                            style={{ color: NAVY }}
                        >
                            PERMISO DESA-USB
                            <br />
                            N° 21-2020
                        </h3>

                        <p className="mb-5 max-w-2xl pr-0 text-[13px] font-medium leading-relaxed text-slate-700 sm:mb-6 sm:pr-4 pb-4 md:text-[12px] xl:text-[14px]">
                            Permiso de saneamiento ambiental que nos autoriza a prestar servicios especializados con altos estándares de salubridad y seguridad.
                        </p>

                        <div className="flex flex-col items-start gap-5 xl:flex-row xl:items-center xl:justify-between w-full">
                            <ul className="flex-1 space-y-3 pr-0 sm:space-y-3.5 sm:pr-2 xl:pr-4 w-full">
                                {[
                                    "Saneamiento ambiental",
                                    "Limpieza y desinfección de ambientes",
                                    "Desinfección y desratización",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span
                                            className="mt-[3px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full sm:h-[18px] sm:w-[18px]"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                                        </span>
                                        <span className="text-[12.5px] font-semibold leading-tight text-slate-700 sm:text-[13px] md:text-[11.5px] xl:text-[13px]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex shrink-0 items-center justify-center self-center xl:w-28 xl:self-auto pt-2">
                                <img
                                    src={selloDesaUsb}
                                    alt="Sello DESA-USB - Saneamiento Ambiental"
                                    className="h-16 w-16 object-contain sm:h-20 sm:w-20 xl:h-24 xl:w-24"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== ¿POR QUÉ TMA? ===== */}
            {/* Ajuste de márgenes y paddings para móviles */}
            <div
                className="relative mx-4 my-4 flex flex-col items-start gap-4 overflow-hidden rounded-lg px-5 py-5 sm:mx-6 sm:my-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-4 lg:px-8"
                style={{ backgroundColor: NAVY }}
            >
                {/* LEFT SECTION */}
                <div className="z-10 flex shrink-0 items-center gap-4">
                    <div className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                        <svg
                            className="absolute inset-0 h-full w-full"
                            viewBox="0 0 100 100"
                            style={{ fill: 'none', stroke: ORANGE, strokeWidth: 4 }}
                        >
                            <polygon points="50,3 97,27 97,73 50,97 3,73 3,27" />
                        </svg>
                        <Users className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: ORANGE }} strokeWidth={2} />
                    </div>

                    <h2 className="whitespace-nowrap text-lg font-bold text-white sm:text-xl md:text-2xl">
                        ¿Por qué <span style={{ color: ORANGE }}>TMA</span>?
                    </h2>
                </div>

                {/* DIVIDER */}
                <div className="z-10 hidden h-12 w-px shrink-0 bg-white/30 sm:block" />

                {/* RIGHT SECTION */}
                <p className="z-10 text-[13px] leading-relaxed text-white sm:text-sm md:text-[15px]">
                    Soluciones integrales,{' '}
                    <span style={{ color: ORANGE }}>experiencia</span> en tratamiento y manejo de aguas,{' '}
                    <span style={{ color: ORANGE }}>capacidad</span> multidisciplinaria,{' '}
                    <span style={{ color: ORANGE }}>seguridad, calidad</span> y{' '}
                    <span style={{ color: ORANGE }}>enfoque ambiental</span>.
                </p>

                {/* BACKGROUND ICON */}
                <div className="pointer-events-none absolute -right-4 bottom-0 top-0 flex items-center justify-center opacity-10">
                    <Droplet className="h-20 w-20 text-white sm:h-24 sm:w-24" strokeWidth={1} />
                </div>
            </div>

            {/* ===== FOOTER / CONTACTO ===== */}
            <div
                className="flex flex-col gap-6 rounded-t-2xl px-5 py-8 sm:px-10 md:flex-row md:items-center md:justify-between"
                style={{ backgroundColor: NAVY }}
            >
                {/* Left Section - Centrado en móviles, alineado a la izquierda en escritorio */}
                <div className="flex flex-col gap-4 text-center sm:gap-3 sm:text-left">
                    <h4 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                        HABLEMOS DE SU
                        <br />
                        <span style={{ color: ORANGE }}>PRÓXIMO PROYECTO</span>
                    </h4>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        {/* Botón expandido en móviles */}
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto sm:py-2"
                            style={{ backgroundColor: ORANGE }}
                        >
                            <MessageSquare className="h-4 w-4" />
                            Solicitar propuesta técnica
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="hidden h-16 w-px shrink-0 bg-white/20 md:block" />

                {/* Middle Section (Contact Info) */}
                <div className="flex flex-col items-center space-y-3 text-[13.5px] text-white sm:items-start sm:space-y-2 sm:text-sm">
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
                    className="h-12 shrink-0 self-center object-contain md:h-16 md:self-auto"
                />
            </div>
        </section>
    );
}