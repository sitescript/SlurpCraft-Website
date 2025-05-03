"use client"

import { useState, useEffect } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  color: string
}

export function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const initialDots: Dot[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)`,
    }))

    setDots(initialDots)

    const interval = setInterval(() => {
      if (isVisible) {
        setDots((prevDots) =>
          prevDots.map((dot) => ({
            ...dot,
            x: (dot.x + dot.speedX + 100) % 100,
            y: (dot.y + dot.speedY + 100) % 100,
          })),
        )
      }
    }, 50)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-4 right-4 pointer-events-auto z-50">
        <button
          onClick={() => setIsVisible(false)}
          className="bg-primary/20 text-primary rounded-full p-2 text-xs"
          aria-label="Hide floating dots"
        >
          Hide Particles
        </button>
      </div>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            transition: "transform 0.5s ease-out",
          }}
        />
      ))}
    </div>
  )
}
