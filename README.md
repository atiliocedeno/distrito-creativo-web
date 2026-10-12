# Distrito Creativo — Next.js + Tailwind CSS

Migración del sitio a **Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4**. Se mantienen el contenido, el diseño responsive, los logos aportados, el favicon y las flechas curvas.

## Ejecutar

Requiere Node.js 20.9 o superior y npm. Se recomienda una versión LTS compatible.

```bash
npm ci
npm run dev
```

Abrir http://localhost:3000.

## Producción

```bash
npm run typecheck
npm run build -- --webpack
npm start
```

Este paquete contiene el proyecto fuente. No se ejecuta abriendo un HTML directamente. Puede desplegarse en un alojamiento compatible con Next.js, como Vercel, o en un servidor Node.js con los comandos de producción. Las tipografías se descargan mediante `next/font` durante la compilación; el build necesita acceso a Google Fonts. Se sirven localmente después de compilar.

## Estructura

- `app/layout.tsx`: metadatos, fuentes, favicon y estilos globales.
- `app/page.tsx`: ruta de inicio.
- `app/globals.css`: importación de Tailwind, tema y estilos base mínimos. El diseño está en clases Tailwind dentro de los componentes.
- `components/agency-site.tsx`: navegación, servicios, portafolio, pie y diálogos.
- `components/hero.tsx`: portada y botón con el ancho de “Contenido”.
- `components/contact-form.tsx`: formulario y descarga de solicitud.
- `components/icons.tsx`: iconos y flechas SVG reutilizables.
- `components/ui.tsx`: marca, botones y elementos compartidos.
- `lib/content.ts`: textos, servicios y conceptos del portafolio.
- `public/assets/`: imágenes, logos y favicon.

## Funciones conservadas

- Navegación: Inicio, Nosotros, Servicios, Blog, Portafolio; menú móvil y sección activa.
- WhatsApp: https://wa.me/56961034681.
- Flechas curvas unificadas y resaltado amarillo ajustado.
- Servicios desplazables en móvil con enlaces a sus páginas independientes.
- Formulario con validación nativa, selección de servicios y descarga TXT; **no envía correos ni almacena datos**.
- Blog independiente con tres guías y skeleton de carga de Next.js.
- Portafolio con conceptos identificados como muestras.

## Validación

- Compilación de producción y comprobación TypeScript satisfactorias.
- Comprobación del HTML generado, metadatos y enlaces con `npm run verify:seo` (Node 22.13 o superior).
- El enlace de WhatsApp se conserva; no se envió ningún mensaje durante la prueba.

## Referencias

- [Next.js App Router](https://nextjs.org/docs/app)
- [Integración oficial de Tailwind con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

La portada usa el video aportado por el usuario, convertido a MP4 y reproducido al 75% de velocidad. La fotografía anterior permanece como recurso. El símbolo del logo y el favicon usan el SVG aportado por el usuario, que contiene un PNG incrustado; se conserva el nombre recreado al lado del símbolo.

## Partners de muestra
`components/partners.tsx` contiene la lista editable de KORU, Tecni Master Security y seis marcas de muestra. Sus logos están en `public/assets/partners/`. El carrusel permite desplazamiento táctil y controles anterior/siguiente; los logos pasan de gris a color al hacer hover o al recibir foco con el teclado. Reemplazar estos archivos y nombres por logos autorizados cuando estén disponibles.

Tecni Master usa `public/assets/partners/tecni-master-transparent.png`, fondo retirado con ImageGen integrado. Prompt: eliminar solo el fondo negro, mantener letras TECNI rojas, MASTER y SECURITY negras con contorno blanco y antena plateada; PNG con transparencia real y encuadre horizontal.

## Portafolio interactivo
`components/portfolio.tsx` es un componente React + Tailwind con cuatro tarjetas responsive, hover oscuro, flecha diagonal animada y estados equivalentes de foco. Acepta `id`, `href` y `onSelect`. Sin `onSelect`, sus tarjetas enlazan a `#contacto`; la integración del sitio abre los detalles y permite seleccionar el servicio. No requiere Framer Motion.


## SEO y blog

Ver `SEO-PUBLICACION.md` para configurar el dominio, activar indexación y verificar las páginas. `/blog` contiene tres guías iniciales y un skeleton nativo de Next.js; los servicios tienen URLs propias.

## Nosotros y portafolio

`/nosotros` presenta la agencia y su enfoque. `/portafolio` desarrolla los cuatro conceptos de muestra, compartidos con la portada desde `lib/portfolio.ts`. Ambas páginas están enlazadas en la navegación y tienen metadatos y entradas en el sitemap de producción.
