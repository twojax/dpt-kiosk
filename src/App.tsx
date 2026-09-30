import { useState } from 'react'
import {
  aerosols, analytics, commercialSupply, development, liquids, semiSolids, type Screen,
} from './content'
import { Stage } from './components/Stage'
import { AerosolCan, Analytics, Droplet, Globe, Microscope, SemiSolids } from './components/Icons'
import { CorporateOverview } from './screens/CorporateOverview'
import { HubScreen } from './screens/HubScreen'
import { Home } from './screens/Home'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const goHome = () => setScreen('home')

  return (
    <Stage>
      {screen === 'home' && <Home onOpen={setScreen} />}
      {screen === 'corporateOverview' && <CorporateOverview onHome={goHome} />}
      {screen === 'development' && <HubScreen page={development} icon={<Microscope />} onHome={goHome} />}
      {screen === 'semiSolids' && <HubScreen page={semiSolids} icon={<SemiSolids />} onHome={goHome} />}
      {screen === 'liquids' && <HubScreen page={liquids} icon={<Droplet />} onHome={goHome} />}
      {screen === 'aerosols' && <HubScreen page={aerosols} icon={<AerosolCan />} onHome={goHome} />}
      {screen === 'analytics' && <HubScreen page={analytics} icon={<Analytics />} onHome={goHome} />}
      {screen === 'commercialSupply' && (
        <HubScreen page={commercialSupply} icon={<Globe />} onHome={goHome} />
      )}
    </Stage>
  )
}
