import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function RBLXCharacter(props) {
  const group = useRef()

  // useFrame((state, delta) => {
  //   if (group.current) {
  //     group.current.rotation.y += delta * 0.5
  //   }
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="body_part"
        geometry={new THREE.BoxGeometry(1, 1, 1)}
        material={new THREE.MeshBasicMaterial({ color: 'rgb(0, 0, 0)' })}
        position={[0, 0, 0]}
      />
    </group>
  )
}