'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier])

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  )
}

// Parallax background image component
interface ParallaxBackgroundProps {
  src?: string
  alt?: string
  className?: string
  speed?: number
  overlay?: boolean
  overlayOpacity?: number
}

export function ParallaxBackground({
  src,
  alt = '',
  className = '',
  speed = 0.3,
  overlay = true,
  overlayOpacity = 0.4,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20" />
        )}
      </motion.div>
      {overlay && (
        <div
          className="absolute inset-0 bg-primary"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  )
}

// Floating parallax element
interface ParallaxFloatProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
}

export function ParallaxFloat({
  children,
  className = '',
  amplitude = 10,
  duration = 6,
}: ParallaxFloatProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Parallax reveal on scroll
interface ParallaxRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ParallaxReveal({
  children,
  className = '',
  delay = 0,
}: ParallaxRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
