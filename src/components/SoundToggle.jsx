import { useSound } from '../context/SoundContext'
import { useLanguage } from '../context/LanguageContext'

export default function SoundToggle() {
  const { enabled, toggle } = useSound()
  const { t } = useLanguage()

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? t.sound.on : t.sound.off}
      title={enabled ? t.sound.on : t.sound.off}
      className="fixed right-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-full
                 border border-reel-brass/40 bg-reel-charcoal/60 text-reel-brass/70 backdrop-blur-sm
                 transition-colors duration-300 hover:border-reel-brassBright hover:text-reel-brassBright sm:right-6 sm:top-6"
    >
      <span aria-hidden="true" className={`text-sm ${enabled ? '' : 'opacity-40'}`}>
        ♪
      </span>
    </button>
  )
}
