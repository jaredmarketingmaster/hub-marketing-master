import { useRef, useState, type KeyboardEvent } from 'react'
import { STAGES } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const stage = STAGES[active]

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = STAGES.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="como-funciona" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Cada etapa del recorrido de tu cliente, gestionada en un mismo lugar."
          subtitle="Desde el primer contacto hasta la recompra, HUB te da las herramientas para capturar, nutrir, cerrar, fidelizar y reactivar, sin conectar decenas de softwares entre sí."
        />

        <div
          role="tablist"
          aria-label="Etapas del recorrido del cliente"
          onKeyDown={onKeyDown}
          className="border-b border-slate-200 mb-8 flex gap-8 overflow-x-auto scrollbar-none"
        >
          {STAGES.map((s, i) => {
            const selected = i === active
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`pb-3 -mb-px text-sm whitespace-nowrap transition-colors focus:outline-none focus-visible:text-blue-700 ${
                  selected
                    ? 'text-[#1A73E8] font-semibold border-b-2 border-blue-600'
                    : 'text-slate-500 hover:text-slate-800 font-medium border-b-2 border-transparent'
                }`}
              >
                {s.tab}
              </button>
            )
          })}
        </div>

        <div
          key={stage.id}
          role="tabpanel"
          id={`panel-${stage.id}`}
          aria-labelledby={`tab-${stage.id}`}
          className="grid md:grid-cols-12 gap-8 items-start animate-tab-in"
        >
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{stage.title}</h3>
            <p className="text-slate-600 text-sm mb-6">{stage.subtitle}</p>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 mb-4">
              <p className="text-xs font-bold text-slate-700 mb-1.5">El problema</p>
              <p className="text-sm text-slate-600 leading-relaxed">{stage.problem}</p>
            </div>

            <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-5">
              <p className="text-xs font-bold text-blue-600 mb-1.5">Con HUB</p>
              <p className="text-sm text-slate-700 leading-relaxed">{stage.withHub}</p>
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-50/70 border border-slate-200 rounded-xl p-6">
            <p className="text-xs font-semibold text-slate-500 mb-4">Incluye</p>
            <ul className="space-y-2.5">
              {stage.includes.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                  <span className="text-[#37B1AB] font-bold shrink-0" aria-hidden>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
