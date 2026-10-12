import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {stripTypeScriptTypes} from 'node:module';

// Check configuration independently of the developer's environment.
const source=fs.readFileSync('lib/seo.ts','utf8');
const code=stripTypeScriptTypes(source).replace(/export /g,'')+'\nObject.assign(exports,{canIndex,pageMetadata,absolute});';
function config(env){const exports={};vm.runInNewContext(code,{exports,process:{env},URL});return exports;}
assert.equal(config({}).canIndex,false);
assert.equal(config({SITE_INDEXABLE:'true'}).canIndex,false);
assert.equal(config({SITE_URL:'https://example.invalid',SITE_INDEXABLE:'false'}).canIndex,false);
const live=config({SITE_URL:'https://example.invalid',SITE_INDEXABLE:'true'});
assert.equal(live.canIndex,true);
assert.equal(live.pageMetadata('Title','Description','/blog').alternates.canonical,'https://example.invalid/blog');
assert.equal(live.absolute('/sitemap.xml'),'https://example.invalid/sitemap.xml');
for(const url of ['http://localhost:3000','https://example.invalid/path','ftp://example.invalid','https://user:pass@example.invalid'])assert.throws(()=>config({SITE_URL:url}));

const root='.next/server/app';
const pages=['index.html','nosotros.html','portafolio.html','blog.html',...fs.readdirSync(`${root}/servicios`).filter(f=>f.endsWith('.html')).map(f=>`servicios/${f}`),...fs.readdirSync(`${root}/blog`).filter(f=>f.endsWith('.html')).map(f=>`blog/${f}`)];
assert.equal(pages.length,12);
const titles=new Set();
const runtime=config(process.env);
for(const page of pages){
 const html=fs.readFileSync(path.join(root,page),'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${page}: un solo h1`);
 assert.match(html,/<html[^>]*lang="es"/);
 assert.match(html,/<meta name="description" content="[^"]+"/);
 const title=html.match(/<title>(.*?)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title),`${page}: título duplicado`);titles.add(title);
 const graphs=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert.ok(graphs.length>0,`${page}: JSON-LD`);
 if(!runtime.canIndex)assert.match(html,/<meta name="robots" content="noindex, nofollow"/);
 for(const [,href] of html.matchAll(/href="(\/(?:blog|servicios|nosotros|portafolio)[^"?#]*)"/g)){
  assert.ok(fs.existsSync(path.join(root,`${href.slice(1)}.html`)),`${page}: enlace roto ${href}`);
 }
}
const home=fs.readFileSync(`${root}/index.html`,'utf8');
assert.ok(home.includes('¿Qué hace Distrito Creativo?'),'FAQ presente en HTML sin JS');
assert.ok(home.includes('href="/blog"'),'Blog con enlace real');
assert.ok(!home.includes('href="#blog"'),'Sin ancla blog inexistente');
for(const route of ['nosotros','portafolio'])assert.ok(home.includes(`href="/${route}"`),`Menú enlaza ${route}`);
const sitemap=fs.readFileSync(`${root}/sitemap.xml.body`,'utf8');
const robots=fs.readFileSync(`${root}/robots.txt.body`,'utf8');
if(!runtime.canIndex){assert.ok(!sitemap.includes('<loc>'));assert.match(robots,/Disallow: \//);}
else {assert.equal((sitemap.match(/<loc>/g)||[]).length,12);assert.ok(robots.includes(runtime.absolute('/sitemap.xml')));}
const og=fs.readFileSync(`${root}/opengraph-image.body`);
assert.equal(og.subarray(1,4).toString(),'PNG');
assert.equal(og.readUInt32BE(16),1200);assert.equal(og.readUInt32BE(20),630);
console.log('OK: 12 páginas, títulos únicos, HTML/JSON-LD, enlaces, FAQ, indexación, sitemap e imagen social.');
