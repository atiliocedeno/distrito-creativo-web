import Image from 'next/image';
import type { ReactNode } from 'react';

export const buttonClass = 'group inline-flex min-h-11 items-center justify-center gap-6 rounded-full bg-brand py-2.5 pr-3 pl-6 text-xs font-extrabold whitespace-nowrap text-ink transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none';
export const headingClass = 'text-[29px] tablet:text-[35px] leading-[1.16] tracking-[-1.6px]';
export const sectionClass = 'px-[6%] py-[27px] mobile:px-[4.4%] mobile:py-8';

export function Eyebrow({children,className=''}:{children:ReactNode;className?:string}) {
 return <div className={`mb-3 flex items-center gap-2.5 text-[10px] font-extrabold tracking-[1.3px] before:h-1 before:w-[23px] before:shrink-0 before:rounded-full before:bg-brand ${className}`}>{children}</div>;
}
export function Brand({footer=false,href="#inicio"}:{footer?:boolean;href?:string}) {
 return <a href={href} aria-label="Distrito Creativo, inicio" className={`shrink-0 items-center ${footer?'hidden tablet:flex':'flex'}`}>
  <Image src={`/assets/logo-distrito-${footer?'blanco':'principal'}.svg`} alt="Distrito Creativo — Agencia de contenidos digitales" width={360} height={110} sizes="260px" priority={!footer} className={footer?'h-auto w-[235px]':'h-auto w-[185px] max-[360px]:w-[158px] mobile:w-[220px] tablet:w-[225px] wide:w-[260px]'}/>
 </a>;
}
