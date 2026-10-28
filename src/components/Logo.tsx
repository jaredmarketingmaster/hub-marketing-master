import hubLogo from '../assets/hub-logo.webp'

// compact: muestra solo el ícono (el nombre queda en el aria-label) donde no entra todo el navbar:
// menos de 640 px (switch de región + "Comprar" + menú) y 1024–1279 px (links + switch + botón)
type Props = { tone?: 'dark' | 'light'; href?: string; compact?: boolean }

export function Logo({ tone = 'dark', href = '#top', compact = false }: Props) {
  return (
    <a href={href} className="flex items-center gap-2" aria-label="Marketing Master HUB, volver al inicio">
      <img src={hubLogo} alt="" width={32} height={32} className="w-8 h-8 rounded-lg shadow-sm shadow-blue-600/30" />
      <span
        className={`font-semibold text-sm whitespace-nowrap ${compact ? 'hidden sm:inline lg:hidden xl:inline' : ''} ${
          tone === 'dark' ? 'text-white' : 'text-slate-900'
        }`}
      >
        Marketing Master HUB
      </span>
    </a>
  )
}
