import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import { Logo } from './Logo'

type Props = { onBuy: () => void }

export function Navbar({ onBuy }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1D]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between lg:justify-center gap-3 lg:gap-6">
        <nav aria-label="Principal" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="order-2 lg:order-none flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onBuy}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1D]"
          >
            Comprar ahora
          </button>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-slate-300 hover:text-white"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className="order-1 lg:order-none">
          <Logo />
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal móvil" className="lg:hidden border-t border-white/10 bg-[#0A0F1D] animate-fade-in">
          <ul className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
