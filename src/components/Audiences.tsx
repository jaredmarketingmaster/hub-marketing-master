import { AUDIENCES } from '../data/content'
import { SectionHeader } from './SectionHeader'

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
          {AUDIENCES.map((a) => (
            <article key={a.letter} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <span className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-5">
                {a.letter}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{a.text}</p>
              <ul className="space-y-2">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-[#10B981]" aria-hidden>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
