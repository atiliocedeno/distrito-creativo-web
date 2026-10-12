export type PortfolioConcept = {
  tag: string;
  title: string;
  subtitle: string;
  background: string;
  service: string;
  description: string;
};

export const concepts: PortfolioConcept[] = [
  {
    tag: '01 / SOCIAL & STRATEGY',
    title: 'Menos scroll. Más conexión.',
    subtitle: 'Una comunidad empieza con una conversación.',
    background: 'bg-[#f2cf40] text-[#111111]',
    service: 'Redes Sociales',
    description: 'Concepto de muestra para una estrategia social: publicaciones que abren conversaciones, comparten el universo de una marca y convierten las preguntas de la comunidad en nuevas ideas.',
  },
  {
    tag: '02 / CONTENIDO AUDIOVISUAL',
    title: 'Historias que se sienten.',
    subtitle: 'De una buena idea a una pieza memorable.',
    background: 'bg-[#9262e8] text-[#111111]',
    service: 'Audiovisual',
    description: 'Concepto de muestra audiovisual: videos breves que presentan las personas, los procesos y los detalles detrás de una marca, con una narrativa cercana pensada para formatos verticales.',
  },
  {
    tag: '03 / META ADS & PERFORMANCE',
    title: 'Datos que impulsan.',
    subtitle: 'Campañas que no solo se ven, sino que convierten.',
    background: 'bg-[#39c5d0] text-[#111111]',
    service: 'Meta Ads',
    description: 'Concepto de muestra para campañas: combinar creatividad y medición para probar mensajes, entender a la audiencia y optimizar cada etapa del recorrido hacia la conversión.',
  },
  {
    tag: '04 / CREACIÓN DE CONTENIDO',
    title: 'Identidad con propósito.',
    subtitle: 'Piezas gráficas que capturan la esencia de tu marca.',
    background: 'bg-[#e95a9c] text-[#111111]',
    service: 'Contenido',
    description: 'Concepto de muestra de identidad: un sistema de piezas gráficas con una dirección visual coherente que expresa la personalidad de la marca en cada formato.',
  },
];

