import { NAV_LINKS, REGION_COPY } from '../data/content'
import { useRegion } from '../hooks/useRegion'
import { Logo } from './Logo'

export function Footer() {
  const { region } = useRegion()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 px-4 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 md:grid-cols-12 mb-10">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="text-sm text-slate-600 leading-relaxed mt-4 max-w-sm">
              Plataforma todo-en-uno para vender y fidelizar. CRM, embudos, WhatsApp, automatizaciones, pagos y email
              en un solo sistema.
            </p>
          </div>
          <nav aria-label="Pie de página" className="md:col-span-4">
            <p className="text-xs font-semibold text-slate-900 mb-3">Navegación</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-slate-900 mb-3">Pagos</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {REGION_COPY[region].footerPayments}
            </p>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-slate-400">
          <p>© {year} Marketing Master. Todos los derechos reservados.</p>
          <p>HighLevel, LeadConnector y las demás marcas citadas pertenecen a sus respectivos propietarios.</p>
        </div>
      </div>
    </footer>
  )
}
