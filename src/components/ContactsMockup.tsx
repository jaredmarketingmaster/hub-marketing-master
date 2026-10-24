import hubLogo from '../assets/hub-logo.webp'
import { Bell, Calendar, Filter, LayoutDashboard, MessageSquare, Plus, Search, Settings, Users, Workflow, Zap } from 'lucide-react'

// Vista simulada del panel de contactos. Los datos personales se muestran difuminados,
// igual que en la captura original del sitio.
const ROWS = [
  { name: 'Valentina Ríos', phone: '+54 9 11 4521-8890', email: 'valentina.rios@gmail.com', tags: ['lead caliente', 'whatsapp'], source: 'Formulario web', last: 'Hace 4 min', color: 'bg-rose-100 text-rose-700' },
  { name: 'Martín Ferreyra', phone: '+54 9 351 662-1043', email: 'mferreyra@estudiofmr.com', tags: ['cliente'], source: 'Instagram', last: 'Hace 18 min', color: 'bg-amber-100 text-amber-700' },
  { name: 'Lucía Benítez', phone: '+54 9 11 3087-2215', email: 'lucia.benitez@outlook.com', tags: ['webinar', 'nutrición'], source: 'Embudo webinar', last: 'Hace 1 h', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Diego Paredes', phone: '+54 9 341 590-7712', email: 'diego@paredesautos.com.ar', tags: ['presupuesto'], source: 'Llamada perdida', last: 'Hace 2 h', color: 'bg-sky-100 text-sky-700' },
  { name: 'Camila Sosa', phone: '+54 9 261 448-3301', email: 'camisosa.design@gmail.com', tags: ['cliente', 'reseña'], source: 'Facebook Ads', last: 'Hace 3 h', color: 'bg-violet-100 text-violet-700' },
  { name: 'Federico Ledesma', phone: '+54 9 11 6120-4478', email: 'fledesma@ledesmaconsult.com', tags: ['reactivar'], source: 'Google Ads', last: 'Ayer', color: 'bg-orange-100 text-orange-700' },
  { name: 'Sofía Acosta', phone: '+54 9 223 517-9064', email: 'sofia.acosta@hotmail.com', tags: ['lead', 'curso'], source: 'Chat web', last: 'Ayer', color: 'bg-teal-100 text-teal-700' },
  { name: 'Joaquín Medina', phone: '+54 9 11 2754-6618', email: 'jmedina@medinahnos.com', tags: ['cliente'], source: 'Referido', last: 'Hace 2 días', color: 'bg-indigo-100 text-indigo-700' },
]

const NAV = [
  { icon: LayoutDashboard, label: 'Panel' },
  { icon: MessageSquare, label: 'Conversaciones' },
  { icon: Calendar, label: 'Calendarios' },
  { icon: Users, label: 'Contactos', active: true },
  { icon: Workflow, label: 'Oportunidades' },
  { icon: Zap, label: 'Automatizaciones' },
  { icon: Settings, label: 'Ajustes' },
]

export function ContactsMockup() {
  return (
    <div
      role="img"
      aria-label="Panel de contactos de Marketing Master HUB"
      className="h-[420px] flex bg-white text-left select-none overflow-hidden"
    >
      {/* Sidebar */}
      <aside className="hidden sm:flex w-44 shrink-0 flex-col bg-[#2D3748] py-4 px-3 gap-1">
        <div className="flex items-center gap-2 px-2 mb-4">
          <img src={hubLogo} alt="" width={24} height={24} className="w-6 h-6 rounded-md" />
          <span className="text-[11px] font-semibold text-white truncate">Mi negocio</span>
        </div>
        {NAV.map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium ${
              active ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </div>
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200">
          <div>
            <p className="text-sm font-bold text-slate-900">Contactos</p>
            <p className="text-[10px] text-slate-400">2.847 contactos · 126 nuevos esta semana</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-400 w-40">
              <Search className="w-3 h-3" /> Buscar contactos
            </div>
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-600">
              <Filter className="w-3 h-3" /> Filtros
            </span>
            <span className="flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-semibold text-white">
              <Plus className="w-3 h-3" /> Agregar
            </span>
            <Bell className="hidden md:block w-4 h-4 text-slate-400" />
          </div>
        </div>

        <div className="flex gap-2 px-4 py-2 border-b border-slate-100 text-[10px] overflow-hidden">
          {['Todos', 'Leads', 'Clientes', 'Para reactivar', 'Smart list: WhatsApp'].map((t, i) => (
            <span
              key={t}
              className={`whitespace-nowrap rounded-full px-2.5 py-0.5 font-medium ${
                i === 0 ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'text-slate-500 border border-slate-200'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex-1 overflow-hidden">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="text-slate-400 bg-slate-50 border-b border-slate-200">
                <th className="text-left font-semibold px-4 py-2">Nombre</th>
                <th className="text-left font-semibold px-2 py-2 hidden md:table-cell">Teléfono</th>
                <th className="text-left font-semibold px-2 py-2 hidden lg:table-cell">Email</th>
                <th className="text-left font-semibold px-2 py-2">Etiquetas</th>
                <th className="text-left font-semibold px-2 py-2 hidden sm:table-cell">Origen</th>
                <th className="text-left font-semibold px-2 py-2 pr-4 hidden sm:table-cell">Actividad</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.email} className="border-b border-slate-100">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-[9px] font-bold ${r.color}`}>
                        {r.name.split(' ').map((p) => p[0]).join('')}
                      </span>
                      <span className="font-semibold text-slate-800 blur-[3px] whitespace-nowrap">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-2.5 hidden md:table-cell text-slate-600 blur-[3px] whitespace-nowrap">{r.phone}</td>
                  <td className="px-2 py-2.5 hidden lg:table-cell text-slate-600 blur-[3px] whitespace-nowrap">{r.email}</td>
                  <td className="px-2 py-2.5">
                    <div className="flex gap-1">
                      {r.tags.map((t) => (
                        <span key={t} className="whitespace-nowrap rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-2 py-2.5 hidden sm:table-cell text-slate-500 whitespace-nowrap">{r.source}</td>
                  <td className="px-2 py-2.5 pr-4 text-slate-400 whitespace-nowrap hidden sm:table-cell">{r.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
