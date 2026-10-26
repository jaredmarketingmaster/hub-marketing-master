# Documentación del proyecto — Landing de Marketing Master HUB

> **Para quien continúe este trabajo (persona o IA):** este archivo es la fuente de verdad del proyecto. Explica qué es, cómo está construido, por qué se tomó cada decisión, qué se hizo en cada etapa y qué queda pendiente. Léelo completo antes de tocar código. Al terminar cada tanda de cambios, **actualiza la sección 14 (Historial) y la 15 (Pendientes)**.

Última actualización: 26/10/2026 · Último cambio documentado: publicación en `main` (ver §14, punto 13)

---

## Índice

1. [Qué es este proyecto](#1-qué-es-este-proyecto)
2. [Estado actual en una mirada](#2-estado-actual-en-una-mirada)
3. [Contexto de negocio y origen del contenido](#3-contexto-de-negocio-y-origen-del-contenido)
4. [Stack, versiones y comandos](#4-stack-versiones-y-comandos)
5. [Estructura de archivos](#5-estructura-de-archivos)
6. [Arquitectura y convenciones](#6-arquitectura-y-convenciones)
7. [La página sección por sección](#7-la-página-sección-por-sección)
8. [Sistema de diseño (identidad de marca)](#8-sistema-de-diseño-identidad-de-marca)
9. [Imágenes, logos y assets](#9-imágenes-logos-y-assets)
10. [Modal de compra y pago con Mercado Pago](#10-modal-de-compra-y-pago-con-mercado-pago)
11. [Precio: dónde vive y cómo cambiarlo](#11-precio-dónde-vive-y-cómo-cambiarlo)
12. [Accesibilidad, responsive y animaciones](#12-accesibilidad-responsive-y-animaciones)
13. [Despliegue en GitHub Pages](#13-despliegue-en-github-pages)
14. [Historial de trabajo](#14-historial-de-trabajo)
15. [Pendientes, riesgos y cosas a validar](#15-pendientes-riesgos-y-cosas-a-validar)
16. [Guía para continuar el trabajo](#16-guía-para-continuar-el-trabajo)

---

## 1. Qué es este proyecto

Landing page de alta conversión (Single Page Application) para **Marketing Master HUB**, una plataforma todo-en-uno de marketing y ventas (CRM, embudos, WhatsApp, calendario, automatizaciones, pagos, email, cursos, reputación, etc.) que se vende como **suscripción de AR$ 90.000/mes o AR$ 900.000/año** (el anual equivale a 2 meses gratis), con pago procesado por **Mercado Pago** (débito automático).

La plataforma está construida sobre la tecnología de **HighLevel** (marca blanca). Su app móvil es **LeadConnector** (la app oficial de HighLevel). Por eso la tabla comparativa cita valores de referencia de HighLevel y la landing promociona la app LeadConnector.

El cliente/autor es una agencia de marketing digital de performance (Marketing Master). Tono de comunicación: cercano, minimalista, fresco, con estándar de servicio "hotel 5 estrellas". Los textos del sitio están en **español rioplatense neutro** (mayormente tuteo: "tú tienes", con algún "mantené" heredado del brief original — ver pendientes).

Objetivo de la página: que el visitante entienda el valor, compare contra el costo de herramientas sueltas y haga clic en **"Comprar ahora"**, que abre un modal de 2 pasos (datos → plan) y redirige al link de Mercado Pago del plan elegido.

---

## 2. Estado actual en una mirada

| Ítem | Valor |
|---|---|
| Repositorio | `jaredmarketingmaster/hub-marketing-master` |
| Rama principal | **`main`**: tiene todo el proyecto y publica en GitHub Pages. `claude/awesome-cray-uqhl3x` y `claude/stoic-carson-em6ai0` fueron ramas de trabajo, ya integradas en `main`. Los cambios nuevos se hacen en una rama y se integran a `main` |
| Destino final | La página se importará a **GoHighLevel (AI Studio)**. Allí se conectan los contactos, el CRM/pipeline y demás funciones; por eso el formulario no tiene backend propio. GitHub Pages es solo la vista previa |
| URL publicada | https://jaredmarketingmaster.github.io/hub-marketing-master/ |
| Despliegue | GitHub Actions (`.github/workflows/deploy-pages.yml`) en cada push a la rama o a `main` |
| Precio vigente | **AR$ 90.000/mes** (≈ USD 59) o **AR$ 900.000/año** (≈ USD 590), a un tipo de cambio de referencia de AR$ 1.525 por dólar |
| Build | `npm run build` compila sin errores ni warnings de TypeScript |
| Pago | Mercado Pago, un link `mpago.la` por plan (ver §10) |
| Tests automatizados | No hay. La verificación se hace con build + capturas con Playwright (ver §16) |

---

## 3. Contexto de negocio y origen del contenido

### 3.1 El brief original
El usuario pidió **clonar pixel-perfect** el sitio `https://hub.marketingmaster.top/` con un brief muy detallado (colores, clases Tailwind y **texto literal** de cada sección). Reglas del brief: nada de "Lorem ipsum", nada de placeholders, todo el copy literal.

### 3.2 Problemas encontrados al inicio
- **El brief llegó truncado**: se cortó en la Sección 7 ("Precio"), en la frase "Etiqueta azul pequeña".
- **El sitio original no era accesible**: desde el entorno de desarrollo el dominio no resolvía (DNS) y el proxy bloqueaba la conexión. No se pudo copiar el resto del contenido.

### 3.3 Qué es literal y qué fue redactado
- **Literal del brief (no cambiar sin pedido explícito):** Navbar, Hero, cinta "Un solo login reemplaza a:", "Cómo funciona" (5 pestañas completas), "Lo más importante" (9 tarjetas), "Para quién es" (3 perfiles), "Cuánto reemplaza" (20 filas + totales + nota legal), y el encabezado de "Precio" (eyebrow, título y subtítulo).
- **Redactado por la IA** siguiendo el tono y el sistema de diseño del brief (el usuario lo aprobó al ver el sitio, pero conviene validar los datos comerciales — ver §15): tarjeta de precio, "Proceso de compra" (4 pasos), "Además" (6 extras), banner de la app LeadConnector, las 10 preguntas frecuentes, CTA final, footer y el modal de compra.

### 3.4 Cambios de contenido pedidos después por el usuario
- Pasarela de pago: Getnet → **Mercado Pago**, con suscripción y débito automático, en plan mensual o anual (26/10/2026).
- **Mensaje oficial de alta:** el onboarding comienza **en menos de 24 horas hábiles** después de confirmado el pago (26/10/2026). Aplicado en la página de gracias, el paso 3 del Proceso y la FAQ "¿Cuándo tengo acceso…?".
- Precio de AR$ 100.000 → **AR$ 90.000** (26/10/2026).
- Pastilla del Hero: de "Plataforma todo-en-uno para vender y fidelizar" → **"La plataforma más utilizada a nivel mundial para sistemas de marketing y ventas"**.
- Botones de compra: separador cambiado de "-" a "—" (`Comprar ahora — AR$ 90.000/mes`).

---

## 4. Stack, versiones y comandos

| Pieza | Versión instalada | Notas |
|---|---|---|
| Vite | 5.4 | Bundler y servidor de desarrollo |
| React | 18.3 | Con `StrictMode` |
| TypeScript | 5.6 | `strict`, `noUnusedLocals`, `noUnusedParameters` |
| Tailwind CSS | 3.4 | Con PostCSS + Autoprefixer. **No es Tailwind 4** |
| lucide-react | 0.460 | Todos los íconos de UI |
| Node | 22 (también en CI) | |

Sin router, sin gestor de estado, sin librería de UI. Es un sitio estático: todo se resuelve en el cliente.

```bash
npm install        # instala dependencias
npm run dev        # servidor local (http://localhost:5173)
npm run build      # tsc -b && vite build → genera /dist
npm run preview    # sirve /dist (http://localhost:4173)
npm run typecheck  # solo chequeo de tipos
```

No hay variables de entorno. Los links de pago están en `PLANS` (`src/data/content.ts`).

---

## 5. Estructura de archivos

```
hub-marketing-master/
├── DOCUMENTACION.md            ← este archivo
├── README.md                   ← instrucciones cortas de uso y deploy
├── index.html                  ← <title>, favicon, apple-touch-icon, Google Fonts (Lato + Barlow), theme-color
├── gracias.html                ← 2ª entrada del build: página de gracias post-compra (noindex, ver §10.1)
├── package.json / package-lock.json
├── vite.config.ts              ← base: './' (rutas relativas, necesario para GitHub Pages) + 2 entradas (index, gracias)
├── tailwind.config.js          ← PALETA DE MARCA (sobrescribe blue/emerald/slate), fuentes, animaciones
├── postcss.config.js
├── tsconfig.json
├── .gitignore                  ← node_modules, dist, .env, *.tsbuildinfo
├── .github/workflows/deploy-pages.yml  ← build + deploy a Pages (con espera anti-pisado, ver §13)
├── public/
│   ├── .nojekyll               ← evita que Pages procese con Jekyll
│   ├── 404.html                ← redirige /gracias y /gracias/ a gracias.html; 404 simple para lo demás
│   └── apple-touch-icon.png    ← logo HUB 180×180 (icono al guardar en iPhone)
└── src/
    ├── main.tsx                ← monta <App/> o la página de gracias (carga diferida) según la ruta
    ├── routes.ts               ← detecta la ruta de gracias y agrega noindex
    ├── hooks/
    │   └── useReveal.ts        ← apariciones al hacer scroll ([data-reveal] / [data-reveal-trigger])
    ├── pages/
    │   └── ThankYou.tsx        ← página de gracias + constantes SUPPORT_EMAIL / SUPPORT_PHONE
    ├── App.tsx                 ← orden de secciones + estado del modal de compra
    ├── index.css               ← base, utilidades de marca (degradados, glow-card, glass-card)
    ├── vite-env.d.ts           ← tipos de import.meta.env
    ├── data/
    │   ├── content.ts          ← TODO EL COPY del sitio (textos, listas, tabla, FAQ, links)
    │   └── tools.ts            ← registro de las 37 herramientas de la tabla con su logo/dominio
    ├── assets/
    │   ├── hub-logo.webp               ← logo oficial Marketing Master HUB (256×256)
    │   ├── leadconnector-logo.webp     ← ícono oficial app LeadConnector (192×192)
    │   └── tools/*.svg                 ← 14 logos oficiales de herramientas (SVG)
    └── components/             ← una sección por archivo
        ├── Navbar.tsx          ← barra fija + menú móvil
        ├── Logo.tsx            ← logo HUB + "Marketing Master HUB" (tone dark/light)
        ├── SectionHeader.tsx   ← eyebrow + H2 + subtítulo reutilizable (tone light/dark)
        ├── Hero.tsx            ← portada + mockup + cinta "Un solo login reemplaza a"
        ├── ContactsMockup.tsx  ← UI simulada del panel de contactos (datos difuminados)
        ├── HowItWorks.tsx      ← 5 pestañas accesibles con íconos
        ├── Modules.tsx         ← grilla oscura de 9 funciones con íconos
        ├── Audiences.tsx       ← 3 perfiles con íconos y efecto glow-card
        ├── Comparison.tsx      ← muro de logos + tabla comparativa de 20 filas
        ├── ToolLogo.tsx        ← logo de herramienta con monograma de respaldo
        ├── Pricing.tsx         ← tarjeta de plan único
        ├── Process.tsx         ← 4 pasos de compra
        ├── Extras.tsx          ← "Además": 6 herramientas extra
        ├── AppBanner.tsx       ← banner app LeadConnector
        ├── Faq.tsx             ← acordeón de 10 preguntas
        ├── FinalCta.tsx        ← CTA final con degradado del logo
        ├── Footer.tsx
        └── PurchaseModal.tsx   ← modal de compra en 2 pasos (datos → plan) + redirección a Mercado Pago
```

`dist/` y `node_modules/` no se versionan.

---

## 6. Arquitectura y convenciones

1. **Contenido separado de la presentación.** Todo el texto editable vive en `src/data/content.ts` (y la lista de herramientas en `src/data/tools.ts`). Los componentes solo maquetan. Para cambiar un texto, edita `content.ts`, no el componente. Excepción: algunos textos cortos de UI y varias menciones del precio están directamente en los componentes (ver §11).
2. **Una sección = un componente** en `src/components/`, montados en orden en `App.tsx`.
3. **Modal de compra centralizado.** `App.tsx` tiene el estado `buyOpen`. Cada componente con botón de compra recibe la prop `onBuy` (Navbar, Hero, Pricing, Process, FinalCta). No hay otro estado global.
4. **Navegación por anclas.** Los links del navbar apuntan a ids de sección (`#como-funciona`, `#funciones`, `#para-quien-es`, `#precio`, `#proceso`, `#preguntas`). `html { scroll-behavior: smooth; scroll-padding-top: 4rem }` compensa la altura del navbar fijo.
5. **Íconos por mapeo.** Los íconos de pestañas, tarjetas y perfiles se asignan en el componente con un mapa (`TAB_ICONS` por `id` de etapa, `MODULE_ICONS` por índice, `ICONS` por clave `icon` del perfil). Si reordenas `MODULES` en `content.ts`, reordena `MODULE_ICONS` en `Modules.tsx`.
6. **Colores vía escalas de Tailwind sobrescritas.** Las clases `blue-*`, `emerald-*` y `slate-*` ya **son** la paleta de marca (ver §8). Usa esas clases; no introduzcas colores hex nuevos salvo los de marca.
7. **Estilo de código:** TypeScript estricto, componentes funcionales, comillas simples, sin punto y coma, indentación de 2 espacios. Comentarios cortos y en español.
8. **Idioma:** todo el copy y los comentarios en español; nombres de variables/componentes en inglés.

---

## 7. La página sección por sección

Orden real en `App.tsx`. "Fondo oscuro" = clase `bg-dark-glow` o `bg-dark-glow-soft` (base `#1A202C` con resplandores azul/celeste).

| # | Componente | id | Fondo | Contenido y comportamiento |
|---|---|---|---|---|
| 1 | `Navbar` | — | `#1A202C` 90% + blur, sticky | 6 links (ocultos < `lg`, menú hamburguesa en mobile), botón "Comprar ahora" (abre modal), logo a la derecha |
| 2 | `Hero` | `top` | Oscuro | Pastilla "La plataforma más utilizada a nivel mundial…", H1 de 3 líneas (la 3ª con degradado azul→celeste), subtítulo, botón "Comprar ahora — AR$ 90.000/mes", botón "Ver cómo funciona" (ancla), microcopy celeste, mockup de navegador con `ContactsMockup` y pie "Captura real de la plataforma…" |
| 2b | (dentro de `Hero`) | — | `slate-50` | Cinta "Un solo login reemplaza a:" + 8 ítems con punto celeste |
| 3 | `HowItWorks` | `como-funciona` | Blanco | 5 pestañas (Capturar/Nutrir/Cerrar/Fidelizar/Reactivar) con íconos (imán, globos de chat, apretón de manos, corazón, refresh). Por pestaña: título, subtítulo, caja "El problema", caja "Con HUB", tarjeta "Incluye" con tildes. Accesible: `role=tablist`, flechas ←/→, Home/End |
| 4 | `Modules` | `funciones` | Oscuro | 9 tarjetas glass con ícono en contenedor con degradado (bandeja, kanban, workflow, plantilla, calendario, tarjeta, enviar, birrete, estrella) |
| 5 | `Audiences` | `para-quien-es` | `#F8FAFC` | 3 perfiles (Agencias: edificio · Freelancers y consultores: laptop · Empresas y negocios locales: local). Efecto **glow-card** (ver §8.4) en hover/toque/foco |
| 6 | `Comparison` | `cuanto-reemplaza` | Blanco | Muro de logos "+37 herramientas que dejas de pagar por separado", tabla de 4 columnas (Función · Reemplaza a · Costo aparte* · En HUB), fila total oscura "~ USD 1.936/mes", fila con degradado "Tu precio con Marketing Master HUB — AR$ 90.000/mes ≈ USD 56,25/mes", nota legal |
| 7 | `Pricing` | `precio` | `#F8FAFC` | Tarjeta con borde degradado: "Plan único", precio AR$ 90.000/mes, equivalencia USD, botón, lista "Tu cuenta incluye" (11 ítems) |
| 8 | `Process` | `proceso` | Blanco | 4 pasos con número, ícono (`STEP_ICONS`) y tarjeta `card-lift`. Desktop: línea de progreso 1→4 que se llena al entrar en pantalla. Mobile/tablet: línea vertical. Botón "Empezar ahora" con destello |
| 9 | `Extras` | `ademas` | Blanco (separador superior) | 6 tarjetas `card-lift` con ícono en contenedor degradado + halo, aparición escalonada: Agente de voz con IA, SEO y fichas locales, Seguimiento de llamadas, Firma de documentos, Tracking y analítica, Ecommerce |
| 10 | `AppBanner` | — | Oscuro + 2 halos de marca (quietos, ver §12) | Ícono LeadConnector flotando, título "Tu negocio en el bolsillo…", botones App Store / Google Play con destello, 3 beneficios con micro-interacción al pasar el cursor |
| 11 | `Faq` | `preguntas` | `#F8FAFC` | Acordeón de 10 preguntas en tarjetas separadas (la 1ª abierta). Abierta: borde azul, sombra, acento lateral degradado y `+` que gira a `×`. Apertura con `grid-template-rows` |
| 12 | `FinalCta` | — | `bg-logo-gradient` + malla (`bg-mesh`) + focos de luz flotando | Pastilla "Empieza hoy", título, botón blanco "Comprar ahora — AR$ 90.000/mes" con halo que late (`cta-pulse`) y destello periódico (`cta-shine`), botón a FAQ, microcopy |
| 13 | `Footer` | — | `#F8FAFC` | Logo, descripción, navegación, bloque "Pagos", copyright con año dinámico, aviso de marcas |
| — | `PurchaseModal` | — | — | Ver §10 |

Notas de la tabla comparativa:
- Los datos están en `COMPARISON` (`content.ts`), con tipo `ComparisonRow = { fn, tools: string[], price, exclusive? }`. Cada nombre de `tools` **debe existir** en `TOOLS` (`tools.ts`).
- La fila "App móvil" tiene `exclusive: true` y muestra la píldora "Exclusivo de HUB".
- El número "+37" se calcula solo (herramientas únicas de la tabla; Podium aparece dos veces y cuenta una).
- En mobile (< `sm`) se oculta la columna de precio y el precio se muestra bajo el nombre de la función; "En HUB" muestra solo el ✓. En < `md` las píldoras se muestran bajo la función (la columna "Reemplaza a" se oculta).

---

## 8. Sistema de diseño (identidad de marca)

Entregado por el usuario el 24/10/2026. **Respetar siempre.**

### 8.1 Colores de marca
| Rol | Hex | Uso |
|---|---|---|
| Azul principal | `#1A73E8` | Botones, links, pestañas activas, acentos, eyebrows |
| Gris principal | `#4A4A4A` | Texto de párrafo (`slate-600`) |
| Azul secundario | `#2D3748` | Títulos (`slate-900`), cabecera/total de la tabla |
| Celeste secundario | `#37B1AB` | Tildes, viñetas, microcopys de confianza (reemplazó al verde) |

"Suelen ser degradados" (dicho por el usuario): por eso se usan degradados de marca en puntos clave.

### 8.2 Cómo está implementada la paleta
En `tailwind.config.js` se **reemplazan** tres escalas de Tailwind:
- `blue` → escala de marca con `blue-600 = #1A73E8` (hover `blue-700 = #1560C4`).
- `emerald` → escala celeste con `emerald-500 = #37B1AB`.
- `slate` → neutros de marca: `slate-600 = #4A4A4A`, `slate-900 = #2D3748`, `slate-950 = #1A202C`.
- Alias extra: `brand` (`DEFAULT`, `hover`, `gray`, `navy`, `aqua`).

Consecuencia: `text-blue-600`, `bg-emerald-400`, `text-slate-900`, etc. ya son colores de marca. Hay también algunos hex literales en componentes (`#1A73E8`, `#1560C4`, `#37B1AB`, `#2D3748`, `#1A202C`, `#F8FAFC`).

### 8.3 Degradados y utilidades propias (`src/index.css`)
| Clase | Qué es | Dónde se usa |
|---|---|---|
| `bg-dark-glow` / `bg-dark-glow-soft` | `#1A202C` + resplandores radiales azul (32%) y celeste (18%) | Hero, Funciones, AppBanner |
| `bg-logo-gradient` | Degradado vertical del logo: `#1A73E8 → #2D3748 → #4A4A4A` (+ brillo celeste) | CTA final |
| `bg-brand-gradient` | `#1A73E8 → #37B1AB` en diagonal | Fila de precio de la tabla, números del proceso |
| `text-brand-gradient` | Texto con degradado azul claro → celeste | 3ª línea del H1 |
| `border-brand-gradient` | Borde de 2px con degradado | Tarjeta de precio |
| `glass-card` | Fondo blanco 3% + borde 8% + blur | AppBanner |
| `glow-card` | Tarjeta con elevación y borde de luz giratorio | Perfiles en "Para quién es" |
| `scrollbar-none` | Oculta scrollbar | Barra de pestañas |
| `card-lift` | Tarjeta blanca que se eleva 6px al pasar el cursor, sombra azul y borde degradado (máscara en `::before`) | Pasos del proceso, "Además" |
| `shine` | Destello que cruza el elemento al pasar el cursor | Botones de compra, badges de tiendas, badge del plan anual |
| `bg-mesh` | Cuadrícula blanca al 7% que se desvanece hacia los bordes | CTA final |
| `cta-pulse` / `cta-shine` | Halo que late y destello cada 4 s | Botón del CTA final |
| `animate-float` | Flotación vertical de 6px | Ícono de LeadConnector, focos del CTA final |
| `[data-reveal]` | Aparece con fundido + 18px al entrar en pantalla (`useReveal`); retardo con `--reveal-delay` | Secciones inferiores |

### 8.4 Efecto `glow-card` (perfiles)
- Estados: `:hover`, `:active`, `:focus-within`, `:focus-visible` → `translateY(-8px) scale(1.03)` + sombra profunda con tinte azul.
- Borde de luz: `::before` es un cuadrado de 260% con `conic-gradient` (azul → celeste → brillo) que rota con `@keyframes glow-spin` (3,2 s, en pausa hasta el hover); `::after` es el relleno blanco con `inset: 2px`, así solo se ve un anillo de 2px del haz. La tarjeta tiene `overflow: hidden` e `isolation: isolate`.
- Mobile: la tarjeta tiene `tabIndex={0}` y `onTouchStart={() => {}}` para que el toque active `:active`/`:focus-within` también en iOS.
- El ícono del perfil se pone azul sólido con ícono blanco en hover/foco (`group-hover`).
- Con `prefers-reduced-motion` no hay escala ni rotación.

### 8.5 Tipografías
- **Lato** (400/700/900, Google Fonts) para todo el texto (`font-sans`).
- **Bahnschrift** para títulos `h1`, `h2`, `h3` y cifras (`font-display`). Es una fuente de sistema de Windows **sin versión web libre**: en Windows se ve Bahnschrift; en Mac, iOS y Android se ve **Barlow** (Google Fonts, 500–800), la alternativa más parecida. Stack: `Bahnschrift, Barlow, Lato, sans-serif`.
- Lato no tiene pesos 500/600/800: `font-medium` cae a 400 y `font-semibold` a 700. Es esperado.

### 8.6 Otros tokens
- Radios: tarjetas claras `rounded-2xl`, tarjetas oscuras/cajas `rounded-xl`, botones `rounded-lg`, pastillas `rounded-full`.
- Bordes en fondo claro: `border-slate-200`. Sombras suaves `shadow-sm`.
- Contenedores: `max-w-5xl` (secciones), `max-w-4xl` (precio), `max-w-3xl` (FAQ), `max-w-6xl` (navbar/hero). Gutter `px-4`.

---

## 9. Imágenes, logos y assets

| Asset | Origen | Uso |
|---|---|---|
| `src/assets/hub-logo.webp` | Logo oficial que pasó el usuario (cuadrado redondeado, degradado azul → gris, "HUB / marketing master") | Navbar, footer, modal, mockup, píldora "Exclusivo de HUB" |
| `public/apple-touch-icon.png` | Mismo logo a 180×180 | Ícono al guardar en pantalla de inicio |
| `src/assets/leadconnector-logo.webp` | Ícono oficial de la app que pasó el usuario | AppBanner |
| Favicon | `https://vibe.filesafe.space/meta/1788540721177139632/favicon.png` (externo, definido por el brief) | `index.html` |
| `src/assets/tools/*.svg` | Logos oficiales en SVG tomados de los paquetes npm `simple-icons` y `@iconify-json/logos` | Tabla comparativa y muro de logos |

### 9.1 Logos de herramientas (tabla comparativa)
- **14 logos SVG incluidos en el proyecto** (cargan siempre): HubSpot, ActiveCampaign, WordPress, Squarespace, Wix, Shopify, WooCommerce, Typeform, Mailchimp, Twilio, Calendly, Zapier, Make, Semrush.
- **23 herramientas sin SVG libre** (ClickFunnels, Leadpages, Jotform, Constant Contact, Podium, Acuity Scheduling, Keap, Synthflow, Air AI, Jasper, ManyChat, AdEspresso, Revealbot, Moz Local, Kajabi, Teachable, Skool, Circle, CallRail, Birdeye, AgencyAnalytics, DocuSign, PandaDoc): se carga en tiempo real el ícono oficial del sitio de cada marca vía `https://www.google.com/s2/favicons?domain=<dominio>&sz=64`.
- Si una imagen falla, `ToolLogo` muestra un **monograma** con las iniciales (fondo azul, celeste o gris claro).
- DocuSign se dejó a propósito con favicon porque el SVG disponible era el logo viejo.
- **Cómo agregar/mejorar un logo:** guarda el SVG en `src/assets/tools/<slug>.svg`, impórtalo en `src/data/tools.ts` y agrégalo como `logo` en la entrada de `TOOLS`. Para una herramienta nueva, añade también la entrada en `TOOLS` y su nombre en la fila de `COMPARISON`.

### 9.2 Mockup del Hero
`ContactsMockup.tsx` es una **recreación** de la interfaz de contactos (sidebar, filtros, tabla con nombres/teléfonos/emails ficticios difuminados con `blur-[3px]`). La imagen original del sitio estaba caída. El pie dice "Captura real de la plataforma…" porque el brief lo exigía literal → ver pendientes.

---

## 10. Modal de compra y pago con Mercado Pago

`PurchaseModal.tsx`:
- Se abre desde cualquier botón "Comprar ahora". Cierra con Esc, clic en el fondo o la X. Bloquea el scroll del body, atrapa el foco (Tab/Shift+Tab, ignorando el paso oculto) y devuelve el foco al botón que lo abrió.
- Columna izquierda (solo desktop): logo, plan, precio **del plan elegido** (AR$ 90.000/mes ~USD 59 o AR$ 900.000/año ~USD 590), 3 beneficios, "Pago 100% seguro con Mercado Pago".
- **Flujo de 2 pasos** dentro del mismo modal: el paso 1 se desliza a la izquierda y entra el 2 (transform, 500 ms; sin movimiento con reduced-motion). Indicador "Paso X de 2".
  - **Paso 1 — datos:** Nombre y apellido*, Email*, WhatsApp*, Nombre del negocio (opcional), checkbox de aceptación*. Validación en el cliente; el foco va al primer error. Botón **"Elegir el plan de pago"**: valida y pasa al paso 2 (no redirige).
  - **Paso 2 — plan:** botón "← Volver" (conserva los datos) y dos tarjetas-radio desde `PLANS` (`content.ts`): **Pago Mensual** (ARS 90.000 / mes) y **Pago Anual** (ARS 900.000 / año, badge "¡Obtén 2 meses gratis!", "(ARS 180.000 de descuento — 2 meses gratis)", "Equivale a ARS 75.000 por mes."). Preseleccionado: mensual (`DEFAULT_PLAN`), porque coincide con el precio de los botones "Comprar ahora".
  - Botón **"Continuar al pago seguro"** → `window.location.assign(plan.checkoutUrl)`:
    - Mensual → `https://mpago.la/1pv2ifB`
    - Anual → `https://mpago.la/1CsMnyA`
  - Si el usuario vuelve desde Mercado Pago con "atrás", el evento `pageshow` reactiva el botón.
- **No hay backend**: los datos del paso 1 **no se guardan ni se envían a ningún lado** (los links `mpago.la` no reciben parámetros). Mercado Pago pide sus propios datos en el checkout. Ver pendientes.

### 10.1 Página de gracias (post-compra)
- Archivo: `src/pages/ThankYou.tsx`. Se carga en un chunk aparte (`React.lazy`), así no suma peso a la landing.
- **Ningún enlace del sitio apunta a ella** (navbar, footer y botones no la mencionan). Solo se llega por link directo o por la redirección de la pasarela de pago.
- **Rutas que la abren** (`src/routes.ts`):
  - `gracias.html`: archivo real del build. **Es la URL que se configura en la pasarela:** `https://jaredmarketingmaster.github.io/hub-marketing-master/gracias.html`.
  - `gracias` y `gracias/`: GitHub Pages las resuelve, y si no, `public/404.html` redirige a `gracias.html` conservando los parámetros.
  - `?page=gracias` y `#gracias`: usan el mismo `index.html`.
- **Noindex:** `gracias.html` trae `<meta name="robots" content="noindex, nofollow">` en el HTML. Para `?page=` y `#`, el meta lo agrega `markNoIndex()` al cargar.
- **Contenido:**
  - El H1, el H2 y los 4 pasos son literales del pedido del usuario (26/10/2026); no cambiarlos sin pedido explícito.
  - Fueron redactados por la IA: la pastilla "Compra confirmada", los rótulos "Próximos pasos" y "Soporte directo", el título "¿Tuviste algún inconveniente?", el texto introductorio de soporte, y el asunto y el mensaje del correo y del WhatsApp.
- **Soporte directo:**
  - `SUPPORT_EMAIL` y `SUPPORT_PHONE` están arriba del componente. El teléfono va en formato internacional; de él salen `wa.me/<dígitos>` y `tel:+<dígitos>`.
  - Si un dato está vacío, su botón no se muestra. En `npm run dev` aparece un aviso amarillo; en producción no.
- **Animación:**
  - Check con aparición, trazo y tres halos (`pop-in`, `draw-check`, `halo` y `rise-in` en `tailwind.config.js`).
  - Todo va con `motion-safe:`: con reduced-motion la página se ve completa y quieta.

---

## 11. Precio: dónde vive y cómo cambiarlo

El precio **no está en un solo lugar**. Si cambia, hay que tocar todo esto (búsqueda útil: `grep -rn "90\.000\|USD 59" src`):

| Archivo | Qué contiene |
|---|---|
| `src/data/content.ts` | `PRICE_LABEL = 'AR$ 90.000/mes'` (usado en Hero, FinalCta y fila de la tabla) · `PLANS` (precios y links de Mercado Pago del paso 2 del modal) · nota legal `COMPARISON_NOTE` "(AR$90.000)" · paso 2 de `PROCESS_STEPS` · FAQ "¿Cuánto cuesta y qué incluye?" |
| `src/components/Pricing.tsx` | Cifra grande "AR$ 90.000" y "Equivale a ~USD 59 por mes" |
| `src/components/PurchaseModal.tsx` | `PLAN_SUMMARY` del panel lateral (precio y USD de cada plan) |
| `src/components/Comparison.tsx` | "≈ USD 59/mes" en la fila de precio |
| `src/components/Footer.tsx` | "Suscripción con débito automático de AR$ 90.000 por mes o AR$ 900.000 por año…" |

Si cambia un link de pago, editar `checkoutUrl` en `PLANS`. Fórmula del equivalente en dólares: `precio ARS / 1.525` (USD 59 por mes, USD 590 por año) (tipo de cambio fijado en la nota legal). Si cambia el tipo de cambio, actualizar también la nota legal.

El título "reemplaza más de USD 1.900" y el total "~ USD 1.936/mes" no dependen del precio de HUB.

---

## 12. Accesibilidad, responsive y animaciones

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`, `table` con `caption` y `scope`.
- Pestañas con patrón ARIA completo; acordeón con `aria-expanded`/`aria-controls`; modal con `role="dialog"` y `aria-modal`.
- Mockup con `role="img"` y `aria-label="Panel de contactos de Marketing Master HUB"`.
- Probado en 1440px y 390px (iPhone): **sin scroll horizontal**. El navbar en mobile muestra logo + botón + hamburguesa.
- Animaciones: aparición de modal y pestañas, acordeón, glow-card, deslizamiento entre pasos del modal, apariciones al hacer scroll, línea de pasos, elevación de tarjetas, flotación y halo del CTA.
- **Rendimiento:** todo lo que se anima en bucle (`glow-spin`, `float-y`, `cta-pulse`, `cta-shine`) mueve solo `transform` y `opacity`, que el navegador resuelve en la GPU. Los halos del AppBanner son **quietos a propósito**: la tarjeta de encima usa `backdrop-filter`, y animar lo que tiene detrás obligaría a recalcular el desenfoque en cada cuadro. Por lo mismo, no hay `backdrop-blur` sobre los focos animados del CTA final.
- `prefers-reduced-motion`: desactiva el scroll suave, el movimiento de glow-card, las apariciones (todo se ve desde el inicio), la línea de pasos (aparece llena), el deslizamiento del modal, la flotación y el pulso. Se conservan los cambios de color y sombra.
- Navbar a menos de 360 px: el logo muestra solo el ícono (`<Logo compact />`) para que no haya scroll horizontal a 320 px.

---

## 13. Despliegue en GitHub Pages

### 13.1 Cómo funciona
- `vite.config.ts` usa `base: './'` → el build funciona bajo `/hub-marketing-master/` y también en un dominio propio sin cambios.
- `public/.nojekyll` evita el procesamiento Jekyll.
- Workflow `.github/workflows/deploy-pages.yml` ("Deploy a GitHub Pages"):
  - Se dispara con push a `main` o a `claude/awesome-cray-uqhl3x`, o a mano (`workflow_dispatch`).
  - Job `build`: `npm ci` → `npm run build` → sube `dist/`.
  - Job `deploy`: **espera** a que termine cualquier "pages build and deployment" del mismo commit (consulta la API con `gh`, hasta 3 minutos) y luego publica con `actions/deploy-pages@v4`.

### 13.2 El problema del "sitio en blanco" (importante)
En **Settings → Pages**, el origen está configurado como **"Deploy from a branch"** (rama `claude/awesome-cray-uqhl3x`, carpeta `/ (root)`). En ese modo GitHub publica los archivos fuente **sin compilar** en cada push → la página queda en blanco. Ese publicado y el del workflow corrían en paralelo y el que terminaba último ganaba.
- **Solución aplicada:** el paso de espera del workflow garantiza que el sitio compilado se publique después. Funciona (verificado en los últimos 3 deploys).
- **Solución definitiva (pendiente del usuario):** cambiar **Settings → Pages → Source** a **"GitHub Actions"**. Con eso el paso de espera queda inofensivo (no encuentra nada que esperar).
- Si algún día el sitio aparece en blanco: revisar en Actions qué deploy terminó último; relanzar "Deploy a GitHub Pages" con *Run workflow*.

---

## 14. Historial de trabajo

Cronológico. Cada bloque = un pedido del usuario y el commit resultante en `claude/awesome-cray-uqhl3x`.

### 24/10/2026
1. **Construcción inicial** — `b0d28c2`
   - Proyecto Vite + React + TS + Tailwind 3 + Lucide desde cero (el repo solo tenía un README).
   - Todas las secciones literales del brief + secciones redactadas (ver §3.3), mockup de contactos, modal de compra.
   - Verificado con capturas en desktop y mobile; se corrigió desborde del navbar en 390px.
2. **Vista previa** — el usuario pidió ver el sitio: se le envió un HTML autocontenido (sin publicar nada).
3. **Despliegue en GitHub Pages** — `d12f0b9`
   - `base: './'`, `.nojekyll`, workflow de Actions, sección de Pages en el README.
   - El usuario activó Pages en modo "Deploy from a branch" → sitio en blanco. Se diagnosticó la carrera entre los dos publicados y se relanzó el deploy a mano.
4. **Logos oficiales** — `9a57282`
   - El usuario pasó el logo de HUB y el de LeadConnector. Se optimizaron a WebP y se integraron (navbar, footer, modal, mockup, AppBanner, apple-touch-icon).
5. **Identidad visual de marca** — `291134d`
   - Paleta, degradados y tipografías de §8 (sobrescritura de escalas de Tailwind, clases de degradado, Lato + Bahnschrift/Barlow).
   - CTA final con el degradado del logo y botón blanco.
6. **Arreglo del sitio en blanco** — `f6c9c06`
   - Paso de espera en el workflow (ver §13.2).
7. **Íconos en "Para quién es"** — `0cd606a`
   - Letras A/B/C reemplazadas por íconos: edificio, laptop, local comercial.

### 26/10/2026
8. **Mejoras de UI/UX, iconografía y precio** — `ac03880`
   - Precio AR$ 100.000 → **AR$ 90.000** en todo el sitio; USD 62,5 → **56,25**; separador "—" en botones.
   - Nueva pastilla del Hero.
   - Íconos en las 5 pestañas y en las 9 tarjetas de funciones.
   - Efecto glow-card en los perfiles (elevación, sombra, borde de luz giratorio; hover y toque).
   - Tabla comparativa rediseñada: columna "Reemplaza a" con píldoras logo + nombre, muro de logos "+37", nueva fila de precio en pesos, layout compacto en mobile. Nuevos archivos `src/data/tools.ts`, `src/components/ToolLogo.tsx`, `src/assets/tools/`.
   - Nota: el usuario mencionó nombres aproximados ("Tu inversión con…", "Reputación y reseñas", "Pipedrive"); se respetaron los textos existentes en el código.
9. **Esta documentación** — `DOCUMENTACION.md` + enlace desde el README.
10. **Página de gracias post-compra**
    - Archivos nuevos: `gracias.html`, `src/pages/ThankYou.tsx`, `src/routes.ts` y `public/404.html`.
    - Archivos modificados: `vite.config.ts` (2 entradas), `main.tsx` (elige la vista), `Logo` (prop `href`) y animaciones nuevas en `tailwind.config.js`. Detalle en §10.1.
    - Verificado con Playwright, en un servidor que imita a GitHub Pages bajo `/hub-marketing-master/`:
      - Las 5 variantes de URL abren la página, con y sin resolución de URLs sin extensión, y con parámetros extra.
      - En todas hay `noindex`, un solo `h1` y nada de scroll horizontal de 320 a 1440 px.
      - Hay 0 enlaces a la página desde la landing.
      - "Volver al sitio principal" lleva a la landing.
      - Con reduced-motion no corre ninguna animación.
11. **Mercado Pago, modal de 2 pasos y pulido visual**
    - Getnet → Mercado Pago en todo el sitio: Hero, Precio, Proceso (paso 2), FAQ, CTA final, Footer y modal. Se eliminó `VITE_CHECKOUT_URL` (`.env.example`, workflow, tipos).
    - Modal de compra en 2 pasos con elección de plan mensual/anual y links `mpago.la` (§10).
    - Pulido de Proceso, Además, AppBanner, FAQ y CTA final (§7, §8.3, §12). Nuevo `useReveal`.
    - FAQ "¿Cuánto cuesta…?" y Footer mencionan también el plan anual.
    - Página de gracias: `SUPPORT_EMAIL = jared@marketingmaster.top`, `SUPPORT_PHONE = +54 9 381 511-3590`.
    - Navbar sin scroll horizontal a 320 px.
    - Verificado con Playwright:
      - Validación del paso 1.
      - Paso 2 con foco en el título.
      - Tab sin pasar por campos ocultos.
      - "Volver" conserva los datos.
      - Redirecciones exactas: mensual → `mpago.la/1pv2ifB`, anual → `mpago.la/1CsMnyA`, y anual→mensual → `mpago.la/1pv2ifB`.
      - Apariciones completas al recorrer la página.
      - Reduced-motion sin elementos ocultos.
      - Sin scroll horizontal de 320 a 1440 px.
      - Sin errores de JS.
    - No se pudieron abrir los links reales de Mercado Pago desde el entorno de desarrollo (el proxy bloquea `mpago.la`): se verificó la URL de destino interceptando la navegación.
12. **Onboarding en 24 horas hábiles y rama única**
    - Paso 3 del Proceso, ahora "Comienza tu onboarding", y FAQ "¿Cuándo tengo acceso…?" alineados con la página de gracias.
    - Decisiones del usuario:
      - Los datos del formulario se integran al importar la página a GoHighLevel (AI Studio).
      - Los links de Mercado Pago son suscripciones con débito automático (confirmado por el usuario).
      - El usuario configurará la URL de retorno cuando el dominio esté publicado.
    - Los commits de `claude/stoic-carson-em6ai0` se integraron a `claude/awesome-cray-uqhl3x` (avance directo, sin merge) para publicar.
13. **Publicación en `main`**
    - El usuario revisó el sitio publicado y pidió pasar todo a `main` para importarlo a GoHighLevel (AI Studio).
    - `main` avanzó directo hasta este commit: no hubo merge ni conflictos, porque `main` solo tenía el commit inicial.

14. **Equivalente en dólares USD 56,25 → USD 59** (pedido del usuario)
    - Cambió en Precio, en la fila de precio de la tabla y en el resumen del modal. El anual pasa de ~USD 562,50 a ~USD 590.
    - La nota legal pasa a un tipo de cambio de referencia de AR$ 1.525 por dólar: es el que implica USD 59 (90.000 / 59 = 1.525,42; 90.000 / 1.525 = 59,02).

---

## 15. Pendientes, riesgos y cosas a validar

### Bloqueantes para vender
- [ ] **URL de retorno en Mercado Pago** (a cargo del usuario, cuando el dominio definitivo esté publicado): `<dominio>/gracias.html`.
- [x] Links de Mercado Pago: confirmados por el usuario como suscripciones con débito automático.
- [x] Datos del formulario: se conectan al importar la página a GoHighLevel (AI Studio); no requiere backend propio.

### Página de gracias
- [x] Coherencia de mensajes: el onboarding comienza en menos de 24 horas hábiles (decisión del usuario, aplicada).
- [ ] "Acceso desde el primer día" sigue en el Hero (literal del brief), el CTA final y el resumen del modal. Lo mismo para "desde el primer día" en el subtítulo del Proceso y "Operas desde el primer día" en el paso 4. Confirmar si se mantienen junto al mensaje de onboarding en 24 horas hábiles.
- [ ] La sección Precio y los botones "Comprar ahora" solo muestran el plan mensual; el anual aparece en el modal, en la FAQ y en el Footer. Decidir si se muestra también en Precio.

### Configuración
- [ ] **Cambiar Settings → Pages → Source a "GitHub Actions"** (ver §13.2).
- [x] Integrado a `main` (26/10/2026).
- [ ] Importar el proyecto a GoHighLevel (AI Studio) y conectar el formulario con contactos y pipeline.
- [ ] Si se usará el dominio `hub.marketingmaster.top`, configurarlo en Settings → Pages → Custom domain (el build ya soporta dominio propio).

### Contenido a validar con el equipo comercial
- [ ] **Pie del mockup** dice "Captura real de la plataforma…" pero el mockup es una recreación → reemplazar por una captura real (difuminada) o cambiar el texto.
- [ ] **Pastilla del Hero** "La plataforma más utilizada a nivel mundial…": afirmación superlativa; tener a mano la fuente que la respalde.
- [ ] **FAQ "¿Hay costos adicionales?"**: menciona que SMS, llamadas y plantillas de WhatsApp pueden tener costo por uso de terceros. Confirmar política real.
- [ ] Textos redactados por la IA (§3.3): revisión general de tono y exactitud.
- [ ] Mezcla de voseo/tuteo heredada del brief ("mantené" en la pestaña Capturar). Unificar si se desea (el brief lo pedía literal).
- [ ] Total de la tabla: las 19 filas suman **USD 1.937**, el texto dice "~ USD 1.936" (literal del brief).

### Técnico
- [ ] **Verificar en el sitio publicado los 23 logos por favicon** (desde el entorno de desarrollo no se pudieron ver; si alguno queda mal, conseguir el SVG oficial y agregarlo como en §9.1).
- [ ] Revealbot cambió de marca (hoy "Birch"); su favicon puede mostrar el logo nuevo.
- [ ] Verificar los links de la app LeadConnector: App Store `https://apps.apple.com/app/id1564302502` y Google Play `https://play.google.com/store/apps/details?id=com.LeadConnector` (el de Android no se pudo confirmar).
- [ ] Bahnschrift: si hay licencia web, alojarla con `@font-face` para que se vea igual en todos los sistemas.
- [ ] El favicon depende de un host externo (`vibe.filesafe.space`); conviene servirlo desde `public/`.
- [ ] No hay linter, formateador ni tests configurados.
- [ ] Sin analítica ni píxeles (Meta, GA4, GTM) — agregar si se va a pautar.
- [ ] Sin meta tags Open Graph / Twitter (vista previa al compartir el link).

---

## 16. Guía para continuar el trabajo

### 16.1 Flujo de trabajo recomendado
1. `git pull origin main` y `npm install`. Para cambios, crear una rama desde `main`.
2. Cambios de **texto** → `src/data/content.ts`. Cambios de **diseño** → el componente de la sección o `tailwind.config.js` / `src/index.css`.
3. `npm run build` debe terminar sin errores (TypeScript es estricto: variables sin usar rompen el build).
4. Verificación visual: `npm run preview` y capturas con Playwright en 1440×900 y 390×844. Chequear `document.documentElement.scrollWidth - innerWidth === 0` (sin scroll horizontal) y que no haya errores de consola.
5. Commit en español, descriptivo; push de la rama e integración a `main`, que es lo que se publica.
6. Confirmar en GitHub Actions que "Deploy a GitHub Pages" terminó en verde **después** de "pages build and deployment".
7. Actualizar §14 y §15 de este documento.

### 16.2 Recetas rápidas
- **Cambiar el precio:** ver tabla de §11.
- **Agregar una pregunta frecuente:** agregar `{ q, a }` a `FAQS` en `content.ts`.
- **Agregar una fila a la comparativa:** agregar el objeto a `COMPARISON` y asegurar que cada herramienta esté en `TOOLS` (`tools.ts`). Revisar el total "~ USD 1.936/mes" en `Comparison.tsx` y el título de la sección.
- **Cambiar un ícono:** pestañas → `TAB_ICONS` en `HowItWorks.tsx`; funciones → `MODULE_ICONS` en `Modules.tsx` (mismo orden que `MODULES`); perfiles → `ICONS` en `Audiences.tsx`. Íconos disponibles: https://lucide.dev (versión 0.460).
- **Agregar una sección:** crear el componente en `src/components/`, montarlo en `App.tsx` en su posición, usar `SectionHeader` para el encabezado, y si lleva ancla, sumarla a `NAV_LINKS`.
- **Cambiar colores de marca:** editar las escalas en `tailwind.config.js` y los hex de los degradados en `src/index.css`.

### 16.3 Cosas que NO hay que hacer
- No cambiar textos literales del brief sin pedido explícito (§3.3).
- No reemplazar las escalas `blue/emerald/slate` por las de Tailwind por defecto: rompería toda la identidad.
- No quitar `base: './'` de `vite.config.ts` (el sitio quedaría en blanco en Pages).
- No quitar el paso de espera del workflow mientras Pages siga en "Deploy from a branch".
- No agregar logos de herramientas desde fuentes no oficiales.
