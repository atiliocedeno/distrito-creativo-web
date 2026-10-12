'use client';
import {useEffect,useRef,useState,type FormEvent} from 'react';
import {serviceChoices} from '@/lib/content';
import {CartoonLetter} from './icons';
import {buttonClass} from './ui';

const fieldClass='mt-[5px] block min-h-[35px] w-full rounded-lg border border-[#e5e5e5] bg-[#fdfdfd] px-3 py-2 text-[11px] font-normal text-[#222] outline-none placeholder:text-[#909090] focus:border-[#cbaa00] focus:ring-3 focus:ring-brand/15';
const labelClass='text-[11px] font-bold';
const Required=()=> <span className="text-[#e54839]"> *</span>;

export function ContactForm({selected,onSelect}:{selected:string[];onSelect:(value:string[])=>void}) {
 const [status,setStatus]=useState('');
 const [download,setDownload]=useState('');
 const urlRef=useRef('');
 useEffect(()=>()=>{if(urlRef.current)URL.revokeObjectURL(urlRef.current)},[]);
 function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const form=event.currentTarget;
  if(!selected.length){setStatus('Selecciona al menos un servicio para preparar tu proyecto.');form.querySelector<HTMLInputElement>('[name="servicios"]')?.focus();return}
  const data=new FormData(form);
  const brief=`SOLICITUD DE PROYECTO — DISTRITO CREATIVO\n\nNombre: ${data.get('nombre')}\nEmpresa: ${data.get('empresa')}\nCorreo: ${data.get('correo')}\nTeléfono: ${data.get('telefono')||'No indicado'}\nServicios: ${selected.join(', ')}\n\nIDEA DEL PROYECTO\n${data.get('mensaje')}\n`;
  if(urlRef.current)URL.revokeObjectURL(urlRef.current);
  const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
  urlRef.current=url;setDownload(url);setStatus('Tu solicitud está lista. No se ha enviado.');
  const link=document.createElement('a');link.href=url;link.download='mi-proyecto-distrito-creativo.txt';link.click();
 }
 return <form onSubmit={submit} className="rounded-[17px] border border-[#ededed] p-[15px] shadow-[0_5px_30px_#00000002] mobile:p-5">
  <div className="grid gap-x-[18px] gap-y-3 mobile:grid-cols-2">
   <label className={labelClass}>Nombre<Required/><input className={fieldClass} name="nombre" placeholder="Tu nombre" autoComplete="given-name" required maxLength={100}/></label>
   <label className={labelClass}>Empresa / Marca<Required/><input className={fieldClass} name="empresa" placeholder="Nombre de tu empresa" autoComplete="organization" required maxLength={120}/></label>
   <label className={labelClass}>Correo electrónico<Required/><input className={fieldClass} name="correo" type="email" placeholder="tu@correo.com" autoComplete="email" required/></label>
   <label className={labelClass}>Teléfono<input className={fieldClass} name="telefono" type="tel" placeholder="+56 9 1234 5678" autoComplete="tel"/></label>
  </div>
  <fieldset className="my-[13px]"><legend className={labelClass}>¿Qué servicio necesitas?<Required/></legend>
   <div className="mt-[7px] grid grid-cols-2 gap-2 mobile:grid-cols-4">{serviceChoices.map(choice=><label key={choice.value} className="flex cursor-pointer items-center gap-[7px] rounded-lg border border-[#e6e6e6] px-2 py-2.5 text-[11px] leading-tight font-medium has-checked:border-[#e4bf00] has-checked:bg-[#fff7ca] mobile:text-[10px]">
    <input className="size-4 shrink-0 accent-[#e6bb00]" type="checkbox" name="servicios" value={choice.value} checked={selected.includes(choice.value)} onChange={e=>onSelect(e.target.checked?[...selected,choice.value]:selected.filter(x=>x!==choice.value))}/>{choice.label}
   </label>)}</div>
  </fieldset>
  <div className="grid gap-x-[18px] gap-y-3 mobile:grid-cols-2">
   <label className={`${labelClass} mobile:col-span-2`}>Mensaje / Cuéntanos tu idea<Required/><textarea className={`${fieldClass} min-h-24 resize-y`} name="mensaje" placeholder="Cuéntanos más detalles de tu proyecto…" required maxLength={3000}/></label>
  </div>
  <button className={`${buttonClass} mt-3 min-h-[37px] w-full p-[5px]`} type="submit">Preparar mi proyecto<CartoonLetter/></button>
  <p className="mt-[9px] text-center text-[9px] leading-normal text-[#777]">Descarga tu solicitud lista para compartir. Esta demostración no envía datos.</p>
  <div role="status" className={status?'mt-3 rounded-lg bg-[#fff4bd] p-3 text-xs leading-relaxed':''}>{status}{download&&<> <a href={download} download="mi-proyecto-distrito-creativo.txt" className="font-bold underline">Descargar solicitud</a></>}</div>
 </form>;
}
