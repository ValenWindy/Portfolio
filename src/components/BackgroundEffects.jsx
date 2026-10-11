export default function BackgroundEffects() {
  return (
    <>
      {/* viñeta: oscurece los bordes como una sala de proyección */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      {/* haz de luz de proyector, muy sutil, detrás del menú */}
      <div
        className="pointer-events-none fixed left-1/2 top-1/3 z-0 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(closest-side, rgba(92,24,48,0.35), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="film-grain" />
    </>
  )
}
