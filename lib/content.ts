import type { IconName } from '@/components/icons';
export type Service = { title: string[]; icon: IconName; tone: string; short: string; detail: string; value: string | null };
export const services: Service[] = [
  {
    "title": [
      "Gestión de",
      "Redes Sociales"
    ],
    "icon": "social",
    "short": "Estrategia, planificación y comunidad para que tu marca siempre avance.",
    "detail": "Damos dirección a la presencia digital de tu marca: diagnóstico, estrategia editorial, calendario de publicaciones y gestión de comunidad. Cada contenido responde a una idea y a un objetivo.",
    "value": "Redes Sociales",
    "tone": "bg-[#f2cf40] text-[#111111]"
  },
  {
    "title": [
      "Creación de",
      "Contenido"
    ],
    "icon": "camera",
    "short": "Fotos, videos, reels y piezas gráficas que cuentan tu historia.",
    "detail": "Transformamos la personalidad de tu marca en fotos, reels y piezas gráficas. Trabajamos el concepto, el guion y la producción para crear una identidad consistente en cada publicación.",
    "value": "Contenido",
    "tone": "bg-[#e95a9c] text-[#111111]"
  },
  {
    "title": [
      "Producción",
      "Audiovisual"
    ],
    "icon": "film",
    "short": "Desde ideas hasta producciones que impactan.",
    "detail": "De la primera idea al último corte: concepto creativo, guion, rodaje y edición. Creamos contenido audiovisual adaptado a los formatos y canales que necesita tu marca.",
    "value": "Audiovisual",
    "tone": "bg-[#9262e8] text-[#111111]"
  },
  {
    "title": [
      "Publicidad",
      "en Meta Ads"
    ],
    "icon": "megaphone",
    "short": "Campañas que conectan, atraen y convierten.",
    "detail": "Diseñamos campañas para Facebook e Instagram con objetivos claros, audiencias relevantes y piezas creativas. Medimos el rendimiento para aprender y ajustar la estrategia.",
    "value": "Meta Ads",
    "tone": "bg-[#39c5d0] text-[#111111]"
  },
  {
    "title": [
      "Reportes",
      "y Análisis"
    ],
    "icon": "chart",
    "short": "Datos claros para tomar mejores decisiones y crecer más.",
    "detail": "Convertimos las métricas en información útil. Revisamos el desempeño del contenido y de las campañas, identificamos oportunidades y proponemos los próximos pasos.",
    "value": null,
    "tone": "bg-[#ed9442] text-[#111111]"
  }
];
export const projects = [
 { tag: '01 / SOCIAL & STRATEGY', title: 'Menos scroll. Más conexión.', lines: ['Menos scroll.', 'Más conexión.'], caption: 'Una comunidad empieza con una conversación.', tone: 'bg-[#f0e9fc]', detail: 'Concepto de muestra para una estrategia social: una serie de publicaciones que abre conversaciones, comparte el universo de la marca y convierte preguntas de la comunidad en nuevas ideas de contenido.', value: 'Redes Sociales' },
 { tag: '02 / CONTENIDO AUDIOVISUAL', title: 'Historias que se sienten.', lines: ['Historias', 'que se sienten.'], caption: 'De una buena idea a una pieza memorable.', tone: 'bg-[#dff4f4]', detail: 'Concepto de muestra audiovisual: una serie de videos breves que presenta a las personas, los procesos y los detalles detrás de una marca. Una narrativa cercana, pensada para formatos verticales.', value: 'Audiovisual' }
];
export const serviceChoices = [ {value:'Redes Sociales',label:'Redes Sociales'}, {value:'Contenido',label:'Creación de Contenido'}, {value:'Audiovisual',label:'Producción Audiovisual'}, {value:'Meta Ads',label:'Meta Ads'} ];
