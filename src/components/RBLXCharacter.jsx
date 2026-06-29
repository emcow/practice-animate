import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export function RBLXCharacter(props) {
  const group = useRef()

  // useFrame((state, delta) => {
  //   if (group.current) {
  //     group.current.rotation.y += delta * 0.5
  //   }
  // })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="defaultScene">
        <group>
          <mesh
            name="left_leg"
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(1, 1.75, 1)}
            material={new THREE.MeshBasicMaterial({ color: '#4fd3ff' })}
            position={[0, 0, -0.5]}
          />
          <mesh
            name="right_leg"
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(1, 1.75, 1)}
            material={new THREE.MeshBasicMaterial({ color: '#4fd3ff' })}
            position={[0, 0, 0.5]}
          />
          <mesh
            name="torso"
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(1, 1.75, 2)}
            material={new THREE.MeshBasicMaterial({ color: '#4fff7b' })}
            position={[0, 1.75, 0]}
          />
          <mesh
            name="left_arm"
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(1, 1.75, 1)}
            material={new THREE.MeshBasicMaterial({ color: '#ffff00' })}
            position={[0, 1.75, -1.5]}
          />
          <mesh
            name="right_arm"
            castShadow
            receiveShadow
            geometry={new THREE.BoxGeometry(1, 1.75, 1)}
            material={new THREE.MeshBasicMaterial({ color: '#ffff00' })}
            position={[0, 1.75, 1.5]}
          />
          <mesh
            name="head"
            castShadow
            receiveShadow
            geometry={new THREE.CylinderGeometry(0.65, 0.65, 1, 16)}
            material={new THREE.MeshBasicMaterial({ color: '#ffff00' })}
            position={[0, 3.1, 0]}
          />
        </group>
      </group>
    </group>
  )
}