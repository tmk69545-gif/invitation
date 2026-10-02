// WebGL scene — soft gold halo + dust particles
// Kept intentionally minimal as per design system
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function HaloOrb() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = state.clock.elapsedTime * 0.04
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.08
  })

  return (
    <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={mesh} scale={2.6}>
        <torusGeometry args={[1, 0.022, 16, 96]} />
        <meshBasicMaterial color="#C4A05A" transparent opacity={0.22} />
      </mesh>
    </Float>
  )
}

function InnerRing() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = -state.clock.elapsedTime * 0.025
  })
  return (
    <mesh ref={mesh} scale={1.7}>
      <torusGeometry args={[1, 0.012, 12, 80]} />
      <meshBasicMaterial color="#E1C98F" transparent opacity={0.15} />
    </mesh>
  )
}

export default function InvitationScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Sparkles
          count={28}
          scale={[9, 6, 3]}
          size={1.0}
          speed={0.14}
          color="#E1C98F"
          opacity={0.7}
        />
        <HaloOrb />
        <InnerRing />
      </Canvas>
    </div>
  )
}
