import type { HubPage, Section } from '../content'
import { Asset } from './Asset'

interface Props {
  section: Section
  panel: HubPage['panel']
  active: boolean
}

export function DetailPanel({ section, panel, active }: Props) {
  const titleId = `panel-${section.id}-title`
  const fit = panel.height === undefined || !section.title
  return (
    <section
      id={`panel-${section.id}`}
      className="panel"
      data-active={active}
      data-fit={fit}
      aria-hidden={!active}
      inert={!active}
      {...(section.title ? { 'aria-labelledby': titleId } : { 'aria-label': section.label })}
      style={{ left: panel.x, top: section.panelY ?? panel.y, width: panel.width, height: fit ? undefined : panel.height }}
    >
      <div className="panel-text">
        {section.title && <h2 id={titleId}>{section.title}</h2>}
        {Array.isArray(section.body) ? (
          <ul>
            {section.body.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{section.body}</p>
        )}
      </div>
      <Asset className="panel-image" src={section.image} alt={section.imageAlt} />
    </section>
  )
}
