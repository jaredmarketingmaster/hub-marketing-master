import type { CSSProperties } from 'react'
import { Bell, CalendarDays, MessageCircle, Smartphone } from 'lucide-react'
import { APP_LINKS } from '../data/content'
import lcLogo from '../assets/leadconnector-logo.webp'

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
      className="shine flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-lg px-4 py-2.5 transition-colors"
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
    <section aria-labelledby="app-title" className="relative isolate overflow-hidden bg-dark-glow py-20 px-4">
      {/* Resplandor ambiental de marca. Quieto a propósito: la tarjeta tiene backdrop-filter
          y animar lo que queda detrás obligaría a recalcular el desenfoque en cada cuadro. */}
      <span
        aria-hidden
        className="absolute -z-10 -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(26,115,232,0.35),transparent)]"
      />
      <span
        aria-hidden
        className="absolute -z-10 -bottom-48 -right-32 w-[620px] h-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(55,177,171,0.25),transparent)]"
      />

      <div
        data-reveal
        className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-12 gap-10 items-center shadow-2xl shadow-black/30"
      >
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="relative animate-float">
              <span aria-hidden className="absolute inset-0 rounded-2xl bg-blue-500/40 blur-xl" />
              <img
                src={lcLogo}
                alt="Logo de la app LeadConnector"
                width={56}
                height={56}
                className="relative w-14 h-14 rounded-2xl ring-1 ring-white/15 shadow-lg shadow-black/30"
              />
            </span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">LeadConnector</p>
              <p className="text-slate-400 text-xs">App oficial para iOS y Android</p>
            </div>
          </div>
          <p className="text-blue-400 font-semibold text-xs mb-2">App móvil</p>
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
          {FEATURES.map(({ icon: Icon, text }, i) => (
            <li
              key={text}
              data-reveal
              style={{ '--reveal-delay': `${200 + i * 120}ms` } as CSSProperties}
            >
              <div className="group flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 transition duration-300 hover:bg-white/[0.08] hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/30 motion-safe:hover:translate-x-1">
                <span className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-400 ring-1 ring-inset ring-blue-400/20 flex items-center justify-center shrink-0 transition duration-300 group-hover:bg-brand-gradient group-hover:text-white group-hover:ring-transparent">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm text-slate-200">{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
