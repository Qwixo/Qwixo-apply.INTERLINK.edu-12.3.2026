import React from 'react';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

// Create context
const FloatingContext = createContext<{
  x: MotionValue<number>
  y: MotionValue<number>
} | null>(null)

// FloatingElement that reacts to context
export function FloatingElement({
  children,
  depth = 1,
  className,
}: {
  children: ReactNode
  depth?: number
  className?: string
}) {
  const context = useContext(FloatingContext)
  if (!context) return null

  const transformX = useTransform(context.x, (val) => val * depth)
  const transformY = useTransform(context.y, (val) => val * depth)

  return (
    <motion.div
      className={cn("absolute", className)}
      style={{ x: transformX, y: transformY }}
    >
      {children}
    </motion.div>
  )
}

// Floating wrapper
export default function Floating({
  children,
  className,
  sensitivity = -0.15, // make it smoother
}: {
  children: ReactNode
  className?: string
  sensitivity?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  // raw motion values (immediate)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // smoothed values
  const x = useSpring(rawX, { damping: 30, stiffness: 100 })
  const y = useSpring(rawY, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const offsetX = event.clientX - rect.left
      const offsetY = event.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      rawX.set((offsetX - centerX) * sensitivity)
      rawY.set((offsetY - centerY) * sensitivity)
    }

    const node = containerRef.current
    node?.addEventListener("mousemove", handleMouseMove)
    return () => node?.removeEventListener("mousemove", handleMouseMove)
  }, [sensitivity])

  return (
    <FloatingContext.Provider value={{ x, y }}>
      <div
        ref={containerRef}
        className={cn("relative", className)}
        style={{ pointerEvents: "auto" }}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  )
}
