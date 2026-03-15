"use client"

import React, { useEffect, useState } from 'react'
import * as motion from "motion/react-client"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Me', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
]

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const [maxDiameter, setMaxDiameter] = useState(3000)

  useEffect(() => {
    // Calculate the diameter needed to cover the entire screen from top-right corner
    const diameter = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) * 2
    setMaxDiameter(diameter)
  }, [])

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClick = (href: string) => {
    onClose()
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Circular Expanding Backdrop */}
      <motion.div
        className='fixed inset-0 z-[100]'
        initial={{
          clipPath: 'circle(0px at calc(100% - 41px) 41px)',
          opacity: 0
        }}
        animate={{
          clipPath: isOpen
            ? `circle(${maxDiameter}px at calc(100% - 41px) 41px)`
            : 'circle(0px at calc(100% - 41px) 41px)',
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          backgroundColor: 'rgba(23, 23, 23, 0.98)',
          backdropFilter: 'blur(12px)',
          width: '100vw',
          height: '100vh'
        }}
        onClick={onClose}
      />

      {/* Menu Content */}
      <motion.nav
        className='fixed inset-0 z-[101] flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          delay: isOpen ? 0.2 : 0,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          width: '100vw',
          height: '100vh'
        }}
      >
        <ul className='flex flex-col gap-8 text-center items-center'>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : 50
              }}
              transition={{
                duration: 0.4,
                delay: isOpen ? 0.3 + index * 0.08 : 0,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <button
                onClick={() => handleClick(item.href)}
                className='text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight
                         hover:text-primary transition-colors duration-300 
                         relative group cursor-pointer'
              >
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-1 bg-primary 
                               group-hover:w-full transition-all duration-500' />
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  )
}

export default Menu
