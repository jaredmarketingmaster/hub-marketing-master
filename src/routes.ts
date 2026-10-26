// Enrutamiento mínimo sin router. La página de gracias solo se abre por link
// directo o redirección de la pasarela de pago; ningún enlace del sitio apunta a ella.
// Entradas válidas:
//   /gracias.html  (archivo real generado por el build)
//   /gracias       (GitHub Pages lo resuelve a gracias.html; si no, 404.html redirige)
//   /?page=gracias
//   /#gracias
export function isThankYouRoute(loc: Location = window.location): boolean {
  if (document.documentElement.dataset.page === 'gracias') return true
  if (/\/gracias(\.html)?\/?$/i.test(loc.pathname)) return true
  if (new URLSearchParams(loc.search).get('page') === 'gracias') return true
  return loc.hash.toLowerCase() === '#gracias'
}

// Evita que buscadores indexen la vista (gracias.html ya lo trae en el HTML;
// esto cubre ?page=gracias y #gracias, que comparten index.html).
export function markNoIndex() {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'robots'
    document.head.appendChild(meta)
  }
  meta.content = 'noindex, nofollow'
  document.title = '¡Gracias por tu compra! — Marketing Master HUB'
  document.querySelector('meta[name="description"]')?.remove()
}
