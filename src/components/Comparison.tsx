import { COMPARISON, COMPARISON_NOTE, PRICE_LABEL } from '../data/content'
import hubLogo from '../assets/hub-logo.webp'
import { SectionHeader } from './SectionHeader'
import { ToolLogo } from './ToolLogo'

const UNIQUE_TOOLS = [...new Set(COMPARISON.flatMap((r) => r.tools))]

function ToolPills({ tools, exclusive }: { tools: string[]; exclusive?: boolean }) {
  if (exclusive) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 pl-1 pr-2.5 py-1 text-xs font-semibold text-blue-700">
        <img src={hubLogo} alt="" aria-hidden width={20} height={20} className="w-5 h-5 rounded-full" />
        Exclusivo de HUB
      </span>
    )
  }
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tools.map((t) => (
        <li
          key={t}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white pl-1 pr-2.5 py-1 text-xs font-medium text-slate-700 shadow-[0_1px_2px_rgba(45,55,72,0.06)]"
        >
          <span className="inline-flex w-5 h-5 items-center justify-center rounded-full bg-slate-50">
            <ToolLogo name={t} size={14} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  )
}

export function Comparison() {
  return (
    <section id="cuanto-reemplaza" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Cuánto reemplaza"
          title="Una sola suscripción reemplaza más de USD 1.900 por mes en herramientas."
          titleClassName="mb-3"
          subtitle="Cada función de HUB suele contratarse como un software aparte. Esta es la referencia de lo que cuesta mantener sus equivalentes por separado, frente a lo que incluye tu cuenta."
          subtitleClassName="text-sm md:text-base mb-8"
        />

        {/* Muro de logos: deja a la vista cuántos softwares reemplaza */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div className="md:w-56 shrink-0">
            <p className="font-display text-4xl font-bold text-slate-900 leading-none">
              +{UNIQUE_TOOLS.length}
            </p>
            <p className="text-sm text-slate-600 mt-1.5">herramientas que dejas de pagar por separado</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Herramientas que reemplaza Marketing Master HUB">
            {UNIQUE_TOOLS.map((t) => (
              <li
                key={t}
                title={t}
                className="w-9 h-9 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm flex items-center justify-center transition hover:-translate-y-0.5 hover:ring-blue-300"
              >
                <ToolLogo name={t} size={20} />
                <span className="sr-only">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <caption className="sr-only">Comparativa de costos entre herramientas separadas y Marketing Master HUB</caption>
            <thead className="bg-[#2D3748] text-white">
              <tr className="text-xs font-semibold">
                <th scope="col" className="py-4 px-4 sm:px-6">Función</th>
                <th scope="col" className="py-4 px-3 hidden md:table-cell">Reemplaza a</th>
                <th scope="col" className="py-4 px-3 sm:px-6 text-right whitespace-nowrap hidden sm:table-cell">Costo aparte*</th>
                <th scope="col" className="py-4 pl-2 pr-4 sm:px-6 text-right whitespace-nowrap">En HUB</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.fn} className="border-b border-slate-100 text-sm even:bg-slate-50/40 align-middle">
                  <th scope="row" className="py-3.5 px-4 sm:px-6 font-normal">
                    <span className="block font-semibold text-slate-800">{row.fn}</span>
                    <span className="sm:hidden block text-xs text-slate-500 mt-0.5">
                      {row.exclusive ? 'Sin equivalente' : `${row.price} por separado*`}
                    </span>
                    <div className="md:hidden mt-2">
                      <ToolPills tools={row.tools} exclusive={row.exclusive} />
                    </div>
                  </th>
                  <td className="py-3.5 px-3 hidden md:table-cell">
                    <ToolPills tools={row.tools} exclusive={row.exclusive} />
                  </td>
                  <td className="py-3.5 px-3 sm:px-6 text-right text-slate-600 font-medium whitespace-nowrap hidden sm:table-cell">{row.price}</td>
                  <td className="py-3.5 pl-2 pr-4 sm:px-6 text-right text-slate-800 font-medium whitespace-nowrap">
                    <span className="text-[#37B1AB] font-bold" aria-hidden>✓</span>
                    <span className="sr-only sm:not-sr-only"> Incluido</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-[#2D3748] text-white py-4 px-4 sm:px-6 flex justify-between items-center gap-4 font-bold">
            <span>Total en herramientas separadas</span>
            <span className="whitespace-nowrap font-display">~ USD 1.936/mes</span>
          </div>
          <div className="bg-brand-gradient text-white py-4 px-4 sm:px-6 flex justify-between items-center gap-4 font-bold text-base sm:text-lg">
            <span>Tu precio con Marketing Master HUB</span>
            <span className="text-right leading-tight">
              <span className="block whitespace-nowrap font-display">{PRICE_LABEL}</span>
              <span className="block text-xs font-semibold text-white/80">≈ USD 59/mes</span>
            </span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">{COMPARISON_NOTE}</p>
      </div>
    </section>
  )
}
