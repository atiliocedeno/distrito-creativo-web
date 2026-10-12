'use client';
import {HeroVideo} from './hero-video';
import {useEffect,useRef,useState} from 'react';
import {ArrowCircle,Icon,type IconName} from './icons';
import {Eyebrow} from './ui';

export function Hero(){
 const wordRef=useRef<HTMLSpanElement>(null);
 const [width,setWidth]=useState<number>();
 useEffect(()=>{
  const word=wordRef.current;if(!word)return;
  const sync=()=>setWidth(word.getBoundingClientRect().width);
  sync();const observer=new ResizeObserver(sync);observer.observe(word);
  return ()=>observer.disconnect();
 },[]);
 const values:{icon:IconName;strong:string;label:string}[]=[{icon:'social',strong:'Más que',label:'publicaciones'},{icon:'chart',strong:'Estrategia',label:'con intención'},{icon:'heart',strong:'Historias',label:'que conectan'}];
 return <section id="inicio" className="relative grid mobile:min-h-[460px] tablet:grid-cols-[35%_65%] wide:min-h-[475px]">
  <div className="z-2 min-w-0 px-[6%] pt-[30px] pb-[25px] mobile:pt-6 mobile:pb-8 tablet:pr-3 tablet:pl-[9.2%] wide:pt-[22px]">
   <Eyebrow className="mb-[18px] text-[8px] tracking-[1.4px] mobile:mb-5 wide:text-[9px]">IDEAS QUE SE CONVIERTEN EN MOVIMIENTO</Eyebrow>
   <h1 className="text-[65px] leading-[.96] tracking-[-4px] max-[360px]:text-[58px] mobile:text-[52px] mobile:tracking-[-3px] tablet:text-[clamp(40px,4.5vw,64px)] tablet:tracking-[-2.5px]"><span ref={wordRef} className="inline-block">Contenido</span><br/>que <mark className="relative isolate z-0 rounded-none bg-transparent px-[.16em] before:pointer-events-none before:absolute before:inset-x-0 before:top-1/2 before:-z-1 before:h-[.82em] before:-translate-y-[44%] before:rounded-full before:bg-brand">mueve</mark><br/>marcas<span className="text-brand">.</span></h1>
   <p id="nosotros" className="mt-[18px] max-w-[360px] text-sm leading-[1.35] mobile:mt-5 mobile:max-w-[400px] mobile:pr-[15px] tablet:pr-0 tablet:text-base">Somos una agencia de contenidos digitales que convierte ideas en historias que conectan, comunidades que crecen y marcas que destacan.</p>
   <div className="mt-[22px] flex items-center mobile:mt-6"><a href="#contacto" style={{width}} className="group relative grid h-[46px] max-w-full place-items-center rounded-full bg-brand px-12 text-center text-[11px] leading-none font-black whitespace-nowrap text-ink transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none mobile:h-12 mobile:text-xs"><span>Hablemos de tu proyecto</span><ArrowCircle className="absolute top-1/2 right-2.5 -translate-y-1/2"/></a></div>
   <div className="mt-[23px] flex flex-wrap gap-6 mobile:mt-7 mobile:gap-3 tablet:gap-[15px] wide:gap-[27px]">{values.map((v,i)=><span key={v.icon} className={`items-center gap-2.5 text-[9px] leading-[1.2] wide:text-[10px] ${i===2?'flex mobile:hidden tablet:flex':'flex'}`}><Icon name={v.icon} className="size-[26px] mobile:size-[22px] tablet:size-[26px]"/><span><b>{v.strong}</b><br/>{v.label}</span></span>)}</div>
  </div>
  <div className="relative min-h-[315px] bg-brand mobile:min-h-[460px] wide:min-h-[475px]">
   <HeroVideo/>
   <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#0008,transparent_30%)] mobile:bg-[linear-gradient(90deg,#fff,transparent_17%),linear-gradient(0deg,#0008,transparent_25%)]"/>
   <div className="absolute right-5 bottom-[45px] z-1 flex items-center gap-3 rounded-[15px] border border-white/60 bg-white/75 p-3 backdrop-blur-xl mobile:right-3 mobile:bottom-[35px] tablet:right-5 tablet:bottom-[70px] tablet:px-[22px] tablet:py-[17px]"><Icon name="chart" className="size-9 text-[#d79d00]"/><span><b className="block text-sm tablet:text-lg">Ideas en acción</b><small className="block text-[9px] tablet:text-[11px]">Tu marca, en movimiento</small></span></div>
   <span className="absolute bottom-[22px] left-[30px] z-1 text-[8px] tracking-[2px] text-white">DISTRITO CREATIVO® &nbsp; / &nbsp; ESTUDIO DIGITAL</span>
  </div>
 </section>;
}
