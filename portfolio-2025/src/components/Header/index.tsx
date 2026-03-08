"use client"

import React from 'react'
import ScrollIndicator from '../ScrollIndicator'
import Menu from '../Menu'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header
      className='sticky top-0 z-[50] backdrop-blur-md bg-background/80 border-b border-muted-foreground/10'
    >
      <button
        className='fixed top-5 right-5 flex flex-col gap-2 group size-12 z-[102] cursor-pointer justify-center items-center'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle Menu'
        aria-expanded={isOpen}
        aria-controls='menu'
      >
        <span 
          className={`w-6 h-[2px] bg-primary transition-all duration-300 ${
            isOpen 
              ? 'rotate-45 translate-y-[5px]' 
              : 'group-hover:rotate-12'
          }`} 
        />
        <span 
          className={`w-6 h-[2px] bg-primary transition-all duration-300 ${
            isOpen 
              ? '-rotate-45 -translate-y-[5px]' 
              : 'group-hover:rotate-[-12deg]'
          }`} 
        />
      </button>

      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <ScrollIndicator />
    </header>
  )
}

export default Header