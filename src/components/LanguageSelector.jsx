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

  return (
    <div
      className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-start gap-5 sm:left-6"
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
            className="group flex items-center gap-2.5"
          >
            <span
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                active
                  ? 'bg-reel-brassBright shadow-brassGlow'
                  : 'bg-reel-fog/40 group-hover:bg-reel-fog/70'
              }`}
            />
            <span
              className={`font-label text-[11px] tracking-[0.25em] transition-colors duration-500 ${
                active ? 'text-reel-brassBright' : 'text-reel-fog/60 group-hover:text-reel-fog'
              }`}
              style={{ writingMode: 'vertical-rl' }}
            >
              {opt.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
