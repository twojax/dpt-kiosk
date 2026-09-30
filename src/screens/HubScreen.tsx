import { useState, type MouseEvent, type ReactNode } from 'react'
import { BACKGROUND, IDLE_TIMEOUT_MS, LOGO, type HubPage } from '../content'
import { useIdle } from '../hooks/useIdle'
import { Asset } from '../components/Asset'
import { Connectors } from '../components/Connectors'
import { DetailPanel } from '../components/DetailPanel'
import { HexButton } from '../components/HexButton'
import { BackArrow } from '../components/Icons'
import { Logo } from '../components/Logo'

/** A hub photo with an arc of buttons, each opening a detail panel. */
export function HubScreen({ page, icon, onHome }: { page: HubPage; icon: ReactNode; onHome: () => void }) {
  const { hub, panel, sections } = page
  const [open, setOpen] = useState<string | null>(null)

  // Walk-away reset: close the panel and return to the homepage.
  useIdle(IDLE_TIMEOUT_MS, () => {
    setOpen(null)
    onHome()
  })

  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id))

  // Tapping empty background closes an open panel.
  const onBackgroundTap = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('button, .panel')) setOpen(null)
  }

  const d = hub.photoRadius * 2

  return (
    <div className="screen" data-page={page.id} data-open={open ?? 'none'} onClick={onBackgroundTap}>
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <button type="button" className="back-button" onClick={onHome}>
        <BackArrow />
        <span>Back to Homepage</span>
      </button>

      <h1 className="screen-title">{page.title}</h1>

      <div
        className="hub"
        style={{ left: hub.cx - hub.photoRadius, top: hub.cy - hub.photoRadius, width: d, height: d }}
      >
        <Asset className="hub-photo" src={hub.photo} alt="" />
        <div className="hub-icon">{icon}</div>
      </div>

      <Connectors page={page} open={open} />

      {sections.map((s) => (
        <HexButton
          key={s.id}
          label={s.label}
          x={s.pill.x}
          y={s.pill.y}
          active={open === s.id}
          controls={`panel-${s.id}`}
          onPress={() => toggle(s.id)}
        />
      ))}

      {/* All panels stay mounted so their images are loaded before first tap. */}
      {sections.map((s) => (
        <DetailPanel key={s.id} section={s} panel={panel} active={open === s.id} />
      ))}

      <Logo className="screen-logo" src={LOGO.small} />
    </div>
  )
}
