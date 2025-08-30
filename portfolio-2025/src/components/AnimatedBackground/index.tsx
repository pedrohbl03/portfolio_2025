"use client"

import React, { useEffect, useRef, useState } from 'react'
import * as motion from "motion/react-client"
import { BINARY_NAME } from '@/config/binaryName'

export const AnimatedBackground = () => {

  const [positions, setPositions] = useState<Array<number>>([]);

  useEffect(() => {
    const updatePositions = () => {
      setPositions(BINARY_NAME.map(() => Math.random() * 100));
    };

    updatePositions();
  }, []);

  if (!positions.length) return null;

  return (
    <motion.div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {BINARY_NAME.map((binary, index) => (
        <motion.div
          key={index}
          className='absolute text-primary text-sm font-thin'
          initial={{ y: 0, opacity: 0, left: `${positions[index] || Math.random() * 100}%` }}
          animate={{ y: '100vh', opacity: 1 }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'loop',
            delay: Math.random() * 20,
            ease: "linear",
          }}
        >
          {binary.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className='block select-none rotate-360 text-center opacity-50'
              style={{ textShadow: '0 0 5px rgba(92, 149, 255, 0.7)' }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}
