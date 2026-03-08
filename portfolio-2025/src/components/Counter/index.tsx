"use client"

import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'motion/react'

interface CounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 1500,
  delay = 0,
}) => {
  const [count, setCount] = useState(from)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView || hasAnimated) return

    const delayTimeout = setTimeout(() => {
      setHasAnimated(true)
      let start: number | null = null
      
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setCount(Math.floor(from + (to - from) * progress))
        
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      
      requestAnimationFrame(step)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [from, to, duration, delay, isInView, hasAnimated])

  return <span ref={ref}>{count}</span>
}

export default Counter