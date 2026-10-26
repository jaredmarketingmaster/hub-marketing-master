import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import hubLogo from '../assets/hub-logo.webp'
import { ArrowLeft, ArrowRight, Check, Lock, X } from 'lucide-react'
import { PLANS, type PlanId } from '../data/content'

type Props = { open: boolean; onClose: () => void }

type Fields = { name: string; email: string; phone: string; business: string; accept: boolean }
type Errors = Partial<Record<keyof Fields, string>>
type Step = 1 | 2

const EMPTY: Fields = { name: '', email: '', phone: '', business: '', accept: false }
// Plan preseleccionado en el paso 2 (coincide con el precio de los botones "Comprar ahora")
const DEFAULT_PLAN: PlanId = 'monthly'

const SUMMARY = [
  'Todas las funciones, sin módulos extra',
  'Acceso desde el primer día',
  'App móvil incluida',
]

// Resumen del panel lateral según el plan elegido (USD a ~AR$ 1.525, como en la nota legal)
const PLAN_SUMMARY: Record<PlanId, { price: string; period: string; note: string }> = {
  monthly: { price: 'AR$ 90.000', period: '/mes', note: '~USD 59 por mes' },
  annual: { price: 'AR$ 900.000', period: '/año', note: '~USD 590 por año · 2 meses gratis' },
}

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 3) e.name = 'Ingresa tu nombre y apellido.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Ingresa un email válido.'
  if (f.phone.replace(/\D/g, '').length < 8) e.phone = 'Ingresa un WhatsApp válido, con código de área.'
  if (!f.accept) e.accept = 'Necesitamos tu aceptación para continuar.'
  return e
}

export function PurchaseModal({ open, onClose }: Props) {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [step, setStep] = useState<Step>(1)
  const [plan, setPlan] = useState<PlanId>(DEFAULT_PLAN)
  const [submitting, setSubmitting] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const planTitleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => firstInputRef.current?.focus(), 30)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !dialogRef.current) return
      // Solo cuenta lo visible: el paso que no está en pantalla queda con visibility: hidden
      const focusables = [
        ...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]), a[href]'),
      ].filter((el) => getComputedStyle(el).visibility !== 'hidden')
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setErrors({})
      setStep(1)
      setSubmitting(false)
    }
  }, [open])

  // Si el usuario vuelve desde Mercado Pago con el botón "atrás", la página puede
  // restaurarse desde la caché del navegador: reactivamos el botón de pago.
  useEffect(() => {
    const onShow = (e: PageTransitionEvent) => e.persisted && setSubmitting(false)
    window.addEventListener('pageshow', onShow)
    return () => window.removeEventListener('pageshow', onShow)
  }, [])

  if (!open) return null

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const goTo = (next: Step) => {
    setStep(next)
    dialogRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(() => (next === 2 ? planTitleRef.current?.focus() : firstInputRef.current?.focus()), 60)
  }

  // Paso 1 → valida los datos y pasa a la elección del plan (todavía no redirige)
  const onSubmitData = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) {
      const firstError = (['name', 'email', 'phone', 'accept'] as const).find((k) => found[k])
      dialogRef.current?.querySelector<HTMLInputElement>(`[data-field="${firstError}"]`)?.focus()
      return
    }
    goTo(2)
  }

  // Paso 2 → redirige al link de Mercado Pago del plan elegido
  const onSubmitPlan = (e: FormEvent) => {
    e.preventDefault()
    const selected = PLANS.find((p) => p.id === plan)
    if (!selected) return
    setSubmitting(true)
    window.location.assign(selected.checkoutUrl)
  }

  const inputClass = (err?: string) =>
    `w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-white transition focus:outline-none focus:ring-2 ${
      err ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
    }`

  // Cada paso ocupa todo el ancho del visor; el inactivo se oculta (y sale del orden de tabulación).
  // El que entra se hace visible al instante (para poder enfocarlo); el que sale espera a la transición.
  const panelClass = (active: boolean) =>
    `w-full shrink-0 p-7 md:p-8 duration-500 motion-reduce:transition-none ${
      active ? 'opacity-100 visible transition-opacity' : 'opacity-0 invisible transition-[opacity,visibility]'
    }`

  const summary = PLAN_SUMMARY[plan]

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-[#1A202C]/75 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="buy-title"
        className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl animate-modal-in grid md:grid-cols-5"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Resumen */}
        <aside className="md:col-span-2 bg-dark-glow text-white p-7 md:rounded-l-2xl hidden md:flex flex-col">
          <img src={hubLogo} alt="Marketing Master HUB" width={48} height={48} className="w-12 h-12 rounded-xl mb-6 shadow-lg shadow-blue-600/30" />
          <p className="text-blue-400 font-semibold text-xs mb-2">Tu plan</p>
          <p className="text-lg font-bold mb-1">Marketing Master HUB</p>
          <p className="text-sm text-slate-400 mb-6">Plan único, todo incluido</p>
          <div key={plan} className="animate-tab-in">
            <div className="flex items-end gap-1 mb-1">
              <span className="font-display text-3xl font-bold tracking-tight">{summary.price}</span>
              <span className="text-slate-400 text-sm mb-1">{summary.period}</span>
            </div>
            <p className="text-xs text-slate-400 mb-6">{summary.note}</p>
          </div>
          <ul className="space-y-2.5 mb-auto">
            {SUMMARY.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                {s}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-8">
            <Lock className="w-3.5 h-3.5" /> Pago 100% seguro con Mercado Pago
          </p>
        </aside>

        <div className="md:col-span-3 min-w-0 flex flex-col">
          {/* Encabezado común + indicador de pasos */}
          <div className="px-7 md:px-8 pt-7 md:pt-8">
            <h2 id="buy-title" className="text-xl font-bold text-slate-900 mb-3 pr-8">
              Comprar Marketing Master HUB
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-1.5 w-8 rounded-full bg-[#1A73E8]" />
                <span
                  className={`h-1.5 w-8 rounded-full transition-colors duration-500 ${step === 2 ? 'bg-[#1A73E8]' : 'bg-slate-200'}`}
                />
              </div>
              <p className="text-xs font-semibold text-slate-500" aria-live="polite">
                Paso {step} de 2 · {step === 1 ? 'Tus datos' : 'Tu plan de pago'}
              </p>
            </div>
          </div>

          {/* Visor de pasos: el paso 1 se desliza a la izquierda y entra el paso 2 */}
          <div className="overflow-hidden flex-1">
            <div
              className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              style={{ transform: step === 2 ? 'translateX(-100%)' : 'translateX(0)' }}
            >
              {/* PASO 1: datos del comprador */}
              <form onSubmit={onSubmitData} noValidate className={panelClass(step === 1)}>
                <p className="text-sm text-slate-600 mb-6">Completa tus datos y luego eliges tu plan de pago.</p>

                <div className="space-y-4">
                  <Field id="buy-name" label="Nombre y apellido" error={errors.name}>
                    <input
                      ref={firstInputRef}
                      id="buy-name"
                      data-field="name"
                      autoComplete="name"
                      value={fields.name}
                      onChange={(e) => set('name', e.target.value)}
                      className={inputClass(errors.name)}
                      placeholder="Ej.: Valentina Ríos"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'buy-name-err' : undefined}
                    />
                  </Field>
                  <Field id="buy-email" label="Email" error={errors.email}>
                    <input
                      id="buy-email"
                      data-field="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={fields.email}
                      onChange={(e) => set('email', e.target.value)}
                      className={inputClass(errors.email)}
                      placeholder="tu@negocio.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'buy-email-err' : undefined}
                    />
                  </Field>
                  <Field id="buy-phone" label="WhatsApp" error={errors.phone}>
                    <input
                      id="buy-phone"
                      data-field="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={fields.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      className={inputClass(errors.phone)}
                      placeholder="+54 9 11 1234-5678"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'buy-phone-err' : undefined}
                    />
                  </Field>
                  <Field id="buy-business" label="Nombre de tu negocio" optional>
                    <input
                      id="buy-business"
                      autoComplete="organization"
                      value={fields.business}
                      onChange={(e) => set('business', e.target.value)}
                      className={inputClass()}
                      placeholder="Ej.: Estudio Ríos"
                    />
                  </Field>

                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed cursor-pointer">
                      <input
                        type="checkbox"
                        data-field="accept"
                        checked={fields.accept}
                        onChange={(e) => set('accept', e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        aria-invalid={!!errors.accept}
                      />
                      Acepto que mis datos se usen para crear mi cuenta y procesar mi suscripción a Marketing Master HUB.
                    </label>
                    {errors.accept && <p className="text-xs text-red-500 mt-1.5">{errors.accept}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="shine mt-6 w-full flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1560C4] text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/20 transition-colors"
                >
                  Elegir el plan de pago
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </button>
                <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 text-center">
                  <Lock className="w-3 h-3 shrink-0" /> Luego pagas de forma 100% segura con Mercado Pago. No guardamos datos
                  de tarjeta.
                </p>
              </form>

              {/* PASO 2: elección del plan */}
              <form onSubmit={onSubmitPlan} className={`${panelClass(step === 2)} flex flex-col`}>
                <div className="flex items-center gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    aria-label="Volver a tus datos"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 rounded-lg px-2 py-1 -ml-2 hover:bg-slate-100 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden />
                    Volver
                  </button>
                  <h3 ref={planTitleRef} tabIndex={-1} className="text-base font-bold text-slate-900 focus:outline-none">
                    Elige tu plan de pago
                  </h3>
                </div>

                <fieldset>
                  <legend className="sr-only">Plan de pago</legend>
                  <div className="space-y-5">
                    {PLANS.map((p) => {
                      const selected = plan === p.id
                      return (
                        <label
                          key={p.id}
                          className={`group relative block cursor-pointer rounded-xl p-5 pr-14 transition-[box-shadow,border-color,transform] duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500 has-[:focus-visible]:ring-offset-2 ${
                            selected
                              ? 'border-brand-gradient shadow-xl shadow-blue-600/20 motion-safe:-translate-y-0.5'
                              : 'border-2 border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                          }`}
                        >
                          <input
                            type="radio"
                            name="plan"
                            value={p.id}
                            checked={selected}
                            onChange={() => setPlan(p.id)}
                            className="sr-only"
                          />
                          {p.badge && (
                            <span className="shine absolute -top-3 left-4 inline-flex items-center rounded-full bg-[#1A73E8] px-3 py-1 text-xs font-bold text-white shadow-md shadow-blue-600/30">
                              {p.badge}
                            </span>
                          )}
                          <span
                            aria-hidden
                            className={`absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                              selected ? 'bg-brand-gradient text-white shadow-md shadow-blue-600/30' : 'border-2 border-slate-300 bg-white group-hover:border-blue-300'
                            }`}
                          >
                            {selected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                          </span>
                          <span className={`block text-sm font-bold mb-1 ${p.badge ? 'mt-1' : ''} text-slate-900`}>{p.title}</span>
                          <span className="block font-display text-2xl font-bold tracking-tight text-slate-900 mb-1">
                            {p.price}
                          </span>
                          <span className={`block text-sm ${p.badge ? 'font-semibold text-emerald-700' : 'text-slate-600'}`}>
                            {p.detail}
                          </span>
                          {p.note && <span className="block text-xs text-slate-500 mt-1">{p.note}</span>}
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div className="mt-auto pt-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="shine w-full flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1560C4] disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/20 transition-colors"
                  >
                    {submitting ? 'Redirigiendo a Mercado Pago…' : 'Continuar al pago seguro'}
                    {!submitting && <Lock className="w-4 h-4" aria-hidden />}
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 text-center">
                    <Lock className="w-3 h-3 shrink-0" /> Serás redirigido a Mercado Pago para pagar de forma 100% segura. No
                    guardamos datos de tarjeta.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label} {optional && <span className="font-normal text-slate-400">(opcional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="text-xs text-red-500 mt-1.5">
          {error}
        </p>
      )}
    </div>
  )
}
