import React from 'react';

import ImageInicio1 from '@/assets/images/inicio1.webp';
import serviciosImage from '@/assets/images/serviciosSlide.webp';

const serviciosData = [
  {
    id: '01',
    title: 'Tratamiento y manejo de aguas',
    description: 'Aguas ácidas, cianuradas, industriales, servidas, potable, reúso, PTARI, PTARD y DETOX.'
  },
  {
    id: '02',
    title: 'Pruebas y validación técnica',
    description: 'Jar Test, pilotaje, pruebas de tratabilidad, selección de reactivos y parámetros operacionales.'
  },
  {
    id: '03',
    title: 'Ingeniería de plantas',
    description: 'Ingeniería conceptual, básica, prefactibilidad, factibilidad, detalle, planos y especificaciones.'
  },
  {
    id: '04',
    title: 'Construcción y montaje',
    description: 'Construcción de plantas, montaje electromecánico, estructuras metálicas, tanques y tuberías.'
  },
  {
    id: '05',
    title: 'Operación y mantenimiento',
    description: 'O&M de plantas, control químico, reportes, mantenimiento preventivo/correctivo, start-up y comisionamiento.'
  },
  {
    id: '06',
    title: 'Gestión ambiental y permisos',
    description: 'ITS, EIA, MEIA, PMA, PAMA, líneas base, monitoreos, planes de manejo y cumplimiento regulatorio.'
  },
  {
    id: '07',
    title: 'Saneamiento ambiental',
    description: 'Limpieza y desinfección, desinsectación, desratización, control sanitario y programas preventivos DESA-USB.'
  },
  {
    id: '08',
    title: 'Especialidades técnicas',
    description: 'Diseño eléctrico e instrumentación, diseño mecánico, piping, construcción civil y soporte multidisciplinario.'
  }
];

export default function Servicios() {
  return (
    <section className="relative w-full bg-white py-12 px-4 md:px-8 lg:px-12 font-sans">
      {/* Decoración lateral naranja (opcional, visible en el borde izquierdo de tu imagen) */}


      <div className="max-w-7xl mx-auto">
        {/* Encabezado y banner de imagen */}
        <div className="flex flex-col lg:flex-row mb-12 bg-white items-stretch">
          {/* Left Yellow Bar */}
          <div className="hidden lg:block w-4 bg-[#f5a623] shrink-0"></div>

          {/* Text Content */}
          <div className="flex flex-col justify-center py-10 px-6 lg:px-12 lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-[#0a1c3f] leading-tight">
              Servicios que realiza
            </h2>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#135db7] mt-1 leading-tight">
              TMA INGENIEROS SAC
            </h2>
            <p className="text-gray-500 mt-4 text-base md:text-lg xl:pr-12">
              Soluciones integrales para minería, industria, saneamiento y gestión ambiental.
            </p>
          </div>

          {/* Slanted Image Section */}
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_40%)]">

            <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#031535] to-transparent opacity-90 z-10 pointer-events-none"></div>

            <img
              src={ImageInicio1}
              alt="Ingeniero en planta de tratamiento de aguas"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviciosData.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Etiqueta de número */}
                <div className="bg-[#f5a623] text-white text-xs font-bold px-2 py-1 rounded mt-0.5">
                  {servicio.id}
                </div>

                {/* Icono de círculo estilo diana */}
                <div className="w-8 h-8 rounded-full bg-[#0a1c3f] flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>

                {/* Título y línea decorativa */}
                <div className="flex flex-col mt-0.5">
                  <h3 className="text-[#0a1c3f] font-bold text-[13px] leading-tight">
                    {servicio.title}
                  </h3>
                  <div className="w-6 h-[2.5px] bg-[#f5a623] mt-1.5"></div>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-[12px] text-gray-500 leading-relaxed mt-1 text-left">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden">
          <img src={serviciosImage} alt="Servicios" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Footer / Call to Action */}
        <div className="bg-[#0a1c3f] rounded-xl mt-12 p-4 md:px-8 md:py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm md:text-base text-center md:text-left">
            <span className="text-[#f5a623] font-semibold">Nuestro compromiso: </span>
            <span className="text-white">calidad, innovación, seguridad y responsabilidad ambiental en cada proyecto.</span>
          </p>
          <button className="bg-[#f5a623] hover:bg-[#e0961b] text-white text-sm md:text-base font-semibold py-2.5 px-8 rounded transition-colors whitespace-nowrap">
            Solicitar propuesta técnica
          </button>
        </div>
      </div>
    </section>
  );
}