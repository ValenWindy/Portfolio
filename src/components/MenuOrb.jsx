import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext'

export default function MenuOrb({ number, label, onClick, delay = 0 }) {
  const { play } = useSound()

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => play('hover')}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-full
                border border-reel-brass/40 bg-reel-charcoal/60 backdrop-blur-sm
                transition-shadow duration-500 hover:border-reel-brassBright
                hover:shadow-brassGlowStrong sm:h-36 sm:w-36"
    >
      {/* anillo interno, como el borde metálico de un disco */}
      <span
        className="pointer-events-none absolute inset-2 rounded-full border border-reel-brass/20
                  transition-colors duration-500 group-hover:border-reel-brassBright/50"
      />
      <span className="font-label text-[11px] tracking-[0.3em] text-reel-brass/70 transition-colors duration-500 group-hover:text-reel-brassBright">
        {number}
      </span>
      <span className="mt-1 px-3 text-center font-display text-lg leading-tight text-reel-bone transition-colors duration-500 group-hover:text-reel-brassBright sm:text-xl">
        {label}
      </span>
    </motion.button>
  )
}
