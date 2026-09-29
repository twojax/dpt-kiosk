import { useState, type MouseEvent } from 'react'
import { BACKGROUND, HUB, IDLE_TIMEOUT_MS, LOGO, sections, type SectionId } from '../content'
import { useIdle } from '../hooks/useIdle'
import { Asset } from '../components/Asset'
import { Connectors } from '../components/Connectors'
import { DetailPanel } from '../components/DetailPanel'
import { HexButton } from '../components/HexButton'
import { BackArrow, Microscope } from '../components/Icons'
import { Logo } from '../components/Logo'

export function Development({ onHome }: { onHome: () => void }) {
  const [open, setOpen] = useState<SectionId | null>(null)

  // Walk-away reset: close the panel and return to the homepage.
  useIdle(IDLE_TIMEOUT_MS, () => {
    setOpen(null)
    onHome()
  })

  const toggle = (id: SectionId) => setOpen((cur) => (cur === id ? null : id))

  // Tapping empty background closes an open panel.
  const onBackgroundTap = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('button, .panel')) setOpen(null)
  }

  const d = HUB.photoRadius * 2

  return (
    <div className="screen screen-development" data-open={open ?? 'none'} onClick={onBackgroundTap}>
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <button type="button" className="back-button" onClick={onHome}>
        <BackArrow />
        <span>Back to Homepage</span>
      </button>

      <h1 className="screen-title">Development</h1>

      <div
        className="hub"
        style={{ left: HUB.cx - HUB.photoRadius, top: HUB.cy - HUB.photoRadius, width: d, height: d }}
      >
        <Asset className="hub-photo" src={HUB.photo} alt="" />
        <div className="hub-icon">
          <Microscope />
        </div>
      </div>

      <Connectors open={open} />

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
        <DetailPanel key={s.id} section={s} active={open === s.id} />
      ))}

      <Logo className="screen-logo" src={LOGO.small} />
    </div>
  )
}
