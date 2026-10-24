import { COMPARISON, COMPARISON_NOTE } from '../data/content'
import { SectionHeader } from './SectionHeader'

export function Comparison() {
  return (
    <section id="cuanto-reemplaza" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Cuánto reemplaza"
          title="Una sola suscripción reemplaza más de USD 1.900 por mes en herramientas."
          titleClassName="mb-3"
          subtitle="Cada función de HUB suele contratarse como un software aparte. Esta es la referencia de lo que cuesta mantener sus equivalentes por separado, frente a lo que incluye tu cuenta."
          subtitleClassName="text-sm md:text-base mb-10"
        />

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <caption className="sr-only">Comparativa de costos entre herramientas separadas y Marketing Master HUB</caption>
            <thead className="bg-[#0F172A] text-white">
              <tr className="text-xs font-semibold">
                <th scope="col" className="py-4 px-4 sm:px-6">Función</th>
                <th scope="col" className="py-4 px-3 sm:px-6 text-right">Herramientas equivalentes*</th>
                <th scope="col" className="py-4 px-4 sm:px-6 text-right">En HUB</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.fn} className="border-b border-slate-100 text-sm even:bg-slate-50/40">
                  <th scope="row" className="py-3.5 px-4 sm:px-6 font-normal">
                    <span className="block font-semibold text-slate-800">{row.fn}</span>
                    <span className="block text-xs text-slate-400">{row.ex}</span>
                  </th>
                  <td className="py-3.5 px-3 sm:px-6 text-right text-slate-600 font-medium whitespace-nowrap">{row.price}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-right text-slate-800 font-medium whitespace-nowrap">
                    <span className="text-[#10B981] font-bold" aria-hidden>✓ </span>Incluido
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-[#0F172A] text-white py-4 px-4 sm:px-6 flex justify-between items-center gap-4 font-bold">
            <span>Total en herramientas separadas</span>
            <span className="whitespace-nowrap">~ USD 1.936/mes</span>
          </div>
          <div className="bg-[#10B981] text-white py-4 px-4 sm:px-6 flex justify-between items-center gap-4 font-bold text-base sm:text-lg">
            <span>Tu precio con Marketing Master HUB</span>
            <span className="whitespace-nowrap">USD 62,5/mes</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">{COMPARISON_NOTE}</p>
      </div>
    </section>
  )
}
