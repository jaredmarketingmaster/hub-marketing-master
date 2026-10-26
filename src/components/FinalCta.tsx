import { PRICE_LABEL } from '../data/content'

type Props = { onBuy: () => void }

export function FinalCta({ onBuy }: Props) {
  return (
    <section aria-labelledby="cta-title" className="bg-logo-gradient py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="bg-white/10 border border-white/25 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-6">
          Empieza hoy
        </span>
        <h2 id="cta-title" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
          Deja de pagar diez herramientas. Opera todo tu marketing desde HUB.
        </h2>
        <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          CRM, embudos, WhatsApp, automatizaciones, pagos y más, en una sola plataforma con un solo pago mensual.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={onBuy}
            className="bg-white hover:bg-blue-50 text-[#1A73E8] font-bold px-6 py-3.5 rounded-lg shadow-lg shadow-black/20 transition-colors"
          >
            Comprar ahora — {PRICE_LABEL}
          </button>
          <a
            href="#preguntas"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium px-6 py-3.5 rounded-lg transition-colors"
          >
            Ver preguntas frecuentes
          </a>
        </div>
        <p className="text-emerald-300 text-xs md:text-sm font-medium">
          Acceso desde el primer día. Pago mensual procesado por Getnet. Sin módulos que se cobren aparte.
        </p>
      </div>
    </section>
  )
}
