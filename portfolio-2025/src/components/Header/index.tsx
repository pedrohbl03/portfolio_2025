"use client"

import React from 'react'
import ScrollIndicator from '../ScrollIndicator'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header
      className='sticky top-0 z-[4]'
    >
      <button
        className='absolute top-5 right-5 flex flex-col gap-2 group size-12 z-[2] cursor-pointer justify-center items-center'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle Menu'
        aria-expanded={isOpen}
        aria-controls='menu'
      >
        <span className='w-6 h-[2px] bg-primary group-hover:rotate-20 transition-all duration-200' />
        <span className='w-6 h-[2px] bg-primary group-hover:rotate-[-20deg] transition-all duration-200' />
      </button>

      <ScrollIndicator />
    </header>
  )
}

export default Header