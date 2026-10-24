import { PRICE_LABEL, REPLACES } from '../data/content'
import { ContactsMockup } from './ContactsMockup'

type Props = { onBuy: () => void }

export function Hero({ onBuy }: Props) {
  return (
    <>
      <section id="top" className="bg-dark-glow pt-16 md:pt-24 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium px-3.5 py-1.5 rounded-full inline-block mb-6">
            Plataforma todo-en-uno para vender y fidelizar
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6">
            Captura cada lead.
            <br />
            Cierra más ventas.
            <br />
            Todo en un solo sistema.
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            CRM, embudos, WhatsApp, calendario, automatizaciones, pagos, email y más: todas las herramientas que
            necesitas para convertir contactos en clientes, en una sola plataforma y con un solo pago mensual.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={onBuy}
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/25 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1D]"
            >
              Comprar ahora - {PRICE_LABEL}
            </button>
            <a
              href="#como-funciona"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium px-6 py-3.5 rounded-lg transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="text-emerald-400 text-xs md:text-sm font-medium mb-12">
            Acceso desde el primer día. Pago mensual procesado por Getnet. Sin módulos que se cobren aparte.
          </p>

          <figure className="max-w-4xl mx-auto bg-white rounded-t-xl shadow-2xl shadow-black/40 border border-slate-200 overflow-hidden">
            <div className="bg-[#F1F5F9] px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="ml-2 text-xs text-slate-500 font-medium truncate">Marketing Master HUB - Panel de contactos</span>
            </div>
            <ContactsMockup />
            <figcaption className="text-[11px] text-slate-400 py-1.5 px-3 bg-white text-right border-t border-slate-100">
              Captura real de la plataforma. Datos de contacto de clientes difuminados por privacidad.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="bg-slate-50 border-b border-slate-200 py-6 px-4">
        <ul className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-600">
          <li className="text-slate-500 font-medium">Un solo login reemplaza a:</li>
          {REPLACES.map((r) => (
            <li key={r} className="flex items-center gap-1.5">
              <span className="text-[#10B981]" aria-hidden>•</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
