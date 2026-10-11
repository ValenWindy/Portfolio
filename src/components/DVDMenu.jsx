import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useSound } from '../context/SoundContext'
import MenuOrb from './MenuOrb'

const SECTION_ORDER = ['about', 'projects', 'slayerscript', 'contact']

export default function DVDMenu({ onSelect }) {
  const { t } = useLanguage()
  const { play } = useSound()

  const handleSelect = (key) => {
    play('select')
    onSelect(key)
  }

  // Espaciado vertical: en celular pt-16 deja lugar a la franja fija del
  // selector de idioma y pb-12 cierra la pantalla sin dejar un hueco enorme
  // (igual que SectionShell). Desde sm vuelve a py-24 como antes.
  return (
    <motion.div
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen w-full flex-col items-center justify-center px-6 pb-12 pt-16 sm:py-24"
    >
      <div className="mb-8 text-center sm:mb-20">
        <h1 className="font-display text-3xl tracking-wide text-reel-bone sm:text-5xl">
          {t.menu.title}
        </h1>
        <p className="mt-3 font-label text-xs tracking-[0.4em] text-reel-brass/70 sm:text-sm">
          {t.menu.subtitle.toUpperCase()}
        </p>
      </div>

      <div className="dvd-stair my-4 sm:my-10">
        {SECTION_ORDER.map((key, i) => (
          <div key={key}>
            <MenuOrb
              number={String(i + 1).padStart(2, '0')}
              label={t.menu.items[key]}
              delay={i * 0.12}
              onClick={() => handleSelect(key)}
            />
          </div>
        ))}
      </div>

      <p className="font-display text-sm italic text-reel-fog/60 animate-flicker [animation-duration:2.5s]">

      </p>
    </motion.div>
  )
}
