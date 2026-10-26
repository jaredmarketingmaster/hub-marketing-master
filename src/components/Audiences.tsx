import { Building2, Laptop, Store } from 'lucide-react'
import { AUDIENCES } from '../data/content'
import { SectionHeader } from './SectionHeader'

// Agencias: estructura de equipo · Freelancers: trabajo desde la laptop · Negocios locales: local a la calle
const ICONS = { agency: Building2, freelancer: Laptop, business: Store } as const

export function Audiences() {
  return (
    <section id="para-quien-es" className="bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Para quién es"
          title="Pensado para quien necesita operar su marketing sin depender de diez proveedores."
          titleClassName="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCES.map((a) => {
            const Icon = ICONS[a.icon]
            return (
              <article
                key={a.title}
                tabIndex={0}
                onTouchStart={() => {}}
                className="glow-card group p-7 cursor-default"
              >
                <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 group-focus-within:bg-blue-600 group-focus-within:text-white group-focus-within:ring-blue-600">
                  <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{a.text}</p>
                <ul className="space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="text-[#37B1AB]" aria-hidden>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
