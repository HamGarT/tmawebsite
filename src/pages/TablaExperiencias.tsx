import React from 'react';
import HeroImage from '@/assets/images/proyectosHero1.webp';

const COLORS = {
  navy: "#0B1B42",
  yellow: "#F5A623",
  blueText: "#1455B8",
  lightBg: "#F8F9FA",
};

const experienciasTMA = [
  // PARTE 1
  {
    periodo: ["01/01/2025 -", "31/12/2025"],
    cliente: "BVN Yumpag",
    proyecto: "PTARI 250 L/S",
    alcance: "Diseño de ingeniería básica, prefactibilidad, factibilidad y detalle",
    sustento: "8097-0"
  },
  {
    periodo: ["12/02/2024 -", "31/03/2025"],
    cliente: "BVN Orcopampa",
    proyecto: "Operación Planta DETOX",
    alcance: "Servicio de operación de planta de tratamiento de aguas cianuradas (DETOX)",
    sustento: "3669-0"
  },
  {
    periodo: ["17/06/2022 -", "15/11/2023"],
    cliente: "BVN San Gabriel",
    proyecto: "PTARI de 15 L/S",
    alcance: "Construcción de PTARI de 15 L/S: diseño, suministro, construcción y operación de planta (start-up)",
    sustento: "2110-0"
  },
  {
    periodo: ["06/06/2022 -", "05/10/2022"],
    cliente: "BVN Uchucchacua / Yumpag",
    proyecto: "PTARI de 450 L/S",
    alcance: "Ingeniería de factibilidad PTARI de 450 L/S, Proyecto Yumpag",
    sustento: "2156-0"
  },
  {
    periodo: ["15/07/2021 -", "31/07/2022"],
    cliente: "BVN Orcopampa",
    proyecto: "Operación Planta DETOX",
    alcance: "Servicio de operación de planta de tratamiento de aguas cianuradas (DETOX)",
    sustento: "1276-0"
  },
  {
    periodo: ["15/12/2021 -", "31/01/2022"],
    cliente: "BVN Julcani",
    proyecto: "Diseño de Tolva",
    alcance: "Diseño de ingeniería de detalle de la tolva de gruesos",
    sustento: "1694-0"
  },
  {
    periodo: ["03/05/2022 -", "31/05/2022"],
    cliente: "BVN Yumpag",
    proyecto: "Diseño Conceptual PTARI",
    alcance: "Diseño de ingeniería conceptual de la PTARI",
    sustento: "4800198271"
  },
  {
    periodo: ["20/07/2021 -", "30/09/2021"],
    cliente: "BVN Julcani",
    proyecto: "Diseño Ing. Factibilidad",
    alcance: "Diseño de ingeniería de factibilidad",
    sustento: "4800167881"
  },
  {
    periodo: ["01/07/2021 -", "01/08/2021"],
    cliente: "BVN Julcani",
    proyecto: "Diseño Ing. Factibilidad",
    alcance: "Diseño de ingeniería de factibilidad",
    sustento: "4800167001"
  },
  {
    periodo: ["30/06/2021 -", "31/07/2021"],
    cliente: "BVN Orcopampa",
    proyecto: "Operación Planta DETOX",
    alcance: "Asesoría para operación de planta de tratamiento de aguas cianuradas (DETOX)",
    sustento: "4800165119"
  },
  {
    periodo: ["01/06/2021 -", "01/07/2021"],
    cliente: "Huanza",
    proyecto: "Diseño Ing. Detalle PTARI",
    alcance: "Diseño de ingeniería de detalle de la PTARI",
    sustento: "4800163391"
  },
  {
    periodo: ["01/02/2021 -", "01/03/2021"],
    cliente: "BVN Julcani",
    proyecto: "Tratamiento de Efluentes",
    alcance: "Ingeniería en tratamiento de efluentes",
    sustento: "4800149676"
  },
  // PARTE 2
  {
    periodo: ["01/02/2021 -", "01/07/2021"],
    cliente: "BVN Julcani",
    proyecto: "BVN Julcani / PTARI",
    alcance: "Diseño de ingeniería de la PTARI",
    sustento: "4800149245"
  },
  {
    periodo: ["01/01/2021 -", "01/02/2021"],
    cliente: "Huanza",
    proyecto: "Diseño Ing. Detalle PTARI",
    alcance: "Diseño de ingeniería de detalle de la PTARI",
    sustento: "4800147752"
  },
  {
    periodo: ["01/10/2020 -", "01/10/2020"],
    cliente: "BVN Orcopampa",
    proyecto: "Mejora en STARIS Orcopampa",
    alcance: "Asesoramiento para mejoramiento de las STARIS de las plantas de Orcopampa",
    sustento: "4800136520"
  },
  {
    periodo: ["01/07/2020 -", "01/08/2020"],
    cliente: "BVN Julcani",
    proyecto: "Diseño Ing. Detalle PTARI",
    alcance: "Diseño del manejo de aguas para las PTARI",
    sustento: "4800126908"
  },
  {
    periodo: ["30/03/2020 -", "30/06/2020"],
    cliente: "BVN Julcani",
    proyecto: "Diseño Ing. Detalle PTARI",
    alcance: "Diseño del manejo de aguas para las PTARI Acchilla",
    sustento: "5800001644"
  },
  {
    periodo: ["01/07/2020 -", "31/07/2020"],
    cliente: "Minera Quinchía SAS",
    proyecto: "Diseño del Manejo de Aguas",
    alcance: "Diseño del manejo de aguas de Minera Quinchía",
    sustento: "OSMQ-0635"
  },
  {
    periodo: ["01/02/2019 -", "07/02/2021"],
    cliente: "Ferreyros S.A.",
    proyecto: "Operación y Mantenimiento PTARD",
    alcance: "Operación y mantenimiento de la PTARD",
    sustento: "3100145551"
  },
  {
    periodo: ["01/01/2018 -", "15/01/2018"],
    cliente: "Minería La Arena",
    proyecto: "Operación Planta DETOX",
    alcance: "Operación Planta DETOX",
    sustento: "77045"
  },
  {
    periodo: ["01/03/2017 -", "01/10/2017"],
    cliente: "BVN San Gabriel",
    proyecto: "Diseño, construcción y operación PTARI",
    alcance: "Construcción de PTARI de 5 L/S: diseño, suministro, construcción y operación de planta (start-up)",
    sustento: "4800016000"
  },
  {
    periodo: ["01/07/2014 -", "30/10/2017"],
    cliente: "Minera Yanacocha / BASF Peruana",
    proyecto: "Operación Planta DETOX",
    alcance: "Operación y control de reactivos químicos, Planta La Quinua",
    sustento: "4933824928"
  },
  {
    periodo: ["01/07/2014 -", "01/09/2014"],
    cliente: "Minera Yanaquihua",
    proyecto: "Manejo Integral de Aguas",
    alcance: "Diseño integral del manejo de aguas",
    sustento: "LIM1007035"
  }
];

export default function TablaExperiencias() {
  return (
    <main className="w-full overflow-hidden bg-white font-sans text-slate-700">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="w-full bg-white relative">
        <div className="grid h-[300px] grid-cols-1 lg:grid-cols-[55%_45%] w-full bg-white">

          {/* Textos (Izquierda) */}
          <div className="relative flex flex-col justify-center bg-white px-5 py-14 sm:px-12 xl:px-16 z-20">
            {/* Pequeña franja amarilla de acento visual (como en la imagen original) */}
            <div className="absolute left-0 top-1/4 h-32 w-1.5" style={{ backgroundColor: COLORS.yellow }}></div>

            <div className="pl-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-tight tracking-tight mb-1 text-left"
                style={{ color: COLORS.navy }}
              >
                Tabla de experiencias TMA
              </h1>

              <h2
                className="text-xl sm:text-2xl font-bold mb-4 text-left"
                style={{ color: COLORS.blueText }}
              >
                Completa sin columna de costos
              </h2>

              <div
                className="mt-2 mb-5 h-[3px] w-16"
                style={{ backgroundColor: COLORS.yellow }}
              />

              <p
                className="font-medium text-base sm:text-lg max-w-[650px] leading-snug text-left"
                style={{ color: COLORS.navy }}
              >
                Relación de trabajos registrados en experiencia empresarial de TMA Ingenieros SAC.
              </p>
            </div>
          </div>

          {/* Imagen Diagonal (Derecha) */}
          <div className="relative min-h-[250px] lg:min-h-full overflow-hidden">

            <img src={HeroImage} alt="Fondo Planta Experiencia" className="w-full h-full object-cover relative z-0" />
          </div>
        </div>
      </section>

      {/* =========================================================
          TABLA UNIFICADA
      ========================================================= */}
      <section className="w-full px-5 sm:px-12 xl:px-16 pb-20 pt-6">
        <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <div className="min-w-[1100px] bg-white">

            {/* Cabecera de la Tabla */}
            <div
              className="flex text-white text-[13px] font-bold py-3.5 px-4"
              style={{ backgroundColor: COLORS.navy }}
            >
              <div className="w-32 shrink-0">Periodo</div>
              <div className="w-56 shrink-0">Cliente</div>
              <div className="w-64 shrink-0">Proyecto</div>
              <div className="flex-1 shrink-0">Alcance / servicio realizado</div>
              <div className="w-32 shrink-0">Sustento</div>
            </div>

            {/* Cuerpo de la Tabla */}
            <div className="flex flex-col">
              {experienciasTMA.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start text-[13px] text-left px-4 border-b border-gray-100 hover:bg-gray-100/70 transition-colors ${index % 2 !== 0 ? 'bg-slate-50/50' : 'bg-white'}`}
                >
                  {/* Periodo */}
                  <div className="w-32 shrink-0 text-slate-500 font-medium">
                    {item.periodo.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* Cliente */}
                  <div className="w-56 shrink-0 font-bold" style={{ color: COLORS.navy }}>
                    {item.cliente}
                  </div>

                  {/* Proyecto */}
                  <div className="w-64 shrink-0 font-bold pr-4" style={{ color: COLORS.blueText }}>
                    {item.proyecto}
                  </div>

                  {/* Alcance */}
                  <div className="flex-1 shrink-0 text-slate-600 font-medium pr-4">
                    {item.alcance}
                  </div>

                  {/* Sustento */}
                  <div className="w-32 shrink-0 text-slate-500 font-medium">
                    {item.sustento}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer / Fuente base */}
        <div className="mt-3 text-[11px] text-slate-400 px-2 font-medium">
          Fuente base: F04 de experiencia empresarial TMA Ingenieros SAC / tabla CV. Columna de costos retirada para uso comercial web.
        </div>
      </section>

    </main>
  );
}