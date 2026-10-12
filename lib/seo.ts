import type { Metadata } from 'next';

const configuredUrl = process.env.SITE_URL?.trim();
function readOrigin(value?: string) {
  if (!value) return undefined;
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('SITE_URL debe ser un origen público, por ejemplo https://tu-dominio.cl');
  if (['localhost', '127.0.0.1', '::1', '[::1]'].includes(url.hostname)) throw new Error('SITE_URL debe ser el dominio público, no localhost.');
  return url.origin;
}
export const siteUrl = readOrigin(configuredUrl);
export const canIndex = Boolean(siteUrl) && process.env.SITE_INDEXABLE === 'true';
export const brandName = 'Distrito Creativo';
export const siteDescription = 'Agencia de contenidos digitales: gestión de redes sociales, producción audiovisual, creación de contenido, Meta Ads y análisis para conectar tu marca con su audiencia.';
export function absolute(path: string) { return siteUrl ? new URL(path, siteUrl).toString() : undefined; }
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description,
    alternates: siteUrl ? { canonical: absolute(path) } : undefined,
    openGraph: { title, description, type: 'website', locale: 'es', siteName: brandName, ...(siteUrl ? { url: absolute(path), images: [{url: absolute('/opengraph-image')!,width:1200,height:630,alt:'Distrito Creativo — Contenido que mueve marcas'}] } : {}) },
    twitter: { card:'summary_large_image',title,description,...(siteUrl?{images:[absolute('/opengraph-image')!]}:{}) },
  };
}
export function organization() {
  return { '@type':'Organization', '@id':absolute('/#organizacion')??'#organizacion', name:brandName, description:siteDescription, url:siteUrl, logo:absolute('/assets/logo-distrito-principal.svg'), telephone:'+56961034681', contactPoint:{'@type':'ContactPoint',telephone:'+56961034681',contactType:'consultas comerciales',availableLanguage:'Spanish'} };
}
