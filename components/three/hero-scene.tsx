'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGpuTier } from './use-gpu-tier'
import { AbstractLaptop, AbstractPhone, CodeChip, CoreGem, GridFloor, ParticleField } from './scene-objects'
import { PERSONAL_INFO } from '@/lib/data'

const CODE_LABELS: Array<{ label: string; position: [number, number, number]; color?: string }> = [
  { label: 'JAVA', position: [-3.6, 2.1, -1], color: '#10b981' },
  { label: 'NEXT.JS', position: [3.4, 1.6, -0.6], color: '#00f0ff' },
  { label: 'FIREBASE', position: [-3.2, -1.9, -0.8], color: '#f59e0b' },
  { label: 'SEO', position: [3.6, -1.4, -1.2], color: '#ec4899' },
]

function CameraRig({
  scrollRef,
  reducedMotion,
}: {
  scrollRef: React.MutableRefObject<number>
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const { camera, pointer } = useThree()
  const targetRot = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (!groupRef.current) return

    if (!reducedMotion) {
      targetRot.current.y = pointer.x * 0.35
      targetRot.current.x = -pointer.y * 0.22
      groupRef.current.rotation.y += (targetRot.current.y - groupRef.current.rotation.y) * Math.min(delta * 3, 1)
      groupRef.current.rotation.x += (targetRot.current.x - groupRef.current.rotation.x) * Math.min(delta * 3, 1)
    }

    const progress = scrollRef.current
    camera.position.z = 9 - progress * 2.2
    camera.position.y = progress * -0.6
    camera.lookAt(0, -progress * 0.4, 0)
  })

  return (
    <group ref={groupRef}>
      <CoreGem position={[0, 0, 0]} />
      <AbstractLaptop position={[-2.6, -0.4, -0.6]} rotation={[0, 0.35, 0]} />
      <AbstractPhone position={[2.5, -0.2, 0.2]} rotation={[0, -0.4, 0]} />
      {CODE_LABELS.map((chip) => (
        <CodeChip key={chip.label} {...chip} />
      ))}
      <GridFloor />
    </group>
  )
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight color="#00f0ff" position={[5, 8, 6]} intensity={2.2} />
      <pointLight color="#6366f1" position={[-6, -4, 4]} intensity={2.2} distance={20} />
      <pointLight color="#10b981" position={[3, -3, -2]} intensity={1.4} distance={16} />
    </>
  )
}

function StaticFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-accent/15 via-transparent to-transparent sm:h-72 sm:w-72">
        <div className="absolute inset-4 rounded-full border border-accent/20" />
        <span className="font-mono text-4xl font-black text-accent">{PERSONAL_INFO.brandMonogram}</span>
      </div>
    </div>
  )
}

export function HeroScene({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { tier, hasWebGL, isMobile, ready } = useGpuTier()
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!ready) return <div className="h-full w-full" />
  if (!hasWebGL) return <StaticFallback />

  const dpr: [number, number] = tier === 'low' ? [1, 1] : isMobile ? [1, 1.5] : [1, 2]
  const particleCount = tier === 'low' ? 0 : tier === 'medium' ? 120 : 220

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!touch-none"
    >
      <Suspense fallback={null}>
        <SceneLighting />
        <CameraRig scrollRef={scrollRef} reducedMotion={reducedMotion} />
        {particleCount > 0 && <ParticleField count={particleCount} />}
        <fog attach="fog" args={['#050a14', 8, 18]} />
      </Suspense>
    </Canvas>
  )
}
