import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function MistVeil() {
  const { isVeiled } = useLanguage()

  return (
    <AnimatePresence>
      {isVeiled && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {/* base: bruma pareja que cubre toda la pantalla y esconde el cambio de texto */}
          <div className="absolute inset-0 bg-reel-black/55 backdrop-blur-[2px]" />

          {/* dos nubes de humo que se desplazan y se disuelven, en hueso y borgoña */}
          <motion.div
            className="absolute h-[70vh] w-[70vh] rounded-full"
            style={{
              left: '10%',
              top: '20%',
              background: 'radial-gradient(closest-side, rgba(233,226,208,0.28), transparent 72%)',
              filter: 'blur(55px)',
            }}
            initial={{ x: '-15%', y: '10%', scale: 0.75, opacity: 0 }}
            animate={{ x: '8%', y: '-6%', scale: 1.1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute h-[65vh] w-[65vh] rounded-full"
            style={{
              right: '8%',
              bottom: '15%',
              background: 'radial-gradient(closest-side, rgba(92,24,48,0.4), transparent 72%)',
              filter: 'blur(60px)',
            }}
            initial={{ x: '15%', y: '-10%', scale: 0.8, opacity: 0 }}
            animate={{ x: '-8%', y: '8%', scale: 1.15, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
