import { useLanguage } from '../../context/LanguageContext'
import SectionShell from '../SectionShell'
import fotoPerfil from '../../assets/foto-perfil.jpg'
import slayerscriptLogo from '../../assets/slayerscript-logo.png'

export default function AboutSection({ onBack, onNavigate }) {
  const { t } = useLanguage()
  const { about } = t

  return (
    <SectionShell sectionKey="about" title={about.title} onBack={onBack}>
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-12">
        {/* Retrato: círculo con el mismo lenguaje visual que los orbes del menú */}
        <div className="flex shrink-0 flex-col items-center gap-4">
          <div className="h-40 w-40 overflow-hidden rounded-full border border-reel-brass/40 bg-reel-charcoal/60 shadow-brassGlow sm:h-48 sm:w-48">
            <img
              src={fotoPerfil}
              alt={about.name}
              className="h-full w-full object-cover"
            />
          </div>

          <button
            onClick={() => onNavigate?.('slayerscript')}
            className="group mt-2 rounded-lg border border-reel-brass/20 px-4 py-3 transition-colors duration-300 hover:border-reel-brassBright"
          >
            <img
              src={slayerscriptLogo}
              alt="SlayerScript"
              className="h-24 w-auto opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
          </button>
        </div>

        {/* Nombre, rol y bio */}
        <div className="text-center sm:text-left">
          <h3 className="font-display text-2xl leading-tight text-reel-bone sm:text-3xl">
            {about.name}
          </h3>
          <p className="mt-1 font-label text-sm tracking-wide text-reel-brass/70">{about.role}</p>

          <div className="mt-6 space-y-4 font-label text-sm leading-relaxed text-reel-fog sm:text-base">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-6 font-display text-base italic text-reel-brassBright/90">
            “{about.quote}”
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            {about.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-reel-brass/30 px-4 py-1.5 font-label text-xs tracking-wide text-reel-brass/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
