import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useSound } from '../context/SoundContext'

export default function SectionShell({ sectionKey, title, onBack, children }) {
  const { t } = useLanguage()
  const { play } = useSound()

  const handleBack = () => {
    play('back')
    onBack()
  }

  return (
    <motion.div
      key={sectionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen w-full flex-col items-center px-6 py-24 sm:px-12"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-center font-display text-3xl text-reel-brassBright sm:text-4xl">
          {title}
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-reel-brass/50" />

        <div className="mt-10">{children}</div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 font-label text-xs tracking-[0.3em] text-reel-brass/70 transition-colors duration-300 hover:text-reel-brassBright"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ◄
            </span>
            {t.back.toUpperCase()}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
