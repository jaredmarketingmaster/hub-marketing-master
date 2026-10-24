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
