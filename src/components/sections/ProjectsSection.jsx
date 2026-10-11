import { useLanguage } from '../../context/LanguageContext'
import SectionShell from '../SectionShell'
import ProjectCard from '../ProjectCard'

export default function ProjectsSection({ onBack }) {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <SectionShell sectionKey="projects" title={projects.title} onBack={onBack}>
      <p className="text-center font-label text-sm text-reel-fog sm:text-base">{projects.intro}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            linkPending={projects.linkPending}
            repoLabel={projects.repoLabel}
            demoLabel={projects.demoLabel}
          />
        ))}
      </div>
    </SectionShell>
  )
}
