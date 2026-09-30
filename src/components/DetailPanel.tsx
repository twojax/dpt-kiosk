import type { HubPage, Section } from '../content'
import { Asset } from './Asset'

interface Props {
  section: Section
  panel: HubPage['panel']
  active: boolean
}

export function DetailPanel({ section, panel, active }: Props) {
  const titleId = `panel-${section.id}-title`
  return (
    <section
      id={`panel-${section.id}`}
      className="panel"
      data-active={active}
      data-fit={panel.height === undefined}
      aria-hidden={!active}
      inert={!active}
      {...(section.title ? { 'aria-labelledby': titleId } : { 'aria-label': section.label })}
      style={{ left: panel.x, top: section.panelY ?? panel.y, width: panel.width, height: panel.height }}
    >
      <div className="panel-text">
        {section.title && <h2 id={titleId}>{section.title}</h2>}
        <p>{section.body}</p>
      </div>
      <Asset className="panel-image" src={section.image} alt={section.imageAlt} />
    </section>
  )
}
