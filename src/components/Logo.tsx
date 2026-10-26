import hubLogo from '../assets/hub-logo.webp'

type Props = { tone?: 'dark' | 'light'; href?: string }

export function Logo({ tone = 'dark', href = '#top' }: Props) {
  return (
    <a href={href} className="flex items-center gap-2" aria-label="Marketing Master HUB, volver al inicio">
      <img src={hubLogo} alt="" width={32} height={32} className="w-8 h-8 rounded-lg shadow-sm shadow-blue-600/30" />
      <span className={`font-semibold text-sm whitespace-nowrap ${tone === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        Marketing Master HUB
      </span>
    </a>
  )
}
