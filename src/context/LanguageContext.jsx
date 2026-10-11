import { createContext, useContext, useState, useMemo, useRef } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

// El texto cambia recién cuando la niebla ya tapó la pantalla (COVER_DELAY),
// y el velo entero dura VEIL_DURATION. Todo en un solo lugar para que el
// cambio de idioma y la animación de MistVeil queden siempre sincronizados.
const COVER_DELAY = 220
const VEIL_DURATION = 480

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const [isVeiled, setIsVeiled] = useState(false)
  const timers = useRef([])

  function changeLanguage(next) {
    if (next === lang) return
    timers.current.forEach(clearTimeout)
    setIsVeiled(true)
    timers.current = [
      setTimeout(() => setLang(next), COVER_DELAY),
      setTimeout(() => setIsVeiled(false), VEIL_DURATION),
    ]
  }

  const value = useMemo(
    () => ({ lang, changeLanguage, isVeiled, t: translations[lang] }),
    [lang, isVeiled],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// useLanguage().t.menu.title, useLanguage().changeLanguage('en'), useLanguage().isVeiled
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}
