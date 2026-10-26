import { ShieldCheck } from 'lucide-react'
import { PRICING_INCLUDES } from '../data/content'
import { SectionHeader } from './SectionHeader'

type Props = { onBuy: () => void }

export function Pricing({ onBuy }: Props) {
  return (
    <section id="precio" className="bg-[#F8FAFC] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Precio"
          title="Un plan. Todo incluido. Sin letra chica."
          titleClassName="mb-3"
          subtitle="Con una sola cuenta de Marketing Master HUB accedes a todas las funciones de la plataforma. No hay módulos, planes superiores ni funciones bloqueadas."
          subtitleClassName="text-sm md:text-base mb-10"
        />

        <div className="border-brand-gradient rounded-2xl p-8 md:p-10 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <span className="inline-block bg-blue-50 text-blue-600 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Plan único
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Marketing Master HUB</h3>
            <p className="text-sm text-slate-600 mb-6">Todas las funciones, para todo tu negocio.</p>

            <div className="flex items-end gap-1.5 mb-1">
              <span className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">AR$ 90.000</span>
              <span className="text-slate-500 font-medium mb-1.5">/mes</span>
            </div>
            <p className="text-xs text-slate-400 mb-7">Equivale a ~USD 56,25 por mes. Facturación mensual.</p>

            <button
              type="button"
              onClick={onBuy}
              className="w-full bg-[#1A73E8] hover:bg-[#1560C4] text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Comprar ahora
            </button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#37B1AB]" />
              Pago mensual seguro procesado por Getnet
            </p>
          </div>

          <div className="md:col-span-6 md:border-l md:border-slate-200 md:pl-8">
            <p className="text-xs font-semibold text-slate-500 mb-4">Tu cuenta incluye</p>
            <ul className="space-y-2.5">
              {PRICING_INCLUDES.map((item) => (
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
