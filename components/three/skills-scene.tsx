'use client'

import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'
import { SKILL_CATEGORIES } from '@/lib/data'
import { useGpuTier } from './use-gpu-tier'

const CATEGORY_COLORS: Record<string, string> = {
  'ANDROID DEVELOPMENT': '#10b981',
  'WEB DEVELOPMENT': '#00f0ff',
  'DATABASE & BACKEND': '#6366f1',
  'DIGITAL MARKETING & GROWTH': '#f59e0b',
  'DEVELOPMENT TOOLS': '#ec4899',
}

interface SkillNodeData {
  name: string
  level: string
  category: string
  color: string
  position: [number, number, number]
}

function buildNodes(): SkillNodeData[] {
  const nodes: SkillNodeData[] = []
  const categoryCount = SKILL_CATEGORIES.length

  SKILL_CATEGORIES.forEach((cat, ci) => {
    const angle = (ci / categoryCount) * Math.PI * 2
    const anchor: [number, number, number] = [Math.cos(angle) * 3.4, Math.sin(angle) * 2.1, Math.sin(ci) * 0.6]
    const color = CATEGORY_COLORS[cat.category] ?? '#00f0ff'

    cat.skills.forEach((skill, si) => {
      const seed = ci * 31 + si * 17
      const offsetAngle = (seed % 360) * (Math.PI / 180)
      const offsetRadius = 0.55 + ((seed % 7) / 7) * 0.85
      const yJitter = ((seed % 5) - 2) * 0.22
      nodes.push({
        name: skill.name,
        level: skill.level,
        category: cat.category,
        color,
        position: [
          anchor[0] + Math.cos(offsetAngle) * offsetRadius,
          anchor[1] + Math.sin(offsetAngle) * offsetRadius + yJitter,
          anchor[2] + Math.sin(offsetAngle * 1.7) * offsetRadius * 0.5,
        ],
      })
    })
  })

  return nodes
}

function SkillNode({
  data,
  onHover,
}: {
  data: SkillNodeData
  onHover: (d: (SkillNodeData & { x: number; y: number }) | null) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const basePos = useRef(new THREE.Vector3(...data.position))
  const targetOffset = useRef(new THREE.Vector3())
  const hovered = useRef(false)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const lerpSpeed = Math.min(delta * 4, 1)
    meshRef.current.position.lerpVectors(
      meshRef.current.position,
      basePos.current.clone().add(targetOffset.current),
      lerpSpeed
    )
    const targetScale = hovered.current ? 1.6 : 1
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), lerpSpeed)
  })

  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    hovered.current = true
    document.body.style.cursor = 'pointer'
    onHover({ ...data, x: e.clientX, y: e.clientY })
  }

  const handleOut = () => {
    hovered.current = false
    targetOffset.current.set(0, 0, 0)
    document.body.style.cursor = 'default'
    onHover(null)
  }

  const handleMove = (e: ThreeEvent<PointerEvent>) => {
    if (!hovered.current) return
    targetOffset.current.set(e.point.x - data.position[0], e.point.y - data.position[1], 0).multiplyScalar(0.25)
    onHover({ ...data, x: e.clientX, y: e.clientY })
  }

  return (
    <mesh
      ref={meshRef}
      position={data.position}
      onPointerOver={handleOver}
      onPointerOut={handleOut}
      onPointerMove={handleMove}
    >
      <sphereGeometry args={[0.14, 20, 20]} />
      <meshStandardMaterial color={data.color} emissive={data.color} emissiveIntensity={0.6} metalness={0.4} roughness={0.3} />
    </mesh>
  )
}

function ConstellationLines({ nodes }: { nodes: SkillNodeData[] }) {
  const geometry = useMemo(() => {
    const points: number[] = []
    const categories = Array.from(new Set(nodes.map((n) => n.category)))
    categories.forEach((cat) => {
      const catNodes = nodes.filter((n) => n.category === cat)
      for (let i = 0; i < catNodes.length - 1; i++) {
        points.push(...catNodes[i].position, ...catNodes[i + 1].position)
      }
    })
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
    return geo
  }, [nodes])

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00f0ff" transparent opacity={0.12} />
    </lineSegments>
  )
}

function ConstellationGroup({
  onHover,
  reducedMotion,
}: {
  onHover: (d: (SkillNodeData & { x: number; y: number }) | null) => void
  reducedMotion: boolean
}) {
  const groupRef = useRef<THREE.Group>(null)
  const nodes = useMemo(buildNodes, [])

  useFrame((_, delta) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <ConstellationLines nodes={nodes} />
      {nodes.map((n) => (
        <SkillNode key={`${n.category}-${n.name}`} data={n} onHover={onHover} />
      ))}
    </group>
  )
}

export function SkillsScene() {
  const { tier, hasWebGL, isMobile, ready } = useGpuTier()
  const [hovered, setHovered] = useState<(SkillNodeData & { x: number; y: number }) | null>(null)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!ready) return <div className="h-full w-full" />

  if (!hasWebGL || tier === 'low') {
    return (
      <div className="grid grid-cols-2 gap-3 p-2 sm:grid-cols-3">
        {SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.category }))).map((s) => (
          <div
            key={`${s.category}-${s.name}`}
            className="rounded-xl border border-border bg-card/80 px-3 py-2.5 text-xs font-bold text-foreground"
          >
            {s.name}
          </div>
        ))}
      </div>
    )
  }

  const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2]

  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} dpr={dpr} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1} />
        <pointLight color="#00f0ff" position={[5, 5, 5]} intensity={2} />
        <pointLight color="#6366f1" position={[-5, -5, 3]} intensity={1.5} />
        <ConstellationGroup onHover={setHovered} reducedMotion={reducedMotion} />
      </Canvas>

      {hovered && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-[calc(100%+14px)] rounded-xl border border-accent/40 bg-card/95 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl"
          style={{ left: hovered.x, top: hovered.y }}
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: hovered.color }}>
            {hovered.category}
          </p>
          <p className="text-sm font-bold text-foreground">{hovered.name}</p>
          <p className="text-[10px] font-medium text-muted-foreground">{hovered.level}</p>
        </div>
      )}
    </div>
  )
}
