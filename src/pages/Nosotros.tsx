import {
  Target,
  Flag,
  Users,
  Headphones,
  ClipboardList,
  CalendarDays,
  Award,
  UsersRound,
  Globe2,
  Settings,
  Droplets,
  FileText,
  Wrench,
  SlidersHorizontal,
  ChartNoAxesCombined,
  ShieldCheck,
  ArrowDown,
  BadgeCheck,
} from "lucide-react";

interface NosotrosImages {
  hero?: string;
  project1?: string;
  project2?: string;
  worker?: string;
  experienceHero?: string;
  operations?: string;
  commitment?: string;
}

interface NosotrosProps {
  images?: NosotrosImages;
}

const COLORS = {
  navy: "#06265C",
  navyDark: "#031D4A",
  yellow: "#F5A900",
  blue: "#1455B8",
};

export default function Nosotros({ images = {} }: NosotrosProps) {
  const scrollToExperience = () => {
    document
      .getElementById("experiencia")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full overflow-hidden bg-white text-slate-700">

      {/* =========================================================
          01 — ¿QUIÉNES SOMOS?
      ========================================================= */}
      <section id="quienes-somos">

        {/* HERO */}
        <div className="grid min-h-[340px] grid-cols-1 lg:grid-cols-[44%_56%]">

          {/* Texto */}
          <div
            className="relative flex items-center overflow-hidden px-7 py-14 sm:px-12 lg:px-16"
            style={{ backgroundColor: COLORS.navy }}
          >
            {/* Diagonal */}
            <div
              className="absolute -right-20 top-0 hidden h-full w-36 skew-x-[12deg] lg:block"
              style={{ backgroundColor: COLORS.navy }}
            />

            <div className="relative z-10 max-w-[600px]">

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[52px]">
                ¿Quiénes{" "}
                <span style={{ color: COLORS.yellow }}>
                  somos?
                </span>
              </h1>

              <div
                className="mt-4 h-[4px] w-20"
                style={{ backgroundColor: COLORS.yellow }}
              />

              <p className="mt-5 max-w-[580px] text-base font-medium leading-7 text-white/95 sm:text-lg">
                Somos una empresa peruana especializada en soluciones
                integrales para minería e industria, abarcando ingeniería,
                construcción, operación y mantenimiento de plantas, y gestión
                ambiental.
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative min-h-[280px] overflow-hidden bg-slate-200 lg:min-h-full">

            {images.hero ? (
              <img
                src={images.hero}
                alt="Operación minera e industrial"
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}

            <div
              className="absolute -left-12 top-0 hidden h-full w-24 skew-x-[-12deg] lg:block"
              style={{ backgroundColor: COLORS.navy }}
            />
          </div>
        </div>


        {/* MISIÓN / VISIÓN / VALORES / COBERTURA */}
        <div className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-2 xl:grid-cols-4 xl:px-14">

          <InfoCard
            icon={<Target size={38} strokeWidth={2} />}
            title="MISIÓN"
          >
            Convertir nuestras soluciones integrales en valor tangible para
            nuestros clientes, asegurando calidad, seguridad, cumplimiento
            ambiental y optimización de costos en cada proyecto.
          </InfoCard>


          <InfoCard
            icon={<Flag size={38} strokeWidth={2} />}
            title="VISIÓN"
          >
            Ser el aliado estratégico líder a nivel nacional en ingeniería,
            construcción y servicios para minería e industria, reconocido por
            ejecutar proyectos complejos con excelencia, innovación y
            responsabilidad ambiental.
          </InfoCard>


          <InfoCard
            icon={<Users size={38} strokeWidth={2} />}
            title="VALORES"
            wide
          >
            <ul className="space-y-1.5">
              {[
                "Seguridad ante todo",
                "Integridad y transparencia",
                "Calidad y mejora continua",
                "Responsabilidad ambiental",
                "Innovación y enfoque en resultados",
                "Trabajo en equipo y compromiso",
              ].map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2 text-[13px] leading-4"
                >
                  <span
                    className="mt-[5px] h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: COLORS.yellow }}
                  />

                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </InfoCard>


          <InfoCard
            icon={<Headphones size={38} strokeWidth={2} />}
            title={
              <>
                COBERTURA
                <br />
                Y SOPORTE
              </>
            }
          >
            Atención en operaciones mineras e industria; ejecución en campo
            con equipo técnico multidisciplinario.
          </InfoCard>

        </div>


        {/* PROYECTOS / IMÁGENES / EXPERIENCIA / EQUIPO */}
        <div className="grid grid-cols-1 gap-3 px-5 pb-6 sm:grid-cols-2 xl:grid-cols-12 xl:px-14">

          {/* 24 proyectos */}
          <div
            className="relative flex min-h-[165px] items-center overflow-hidden rounded-md px-7 py-6 xl:col-span-2"
            style={{ backgroundColor: COLORS.navy }}
          >
            <div className="absolute -bottom-8 -left-4 opacity-5">
              <ClipboardList size={130} color="white" />
            </div>

            <div className="relative z-10 flex items-center gap-5">

              <ClipboardList
                size={50}
                strokeWidth={1.5}
                className="shrink-0 text-white"
              />

              <div>
                <div
                  className="text-5xl font-extrabold leading-none"
                  style={{ color: COLORS.yellow }}
                >
                  24
                </div>

                <div className="mt-2 text-xl font-medium leading-6 text-white">
                  proyectos
                  <br />
                  ejecutados
                </div>
              </div>

            </div>
          </div>


          <GalleryImage
            src={images.project1}
            alt="Proyecto industrial"
            className="xl:col-span-2"
          />


          <GalleryImage
            src={images.project2}
            alt="Planta industrial"
            className="xl:col-span-2"
          />


          <GalleryImage
            src={images.worker}
            alt="Trabajador en operación"
            className="xl:col-span-2"
          />


          {/* Experiencia */}
          <div className="flex min-h-[165px] items-center gap-5 rounded-md border border-slate-200 bg-white px-6 py-5 shadow-sm xl:col-span-2">

            <CalendarDays
              size={50}
              strokeWidth={1.6}
              className="shrink-0"
              style={{ color: COLORS.navy }}
            />

            <div>
              <p
                className="text-lg font-bold leading-5"
                style={{ color: COLORS.navy }}
              >
                EXPERIENCIA:
              </p>

              <p
                className="mt-1 text-3xl font-extrabold"
                style={{ color: COLORS.navy }}
              >
                2014 - 2025
              </p>
            </div>

          </div>


          {/* Equipo */}
          <div className="flex min-h-[165px] gap-4 rounded-md border border-slate-200 bg-white px-6 py-5 shadow-sm xl:col-span-2">

            <UsersRound
              size={50}
              strokeWidth={1.5}
              className="mt-1 shrink-0"
              style={{ color: COLORS.navy }}
            />

            <div>
              <h3
                className="text-lg font-bold leading-5"
                style={{ color: COLORS.navy }}
              >
                Equipo técnico
                <br />
                multidisciplinario
              </h3>

              <p className="mt-3 text-[12px] leading-[1.35] text-slate-600">
                Contamos con profesionales y técnicos altamente calificados
                con amplia experiencia en proyectos mineros e industriales,
                comprometidos con la excelencia y la sostenibilidad.
              </p>
            </div>

          </div>

        </div>


        {/* CTA HACIA EXPERIENCIA */}
        <div className="flex justify-center px-6 pb-14 pt-2">

          <button
            type="button"
            onClick={scrollToExperience}
            className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: COLORS.navy }}
          >
            Ver experiencia y capacidades

            <ArrowDown
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </button>

        </div>

      </section>


      {/* =========================================================
          SEPARADOR / NUEVO CAPÍTULO
      ========================================================= */}
      <div className="relative h-2 w-full">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: COLORS.yellow }}
        />
      </div>


      {/* =========================================================
          02 — EXPERIENCIA Y CAPACIDADES
      ========================================================= */}
      <section id="experiencia" className="scroll-mt-20">

        {/* HERO EXPERIENCIA */}
        <div className="grid min-h-[330px] grid-cols-1 lg:grid-cols-[44%_56%]">

          {/* Texto */}
          <div
            className="relative flex items-center overflow-hidden px-7 py-14 sm:px-12 lg:px-16"
            style={{ backgroundColor: COLORS.navy }}
          >

            <div
              className="absolute -right-20 top-0 hidden h-full w-36 skew-x-[12deg] lg:block"
              style={{ backgroundColor: COLORS.navy }}
            />

            <div className="relative z-10 max-w-[580px]">

              <h2 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[52px]">
                Experiencia y
                <br />

                <span style={{ color: COLORS.yellow }}>
                  capacidades
                </span>
              </h2>

              <div
                className="mt-4 h-[4px] w-20"
                style={{ backgroundColor: COLORS.yellow }}
              />

              <p className="mt-5 max-w-[540px] text-base font-medium leading-7 text-white/95 sm:text-lg">
                Comprometidos con ofrecer soluciones integrales,
                innovadoras y sostenibles para minería e industria.
              </p>

            </div>
          </div>


          {/* Imagen */}
          <div className="relative min-h-[280px] overflow-hidden bg-slate-200 lg:min-h-full">

            {images.experienceHero ? (
              <img
                src={images.experienceHero}
                alt="Planta industrial"
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}

            <div
              className="absolute -left-12 top-0 hidden h-full w-24 skew-x-[-12deg] lg:block"
              style={{ backgroundColor: COLORS.navy }}
            />

          </div>

        </div>


        {/* =====================================================
            MÉTRICAS
        ===================================================== */}
        <div className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-2 xl:grid-cols-4 xl:px-14">

          <MetricCard
            icon={<ClipboardList size={40} />}
            number="24"
            label={
              <>
                proyectos
                <br />
                registrados
              </>
            }
          />


          <MetricCard
            icon={<Users size={40} />}
            title="Clientes y operaciones"
          >
            Atendemos a empresas mineras, industriales y del sector público
            en múltiples regiones del país.
          </MetricCard>


          <MetricCard
            icon={<Globe2 size={40} />}
            title={
              <>
                Cobertura y
                <br />
                capacidad
                <br />
                multidisciplinaria
              </>
            }
          >
            Operamos a nivel nacional con un equipo técnico especializado en
            diversas disciplinas.
          </MetricCard>


          <MetricCard
            icon={<CalendarDays size={40} />}
            title={
              <>
                Periodo de
                <br />
                experiencia:
              </>
            }
            number="2014 - 2025"
          />

        </div>


        {/* =====================================================
            CLIENTES + CAPACIDADES
        ===================================================== */}
        <div className="grid grid-cols-1 gap-3 px-5 pb-4 xl:grid-cols-12 xl:px-14">

          {/* CLIENTES */}
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm xl:col-span-4">

            <SectionHeader
              icon={<UsersRound size={22} />}
              title="PRINCIPALES CLIENTES Y OPERACIONES"
            />

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 p-5 text-sm">

              <ClientItem text="BVN Yumpag" />
              <ClientItem text="Minera Quinchia SAS" />

              <ClientItem text="BVN Orcopampa" />
              <ClientItem text="Ferreyros S.A." />

              <ClientItem text="BVN Julcani" />
              <ClientItem text="Minera La Arena" />

              <ClientItem text="BVN San Gabriel" />
              <ClientItem text="Minera Yanacocha / BASF Peruana" />

              <ClientItem text="Huanza" />
              <ClientItem text="Minera Yanahuincha" />

            </div>

          </div>


          {/* FOTO */}
          <div className="min-h-[240px] overflow-hidden rounded-md bg-slate-200 xl:col-span-2">

            {images.operations ? (
              <img
                src={images.operations}
                alt="Operaciones industriales"
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}

          </div>


          {/* CAPACIDADES */}
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm xl:col-span-6">

            <SectionHeader
              icon={<Settings size={22} />}
              title="CAPACIDADES DEMOSTRADAS"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

              <Capability
                icon={<Droplets />}
                title="PTARI y PTARD"
              />

              <Capability
                icon={<ShieldCheck />}
                title="Operación de plantas DETOX"
              />

              <Capability
                icon={<FileText />}
                title="Diseño del manejo de aguas"
              />

              <Capability
                icon={<Wrench />}
                title="Operación y mantenimiento"
              />

              <Capability
                icon={<SlidersHorizontal />}
                title="Start-up y comisionamiento"
              />

              <Capability
                icon={<ChartNoAxesCombined />}
                title="Ingeniería de confiabilidad"
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            REGISTROS Y AUTORIZACIONES
        ===================================================== */}
        <div className="px-5 pb-6 xl:px-14">

          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">

            <SectionHeader
              icon={<BadgeCheck size={22} />}
              title="REGISTROS Y AUTORIZACIONES"
            />

            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">

              {/* SENACE */}
              <div className="flex items-center gap-6 px-8 py-7">

                <div className="flex h-16 min-w-32 items-center justify-center rounded-md border border-slate-100 px-4">
                  <span
                    className="text-2xl font-extrabold tracking-tight"
                    style={{ color: "#1683C7" }}
                  >
                    senace
                  </span>
                </div>

                <div>
                  <h3
                    className="text-base font-extrabold"
                    style={{ color: COLORS.navy }}
                  >
                    Registro SENACE
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Registro para estudios y gestión ambiental en minería,
                    electricidad e hidrocarburos.
                  </p>
                </div>

              </div>


              {/* DESA */}
              <div className="flex items-center gap-6 px-8 py-7">

                <div className="flex h-16 min-w-32 items-center justify-center rounded-md border border-slate-100 px-4">
                  <span
                    className="text-xl font-extrabold"
                    style={{ color: "#26734D" }}
                  >
                    DESA-USB
                  </span>
                </div>

                <div>
                  <h3
                    className="text-base font-extrabold"
                    style={{ color: COLORS.navy }}
                  >
                    Permiso DESA-USB N° 21-2020
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    Permiso para servicios de saneamiento ambiental.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPROMISO FINAL
      ========================================================= */}
      <section className="relative min-h-[100px] overflow-hidden">

        <div
          className="absolute inset-0"
          style={{ backgroundColor: COLORS.navy }}
        />

        {images.commitment && (
          <div className="absolute right-0 top-0 hidden h-full w-[38%] lg:block">

            <img
              src={images.commitment}
              alt=""
              className="h-full w-full object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #06265C 0%, rgba(6,38,92,0.2) 100%)",
              }}
            />

          </div>
        )}

        {/* Diagonal */}
        <div className="absolute -right-12 top-0 hidden h-full w-32 skew-x-[-20deg] bg-white lg:block" />

        <div className="relative z-10 flex min-h-[100px] items-center gap-5 px-7 sm:px-14">

          <Award
            size={58}
            strokeWidth={1.8}
            className="shrink-0"
            style={{ color: COLORS.yellow }}
          />

          <div>

            <h3
              className="text-xl font-extrabold sm:text-2xl"
              style={{ color: COLORS.yellow }}
            >
              Nuestro compromiso:
            </h3>

            <p className="mt-1 text-sm font-medium text-white sm:text-base">
              Calidad, innovación y responsabilidad ambiental en cada proyecto
              que desarrollamos.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   INFO CARD
============================================================= */

interface InfoCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  wide?: boolean;
}

function InfoCard({
  icon,
  title,
  children,
  wide = false,
}: InfoCardProps) {
  return (
    <div className="flex min-h-[215px] gap-5 rounded-md border border-slate-200 bg-white px-6 py-5 shadow-sm">

      <div className="shrink-0">

        <div
          className="flex h-[70px] w-[70px] items-center justify-center rounded-full text-white"
          style={{ backgroundColor: COLORS.navy }}
        >
          {icon}
        </div>

      </div>

      <div className={wide ? "min-w-0 flex-1" : "min-w-0"}>

        <h3
          className="text-lg font-extrabold leading-5"
          style={{ color: COLORS.navy }}
        >
          {title}
        </h3>

        <div
          className="mb-3 mt-2 h-[3px] w-12"
          style={{ backgroundColor: COLORS.yellow }}
        />

        <div className="text-[13px] leading-[1.45] text-slate-600">
          {children}
        </div>

      </div>

    </div>
  );
}


/* =============================================================
   METRIC CARD
============================================================= */

interface MetricCardProps {
  icon: React.ReactNode;
  number?: string;
  label?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

function MetricCard({
  icon,
  number,
  label,
  title,
  children,
}: MetricCardProps) {
  return (
    <div className="flex min-h-[140px] items-center gap-5 rounded-md border border-slate-200 bg-white px-6 py-5 shadow-sm">

      <div
        className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: COLORS.navy }}
      >
        {icon}
      </div>

      <div className="min-w-0">

        {number && (
          <div
            className="text-4xl font-extrabold leading-none"
            style={{ color: COLORS.blue }}
          >
            {number}
          </div>
        )}

        {label && (
          <div
            className="mt-2 text-lg font-bold leading-5"
            style={{ color: COLORS.navy }}
          >
            {label}
          </div>
        )}

        {title && (
          <h3
            className="text-lg font-extrabold leading-5"
            style={{ color: COLORS.navy }}
          >
            {title}
          </h3>
        )}

        {children && (
          <p className="mt-2 text-[12px] leading-[1.4] text-slate-600">
            {children}
          </p>
        )}

      </div>

    </div>
  );
}


/* =============================================================
   SECTION HEADER
============================================================= */

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

function SectionHeader({
  icon,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-2.5 text-white"
      style={{ backgroundColor: COLORS.navy }}
    >
      {icon}

      <h3 className="text-sm font-bold tracking-wide">
        {title}
      </h3>
    </div>
  );
}


/* =============================================================
   CLIENT ITEM
============================================================= */

function ClientItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-2">

      <span
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: COLORS.yellow }}
      />

      <span>{text}</span>

    </div>
  );
}


/* =============================================================
   CAPABILITY
============================================================= */

function Capability({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex min-h-[150px] flex-col items-center justify-center border-b border-r border-slate-100 px-3 py-5 text-center last:border-r-0">

      <div
        className="mb-4"
        style={{ color: COLORS.blue }}
      >
        {icon}
      </div>

      <p
        className="text-[12px] font-bold leading-4"
        style={{ color: COLORS.navy }}
      >
        {title}
      </p>

      <div
        className="mt-3 h-[3px] w-8"
        style={{ backgroundColor: COLORS.yellow }}
      />

    </div>
  );
}


/* =============================================================
   GALLERY IMAGE
============================================================= */

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`min-h-[165px] overflow-hidden rounded-md bg-slate-200 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  );
}


/* =============================================================
   IMAGE PLACEHOLDER
============================================================= */

function ImagePlaceholder() {
  return (
    <div className="flex h-full min-h-[165px] items-center justify-center bg-slate-200">

      <div className="text-center text-slate-400">

        <div className="mx-auto mb-2 h-10 w-10 rounded-md border-2 border-dashed border-slate-400" />

        <span className="text-xs">
          Imagen
        </span>

      </div>

    </div>
  );
}