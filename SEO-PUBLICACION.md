# SEO, GEO y publicación

## Implementado

- Metadatos específicos, URL canónica por página y Open Graph/Twitter.
- Imagen de vista previa generada en `/opengraph-image` (1200 × 630).
- HTML prerenderizado para la portada, cinco servicios, el blog y tres guías.
- Datos JSON-LD de Organization, WebSite, Service, Blog y BlogPosting basados en contenido visible. Sin reseñas, cifras, direcciones ni premios inventados.
- Enlaces navegables entre servicios y artículos; preguntas frecuentes visibles y accesibles sin JavaScript.
- `/robots.txt` y `/sitemap.xml` basados en la configuración de publicación.
- Imágenes responsive, fuentes con `next/font`, dimensiones de imágenes y carga diferida de logos secundarios.
- Blog con `loading.tsx`: skeleton real de navegación de Next.js, sin retrasos artificiales. Puede aparecer brevemente o no aparecer si la página carga inmediatamente.

## Antes del despliegue público

Copiar `.env.example` a `.env.local` para desarrollo, o definir las variables en el proveedor de hosting:

- `SITE_URL`: origen HTTPS del dominio definitivo, sin rutas.
- `SITE_INDEXABLE=true`: solo en producción. Dejar `false` en previews.
- `GOOGLE_SITE_VERIFICATION` y `BING_SITE_VERIFICATION`: opcionales, valores reales proporcionados por las cuentas del propietario.

Después, volver a compilar con `npm run build -- --webpack` y desplegar. Los metadatos, robots y sitemap son estáticos: un cambio de variables necesita una nueva compilación. Sin dominio confirmado, la versión entregada emite `noindex`, bloquea rastreo y deja el sitemap vacío. Next.js puede usar localhost para la imagen social en la vista previa; el dominio público configurado lo reemplaza al compilar.

Confirmar ciudad, país y cobertura antes de añadir SEO geográfico. El número de teléfono no prueba la ubicación física. No se añadieron perfiles sociales ni dirección sin confirmar. Sustituir los logos de muestra antes de presentar el carrusel como una cartera definitiva de clientes.

Revisar y aprobar editorialmente las tres guías iniciales antes de publicar. El formulario todavía descarga una solicitud: no envía mensajes al equipo. El contacto directo es WhatsApp.

## Validación

`npm run build -- --webpack` compila las páginas y ejecuta TypeScript. `npm run verify:seo` (Node 22.13 o posterior) comprueba el HTML estático y la configuración SEO después de compilar.

En producción, comprobar HTTPS, respuestas 200, canonical, robots y sitemap desde el dominio real. Verificar la propiedad en Google Search Console y Bing Webmaster Tools y enviar `/sitemap.xml`. Revisar Core Web Vitals con datos reales, inspección de URLs y validador de datos estructurados. Estas tareas requieren el dominio publicado y acceso a las cuentas; no se han ejecutado desde el entorno local.

GEO se trabaja con contenido claro, rastreable, coherente y útil para responder preguntas. No hay garantía de posiciones ni de citas en asistentes de IA. No se añadió `llms.txt` como supuesto requisito de posicionamiento.

Referencias: https://developers.google.com/search/docs/appearance/ai-features y https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
