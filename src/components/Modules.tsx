import { MODULES } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Modules() {
  return (
    <section id="funciones" className="bg-dark-glow-soft py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tone="dark"
          eyebrow="Lo más importante"
          title="Todo lo que necesitas para operar tu marketing, sin sumar un software por cada función."
          titleClassName="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MODULES.map((m) => (
            <article
              key={m.title}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-[8px] rounded-xl p-6 hover:border-blue-500/40 hover:bg-white/[0.05] transition"
            >
              <h3 className="text-base font-bold text-white mb-1">{m.title}</h3>
              <p className="text-xs font-medium text-blue-400 mb-3">{m.tag}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
