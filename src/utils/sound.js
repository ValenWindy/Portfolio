// Sonidos de navegación tipo DVD, generados con Web Audio API para no
// depender de archivos .mp3 externos. Todo son tonos cortos y suaves.

let audioCtx = null

function getContext() {
  if (typeof window === 'undefined') return null
  const AudioCtxClass = window.AudioContext || window.webkitAudioContext
  if (!AudioCtxClass) return null
  if (!audioCtx) audioCtx = new AudioCtxClass()
  return audioCtx
}

function playTone({ freq, duration = 0.12, type = 'sine', gain = 0.05 }) {
  const ctx = getContext()
  if (!ctx) return
  // Los navegadores suspenden el AudioContext hasta el primer gesto del
  // usuario; como esto siempre se dispara desde un click/hover, se puede
  // reanudar sin pedir permiso extra.
  if (ctx.state === 'suspended') ctx.resume()

  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()
  oscillator.type = type
  oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
  gainNode.gain.setValueAtTime(gain, ctx.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)
  oscillator.start()
  oscillator.stop(ctx.currentTime + duration)
}

export const sounds = {
  hover: () => playTone({ freq: 660, duration: 0.05, gain: 0.03 }),
  select: () => playTone({ freq: 440, duration: 0.15, gain: 0.06 }),
  back: () => playTone({ freq: 300, duration: 0.15, gain: 0.06 }),
  // acorde suave y sostenido, para el velo de niebla al cambiar de idioma
  shift: () => {
    playTone({ freq: 523.25, duration: 0.55, gain: 0.035, type: 'sine' })
    playTone({ freq: 784, duration: 0.55, gain: 0.02, type: 'sine' })
  },
}
