'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const CYAN = '#00f0ff'
const INDIGO = '#6366f1'
const EMERALD = '#10b981'

export function ParticleField({ count = 220, radius = 9 }: { count?: number; radius?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = radius * (0.4 + Math.random() * 0.6)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={CYAN} size={0.035} transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

export function CoreGem({ position = [0, 0, 0] as [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  return (
    <group position={position} ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshPhysicalMaterial
          color={CYAN}
          transmission={0.85}
          roughness={0.08}
          thickness={1.2}
          ior={1.4}
          metalness={0.1}
          clearcoat={1}
          emissive={CYAN}
          emissiveIntensity={0.12}
        />
      </mesh>
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color={INDIGO} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export function AbstractLaptop({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
}) {
  return (
    <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.25}>
      <group position={position} rotation={rotation}>
        {/* base */}
        <RoundedBox args={[1.9, 0.08, 1.3]} radius={0.04} position={[0, -0.55, 0]}>
          <meshStandardMaterial color="#1a1f2e" metalness={0.7} roughness={0.3} />
        </RoundedBox>
        {/* screen */}
        <group position={[0, 0.05, -0.62]} rotation={[-0.25, 0, 0]}>
          <RoundedBox args={[1.9, 1.2, 0.06]} radius={0.04}>
            <meshStandardMaterial color="#1a1f2e" metalness={0.7} roughness={0.3} />
          </RoundedBox>
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[1.68, 1.0]} />
            <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.4} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

export function AbstractPhone({
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
}) {
  return (
    <Float speed={1.4} floatIntensity={0.7} rotationIntensity={0.3}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[0.62, 1.28, 0.09]} radius={0.09}>
          <meshStandardMaterial color="#1a1f2e" metalness={0.65} roughness={0.32} />
        </RoundedBox>
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[0.52, 1.12]} />
          <meshStandardMaterial color={EMERALD} emissive={EMERALD} emissiveIntensity={1.3} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

export function CodeChip({
  label,
  position,
  color = CYAN,
}: {
  label: string
  position: [number, number, number]
  color?: string
}) {
  return (
    <Float speed={1.6} floatIntensity={1} rotationIntensity={0.15}>
      <group position={position}>
        <RoundedBox args={[label.length * 0.135 + 0.32, 0.36, 0.04]} radius={0.14}>
          <meshPhysicalMaterial
            color="#0d1220"
            transmission={0.55}
            roughness={0.25}
            thickness={0.4}
            transparent
            opacity={0.85}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.15}
          color={color}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.02}
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

export function GridFloor() {
  const gridTexture = useMemo(() => {
    const size = 512
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)'
      ctx.lineWidth = 1
      const step = size / 16
      for (let i = 0; i <= 16; i++) {
        ctx.beginPath()
        ctx.moveTo(i * step, 0)
        ctx.lineTo(i * step, size)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, i * step)
        ctx.lineTo(size, i * step)
        ctx.stroke()
      }
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(6, 6)
    return tex
  }, [])

  return (
    <mesh rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -3.4, -2]}>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial map={gridTexture} transparent opacity={0.28} depthWrite={false} />
    </mesh>
  )
}
