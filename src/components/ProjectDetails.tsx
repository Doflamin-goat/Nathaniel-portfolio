import type { Project } from '../data'
import { Screenshot } from './Screenshot'

export function ProjectVisual({ project }: { project: Project }) {
  const primary = project.media?.[0]
  if (primary?.approved || (!primary && project.screenshot)) {
    return <Screenshot src={primary?.src ?? project.screenshot} alt={primary?.alt ?? project.title} caption={primary?.caption} gallery={project.media} />
  }
  return <div className="technical-visual" aria-label={`${project.title} technical overview`}>
    <svg viewBox="0 0 180 72" fill="none" aria-hidden="true">
      <path d="M43 36h94M90 19v34" stroke="currentColor" strokeDasharray="4 4" />
      <rect x="4" y="15" width="39" height="42" rx="8" stroke="currentColor" />
      <rect x="68" y="4" width="44" height="64" rx="8" stroke="currentColor" />
      <rect x="137" y="15" width="39" height="42" rx="8" stroke="currentColor" />
      <path d="M15 27h17M15 35h12M79 18h22M79 28h22M79 38h16M148 27h17M148 35h12" stroke="currentColor" />
    </svg>
    <span>{project.tools.slice(0, 3).join(' · ')}</span>
    <small>{primary ? 'Screenshot withheld pending privacy review' : 'Technical overview · no screenshot supplied'}</small>
  </div>
}

export function ProjectDetails({ project }: { project: Project }) {
  if (!project.functions) return null
  const secondary = project.media?.slice(1) ?? []
  return <details className="project-details">
    <summary>View Details <span className="sr-only">— {project.title}</span></summary>
    <div className="project-details__content">
      <h4>Project overview</h4><p>{project.description}</p>
      <h4>Problem addressed</h4><p>{project.problem}</p>
      <h4>Implemented solution</h4><p>{project.solution}</p>
      <h4>Technical stack</h4><p>{project.tools.join(' · ')}</p>
      <h4>Key functionality</h4><ul>{project.functions.map(item => <li key={item}>{item}</li>)}</ul>
      {project.backend && <><h4>Database Architecture & Backend</h4><p>{project.backend}</p></>}
      {secondary.map(media => media.approved
        ? <Screenshot key={media.src} src={media.src} alt={media.alt} caption={media.caption} gallery={project.media} />
        : <p key={media.src} className="privacy-note">{media.caption}: image withheld pending privacy review.</p>)}
      <h4>{project.status ? 'Development status' : 'Documented outcome'}</h4>
      <p>{project.status ?? project.impact}</p>
    </div>
  </details>
}
