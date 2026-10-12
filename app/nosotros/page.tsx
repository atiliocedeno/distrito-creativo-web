import Link from 'next/link';
import {EditorialShell} from '@/components/editorial-shell';
import {JsonLd} from '@/components/seo/json-ld';
import {pageMetadata,organization,absolute} from '@/lib/seo';
import {Arrow} from '@/components/icons';
import {buttonClass} from '@/components/ui';

const description='Conoce Distrito Creativo: una agencia de contenidos digitales que une estrategia, creatividad y producción para conectar marcas con personas.';
export const metadata=pageMetadata('Nosotros | Distrito Creativo',description,'/nosotros');
const principles=[
 {number:'01',title:'Ideas con intención.',copy:'Cada pieza empieza por una pregunta: qué queremos contar y por qué le importa a quien está al otro lado.',tone:'bg-[#f2cf40]'},
 {number:'02',title:'Historias cercanas.',copy:'Buscamos lo que hace única a cada marca para convertirlo en contenido que invite a conversar.',tone:'bg-[#9262e8]'},
 {number:'03',title:'Aprender para mejorar.',copy:'La creatividad y el análisis se complementan. Revisamos lo que sucede para orientar las próximas decisiones.',tone:'bg-[#39c5d0]'},
];
export default function Nosotros(){return <EditorialShell>
 <JsonLd data={{'@context':'https://schema.org','@graph':[organization(),{'@type':'AboutPage',name:'Nosotros | Distrito Creativo',description,url:absolute('/nosotros'),inLanguage:'es',about:{'@id':absolute('/#organizacion')??'#organizacion'}}]}}/>
 <section className="grid items-center gap-10 px-[6%] py-12 lg:grid-cols-[1.2fr_1fr] lg:py-20">
  <div><span className="inline-block rounded-full bg-brand px-4 py-2 text-xs font-extrabold tracking-widest">SOMOS DISTRITO CREATIVO</span><h1 className="mt-7 text-5xl leading-[1.08] tracking-[-2px] sm:text-6xl">Ideas que conectan.<br/><span className="text-[#a68400]">Marcas en movimiento.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">Somos una agencia de contenidos digitales que convierte ideas en historias que conectan, comunidades que crecen y marcas que destacan.</p><p className="mt-4 max-w-xl leading-7 text-neutral-600">Unimos estrategia, creación de contenido, producción audiovisual y publicidad para darle intención a la presencia digital de tu marca.</p><Link href="/portafolio" className={`${buttonClass} mt-7`}>Explora nuestras ideas<Arrow direction="right" variant="straight" className="size-6"/></Link></div>
  <div className="relative overflow-hidden rounded-3xl bg-[#111] p-8 text-white sm:p-12"><span className="text-xs font-bold tracking-[.2em] text-brand">NUESTRA FORMA DE PENSAR</span><p className="mt-10 font-display text-4xl leading-[1.2] font-black tracking-tight sm:text-5xl">Estrategia.<br/>Creatividad.<br/><span className="text-brand">Conexión.</span></p><div aria-hidden="true" className="mt-10 flex items-center justify-between border-t border-white/20 pt-7"><span className="text-5xl text-brand">✳</span><Arrow direction="right" variant="straight" className="size-14 text-brand"/></div></div>
 </section>
 <section aria-labelledby="principios" className="px-[6%] pb-14"><h2 id="principios" className="text-3xl leading-[1.16] tracking-tight sm:text-4xl">Lo que le da <mark>sentido</mark> al contenido</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{principles.map(p=><article key={p.number} className={`rounded-2xl p-7 ${p.tone}`}><span className="text-xs font-bold tracking-widest">{p.number} / ASÍ PENSAMOS</span><h3 className="mt-8 text-3xl leading-tight">{p.title}</h3><p className="mt-5 leading-7">{p.copy}</p></article>)}</div></section>
 <section className="mx-[6%] mb-14 rounded-3xl border border-black/10 bg-white p-8 sm:p-10"><h2 className="text-3xl leading-tight">Tu marca tiene una historia.<br/>Hablemos de cómo contarla.</h2><p className="mt-5 max-w-2xl leading-7 text-neutral-600">Cuéntanos qué haces, a quién quieres llegar y qué te gustaría conseguir. Ese es el punto de partida para pensar juntos el contenido.</p><div className="mt-7 flex flex-wrap gap-5"><Link href="/#contacto" className={buttonClass}>Hablemos de tu proyecto<Arrow direction="right" variant="straight" className="size-6"/></Link><Link href="/#servicios" className="self-center font-bold underline underline-offset-4">Conoce nuestros servicios</Link></div></section>
 </EditorialShell>}
