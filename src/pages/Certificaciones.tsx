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
} from "lucide-react";

/**
 * TODO: reemplaza estos placeholders por tus imports reales, por ejemplo:
 * import heroBackground from "@/assets/certificaciones/hero-planta.jpg";
 *
 * Las rutas de abajo son solo referencia para que sepas qué imagen va en cada lugar.
 */
const heroBackground = "/images/certificaciones/hero-planta-tratamiento.jpg";
const logoIso9001 = "/images/certificaciones/iso-9001.png";
const logoIso14001 = "/images/certificaciones/iso-14001.png";
const logoIso45001 = "/images/certificaciones/iso-45001.png";
const logoBureauVeritas = "/images/certificaciones/bureau-veritas.png";
const iconoSenace = "/images/certificaciones/icono-senace.png"; // emblema circular azul/verde
const logoSenace = "/images/certificaciones/logo-senace.png";
const selloDesaUsb = "/images/certificaciones/sello-desa-usb.png";
const logoTMA = "/images/certificaciones/logo-tma.png";

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
                        src={heroBackground}
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

                <div className="relative z-10 px-6 py-10 sm:px-10 md:max-w-xl md:py-14">
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
                    <div className="relative flex w-20 shrink-0 flex-col items-center">
                        <div
                            className="absolute -left-2 top-0 z-10 flex h-10 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-[0_0_0_3px_white]"
                            style={{ backgroundColor: NAVY }}
                        >
                            01
                        </div>
                        <div
                            className="mt-6 flex h-40 w-full flex-col items-center justify-center rounded-2xl"
                            style={{ backgroundColor: NAVY }}
                        >
                            {/* Assuming 'Award' icon serves as the base for the badge */}
                            <Award className="h-12 w-12 text-white" strokeWidth={2} />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-center pt-2">
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
                                <img src={logoIso9001} alt="ISO 9001" className="h-12 w-12 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 9001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />de Calidad</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoIso14001} alt="ISO 14001" className="h-12 w-12 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 14001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />Ambiental</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoIso45001} alt="ISO 45001" className="h-12 w-12 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>ISO 45001</span>
                                    <span className="text-[9px] font-medium leading-tight text-slate-600">Sistema de Gestión<br />de Seguridad y Salud<br />en el Trabajo</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2 px-2 text-center">
                                <img src={logoBureauVeritas} alt="Bureau Veritas" className="h-12 w-12 object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-extrabold" style={{ color: NAVY }}>BUREAU VERITAS</span>
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
                                src={iconoSenace}
                                alt="Registro SENACE Emblema"
                                className="h-20 w-20 object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex flex-col justify-start pt-2">
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
                                    className="h-16 object-contain mb-1"
                                />
                                <div className="leading-tight">
                                    <p className="text-[18px] font-extrabold tracking-tight" style={{ color: NAVY }}>
                                        senace
                                    </p>
                                    <p className="text-[11px] font-medium text-slate-800 mt-0.5">
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
                            <ShieldCheck className="h-16 w-16 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="flex w-full flex-col justify-start pt-2">
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
                className="relative mx-4 my-6 flex flex-col items-start gap-4 overflow-hidden rounded-2xl px-6 py-6 sm:mx-8 sm:flex-row sm:items-center sm:gap-6 sm:px-10"
                style={{ backgroundColor: NAVY }}
            >
                <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center"
                    style={{
                        clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                        border: `2px solid ${ORANGE}`,
                    }}
                >
                    <Users className="h-7 w-7" style={{ color: ORANGE }} strokeWidth={1.5} />
                </div>

                <div className="hidden h-10 w-px bg-white/20 sm:block" />

                <p className="text-sm leading-relaxed text-white sm:text-[15px]">
                    <span className="font-bold">¿Por qué TMA? </span>
                    Soluciones integrales,{" "}
                    <span className="font-semibold" style={{ color: ORANGE }}>
                        experiencia
                    </span>{" "}
                    en tratamiento y manejo de aguas,{" "}
                    <span className="font-semibold" style={{ color: ORANGE }}>
                        capacidad
                    </span>{" "}
                    multidisciplinaria,{" "}
                    <span className="font-semibold" style={{ color: ORANGE }}>
                        seguridad, calidad
                    </span>{" "}
                    y{" "}
                    <span className="font-semibold" style={{ color: ORANGE }}>
                        enfoque ambiental
                    </span>
                    .
                </p>

                <Droplet
                    className="absolute -right-2 bottom-2 h-14 w-14 text-white/10 sm:h-16 sm:w-16"
                    strokeWidth={1}
                />
            </div>

            {/* ===== FOOTER / CONTACTO ===== */}
            <div className="flex flex-col gap-8 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between">
                <div>
                    <h4 className="text-xl font-bold leading-tight text-slate-800 sm:text-2xl">
                        HABLEMOS DE SU
                        <br />
                        <span style={{ color: NAVY }}>PRÓXIMO PROYECTO</span>
                    </h4>
                    {/* La captura original corta este párrafo; ajusta el texto si tienes la versión completa */}
                    <p className="mt-2 max-w-sm text-sm text-slate-500">
                        Estamos listos para brindarle soluciones eficientes...
                    </p>
                    <button
                        type="button"
                        className="mt-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: ORANGE }}
                    >
                        <MessageSquare className="h-4 w-4" />
                        Solicitar propuesta técnica
                    </button>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>Jr. San Sebastián N° 353, Cajamarca</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>945 741 482</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                        <span>gerencia@tmaingenieros.com</span>
                    </div>
                </div>

                <img src={logoTMA} alt="TMA Ingenieros" className="h-10 object-contain md:h-12" />
            </div>
        </section>
    );
}