import slide01 from '@/assets/presentacion/slide_01.webp';
import slide01Thumb from '@/assets/presentacion/slide_01_thumb.webp';
import slide02 from '@/assets/presentacion/slide_02.webp';
import slide02Thumb from '@/assets/presentacion/slide_02_thumb.webp';
import slide03 from '@/assets/presentacion/slide_03.webp';
import slide03Thumb from '@/assets/presentacion/slide_03_thumb.webp';
import slide04 from '@/assets/presentacion/slide_04.webp';
import slide04Thumb from '@/assets/presentacion/slide_04_thumb.webp';
import slide05 from '@/assets/presentacion/slide_05.webp';
import slide05Thumb from '@/assets/presentacion/slide_05_thumb.webp';
import slide06 from '@/assets/presentacion/slide_06.webp';
import slide06Thumb from '@/assets/presentacion/slide_06_thumb.webp';
import slide07 from '@/assets/presentacion/slide_07.webp';
import slide07Thumb from '@/assets/presentacion/slide_07_thumb.webp';
import slide08 from '@/assets/presentacion/slide_08.webp';
import slide08Thumb from '@/assets/presentacion/slide_08_thumb.webp';
import slide09 from '@/assets/presentacion/slide_09.webp';
import slide09Thumb from '@/assets/presentacion/slide_09_thumb.webp';
import slide10 from '@/assets/presentacion/slide_10.webp';
import slide10Thumb from '@/assets/presentacion/slide_10_thumb.webp';

export type PresentationSlide = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  thumbnail: string;
};

export const presentationSlides: PresentationSlide[] = [
  {
    id: '01',
    title: 'Asistencia técnica remota y presencial',
    category: 'Portada',
    description:
      'Una visión general de nuestra propuesta de acompañamiento técnico para operaciones mineras e industriales.',
    image: slide01,
    thumbnail: slide01Thumb,
  },
  {
    id: '02',
    title: 'Problemas frecuentes en mina',
    category: 'Retos operativos',
    description:
      'Identificamos los principales problemas que afectan la continuidad, seguridad y eficiencia de la operación.',
    image: slide02,
    thumbnail: slide02Thumb,
  },
  {
    id: '03',
    title: 'Asistencia técnica especializada',
    category: 'Soporte técnico',
    description:
      'Acompañamiento remoto y presencial con especialistas para resolver consultas y contingencias técnicas.',
    image: slide03,
    thumbnail: slide03Thumb,
  },
  {
    id: '04',
    title: 'Documentación de ingeniería',
    category: 'Documentación',
    description:
      'Revisión, validación y elaboración de planos, memorias de cálculo y documentación técnica del proyecto.',
    image: slide04,
    thumbnail: slide04Thumb,
  },
  {
    id: '05',
    title: 'Modificaciones y actualización de planos',
    category: 'Actualización',
    description:
      'Control de cambios, actualización de planos y documentación as-built para mantener la información vigente.',
    image: slide05,
    thumbnail: slide05Thumb,
  },
  {
    id: '06',
    title: 'Diagnóstico y optimización de plantas',
    category: 'Optimización',
    description:
      'Evaluación integral de procesos y equipos para mejorar el rendimiento de plantas de tratamiento.',
    image: slide06,
    thumbnail: slide06Thumb,
  },
  {
    id: '07',
    title: 'Aguas, relaves, hidráulica y tanques',
    category: 'Especialidades',
    description:
      'Soluciones de ingeniería para sistemas de agua, manejo de relaves, hidráulica y almacenamiento en tanques.',
    image: slide07,
    thumbnail: slide07Thumb,
  },
  {
    id: '08',
    title: 'Gestión ambiental y documentación',
    category: 'Cumplimiento ambiental',
    description:
      'Soporte en gestión ambiental y documentación para el cumplimiento de la normativa aplicable.',
    image: slide08,
    thumbnail: slide08Thumb,
  },
  {
    id: '09',
    title: 'Experiencia y proyectos destacados',
    category: 'Experiencia',
    description:
      'Proyectos y resultados que respaldan nuestra capacidad técnica en minería, industria y ambiente.',
    image: slide09,
    thumbnail: slide09Thumb,
  },
  {
    id: '10',
    title: 'Cómo trabajamos contigo',
    category: 'Metodología',
    description:
      'Un proceso de trabajo claro, coordinado y orientado a resultados en cada etapa del servicio.',
    image: slide10,
    thumbnail: slide10Thumb,
  },
];
