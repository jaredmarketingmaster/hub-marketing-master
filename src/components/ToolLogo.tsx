import { useState } from 'react'
import { TOOLS, faviconUrl } from '../data/tools'

const MONO_COLORS = ['bg-blue-100 text-blue-700', 'bg-emerald-100 text-emerald-700', 'bg-slate-200 text-slate-700']

function initials(name: string) {
  const parts = name.split(/\s+/)
  return (parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 2)).toUpperCase()
}

type Props = { name: string; size?: number; className?: string }

/** Logo oficial de una herramienta, con monograma de respaldo si la imagen no carga. */
export function ToolLogo({ name, size = 20, className = '' }: Props) {
  const tool = TOOLS[name]
  const [failed, setFailed] = useState(false)
  const src = tool?.logo ?? (tool ? faviconUrl(tool.domain) : undefined)

  if (!src || failed) {
    const color = MONO_COLORS[name.length % MONO_COLORS.length]
    return (
      <span
        aria-hidden
        style={{ width: size, height: size, fontSize: Math.round(size * 0.42) }}
        className={`inline-flex shrink-0 items-center justify-center rounded-md font-bold leading-none ${color} ${className}`}
      >
        {initials(name)}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={size}
      height={size}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className={`shrink-0 object-contain ${tool?.logo ? '' : 'rounded-[4px]'} ${className}`}
    />
  )
}
