import type { CSSProperties } from 'react'
import { KeyRound, MousePointerClick, Rocket, ShieldCheck, type LucideIcon } from 'lucide-react'
import { PROCESS_STEPS } from '../data/content'
import { SectionHeader } from './SectionHeader'

// Un ícono por paso, en el mismo orden que PROCESS_STEPS
const STEP_ICONS: LucideIcon[] = [
  MousePointerClick, // Clic en "Comprar ahora"
  ShieldCheck, // Pago seguro con Mercado Pago
  KeyRound, // Recibes tu acceso
  Rocket, // Configuras y empiezas a vender
]

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

        <div data-reveal-trigger className="group/steps relative">
          {/* Línea de progreso 1 → 4 (desktop): va del centro del primer número al del último */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[17px] h-0.5 rounded-full bg-slate-200 left-[calc((100%-72px)/8)] right-[calc((100%-72px)/8)]"
          >
            <span className="block h-full rounded-full bg-brand-gradient origin-left scale-x-0 transition-transform duration-[1600ms] ease-out delay-300 group-[.is-visible]/steps:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none" />
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i]
              const last = i === PROCESS_STEPS.length - 1
              return (
                <li
                  key={step.title}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 140}ms` } as CSSProperties}
                  className="relative flex flex-col pl-14 lg:pl-0"
                >
                  {/* Línea vertical entre pasos (mobile y tablet) */}
                  {!last && (
                    <span aria-hidden className="lg:hidden absolute left-[17px] top-11 -bottom-6 w-0.5 rounded-full bg-gradient-to-b from-blue-200 to-emerald-200" />
                  )}
                  <span className="absolute left-0 top-0 lg:relative lg:mx-auto lg:mb-5 z-10 w-9 h-9 rounded-full bg-brand-gradient text-white flex items-center justify-center font-display font-bold text-sm shadow-md shadow-blue-600/25 ring-4 ring-white">
                    {i + 1}
                  </span>
                  <div className="card-lift group p-6 flex-1">
                    <span className="mb-4 inline-flex w-11 h-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                      <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={onBuy}
            className="shine bg-[#1A73E8] hover:bg-[#1560C4] text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-blue-600/20 transition-colors"
          >
            Empezar ahora
          </button>
          <p className="text-sm text-slate-500">El pago se procesa en el checkout seguro de Mercado Pago.</p>
        </div>
      </div>
    </section>
  )
}
