import { useEffect } from 'react'

// Apariciones al hacer scroll. Marca con la clase `is-visible`:
//   [data-reveal]          → entra con fundido y desplazamiento (ver index.css)
//   [data-reveal-trigger]  → no se oculta; solo activa animaciones internas
// Con prefers-reduced-motion el CSS no oculta nada, así que todo se ve igual.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-trigger]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
