'use client';

import {useEffect,useRef,useState} from 'react';

export function HeroVideo(){
 const video=useRef<HTMLVideoElement>(null);
 const [playing,setPlaying]=useState(false);
 useEffect(()=>{
  const element=video.current;
  if(!element)return;
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{
   if(preference.matches)element.pause();
   else void element.play().catch(()=>setPlaying(false));
  };
  element.defaultPlaybackRate=0.75;
  element.playbackRate=0.75;
  element.muted=true;
  sync();
  preference.addEventListener('change',sync);
  return ()=>{preference.removeEventListener('change',sync);element.pause();};
 },[]);
 function toggle(){
  const element=video.current;
  if(!element)return;
  if(element.paused)void element.play().catch(()=>setPlaying(false));
  else element.pause();
 }
 return <>
  <video ref={video} muted loop playsInline preload="metadata" poster="/assets/banner-video-dc-poster.jpg" aria-label="Video de presentación de Distrito Creativo" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} className="absolute inset-0 h-full w-full object-cover object-center">
   <source src="/assets/banner-video-dc.mp4" type="video/mp4"/>
  </video>
  <button type="button" onClick={toggle} aria-label={playing?'Pausar video de presentación':'Reproducir video de presentación'} className="absolute right-3 bottom-3 z-2 inline-flex min-h-9 items-center gap-2 rounded-full bg-black/75 px-3 text-xs font-bold text-white hover:bg-black">
   <span aria-hidden="true">{playing?'Ⅱ':'▶'}</span>{playing?'Pausar':'Reproducir'}
  </button>
 </>;
}
