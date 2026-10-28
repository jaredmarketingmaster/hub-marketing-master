import { createContext, useContext } from 'react'
import { DEFAULT_REGION, type Region } from '../data/content'

// Región de precios elegida en el switch del navbar (Argentina / resto del mundo).
// El estado vive en <Landing />; las secciones lo leen con useRegion().
type RegionState = { region: Region; setRegion: (region: Region) => void }

export const RegionContext = createContext<RegionState>({
  region: DEFAULT_REGION,
  setRegion: () => {},
})

export function useRegion() {
  return useContext(RegionContext)
}
