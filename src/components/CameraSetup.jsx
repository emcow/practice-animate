import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export function CameraSetup({ controlsRef }) {
    const { camera } = useThree()

    useEffect(() => {
        camera.position.set(5, 3, 5)
        
        if (controlsRef.current) {
            controlsRef.current.update();
        }
    }, [camera, controlsRef]);

    return null
}