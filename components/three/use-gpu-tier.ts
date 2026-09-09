'use client'

import { useEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu'

export type QualityTier = 'high' | 'medium' | 'low'

interface GpuState {
  tier: QualityTier
  hasWebGL: boolean
  isMobile: boolean
  ready: boolean
}

export function useGpuTier(): GpuState {
  const [state, setState] = useState<GpuState>({
    tier: 'medium',
    hasWebGL: true,
    isMobile: false,
    ready: false,
  })

  useEffect(() => {
    let isMounted = true

    async function detect() {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

      let hasWebGL = true
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
        hasWebGL = !!gl
      } catch {
        hasWebGL = false
      }

      let tier: QualityTier = isMobile ? 'medium' : 'high'
      try {
        const gpu = await getGPUTier()
        if (gpu.tier === 0 || (gpu.fps && gpu.fps < 20)) {
          tier = 'low'
          if (gpu.fps && gpu.fps < 12) hasWebGL = false
        } else if (gpu.tier === 1 || isMobile) {
          tier = 'medium'
        } else {
          tier = 'high'
        }
      } catch {
        tier = isMobile ? 'medium' : 'high'
      }

      if (isMounted) {
        setState({ tier, hasWebGL, isMobile, ready: true })
      }
    }

    detect()
    return () => {
      isMounted = false
    }
  }, [])

  return state
}
