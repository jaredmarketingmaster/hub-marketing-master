type Props = { tone?: 'dark' | 'light' }

export function Logo({ tone = 'dark' }: Props) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Marketing Master HUB, volver al inicio">
      <span className="w-7 h-7 rounded-md bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm shadow-blue-600/30">
        HUB
      </span>
      <span className={`font-semibold text-sm whitespace-nowrap ${tone === 'dark' ? 'text-white' : 'text-slate-900'}`}>
        Marketing Master HUB
      </span>
    </a>
  )
}
