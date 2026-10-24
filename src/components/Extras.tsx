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
          {EXTRAS.map((e) => {
            const Icon = ICONS[e.icon]
            return (
              <article key={e.title} className="flex gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{e.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{e.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
