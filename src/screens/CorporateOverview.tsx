import { BACKGROUND, IDLE_TIMEOUT_MS, LOGO } from '../content'
import { useIdle } from '../hooks/useIdle'
import { BackArrow } from '../components/Icons'
import { Logo } from '../components/Logo'

/** Stand-in until the corporate overview comp is built. */
export function CorporateOverview({ onHome }: { onHome: () => void }) {
  useIdle(IDLE_TIMEOUT_MS, onHome)

  return (
    <div className="screen">
      <div className="screen-bg" style={{ backgroundImage: `url(${BACKGROUND})` }} />
      <button type="button" className="back-button" onClick={onHome}>
        <BackArrow />
        <span>Back to Homepage</span>
      </button>
      <h1 className="screen-title">Corporate Overview</h1>
      <Logo className="screen-logo" src={LOGO.small} />
    </div>
  )
}
