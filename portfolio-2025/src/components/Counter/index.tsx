"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  from?: number
  to: number
  duration?: number
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 1000,
}) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.round(from + (to - from) * progress))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
    return () => {
      start = null
    }
  }, [from, to, duration])

  return (
    <motion.div>
      <span>{count}</span>
    </motion.div>
  )
}

export default Counter