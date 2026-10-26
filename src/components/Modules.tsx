import {
  CalendarCheck,
  CreditCard,
  GraduationCap,
  Inbox,
  KanbanSquare,
  LayoutTemplate,
  Send,
  Star,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { MODULES } from '../data/content'

// Un ícono por tarjeta, en el mismo orden que MODULES
const MODULE_ICONS: LucideIcon[] = [
  Inbox, // Bandeja de conversaciones unificada
  KanbanSquare, // CRM y pipeline visual
  Workflow, // Automatizaciones
  LayoutTemplate, // Sitios, embudos y formularios
  CalendarCheck, // Calendario y citas
  CreditCard, // Pagos, presupuestos y facturas
  Send, // Email y campañas masivas
  GraduationCap, // Cursos, membresías y comunidades
  Star, // Reputación y afiliados
]
import { SectionHeader } from './SectionHeader'

export function Modules() {
  return (
    <section id="funciones" className="bg-dark-glow-soft py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tone="dark"
          eyebrow="Lo más importante"
          title="Todo lo que necesitas para operar tu marketing, sin sumar un software por cada función."
          titleClassName="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MODULES.map((m, i) => {
            const Icon = MODULE_ICONS[i]
            return (
            <article
              key={m.title}
              className="group bg-white/[0.03] border border-white/10 backdrop-blur-[8px] rounded-xl p-6 hover:border-blue-500/40 hover:bg-white/[0.05] transition"
            >
              <span className="mb-5 inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-emerald-500/15 ring-1 ring-inset ring-blue-400/30 text-blue-300 transition group-hover:ring-blue-400/60 group-hover:text-white">
                <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="text-base font-bold text-white mb-1">{m.title}</h3>
              <p className="text-xs font-medium text-blue-400 mb-3">{m.tag}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{m.text}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
