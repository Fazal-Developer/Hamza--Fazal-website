'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { getGPUTier } from 'detect-gpu'

interface NodeData {
  id: string
  label: string
  subtitle: string
  tech: string
  position: [number, number, number]
  color: number
}

const NODES: NodeData[] = [
  {
    id: 'android',
    label: 'ANDROID ARCHITECTURE',
    subtitle: 'Native Mobile Engineering',
    tech: 'Java • Room DB • MVVM • LiveData',
    position: [3.4, 1.8, 0.5],
    color: 0x10b981, // Emerald
  },
  {
    id: 'web',
    label: 'NEXT.JS & WEB SYSTEMS',
    subtitle: 'Full-Stack Performance',
    tech: 'Next.js 16 • React 19 • TypeScript • Tailwind',
    position: [-3.4, 1.6, -0.4],
    color: 0x00f0ff, // Cyan
  },
  {
    id: 'cloud',
    label: 'CLOUD & BACKEND',
    subtitle: 'Realtime Infrastructure',
    tech: 'Firebase • Firestore • REST APIs • Auth',
    position: [2.8, -2.2, -0.8],
    color: 0x6366f1, // Indigo
  },
  {
    id: 'growth',
    label: 'SEO & DIGITAL GROWTH',
    subtitle: 'Organic Visibility & Ranking',
    tech: 'Technical SEO • Analytics • JSON-LD • Vitals',
    position: [-2.9, -2.0, 0.7],
    color: 0xf59e0b, // Amber
  },
  {
    id: 'uiux',
    label: 'UI/UX & INTERACTION',
    subtitle: 'Modern Visual Systems',
    tech: 'Material 3 • 3D Motion • Responsive Design',
    position: [0, 3.6, -0.6],
    color: 0xec4899, // Pink
  },
]

export function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasWebGL, setHasWebGL] = useState<boolean>(true)
  const [activeNode, setActiveNode] = useState<{
    label: string
    subtitle: string
    tech: string
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    let isMounted = true
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    async function checkCapabilities() {
      try {
        const gpu = await getGPUTier()
        if (gpu.fps && gpu.fps < 20) {
          if (isMounted) setHasWebGL(false)
          return
        }
      } catch {
        // Fallback
      }

      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        if (!gl && isMounted) setHasWebGL(false)
      } catch {
        if (isMounted) setHasWebGL(false)
      }
    }

    checkCapabilities()

    if (!containerRef.current) return
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 11)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const primaryLight = new THREE.DirectionalLight(0x00f0ff, 3.5)
    primaryLight.position.set(5, 8, 6)
    scene.add(primaryLight)

    const secondaryLight = new THREE.PointLight(0x6366f1, 3.0, 25)
    secondaryLight.position.set(-6, -6, 5)
    scene.add(secondaryLight)

    const accentLight = new THREE.PointLight(0x10b981, 2.5, 20)
    accentLight.position.set(0, 5, -3)
    scene.add(accentLight)

    // Master Group
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    // 1. Central Engineering Core (Dual Geodesic Core)
    const coreInnerGeo = new THREE.IcosahedronGeometry(1.2, 2)
    const coreInnerMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: false,
    })
    const coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat)
    masterGroup.add(coreInner)

    const coreOuterGeo = new THREE.IcosahedronGeometry(1.5, 1)
    const coreOuterMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    const coreOuter = new THREE.Mesh(coreOuterGeo, coreOuterMat)
    masterGroup.add(coreOuter)

    // 2. Orbital System Rings
    const ringGeo1 = new THREE.TorusGeometry(3.9, 0.025, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.5 })
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ring1.rotation.x = Math.PI / 3
    masterGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(5.0, 0.02, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.4 })
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2)
    ring2.rotation.y = Math.PI / 3.5
    masterGroup.add(ring2)

    // 3. Particle Starfield Constellation
    const particleCount = 280
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16
      particlePositions[i + 1] = (Math.random() - 0.5) * 16
      particlePositions[i + 2] = (Math.random() - 0.5) * 16
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.045,
      transparent: true,
      opacity: 0.6,
    })
    const particlePoints = new THREE.Points(particleGeo, particleMat)
    masterGroup.add(particlePoints)

    // 4. Interactive Capability Nodes
    const nodeMeshes: THREE.Mesh[] = []
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 })

    NODES.forEach((node) => {
      // Node Sphere
      const geo = new THREE.SphereGeometry(0.35, 24, 24)
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        metalness: 0.8,
        roughness: 0.25,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...node.position)
      mesh.userData = node
      masterGroup.add(mesh)
      nodeMeshes.push(mesh)

      // Connection Line to Core (0, 0, 0)
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...node.position),
      ])
      const line = new THREE.Line(lineGeo, lineMat)
      masterGroup.add(line)
    })

    // Mouse & Raycasting
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let targetMouseX = 0
    let targetMouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      mouse.x = (x / rect.width) * 2 - 1
      mouse.y = -(y / rect.height) * 2 + 1

      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.75
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.75

      if (!prefersReducedMotion) {
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(nodeMeshes)
        if (intersects.length > 0) {
          const hit = intersects[0].object
          const data = hit.userData as NodeData
          setActiveNode({
            label: data.label,
            subtitle: data.subtitle,
            tech: data.tech,
            x: e.clientX,
            y: e.clientY,
          })
          document.body.style.cursor = 'pointer'
        } else {
          setActiveNode(null)
          document.body.style.cursor = 'default'
        }
      }
    }
    window.addEventListener('mousemove', onMouseMove)

    // Resize Handler
    const onResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      if (!prefersReducedMotion) {
        masterGroup.rotation.y += (targetMouseX - masterGroup.rotation.y) * 0.035
        masterGroup.rotation.x += (targetMouseY - masterGroup.rotation.x) * 0.035

        coreInner.rotation.y = elapsed * 0.35
        coreOuter.rotation.y = -elapsed * 0.2
        ring1.rotation.z = elapsed * 0.12
        ring2.rotation.z = -elapsed * 0.09
        particlePoints.rotation.y = elapsed * 0.04

        nodeMeshes.forEach((mesh, idx) => {
          mesh.position.y += Math.sin(elapsed * 1.5 + idx * 1.2) * 0.003
        })
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      isMounted = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  if (!hasWebGL) {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
        <div className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent font-mono font-bold text-xl">
            HF
          </div>
          <p className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">
            Muhammad Hamza Fazal
          </p>
          <p className="text-xs text-muted-foreground">
            Android • Next.js Web • Full-Stack Architecture
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

      {/* Interactive 3D Node Hover Tooltip HUD */}
      {activeNode && (
        <div
          className="pointer-events-none fixed z-50 rounded-2xl border border-accent/40 bg-card/95 px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-150 animate-in fade-in zoom-in-95"
          style={{
            left: `${activeNode.x + 16}px`,
            top: `${activeNode.y - 16}px`,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              {activeNode.label}
            </p>
          </div>
          <p className="mt-1 text-xs font-bold text-foreground">{activeNode.subtitle}</p>
          <p className="mt-0.5 text-[11px] font-mono text-muted-foreground">{activeNode.tech}</p>
        </div>
      )}
    </div>
  )
}
