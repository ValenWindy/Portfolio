import { useLanguage } from '../../context/LanguageContext'
import SectionShell from '../SectionShell'
import slayerscriptLogo from '../../assets/slayerscript-logo.png'

export default function SlayerScriptSection({ onBack }) {
  const { t } = useLanguage()
  const { slayerscript } = t

  return (
    <SectionShell sectionKey="slayerscript" title={slayerscript.title} onBack={onBack}>
      <div className="flex justify-center">
        <img src={slayerscriptLogo} alt="SlayerScript" className="h-36 w-auto sm:h-44" />
      </div>

      <p className="mt-2 text-center font-label text-sm leading-relaxed text-reel-fog sm:text-base">
        {slayerscript.body}
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={slayerscript.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-reel-brass/40 px-6 py-2.5 font-label text-xs tracking-[0.25em] text-reel-brass/80 transition-colors duration-300 hover:border-reel-brassBright hover:text-reel-brassBright hover:shadow-brassGlow"
        >
          {slayerscript.cta.toUpperCase()}
        </a>
      </div>
    </SectionShell>
  )
}
