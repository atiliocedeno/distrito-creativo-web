import Link from 'next/link';
import {EditorialShell} from '@/components/editorial-shell';
import {JsonLd} from '@/components/seo/json-ld';
import {pageMetadata,absolute} from '@/lib/seo';
import {concepts} from '@/lib/portfolio';
import {servicePages} from '@/lib/service-pages';
import {Arrow} from '@/components/icons';
import {buttonClass} from '@/components/ui';
const description='Explora conceptos de muestra de Distrito Creativo: estrategia social, producción audiovisual, Meta Ads e identidad visual para tu marca.';
export const metadata=pageMetadata('Portafolio creativo | Distrito Creativo',description,'/portafolio');
export default function Portafolio(){return <EditorialShell>
 <JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:'Portafolio creativo | Distrito Creativo',description,url:absolute('/portafolio'),inLanguage:'es'}}/>
 <section className="px-[6%] pt-12 pb-8 sm:pt-20"><span className="inline-block rounded-full bg-brand px-4 py-2 text-xs font-extrabold tracking-widest">PORTAFOLIO · UNIVERSO CREATIVO</span><h1 className="mt-7 max-w-4xl text-5xl leading-[1.08] tracking-[-2px] sm:text-7xl">Ideas para poner tu marca en <span className="text-[#a68400]">movimiento.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">Cuatro maneras de conectar estrategia, contenido y personas. Explora el enfoque detrás de cada idea.</p><p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-600">Conceptos de muestra: estas propuestas ilustran posibilidades creativas; no son campañas publicadas ni resultados de clientes.</p></section>
 <section aria-label="Conceptos creativos" className="grid gap-6 px-[6%] py-6 pb-14 md:grid-cols-2">{concepts.map(c=>{const service=servicePages.find(s=>s.value===c.service)!;return <article key={c.tag} className={`group relative isolate flex flex-col overflow-hidden rounded-2xl p-7 text-[#111] transition-[color,transform,rotate,box-shadow] duration-300 hover:text-white hover:shadow-xl focus-within:text-white motion-safe:hover:-rotate-1 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-9 ${c.background}`}>
  <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[#111] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"/>
  <div className="flex items-center justify-between gap-5"><span className="text-xs font-bold tracking-widest">{c.tag}</span><Arrow direction="right" className="size-8 -rotate-45"/></div><h2 className="mt-10 max-w-lg text-4xl leading-[1.08] tracking-tight">{c.title}</h2><p className="mt-5 text-lg font-semibold leading-7">{c.subtitle}</p><p className="mt-5 max-w-xl leading-7">{c.description}</p><div className="mt-auto flex flex-wrap items-center gap-5 pt-8"><Link href={`/servicios/${service.slug}`} className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#111]">Explorar el servicio<Arrow direction="right" variant="straight" className="size-5"/></Link><Link href="/#contacto" className="text-sm font-bold underline underline-offset-4">Quiero una idea para mi marca</Link></div>
 </article>})}</section>
 <section className="mx-[6%] mb-14 flex flex-wrap items-center justify-between gap-7 rounded-3xl bg-[#111] p-8 text-white sm:p-10"><div><h2 className="text-3xl leading-tight">Tu próximo proyecto<br/><span className="text-brand">podría empezar aquí.</span></h2><p className="mt-4 max-w-lg leading-7 text-white/75">Cuéntanos tu objetivo y encontremos una dirección creativa para tu marca.</p></div><Link href="/#contacto" className={buttonClass}>Hablemos de tu proyecto<Arrow direction="right" variant="straight" className="size-6"/></Link></section>
 </EditorialShell>}
