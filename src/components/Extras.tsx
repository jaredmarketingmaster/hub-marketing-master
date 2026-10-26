import type { CSSProperties } from 'react'
import { BarChart3, Mic, PenLine, Phone, Search, ShoppingCart } from 'lucide-react'
import { EXTRAS } from '../data/content'
import { SectionHeader } from './SectionHeader'

const ICONS = {
  mic: Mic,
  search: Search,
  phone: Phone,
  pen: PenLine,
  chart: BarChart3,
  cart: ShoppingCart,
} as const

export function Extras() {
  return (
    <section id="ademas" className="bg-white pb-20 px-4">
      <div className="max-w-5xl mx-auto border-t border-slate-200 pt-20">
        <SectionHeader
          eyebrow="Además"
          title="Y todo lo que también viene con tu cuenta."
          titleClassName="mb-3"
          subtitle="Herramientas que normalmente se contratan por separado y que en HUB ya están incluidas, sin costo extra."
          subtitleClassName="text-sm md:text-base mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {EXTRAS.map((e, i) => {
            const Icon = ICONS[e.icon]
            return (
              // El wrapper aparece al hacer scroll (escalonado); la tarjeta se eleva al pasar el cursor
              <div key={e.title} data-reveal style={{ '--reveal-delay': `${(i % 3) * 110 + Math.floor(i / 3) * 80}ms` } as CSSProperties}>
                <article className="card-lift group h-full p-6">
                  <span className="relative mb-5 inline-flex">
                    <span
                      aria-hidden
                      className="absolute -inset-2 rounded-2xl bg-blue-500/25 blur-lg opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="relative w-12 h-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shadow-lg shadow-blue-600/30 ring-1 ring-inset ring-white/20 transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-3">
                      <Icon className="w-5 h-5" strokeWidth={1.9} aria-hidden />
                    </span>
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{e.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{e.text}</p>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
