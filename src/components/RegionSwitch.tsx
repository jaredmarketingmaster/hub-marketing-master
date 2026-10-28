import { useRegion } from '../hooks/useRegion'

// Switch Argentina / Resto del mundo del navbar. Encendido = resto del mundo.
// Etiquetas cortas donde no entran las largas: móvil (< 768 px) y lg (1024–1279 px, junto a los links).
export function RegionSwitch() {
  const { region, setRegion } = useRegion()
  const world = region === 'world'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={world}
      aria-label="Precios para el resto del mundo (fuera de Argentina)"
      title={world ? 'Ver precios para Argentina' : 'Ver precios para el resto del mundo'}
      onClick={() => setRegion(world ? 'ar' : 'world')}
      className="relative grid grid-cols-2 shrink-0 rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-bold transition-colors hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A202C]"
    >
      {/* Indicador que se desliza bajo la opción activa */}
      <span
        aria-hidden
        className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-[#1A73E8] shadow-md shadow-blue-600/30 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          world ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <Label active={!world} short="AR" long="Argentina" />
      <Label active={world} short="Mundo" long="Resto del mundo" />
    </button>
  )
}

function Label({ active, short, long }: { active: boolean; short: string; long: string }) {
  return (
    <span
      aria-hidden
      className={`relative z-10 px-2 sm:px-3 py-1.5 text-center whitespace-nowrap transition-colors duration-300 ${
        active ? 'text-white' : 'text-slate-300'
      }`}
    >
      <span className="md:hidden lg:inline xl:hidden">{short}</span>
      <span className="hidden md:inline lg:hidden xl:inline">{long}</span>
    </span>
  )
}
