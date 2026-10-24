import { PROCESS_STEPS } from '../data/content'
import { SectionHeader } from './SectionHeader'

type Props = { onBuy: () => void }

export function Process({ onBuy }: Props) {
  return (
    <section id="proceso" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Proceso de compra"
          title="De la compra a operar tu cuenta, en cuatro pasos."
          titleClassName="mb-3"
          subtitle="Un proceso simple y seguro para que empieces a trabajar con HUB desde el primer día."
          subtitleClassName="text-sm md:text-base mb-12"
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.title} className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <span className="w-9 h-9 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm mb-5 shadow-md shadow-blue-600/25">
                {i + 1}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={onBuy}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Empezar ahora
          </button>
          <p className="text-sm text-slate-500">El pago se procesa en el checkout seguro de Getnet.</p>
        </div>
      </div>
    </section>
  )
}
