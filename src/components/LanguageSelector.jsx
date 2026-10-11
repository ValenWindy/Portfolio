import { useLanguage } from '../context/LanguageContext'
import { useSound } from '../context/SoundContext'

const OPTIONS = [
  { code: 'es', label: 'ESPAÑOL' },
  { code: 'en', label: 'ENGLISH' },
]

export default function LanguageSelector() {
  const { lang, changeLanguage } = useLanguage()
  const { play } = useSound()

  const handleSelect = (code) => {
    if (code === lang) return
    play('shift')
    changeLanguage(code)
  }

  // En celular (< sm): franja fija arriba, de borde a borde, con un degradé
  // del color del fondo para que el contenido que se desplaza por debajo se
  // tape y no se superponga con los botones.
  // Desde sm: selector vertical fijo a la izquierda, centrado en alto, sin fondo.
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-16 flex-row items-center gap-5 bg-gradient-to-b from-reel-black to-transparent px-4 sm:inset-x-auto sm:left-6 sm:top-1/2 sm:h-auto sm:-translate-y-1/2 sm:flex-col sm:items-start sm:bg-none sm:px-0"
      role="radiogroup"
      aria-label="Idioma / Language"
    >
      {OPTIONS.map((opt) => {
        const active = opt.code === lang
        return (
          <button
            key={opt.code}
            role="radio"
            aria-checked={active}
            onClick={() => handleSelect(opt.code)}
            className="group pointer-events-auto flex items-center gap-2.5"
          >
            <span
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                active
                  ? 'bg-reel-brassBright shadow-brassGlow'
                  : 'bg-reel-fog/40 group-hover:bg-reel-fog/70'
              }`}
            />
            <span
              className={`font-label text-[11px] tracking-[0.25em] transition-colors duration-500 sm:[writing-mode:vertical-rl] ${
                active ? 'text-reel-brassBright' : 'text-reel-fog/60 group-hover:text-reel-fog'
              }`}
            >
              {opt.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
