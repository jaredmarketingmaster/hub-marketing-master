import type { ComponentType } from 'react'
import { ArrowLeft, Mail, MessageCircle, MessagesSquare, Phone, PhoneCall, UserCog, Wrench } from 'lucide-react'
import { Logo } from '../components/Logo'

// ── Datos de soporte directo (Jared Farfán · Marketing Master Top) ──────────────
// Editar acá. Si un dato queda vacío, su botón no se muestra.
// SUPPORT_PHONE en formato internacional, con código de país (ej. '+54 9 11 1234-5678').
export const SUPPORT_EMAIL = ''
export const SUPPORT_PHONE = ''
// Asunto y mensaje con los que se abren el correo y el chat de WhatsApp
const SUPPORT_EMAIL_SUBJECT = 'Consulta sobre mi compra de Marketing Master HUB'
const SUPPORT_WHATSAPP_TEXT = 'Hola Jared, acabo de adquirir Marketing Master HUB y tengo una consulta.'

type Step = { icon: ComponentType<{ className?: string }>; text: string; optional?: boolean }

const STEPS: Step[] = [
  {
    icon: PhoneCall,
    text: 'Serás contactado por el equipo de Marketing Master HUB para introducirte al sistema.',
  },
  {
    icon: UserCog,
    text: 'Con el mismo correo electrónico con el que realizaste tu registro y pago se creará tu usuario de administrador para el sistema.',
  },
  {
    icon: MessagesSquare,
    text: 'Tendrás una breve charla con el equipo de Marketing Master HUB para ayudarte a entender cómo utilizar el sistema para tus necesidades.',
  },
  {
    icon: Wrench,
    text: 'El equipo de soporte interno de Marketing Master HUB puede ayudarte paso a paso —o más bien hacer toda la configuración por ti—; sin embargo, este servicio adicional funciona únicamente en inglés.',
    optional: true,
  },
]

type Channel = { icon: ComponentType<{ className?: string }>; label: string; value: string; href: string; external?: boolean }

function supportChannels(): Channel[] {
  const channels: Channel[] = []
  const email = SUPPORT_EMAIL.trim()
  const digits = SUPPORT_PHONE.replace(/\D/g, '')
  if (email) {
    channels.push({
      icon: Mail,
      label: 'Correo electrónico',
      value: email,
      href: `mailto:${email}?subject=${encodeURIComponent(SUPPORT_EMAIL_SUBJECT)}`,
    })
  }
  if (digits) {
    channels.push({
      icon: MessageCircle,
      label: 'WhatsApp',
      value: SUPPORT_PHONE.trim(),
      href: `https://wa.me/${digits}?text=${encodeURIComponent(SUPPORT_WHATSAPP_TEXT)}`,
      external: true,
    })
    channels.push({ icon: Phone, label: 'Llamar por teléfono', value: SUPPORT_PHONE.trim(), href: `tel:+${digits}` })
  }
  return channels
}

// Check animado: aparece con un leve rebote, se dibuja el tilde y emite tres halos
function SuccessBadge() {
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-7">
      <span aria-hidden className="absolute inset-0 rounded-full bg-emerald-400/40 motion-safe:animate-halo opacity-0" />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-blue-500/30 motion-safe:animate-halo opacity-0"
        style={{ animationDelay: '1.2s' }}
      />
      <div
        role="img"
        aria-label="Compra confirmada"
        className="relative w-full h-full rounded-full bg-brand-gradient flex items-center justify-center shadow-xl shadow-blue-600/40 ring-4 ring-white/10 motion-safe:animate-pop-in"
      >
        <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" fill="none" aria-hidden>
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            pathLength={1}
            stroke="white"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={1}
            className="motion-safe:animate-draw-check"
          />
        </svg>
      </div>
    </div>
  )
}

export default function ThankYou() {
  const year = new Date().getFullYear()
  const channels = supportChannels()

  return (
    <>
      <header className="bg-[#1A202C]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
          <Logo href="./" />
        </div>
      </header>

      <main>
        {/* A) Hero de confirmación */}
        <section className="bg-dark-glow pt-14 md:pt-20 pb-36 md:pb-40 px-4 text-center overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <SuccessBadge />
            <span className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full inline-block mb-6 motion-safe:animate-rise-in">
              Compra confirmada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] motion-safe:animate-rise-in"
              style={{ animationDelay: '120ms' }}
            >
              <span className="text-brand-gradient">¡Felicitaciones!</span> Has adquirido Marketing Master HUB y tu
              onboarding comenzará en menos de 24 horas hábiles.
            </h1>
          </div>
        </section>

        {/* B) Próximos pasos */}
        <section aria-labelledby="pasos-title" className="flow-root bg-[#F8FAFC] px-4 pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto -mt-24 md:-mt-28 relative motion-safe:animate-rise-in"
            style={{ animationDelay: '240ms' }}
          >
            <div className="border-brand-gradient rounded-2xl shadow-xl shadow-slate-900/10 p-6 sm:p-8 md:p-10">
              <p className="font-semibold text-xs text-blue-600 mb-2">Próximos pasos</p>
              <h2 id="pasos-title" className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-8">
                Ahora, ¿qué esperar dentro de las siguientes 24 horas hábiles?
              </h2>

              <ol className="space-y-4">
                {STEPS.map((step, i) => {
                  const Icon = step.icon
                  return (
                    <li
                      key={i}
                      className={`flex gap-4 sm:gap-5 rounded-xl p-4 sm:p-5 ${
                        step.optional
                          ? 'bg-emerald-50/60 border border-dashed border-emerald-300'
                          : 'bg-white border border-slate-200 shadow-sm'
                      }`}
                    >
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                          step.optional
                            ? 'bg-white text-emerald-700 border-2 border-emerald-400'
                            : 'bg-brand-gradient text-white shadow-md shadow-blue-600/25'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            aria-hidden
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              step.optional ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-50 text-blue-600'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          {step.optional && (
                            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full">
                              Opcional
                            </span>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* C) Soporte directo */}
        <section aria-labelledby="soporte-title" className="bg-[#F8FAFC] px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-glow-soft rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/15">
              <p className="font-semibold text-xs text-blue-400 mb-2">Soporte directo</p>
              <h2 id="soporte-title" className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight mb-3">
                ¿Tuviste algún inconveniente?
              </h2>
              <p className="text-slate-300 leading-relaxed mb-7">
                Ante cualquier problema o consulta con tu pago o tu acceso, puedes comunicarte directamente con{' '}
                <strong className="text-white">Jared Farfán (Marketing Master Top)</strong> a través de los siguientes
                canales oficiales:
              </p>

              {channels.length > 0 ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {channels.map((c) => {
                    const Icon = c.icon
                    return (
                      <li key={c.label} className={channels.length % 2 === 1 && c === channels[0] ? 'sm:col-span-2' : ''}>
                        <a
                          href={c.href}
                          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="group flex items-center gap-4 rounded-xl glass-card px-4 py-4 hover:bg-white/10 hover:border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A202C]"
                        >
                          <span className="shrink-0 w-11 h-11 rounded-lg bg-brand-gradient flex items-center justify-center shadow-md shadow-blue-600/25">
                            <Icon className="w-5 h-5 text-white" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs text-slate-400">{c.label}</span>
                            <span className="block text-white font-bold break-words">{c.value}</span>
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                import.meta.env.DEV && (
                  <p className="rounded-lg border border-amber-300/40 bg-amber-300/10 text-amber-200 text-sm px-4 py-3">
                    Faltan los datos de contacto: completa SUPPORT_EMAIL y SUPPORT_PHONE en src/pages/ThankYou.tsx.
                  </p>
                )
              )}
            </div>

            <div className="text-center mt-10">
              <a
                href="./"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 bg-white px-5 py-2.5 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden />
                Volver al sitio principal
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F8FAFC] border-t border-slate-200 px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-slate-500">
          <p>© {year} Marketing Master. Todos los derechos reservados.</p>
          <p>HighLevel, LeadConnector y las demás marcas citadas pertenecen a sus respectivos propietarios.</p>
        </div>
      </footer>
    </>
  )
}
