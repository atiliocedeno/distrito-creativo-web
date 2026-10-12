import {services} from './content';
const slugs=['gestion-redes-sociales','creacion-contenido','produccion-audiovisual','publicidad-meta-ads','reportes-analisis'];
const scopes=[
 ['Diagnóstico de la presencia digital y objetivos de comunicación.','Estrategia editorial y calendario de publicaciones.','Gestión de comunidad y revisión de preguntas e intereses de la audiencia.'],
 ['Concepto creativo que exprese la personalidad de la marca.','Fotos, reels, videos y piezas gráficas adaptadas a cada formato.','Guion y producción con una dirección visual coherente.'],
 ['Concepto y guion para ordenar el mensaje antes del rodaje.','Producción y rodaje de las piezas audiovisuales.','Edición y adaptación a los formatos y canales del proyecto.'],
 ['Definición del objetivo de la campaña y sus audiencias.','Desarrollo de mensajes y piezas para Facebook e Instagram.','Medición del rendimiento y ajustes según los resultados.'],
 ['Revisión de métricas del contenido y las campañas.','Identificación de aprendizajes y oportunidades de mejora.','Propuesta de próximos pasos a partir de los objetivos de la marca.'],
];
export const servicePages=services.map((s,i)=>({...s,slug:slugs[i],name:s.title.join(' '),scope:scopes[i]}));
