import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="preguntas" className="bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntarnos antes de empezar."
          titleClassName="mb-12"
        />
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y divide-slate-200">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-sm md:text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    {f.q}
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
