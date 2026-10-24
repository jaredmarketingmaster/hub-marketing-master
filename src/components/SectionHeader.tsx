import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  tone?: 'light' | 'dark'
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  titleClassName = 'mb-4',
  subtitleClassName = 'text-base mb-10',
}: Props) {
  const dark = tone === 'dark'
  return (
    <header>
      <p className={`font-semibold text-xs mb-2 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>{eyebrow}</p>
      <h2
        className={`text-3xl md:text-4xl font-extrabold max-w-2xl leading-tight tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl ${dark ? 'text-slate-400' : 'text-slate-600'} ${subtitleClassName}`}>{subtitle}</p>
      )}
    </header>
  )
}
