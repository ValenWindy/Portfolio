import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function SectionScreen({ sectionKey, onBack }) {
  const { t } = useLanguage()
  const section = t.sections[sectionKey]

  return (
    <motion.div
      key={sectionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-xl rounded-2xl border border-reel-brass/30 bg-reel-charcoal/50 p-10 text-center backdrop-blur-sm">
        <h2 className="font-display text-3xl text-reel-brassBright sm:text-4xl">
          {section.title}
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-reel-brass/50" />
        <p className="mt-6 font-label text-sm leading-relaxed text-reel-fog sm:text-base">
          {section.body}
        </p>
      </div>

      <button
        onClick={onBack}
        className="group mt-12 flex items-center gap-2 font-label text-xs tracking-[0.3em] text-reel-brass/70 transition-colors duration-300 hover:text-reel-brassBright"
      >
        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
          ◄
        </span>
        {t.back.toUpperCase()}
      </button>
    </motion.div>
  )
}
