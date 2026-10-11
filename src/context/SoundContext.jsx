import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import { sounds } from '../utils/sound'

const SoundContext = createContext(null)

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(false)

  const toggle = useCallback(() => setEnabled((v) => !v), [])

  const play = useCallback(
    (name) => {
      if (enabled && sounds[name]) sounds[name]()
    },
    [enabled],
  )

  const value = useMemo(() => ({ enabled, toggle, play }), [enabled, toggle, play])

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

// useSound().play('hover' | 'select' | 'back'), useSound().enabled, useSound().toggle()
export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSound debe usarse dentro de <SoundProvider>')
  return ctx
}
