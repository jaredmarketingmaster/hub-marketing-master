# Marketing Master HUB — Landing

Landing de alta conversión de **Marketing Master HUB**, construida con React + Vite + TypeScript + Tailwind CSS + Lucide React.

> 📘 La documentación completa del proyecto (contexto, arquitectura, sistema de diseño, historial y pendientes) está en [`DOCUMENTACION.md`](./DOCUMENTACION.md).

## Desarrollo

```bash
npm install
npm run dev       # servidor local
npm run build     # build de producción en /dist
npm run preview   # sirve el build
```

## Pagos

El modal de compra tiene 2 pasos: datos del comprador y elección del plan. Luego redirige al link de Mercado Pago del plan elegido. Los links y precios están en `PLANS` (`src/data/content.ts`). No hay variables de entorno.

## Estructura

- `src/data/content.ts`: todo el copy del sitio (textos, tabla, FAQ, links). Se edita acá, no en los componentes.
- `src/components/`: una sección por archivo, en el orden de la página:
  Navbar → Hero (+ cinta "Un solo login reemplaza a") → Cómo funciona (5 pestañas) → Funciones (9 módulos) → Para quién es → Cuánto reemplaza (tabla) → Precio → Proceso → Además → Banner app LeadConnector → Preguntas → CTA final → Footer, más el modal de compra.
- `gracias.html` / `src/pages/ThankYou.tsx`: página de gracias post-compra (noindex, sin enlaces desde la landing).

## Deploy

Es un sitio estático: sube el contenido de `dist/` a cualquier hosting (Vercel, Netlify, Hostinger, Cloudflare Pages).

### GitHub Pages

El repo incluye `.github/workflows/deploy-pages.yml`, que compila y publica el sitio en cada push a `main` o a `claude/awesome-cray-uqhl3x`.

1. Settings → Pages → **Source: GitHub Actions**.
2. Settings → Environments → `github-pages` → en "Deployment branches and tags", agregar `claude/awesome-cray-uqhl3x` (por defecto solo `main` puede publicar).
3. Pestaña Actions → "Deploy a GitHub Pages" → Run workflow (o hacer un push).
