import { cn } from '@/utils/cn'
import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-600 z-50">
      <motion.div className={cn("h-full bg-primary transition-all duration-300 ease-in-out")} style={{ width }} />
    </div>
  )
}

export default ScrollIndicator