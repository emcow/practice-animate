import { useState, useRef, Suspense, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from "@react-three/drei"
import { RBLXCharacter } from './components/RBLXCharacter'
import { ThreeDAxis } from './components/ThreeDAxis'
import { CameraSetup } from './components/CameraSetup'

function App() {
  const controlsRef = useRef(null)
  const RBLXCharRef = useRef(null)
  const ThreeDAxisRef = useRef(null)

  return (
    <>
      <Canvas>
        <CameraSetup controlsRef={controlsRef} />
        <Suspense fallback={null}>
          <Stage controls={controlsRef}>
            {/* <group ref={RBLXCharRef}>
              <RBLXCharacter />
            </group> */}
            <group ref={ThreeDAxisRef}>
              <ThreeDAxis />
            </group>
          </Stage>
        </Suspense>
        <OrbitControls ref={controlsRef} />
      </Canvas>
    </>
  )
}

export default App
