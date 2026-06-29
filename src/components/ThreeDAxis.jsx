import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ThreeDAxis(props) {
  const group = useRef()

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="defaultScene">
        <group>
            
          <mesh
            name="x_axis"
            geometry={new THREE.BoxGeometry( 10, 0.1, 0.1 )}
            material={new THREE.MeshBasicMaterial({ color: '#ff4f4f' })}
            position={[0, 0, 0]}
          />

          <mesh
            name="x_axisN5"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[-5, 0, 0]}
          />
          <mesh
            name="x_axisN4"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[-4, 0, 0]}
          />
          <mesh
            name="x_axisN3"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[-3, 0, 0]}
          />
          <mesh
            name="x_axisN2"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[-2, 0, 0]}
          />
          <mesh
            name="x_axisN1"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[-1, 0, 0]}
          />
          <mesh
            name="x_axisP1"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[1, 0, 0]}
          />
          <mesh
            name="x_axisP2"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[2, 0, 0]}
          />
          <mesh
            name="x_axisP3"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[3, 0, 0]}
          />
          <mesh
            name="x_axisP4"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[4, 0, 0]}
          />
          <mesh
            name="x_axisP5"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#ffa9a9' })}
            position={[5, 0, 0]}
          />






          <mesh
            name="y_axis"
            geometry={new THREE.BoxGeometry( 0.1, 10, 0.1 )}
            material={new THREE.MeshBasicMaterial({ color: '#51ff00' })}
            position={[0, 0, 0]}
          />
          <mesh
            name="y_axisN5"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, -5, 0]}
          />
          <mesh
            name="y_axisN4"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, -4, 0]}
          />
          <mesh
            name="y_axisN3"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, -3, 0]}
          />
          <mesh
            name="y_axisN2"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, -2, 0]}
          />
          <mesh
            name="y_axisN1"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, -1, 0]}
          />
          <mesh
            name="y_axisP1"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, 1, 0]}
          />
          <mesh
            name="y_axisP2"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, 2, 0]}
          />
          <mesh
            name="y_axisP3"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, 3, 0]}
          />
          <mesh
            name="y_axisP4"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, 4, 0]}
          />
          <mesh
            name="y_axisP5"
            geometry={new THREE.BoxGeometry( 0.5, 0.05, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: 'rgb(207, 255, 210)' })}
            position={[0, 5, 0]}
          />






          <mesh
            name="z_axis"
            geometry={new THREE.BoxGeometry( 0.1, 0.1, 10 )}
            material={new THREE.MeshBasicMaterial({ color: '#003cff' })}
            position={[0, 0, 0]}
          />

          <mesh
            name="z_axisN5"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, -5]}
          />
          <mesh
            name="z_axisN4"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, -4]}
          />
          <mesh
            name="z_axisN3"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, -3]}
          />
          <mesh
            name="z_axisN2"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, -2]}
          />
          <mesh
            name="z_axisN1"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, -1]}
          />
          <mesh
            name="z_axisP1"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, 1]}
          />
          <mesh
            name="z_axisP2"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, 2]}
          />
          <mesh
            name="z_axisP3"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, 3]}
          />
          <mesh
            name="z_axisP4"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, 4]}
          />
          <mesh
            name="z_axisP5"
            geometry={new THREE.BoxGeometry( 0.05, 0.5, 0.05 )}
            material={new THREE.MeshBasicMaterial({ color: '#7998ff' })}
            position={[0, 0, 5]}
          />

        </group>
      </group>
    </group>
  )
}