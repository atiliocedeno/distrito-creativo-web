'use client';

import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import {Arrow} from './icons';
import {Eyebrow,headingClass,sectionClass} from './ui';

// User-provided logos and placeholders awaiting replacement.
type Partner = {name:string; file:string; sample?:boolean; padded?:boolean; width?:number; height?:number};
export const partners: Partner[] = [
 {name:'KORU',file:'koru.png',padded:true}, {name:'Tecni Master Security',file:'tecni-master-transparent.png',width:1942,height:809},
 {name:'Nativo',file:'nativo.svg',sample:true}, {name:'Marea',file:'marea.svg',sample:true},
 {name:'Pulso',file:'pulso.svg',sample:true}, {name:'Luma',file:'luma.svg',sample:true},
 {name:'Vértice',file:'vertice.svg',sample:true}, {name:'Motto',file:'motto.svg',sample:true},
];

export function Partners(){
 const track=useRef<HTMLDivElement>(null);
 const [edges,setEdges]=useState({start:true,end:false});
 useEffect(()=>{
  const el=track.current;if(!el)return;
  const update=()=>setEdges({start:el.scrollLeft<=2,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-2});
  update();const observer=new ResizeObserver(update);observer.observe(el);
  el.addEventListener('scroll',update,{passive:true});
  return ()=>{observer.disconnect();el.removeEventListener('scroll',update)};
 },[]);
 function move(direction:number){
  const el=track.current;if(!el)return;
  el.scrollBy({left:direction*el.clientWidth*.8,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 const control='grid size-9 place-items-center rounded-full border border-[#e4e4e4] bg-white transition hover:border-ink hover:bg-brand disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#e4e4e4] disabled:hover:bg-white';
 return <section aria-labelledby="partners-title" className={`${sectionClass} border-b border-[#f0f0f0] bg-white`}>
  <div className="flex items-end justify-between gap-5">
   <div><Eyebrow>CONEXIONES QUE NOS INSPIRAN</Eyebrow><h2 id="partners-title" className={headingClass}>Han trabajado<br className="mobile:hidden"/> <mark>con nosotros</mark></h2></div>
   <div className="flex shrink-0 gap-2"><button type="button" onClick={()=>move(-1)} disabled={edges.start} aria-label="Marcas anteriores" aria-controls="partners-track" className={control}><Arrow direction="left" variant="straight" className="size-5"/></button><button type="button" onClick={()=>move(1)} disabled={edges.end} aria-label="Marcas siguientes" aria-controls="partners-track" className={control}><Arrow direction="right" variant="straight" className="size-5"/></button></div>
  </div>
  <div ref={track} id="partners-track" role="region" aria-label="Carrusel de marcas colaboradoras y logos de muestra" aria-roledescription="carrusel" className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
   {partners.map((partner,index)=><div key={partner.file} role="group" aria-roledescription="diapositiva" aria-label={`${index+1} de ${partners.length}: ${partner.name}${partner.sample?", logo de muestra":""}`} tabIndex={0} className="group flex h-[100px] min-w-0 basis-[calc((100%_-_16px)/2)] shrink-0 snap-start items-center justify-center rounded-xl px-3 outline-offset-[-3px] transition-colors hover:bg-[#fafafa] focus-visible:bg-[#fafafa] focus-visible:outline-2 focus-visible:outline-brand mobile:basis-[calc((100%_-_32px)/3)] tablet:basis-[calc((100%_-_64px)/5)]">
    <span className={`relative block aspect-[20/7] w-full max-w-[185px] overflow-hidden opacity-55 grayscale transition-[filter,opacity,transform] duration-300 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100 group-focus-visible:grayscale-0 motion-reduce:transition-none`}>
     <Image src={`/assets/partners/${partner.file}`} alt={`${partner.name}${partner.sample?" — logo de muestra":""}`} width={partner.width??(partner.padded?500:200)} height={partner.height??(partner.padded?500:70)} sizes="185px" className={partner.padded?'absolute top-[54%] left-1/2 h-auto w-[152%] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply':'h-full w-full object-contain'}/>
    </span>
   </div>)}
  </div>
 </section>;
}
