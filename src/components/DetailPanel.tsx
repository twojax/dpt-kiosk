import { PANEL, type Section } from '../content'
import { Asset } from './Asset'

export function DetailPanel({ section, active }: { section: Section; active: boolean }) {
  return (
    <section
      id={`panel-${section.id}`}
      className="panel"
      data-active={active}
      aria-hidden={!active}
      inert={!active}
      aria-labelledby={`panel-${section.id}-title`}
      style={{ left: PANEL.x, top: PANEL.y, width: PANEL.width, height: PANEL.height }}
    >
      <div className="panel-text">
        <h2 id={`panel-${section.id}-title`}>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <Asset className="panel-image" src={section.image} alt={section.imageAlt} />
    </section>
  )
}
