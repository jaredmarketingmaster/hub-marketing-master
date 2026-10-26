import { ArrowRight } from 'lucide-react'
import { PRICE_LABEL } from '../data/content'

type Props = { onBuy: () => void }

export function FinalCta({ onBuy }: Props) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-logo-gradient py-24 px-4 text-center">
      {/* Fondo: malla sutil + focos de luz de marca (decorativos, detrás del contenido) */}
      <span aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
      <span
        aria-hidden
        className="absolute -z-10 -top-32 left-1/2 -translate-x-1/2 w-[900px] max-w-[160%] h-[420px] bg-[radial-gradient(closest-side,rgba(143,190,255,0.35),transparent)]"
      />
      <span
        aria-hidden
        className="absolute -z-10 -bottom-40 -left-24 w-[480px] h-[480px] bg-[radial-gradient(closest-side,rgba(55,177,171,0.3),transparent)] animate-float"
      />
      <span
        aria-hidden
        className="absolute -z-10 top-10 -right-32 w-[420px] h-[420px] bg-[radial-gradient(closest-side,rgba(26,115,232,0.35),transparent)] animate-float [animation-delay:-2.2s]"
      />

      <div data-reveal className="max-w-3xl mx-auto">
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
          <span className="relative inline-flex">
            <span aria-hidden className="cta-pulse" />
            <button
              type="button"
              onClick={onBuy}
              className="shine cta-shine relative inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1A73E8] font-bold px-6 py-3.5 rounded-lg shadow-xl shadow-black/25 transition-[background-color,box-shadow] hover:shadow-2xl hover:shadow-blue-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D3748]"
            >
              Comprar ahora — {PRICE_LABEL}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </button>
          </span>
          <a
            href="#preguntas"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-medium px-6 py-3.5 rounded-lg transition-colors"
          >
            Ver preguntas frecuentes
          </a>
        </div>
        <p className="text-emerald-300 text-xs md:text-sm font-medium">
          Acceso desde el primer día. Pago procesado por Mercado Pago. Sin módulos que se cobren aparte.
        </p>
      </div>
    </section>
  )
}
