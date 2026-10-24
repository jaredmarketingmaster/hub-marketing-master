import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Check, Lock, X } from 'lucide-react'

type Props = { open: boolean; onClose: () => void }

type Fields = { name: string; email: string; phone: string; business: string; accept: boolean }
type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', email: '', phone: '', business: '', accept: false }
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL?.trim() ?? ''

const SUMMARY = [
  'Todas las funciones, sin módulos extra',
  'Acceso desde el primer día',
  'App móvil incluida',
]

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
  const [notice, setNotice] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => firstInputRef.current?.focus(), 30)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), a[href]',
      )
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
      setNotice('')
      setSubmitting(false)
    }
  }, [open])

  if (!open) return null

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) return

    if (!CHECKOUT_URL) {
      setNotice('El checkout de Getnet todavía no está configurado. Define VITE_CHECKOUT_URL para habilitar el pago.')
      return
    }
    setSubmitting(true)
    const url = new URL(CHECKOUT_URL)
    url.searchParams.set('name', fields.name.trim())
    url.searchParams.set('email', fields.email.trim())
    url.searchParams.set('phone', fields.phone.trim())
    if (fields.business.trim()) url.searchParams.set('business', fields.business.trim())
    window.location.href = url.toString()
  }

  const inputClass = (err?: string) =>
    `w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-white transition focus:outline-none focus:ring-2 ${
      err ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
    }`

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-[#0A0F1D]/75 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden />

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
          <p className="text-blue-400 font-semibold text-xs mb-2">Tu plan</p>
          <p className="text-lg font-bold mb-1">Marketing Master HUB</p>
          <p className="text-sm text-slate-400 mb-6">Plan único, todo incluido</p>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-3xl font-extrabold tracking-tight">AR$ 100.000</span>
            <span className="text-slate-400 text-sm mb-1">/mes</span>
          </div>
          <p className="text-xs text-slate-500 mb-6">~USD 62,5 por mes</p>
          <ul className="space-y-2.5 mb-auto">
            {SUMMARY.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                {s}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-8">
            <Lock className="w-3.5 h-3.5" /> Pago procesado por Getnet
          </p>
        </aside>

        {/* Formulario */}
        <form onSubmit={onSubmit} noValidate className="md:col-span-3 p-7 md:p-8">
          <h2 id="buy-title" className="text-xl font-bold text-slate-900 mb-1 pr-8">
            Comprar Marketing Master HUB
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            <span className="md:hidden font-semibold text-slate-900">AR$ 100.000/mes · </span>
            Completa tus datos y te llevamos al pago seguro.
          </p>

          <div className="space-y-4">
            <Field id="buy-name" label="Nombre y apellido" error={errors.name}>
              <input
                ref={firstInputRef}
                id="buy-name"
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
                  checked={fields.accept}
                  onChange={(e) => set('accept', e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  aria-invalid={!!errors.accept}
                />
                Acepto que mis datos se usen para crear mi cuenta y procesar la suscripción mensual de AR$ 100.000.
              </label>
              {errors.accept && <p className="text-xs text-red-500 mt-1.5">{errors.accept}</p>}
            </div>
          </div>

          {notice && (
            <p role="status" className="mt-5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs p-3">
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/20 transition-colors"
          >
            {submitting ? 'Redirigiendo al pago…' : 'Continuar al pago seguro'}
            {!submitting && <ArrowRight className="w-4 h-4" />}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3">
            <Lock className="w-3 h-3" /> Serás redirigido al checkout de Getnet. No guardamos datos de tarjeta.
          </p>
        </form>
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
