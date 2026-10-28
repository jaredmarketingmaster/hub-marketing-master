import { useState, type CSSProperties } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '../data/content'
import { useRegion } from '../hooks/useRegion'
import { SectionHeader } from './SectionHeader'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const { region } = useRegion()

  return (
    <section id="preguntas" className="bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntarnos antes de empezar."
          titleClassName="mb-12"
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                data-reveal
                style={{ '--reveal-delay': `${Math.min(i, 5) * 60}ms` } as CSSProperties}
              >
                <div
                  className={`relative overflow-hidden rounded-xl border bg-white transition-[border-color,box-shadow] duration-300 ${
                    isOpen
                      ? 'border-blue-300 shadow-lg shadow-blue-600/10'
                      : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/5'
                  }`}
                >
                  {/* Acento lateral de la pregunta abierta */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-gradient origin-top transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  />
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`group w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 text-sm md:text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 rounded-xl ${
                        isOpen ? 'text-blue-700' : 'text-slate-900 hover:text-blue-700'
                      }`}
                    >
                      {f.q}
                      <span
                        aria-hidden
                        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-[background-color,color,transform] duration-300 motion-reduce:transition-none ${
                          isOpen
                            ? 'bg-blue-600 text-white rotate-45'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <Plus className="w-4 h-4" strokeWidth={2.25} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-5 md:px-6 pb-5 text-sm text-slate-600 leading-relaxed transition-opacity duration-300 ${
                          isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {(region === 'world' && f.aWorld) || f.a}
                      </p>
                    </div>
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
