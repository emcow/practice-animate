import { useState, Suspense, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei"
import { Bobashop } from './components/Bobashop'
import { MouseClickInteraction } from './components/MouseClickInteraction'
import { MouseHoverInteraction } from './components/MouseHoverInteraction'
import { CameraSetup } from './components/CameraSetup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <CameraSetup controlsRef={controlsRef} />
                <MouseHoverInteraction 
                    bobaShopRef={bobaShopRef} 
                    hoverEnabled={hoverEnabled}
                />
                <MouseClickInteraction 
                    bobaShopRef={bobaShopRef} 
                    onMeshClick={handleMeshClick}
                />
                <Suspense fallback={null}>
                    <Stage controls={controlsRef}>
                        <group ref={bobaShopRef}>
                            <Bobashop />
                        </group>
                    </Stage>
                </Suspense>
                <OrbitControls ref={controlsRef} />
      </Canvas>
    </>
  )
}

export default App
