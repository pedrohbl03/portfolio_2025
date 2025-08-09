"use client"

import React from 'react'
import { motion } from "motion/react"
import { BINARY_NAME } from '@/config/binaryName'

export const AnimatedBackground = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {BINARY_NAME.map((binary, index) => (
        <motion.div
          key={index}
          className='absolute text-primary text-sm font-thin'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '100vh', opacity: 1 }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'loop',
            delay: index,
            ease: "linear"
          }}
          style={{ left: `${Math.random() * 100}%` }}
        >
          {binary.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className='block select-none rotate-360 text-center opacity-30'
              style={{ textShadow: '0 0 5px rgba(92, 149, 255, 0.7)' }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
