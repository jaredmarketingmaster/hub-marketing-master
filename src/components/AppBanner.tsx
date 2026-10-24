import { Bell, CalendarDays, MessageCircle, Smartphone } from 'lucide-react'
import { APP_LINKS } from '../data/content'

const FEATURES = [
  { icon: MessageCircle, text: 'Responde WhatsApp, Instagram, SMS y email' },
  { icon: CalendarDays, text: 'Revisa y confirma tu agenda del día' },
  { icon: Bell, text: 'Recibe notificaciones de cada nuevo lead' },
]

function StoreButton({ href, top, label }: { href: string; top: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg px-4 py-2.5 transition-colors"
    >
      <Smartphone className="w-5 h-5 text-white" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-slate-400">{top}</span>
        <span className="block text-sm font-semibold text-white">{label}</span>
      </span>
    </a>
  )
}

export function AppBanner() {
  return (
    <section aria-labelledby="app-title" className="bg-dark-glow py-20 px-4">
      <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p className="text-blue-400 font-semibold text-xs mb-2">App móvil LeadConnector</p>
          <h2 id="app-title" className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Tu negocio en el bolsillo, estés donde estés.
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-7">
            Con la app LeadConnector gestionas tu cuenta de Marketing Master HUB desde el celular: conversaciones,
            oportunidades, citas y contactos sincronizados en tiempo real con la plataforma.
          </p>
          <div className="flex flex-wrap gap-3">
            <StoreButton href={APP_LINKS.ios} top="Descárgala en" label="App Store" />
            <StoreButton href={APP_LINKS.android} top="Disponible en" label="Google Play" />
          </div>
        </div>

        <ul className="md:col-span-5 space-y-3">
          {FEATURES.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5">
              <span className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <span className="text-sm text-slate-200">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
