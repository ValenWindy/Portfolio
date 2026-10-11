export default function ProjectCard({ project, linkPending, repoLabel, demoLabel }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg border border-reel-brass/20 bg-reel-charcoal/40 p-5 transition-colors hover:border-reel-brass/40">
      <div>
        {/* Imagen del proyecto */}
        {project.image && (
          <div className="mb-4 aspect-video w-full overflow-hidden rounded border border-reel-brass/10 bg-reel-charcoal/60">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg text-reel-bone">{project.name}</h3>
          <span className="font-label text-xs text-reel-brass/70">{project.tagline}</span>
        </div>

        <p className="mt-3 font-label text-xs leading-relaxed text-reel-fog/90">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded border border-reel-brass/15 bg-reel-brass/5 px-2 py-0.5 font-label text-[10px] text-reel-brass/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Enlaces con traducciones dinámicas */}
      <div className="mt-6 flex items-center justify-between border-t border-reel-brass/10 pt-3">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-label text-xs tracking-wider text-reel-brass/80 transition-colors duration-300 hover:text-reel-brassBright"
          >
            {repoLabel} →
          </a>
        ) : (
          <span className="font-label text-xs italic text-reel-fog/50">
            {linkPending}
          </span>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-reel-brass/30 bg-reel-brass/10 px-2.5 py-1 font-label text-xs tracking-wider text-reel-brassBright transition-colors duration-300 hover:border-reel-brassBright hover:bg-reel-brass/20"
          >
            {demoLabel} 🚀
          </a>
        )}
      </div>
    </div>
  )
}
