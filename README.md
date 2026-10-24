# Marketing Master HUB — Landing

Landing de alta conversión de **Marketing Master HUB**, construida con React + Vite + TypeScript + Tailwind CSS + Lucide React.

## Desarrollo

```bash
npm install
npm run dev       # servidor local
npm run build     # build de producción en /dist
npm run preview   # sirve el build
```

## Configuración

Copia `.env.example` a `.env` y define la URL del checkout de Getnet:

```
VITE_CHECKOUT_URL=https://...
```

El modal de compra valida los datos y redirige a esa URL agregando `name`, `email`, `phone` y `business` como parámetros. Si la variable no está definida, el modal muestra un aviso y no redirige.

## Estructura

- `src/data/content.ts`: todo el copy del sitio (textos, tabla, FAQ, links). Se edita acá, no en los componentes.
- `src/components/`: una sección por archivo, en el orden de la página:
  Navbar → Hero (+ cinta "Un solo login reemplaza a") → Cómo funciona (5 pestañas) → Funciones (9 módulos) → Para quién es → Cuánto reemplaza (tabla) → Precio → Proceso → Además → Banner app LeadConnector → Preguntas → CTA final → Footer, más el modal de compra.

## Deploy

Es un sitio estático: sube el contenido de `dist/` a cualquier hosting (Vercel, Netlify, Hostinger, Cloudflare Pages). Recuerda definir `VITE_CHECKOUT_URL` en el entorno de build.

### GitHub Pages

El repo incluye `.github/workflows/deploy-pages.yml`, que compila y publica el sitio en cada push a `main` o a `claude/awesome-cray-uqhl3x`.

1. Settings → Pages → **Source: GitHub Actions**.
2. Settings → Environments → `github-pages` → en "Deployment branches and tags", agregar `claude/awesome-cray-uqhl3x` (por defecto solo `main` puede publicar).
3. (Opcional) Settings → Secrets and variables → Actions → **Variables** → `VITE_CHECKOUT_URL` con el link de Getnet.
4. Pestaña Actions → "Deploy a GitHub Pages" → Run workflow (o hacer un push).
