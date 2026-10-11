import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { SoundProvider } from './context/SoundContext'
import LanguageSelector from './components/LanguageSelector'
import SoundToggle from './components/SoundToggle'
import MistVeil from './components/MistVeil'
import DVDMenu from './components/DVDMenu'
import BackgroundEffects from './components/BackgroundEffects'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SlayerScriptSection from './components/sections/SlayerScriptSection'
import ContactSection from './components/sections/ContactSection'

const SECTIONS = {
  about: AboutSection,
  projects: ProjectsSection,
  slayerscript: SlayerScriptSection,
  contact: ContactSection,
}

// Vive adentro de LanguageProvider/SoundProvider para poder usar ambos contextos.
function Experience() {
  // null = estamos en el menú principal; si no, es la clave de la sección abierta
  const [activeSection, setActiveSection] = useState(null)
  const { lang } = useLanguage()
  const ActiveSectionComponent = activeSection ? SECTIONS[activeSection] : null

  // La key combina pantalla + idioma: así el contenido también hace fundido
  // cuando cambia el idioma, no solo cuando se navega entre secciones.
  const screenKey = `${activeSection ?? 'menu'}-${lang}`

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackgroundEffects />
      <LanguageSelector />
      <SoundToggle />
      <MistVeil />

      <AnimatePresence>
        {ActiveSectionComponent ? (
          <ActiveSectionComponent
            key={screenKey}
            onBack={() => setActiveSection(null)}
            onNavigate={setActiveSection}
          />
        ) : (
          <DVDMenu key={screenKey} onSelect={setActiveSection} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SoundProvider>
        <Experience />
      </SoundProvider>
    </LanguageProvider>
  )
}
