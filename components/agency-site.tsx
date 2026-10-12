'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {servicePages} from '@/lib/service-pages';
import type {ReactNode} from 'react';
import {Arrow,ArrowCircle,Icon} from './icons';
import {Brand,buttonClass,Eyebrow,headingClass,sectionClass} from './ui';
import {ContactForm} from './contact-form';
import {Hero} from './hero';
import {Partners} from './partners';
import Portfolio from './portfolio';

type Detail={label:string;title:string;copy:string;service?:string|null;blog?:boolean};
const navigation=[['Inicio','inicio'],['Nosotros','nosotros'],['Servicios','servicios'],['Blog','blog'],['Portafolio','portafolio']];

export function AgencySite({faq}:{faq?:ReactNode}){
 const [menu,setMenu]=useState(false);
 const [active,setActive]=useState('inicio');
 const [detail,setDetail]=useState<Detail|null>(null);
 const [selected,setSelected]=useState<string[]>([]);
 const [overflow,setOverflow]=useState(false);
 const [year,setYear]=useState<number>();
 const dialog=useRef<HTMLDialogElement>(null);
 const grid=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  setYear(new Date().getFullYear());
  const sections=document.querySelectorAll('main section[id]');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id)}),{rootMargin:'-15% 0px -65% 0px'});
  sections.forEach(section=>observer.observe(section));
  const list=grid.current;
  const measure=()=>{if(list)setOverflow(list.scrollWidth>list.clientWidth+2)};
  measure();const resize=new ResizeObserver(measure);if(list)resize.observe(list);
  return ()=>{observer.disconnect();resize.disconnect()};
 },[]);
 useEffect(()=>{
  const element=dialog.current;if(!element)return;
  if(detail&&!element.open)element.showModal();
  else if(!detail&&element.open)element.close();
 },[detail]);
 function contactFromDetail(){
  if(detail?.service&&!selected.includes(detail.service))setSelected([...selected,detail.service]);
  setDetail(null);
 }
 function scrollServices(direction:number){grid.current?.scrollBy({left:direction*205,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
 return <div className="mx-auto max-w-[1440px] overflow-clip bg-white shadow-[0_12px_70px_#00000016] wide:my-6 wide:rounded-2xl min-[1500px]:my-[35px]">
  <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-brand focus:p-3">Saltar al contenido</a>
  <header className="relative z-5 flex h-[75px] items-center justify-between gap-2 bg-white px-[5%] mobile:h-20 mobile:gap-5 tablet:h-[90px] tablet:gap-[30px] tablet:px-[4.4%] wide:h-[102px]">
   <Brand/>
   <nav id="navigation" aria-label="Navegación principal" className={`${menu?'flex':'hidden'} absolute inset-x-0 top-[75px] items-center justify-between gap-[15px] bg-white px-[5%] py-5 text-[11px] font-bold shadow-lg mobile:top-20 mobile:gap-6 mobile:text-xs tablet:static tablet:flex tablet:gap-6 tablet:p-0 tablet:shadow-none wide:gap-[34px]`}>
    {navigation.map(([label,id])=><Link key={id} href={['blog','nosotros','portafolio'].includes(id)?`/${id}`:`#${id}`} prefetch={id==='blog'?false:undefined} onClick={()=>setMenu(false)} aria-current={active===id?'location':undefined} className={`relative py-[15px] after:absolute after:bottom-[5px] after:left-0 after:h-1 after:rounded-full after:bg-brand after:transition-[width] hover:after:w-[25px] ${active===id?'after:w-[25px]':'after:w-0'}`}>{label}</Link>)}
   </nav>
   <a className={`${buttonClass} ml-auto min-h-[37px] gap-[7px] py-1.5 pr-2 pl-3 text-[10px] mobile:min-h-11 mobile:min-w-[145px] mobile:gap-6 mobile:py-2.5 mobile:pr-3 mobile:pl-6 mobile:text-xs tablet:ml-0`} href="https://wa.me/56961034681" target="_blank" rel="noopener noreferrer" aria-label="Hablemos por WhatsApp (abre en una nueva pestaña)">Hablemos<Icon name="whatsapp" className="size-6 mobile:size-[27px]"/></a>
   <button type="button" aria-label={menu?'Cerrar menú':'Abrir menú'} aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)} className="grid size-[33px] shrink-0 place-items-center rounded-full bg-[#f5f5f5] text-xl mobile:size-[38px] tablet:hidden">☰</button>
  </header>
  <main id="contenido" tabIndex={-1}>
   <Hero/>
   <section id="servicios" className={`${sectionClass} relative z-3 -mt-3 rounded-t-3xl bg-[#fafafa] mobile:-mt-[5px]`}>
    <div className="mb-[14px] flex flex-wrap items-end justify-between gap-[15px] mobile:mb-6 mobile:flex-nowrap mobile:items-center tablet:gap-[30px]">
     <div><Eyebrow>NUESTROS SERVICIOS</Eyebrow><h2 className={headingClass}>Ideas, estrategia<br/>y contenido <mark>sin límites</mark></h2></div>
     <p className="order-3 max-w-full text-xs leading-[1.45] mobile:order-0 mobile:ml-auto mobile:max-w-[210px] mobile:text-[11px] tablet:max-w-[335px] tablet:text-xs">Acompañamos a marcas que quieren destacar con contenido estratégico, creativo y orientado a resultados.</p>
     {overflow&&<div className="ml-auto flex gap-[5px] mobile:ml-0 mobile:gap-2"><button onClick={()=>scrollServices(-1)} aria-label="Servicios anteriores" className="grid size-7 place-items-center rounded-full border border-[#e4e4e4] mobile:size-[34px]"><Arrow direction="left" className="size-[23px]"/></button><button onClick={()=>scrollServices(1)} aria-label="Servicios siguientes" className="grid size-7 place-items-center rounded-full border border-[#e4e4e4] mobile:size-[34px]"><Arrow direction="right" className="size-[23px]"/></button></div>}
    </div>
    <div ref={grid} className="flex snap-x snap-mandatory gap-3 overflow-x-auto pt-[7px] pb-3 tablet:grid tablet:grid-cols-5 tablet:overflow-visible tablet:p-0">
     {servicePages.map(service=><Link key={service.slug} href={`/servicios/${service.slug}`} aria-label={`Ver detalles de ${service.name}`} className={`relative min-h-[180px] min-w-[178px] snap-start rounded-xl p-4 text-left transition-transform hover:-translate-y-1.5 motion-reduce:transition-none mobile:min-w-[190px] tablet:min-h-[178px] tablet:min-w-0 tablet:px-[13px] wide:px-[18px] wide:pt-5 wide:pb-[18px] ${service.tone}`}>
      <Icon name={service.icon} className="mb-[9px] size-[43px] rounded-xl bg-white/30 p-1.5"/>
      <h3 className="mb-2.5 text-[17px] leading-[1.02] tracking-[-.7px] wide:text-[19px]">{service.title.map(line=><span key={line} className="block">{line}</span>)}</h3>
      <p className="max-w-[140px] pr-3 text-[11px] leading-[1.3]">{service.short}</p>
      <span className="absolute right-[13px] bottom-[15px] grid size-[27px] place-items-center rounded-full bg-white text-[#111111]"><Arrow direction="right" variant="straight" className="size-[23px]"/></span>
     </Link>)}
    </div>
   </section>
   <Partners/>
   <section id="contacto" className={`${sectionClass} grid gap-5 tablet:grid-cols-[34%_1fr] tablet:gap-[34px] tablet:pt-7 tablet:pb-[25px]`}>
    <div className="pt-3 mobile:grid mobile:grid-cols-2 mobile:gap-x-5 mobile:gap-y-2 tablet:block"><Eyebrow className="mobile:col-span-full">CONTÁCTANOS</Eyebrow><h2 className="text-[37px] leading-[1.16] tracking-[-1.6px] mobile:text-[35px] wide:text-[40px]">Cuéntanos sobre<br/><mark>tu proyecto</mark></h2><p className="mt-[18px] text-[13px] leading-[1.4] mobile:mt-0 mobile:max-w-[290px] mobile:self-center mobile:text-sm tablet:mt-5">Queremos conocer tu marca, tus ideas y objetivos. Completa el formulario y da el primer paso para crear contenido que genere resultados.</p><div aria-hidden="true" className="relative isolate mx-auto mt-2.5 hidden w-[140px] -rotate-18 tablet:block"><Icon name="megaphone" className="size-[95px] stroke-[1.8]"/><i className="absolute -top-2.5 -right-1.5 -z-1 text-[100px] text-brand not-italic">✳</i></div></div>
    <ContactForm selected={selected} onSelect={setSelected}/>
   </section>
   <Portfolio onSelect={concept=>setDetail({label:'CONCEPTO CREATIVO · MUESTRA',title:concept.title,copy:concept.description,service:concept.service})}/>
   {faq}
   <section className="mx-[3%] flex flex-col items-center justify-between gap-5 rounded-t-2xl bg-[#111] p-[25px] text-center text-white mobile:mx-[1.3%] mobile:flex-row mobile:gap-[30px] mobile:px-[3%] mobile:py-6 mobile:text-left">
    <Brand footer/>
    <div className="text-2xl leading-[1.05] font-bold tracking-[-.6px] mobile:text-lg wide:text-[22px]">¿Listo para llevar<br/>tu <span className="text-brand">marca</span> al siguiente nivel?<small className="mt-3 block text-[11px] leading-[1.4] font-normal tracking-normal mobile:mt-2 mobile:text-[10px]">Hablemos de ideas, de objetivos y de todo lo que podemos crear juntos.</small></div>
    <a href="#contacto" className={buttonClass}>Hablemos de tu proyecto<ArrowCircle direction="up"/></a>
   </section>
  </main>
  <footer className="flex flex-wrap justify-center gap-[18px] bg-[#111] p-[22px] text-[9px] text-[#aaa] mobile:flex-nowrap mobile:justify-between mobile:gap-5 mobile:px-[4.4%] mobile:py-5"><span>© {year??''} Distrito Creativo</span><div className="flex gap-[25px]">{navigation.filter(([,id])=>id!=='blog').map(([label,id])=><a className="hover:text-brand" key={id} href={['nosotros','portafolio'].includes(id)?`/${id}`:`#${id}`}>{label}</a>)}<Link href="/blog" prefetch={false} className="hover:text-brand">Blog</Link><a href="#contacto" className="hover:text-brand">Contacto</a></div><span className="hidden mobile:block">Hecho para mover marcas. <Arrow className="ml-[3px] size-[17px]"/></span></footer>
  <dialog ref={dialog} aria-labelledby="dialog-title" onClose={()=>setDetail(null)} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)setDetail(null)}}} className="fixed inset-0 m-auto w-[calc(100%_-_32px)] max-w-[540px] rounded-[20px] border-0 bg-white px-[25px] py-[35px] text-ink shadow-[0_24px_100px_#0004] backdrop:bg-black/50 backdrop:backdrop-blur-[5px] mobile:p-[42px]">
   <button aria-label="Cerrar" onClick={()=>setDetail(null)} className="absolute top-2.5 right-[14px] text-[32px]">×</button>
   <Eyebrow className="pr-2.5">{detail?.label}</Eyebrow><h2 id="dialog-title" className="my-5 text-[30px] leading-[1.05] tracking-[-1.6px] mobile:text-[35px]">{detail?.title}</h2><p className="mb-[25px] leading-[1.65] text-[#555]">{detail?.copy}</p>
   {!detail?.blog&&<a href="#contacto" onClick={contactFromDetail} className={buttonClass}>Quiero esto para mi marca<ArrowCircle/></a>}
  </dialog>
 </div>;
}
