import { useState } from 'react'
import { aerosols, development, liquids, semiSolids } from './content'
import { Stage } from './components/Stage'
import { AerosolCan, Droplet, Microscope, SemiSolids } from './components/Icons'
import { HubScreen } from './screens/HubScreen'
import { Home, type Screen } from './screens/Home'

export default function App() {
  const [screen, setScreen] = useState<Screen>('development')
  const goHome = () => setScreen('home')

  return (
    <Stage>
      {screen === 'home' && <Home onOpen={setScreen} />}
      {screen === 'development' && <HubScreen page={development} icon={<Microscope />} onHome={goHome} />}
      {screen === 'semiSolids' && <HubScreen page={semiSolids} icon={<SemiSolids />} onHome={goHome} />}
      {screen === 'liquids' && <HubScreen page={liquids} icon={<Droplet />} onHome={goHome} />}
      {screen === 'aerosols' && <HubScreen page={aerosols} icon={<AerosolCan />} onHome={goHome} />}
    </Stage>
  )
}
