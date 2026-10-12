import { AgencySite } from '@/components/agency-site';
import {Faq} from '@/components/faq';
import {JsonLd} from '@/components/seo/json-ld';
import {organization,absolute,siteDescription} from '@/lib/seo';
import {servicePages} from '@/lib/service-pages';
export default function Home() { return <><JsonLd data={{'@context':'https://schema.org','@graph':[organization(),{'@type':'WebSite','@id':absolute('/#website')??'#website',name:'Distrito Creativo',url:absolute('/'),inLanguage:'es',description:siteDescription,publisher:{'@id':absolute('/#organizacion')??'#organizacion'}},...servicePages.map(s=>({'@type':'Service',name:s.name,description:s.short,url:absolute(`/servicios/${s.slug}`),provider:{'@id':absolute('/#organizacion')??'#organizacion'}}))]}}/><AgencySite faq={<Faq/>}/></>; }
