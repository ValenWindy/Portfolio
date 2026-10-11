import { useLanguage } from '../../context/LanguageContext'
import SectionShell from '../SectionShell'

export default function ContactSection({ onBack }) {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <SectionShell sectionKey="contact" title={contact.title} onBack={onBack}>
      <p className="text-center font-label text-sm text-reel-fog sm:text-base">{contact.intro}</p>

      <ul className="mx-auto mt-8 max-w-sm space-y-4">
        {contact.channels.map((channel) => (
          <li
            key={channel.label}
            className="flex items-center justify-between gap-4 border-b border-reel-brass/15 pb-3"
          >
            <span className="font-label text-xs tracking-[0.2em] text-reel-brass/70">
              {channel.label.toUpperCase()}
            </span>
            <a
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
              className="truncate font-label text-sm text-reel-bone/80 transition-colors duration-300 hover:text-reel-brassBright"
            >
              {channel.value}
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
