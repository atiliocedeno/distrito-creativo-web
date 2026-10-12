import type { MetadataRoute } from 'next';
import {canIndex,absolute} from '@/lib/seo';
export default function robots():MetadataRoute.Robots {return {rules:{userAgent:'*',...(canIndex?{allow:'/'}:{disallow:'/'})},...(canIndex?{sitemap:absolute('/sitemap.xml')}:{})};}
