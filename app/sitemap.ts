import type { MetadataRoute } from 'next';
import {canIndex,absolute} from '@/lib/seo';
import {servicePages} from '@/lib/service-pages';
import {articles} from '@/lib/articles';
export default function sitemap():MetadataRoute.Sitemap {
 if(!canIndex)return [];
 return ['/', '/nosotros', '/portafolio', '/blog', ...servicePages.map(s=>`/servicios/${s.slug}`), ...articles.map(a=>`/blog/${a.slug}`)].map(path=>({url:absolute(path)!}));
}
