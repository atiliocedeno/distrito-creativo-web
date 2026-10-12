import type { ReactNode } from 'react';
const paths: Record<string, ReactNode> = {
  'camera': <><rect x="3" y="7" width="19" height="19" rx="4"/><path d="m22 12 7-4v18l-7-4Z"/></>,
  'social': <><rect x="4" y="4" width="24" height="24" rx="7"/><circle cx="16" cy="16" r="6"/><path d="M23 8v2"/></>,
  'film': <><path d="m4 12 23-6-2-5L2 7l2 5v17h24V12H4ZM10 5l4 5m5-7 4 5M4 19h24M11 19v10"/></>,
  'megaphone': <><path d="m5 12 19-7v22L5 20Zm19-7 3-2v26l-3-2M5 12H2v8h3m3 1 3 9h5l-3-7"/></>,
  'chart': <><path d="M5 27V18h4v9zm9 0V10h4v17zm9 0V3h4v24z" fill="currentColor" stroke="none"/></>,
  'heart': <><path d="M16 28 4 16C-5 3 11-2 16 8 21-2 37 3 28 16Z"/></>,
  'whatsapp': <><path fill="currentColor" stroke="none" d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.47 0 .11 5.35.11 11.94c0 2.1.55 4.16 1.59 5.97L0 24l6.25-1.64a11.94 11.94 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.49 24 11.91c0-3.19-1.24-6.18-3.48-8.43ZM12.06 21.83c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.89-9.98 9.89Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></>,
};
export type IconName = 'camera' | 'social' | 'film' | 'megaphone' | 'chart' | 'heart' | 'whatsapp';
export function Icon({name,className='size-8'}:{name:IconName;className?:string}) {
 return <svg viewBox={name==='whatsapp'?'0 0 24 24':'0 0 32 32'} className={`shrink-0 fill-none stroke-current ${className}`} strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
export function Arrow({direction='down',variant='curved',className='size-6'}:{direction?:'down'|'up'|'left'|'right';variant?:'curved'|'straight';className?:string}) {
 const rotation={down:variant==='straight'?'rotate-0':'-rotate-[7deg]',up:'rotate-180',left:'rotate-90',right:'-rotate-90'};
 return <svg viewBox="0 0 32 32" className={`inline-block shrink-0 fill-none stroke-current align-middle ${rotation[direction]} ${className}`} strokeWidth={2.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={variant==='straight'?'M16 6V26M9 19l7 7 7-7':'M9 7c6-2 12 1 12 9 0 4-1 7-3 9M12 19l6 6 7-5'}/></svg>;
}
export function ArrowCircle({className='',direction='down'}:{className?:string;direction?:'down'|'up'}) {
 return <span className={`inline-grid size-[30px] shrink-0 place-items-center rounded-full bg-ink text-white ${className}`}><Arrow direction={direction} className={`size-[26px] transition-transform motion-reduce:transition-none ${direction==='up'?'group-hover:-translate-y-px':'group-hover:translate-y-px group-hover:rotate-1'}`}/></span>;
}

export function CartoonLetter() {
 return <svg viewBox="0 0 40 40" className="size-9 shrink-0 origin-center overflow-visible motion-safe:group-hover:animate-letter-wiggle motion-safe:group-focus-visible:animate-letter-wiggle" aria-hidden="true" focusable="false">
  <path d="M6 13Q5 10 9 10L32 11Q35 11 34 15L33 31Q33 33 29 32L8 31Q5 31 6 27Z" fill="#fffdf5" stroke="#101010" strokeWidth="2.2" strokeLinejoin="round"/>
  <path d="m7 12 12 9q1 1 3 0l11-8M7 29l8-7m10 0 7 9" fill="none" stroke="#101010" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16" cy="24.5" r="1.2" fill="#101010"/><circle cx="24" cy="24.5" r="1.2" fill="#101010"/>
  <path d="M18 27q2 2.5 4 0" fill="none" stroke="#101010" strokeWidth="1.6" strokeLinecap="round"/>
  <path d="m32 4 1 3m4 0-2 2M5 5l2 2" fill="none" stroke="#101010" strokeWidth="1.7" strokeLinecap="round"/>
 </svg>;
}
