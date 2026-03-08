"use client"

import React, { useRef } from 'react'
import Container from '../Container'
import { FaReact } from 'react-icons/fa'
import { HOME_DATA } from '@/data/home'
import * as motion from "motion/react-client"
import { useScroll, useTransform } from 'motion/react'

const ExperienceCard = ({ company, index, isLast }: { company: typeof HOME_DATA.EXPERIENCE.companies[0], index: number, isLast: boolean }) => {
  const isEven = index % 2 === 0

  return (
    <>
      {/* Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
        className='group pb-12 md:hidden'
      >
        <div className='space-y-2'>
          {/* Role */}
          <h5 className='text-sm text-muted-foreground group-hover:text-primary 
                       transition-colors duration-300'>
            {company.role}
          </h5>
          
          {/* Company name */}
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight
                       group-hover:text-primary transition-colors duration-300'>
            {company.name}
          </h4>
          
          {/* Duration */}
          <p className='text-sm text-muted-foreground'>
            {company.duration}
          </p>
        </div>
      </motion.div>
      
      {/* Mobile divider with blue accent line */}
      {!isLast && (
        <div className='relative md:hidden mb-12'>
          {/* Blue accent line - above the divider */}
          <motion.div
            className='absolute top-0 left-0 h-[2px] bg-primary'
            initial={{ width: '0px' }}
            whileInView={{ width: '50px' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          />
          {/* Full width divider line */}
          <div className='h-px w-full bg-muted-foreground/10' />
        </div>
      )}

      {/* Desktop Layout with Timeline */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
        className={`hidden md:grid grid-cols-12 gap-8 items-center relative ${index !== HOME_DATA.EXPERIENCE.companies.length - 1 ? 'mb-32' : ''}`}
      >
        {/* Timeline dot with date */}
        <div className='absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10'>
          {/* Date label above dot */}
          <motion.div
            className='mb-3 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full
                     border border-primary/40
                     shadow-lg shadow-primary/20'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          >
            <span className='text-sm font-bold text-primary whitespace-nowrap'>{company.duration}</span>
          </motion.div>
          
          {/* Timeline dot */}
          <motion.div 
            className='size-4 rounded-full bg-primary 
                       shadow-[0_0_20px_rgba(92,149,255,0.6)]
                       border-2 border-background'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          />
        </div>

        {/* Content - alternating sides */}
        <div className={`col-span-5 ${isEven ? 'text-right' : 'col-start-8'}`}>
          <motion.div 
            className='relative group cursor-pointer'
            whileHover={{ x: isEven ? -10 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className='space-y-3'>
              {/* Role */}
              <h5 className='text-base text-muted-foreground group-hover:text-primary 
                           transition-colors duration-300'>
                {company.role}
              </h5>
              
              {/* Company name */}
              <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight
                           group-hover:text-primary transition-colors duration-300'>
                {company.name}
              </h4>
              
              {/* Duration */}
              <p className='text-base text-muted-foreground'>
                {company.duration}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="pb-section" id="experience" ref={containerRef}>
      <Container>
        <div className='flex items-center gap-4 mb-16'>
          <FaReact className="motion-safe:animate-spin duration-7000" size={24} />
          <h3 className='text-xl uppercase leading-none'>{HOME_DATA.EXPERIENCE.title}</h3>
        </div>

        <div className='relative'>
          {/* Timeline line background - Desktop only */}
          <div className='absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-muted-foreground/20 
                        hidden md:block' />
          
          {/* Animated timeline line - Desktop only */}
          <motion.div 
            className='absolute left-1/2 -translate-x-1/2 w-[2px] bg-primary 
                     shadow-[0_0_10px_rgba(92,149,255,0.5)]
                     hidden md:block origin-top'
            style={{ height: lineHeight }}
          />

          {/* Experience cards */}
          <div className='space-y-0 md:space-y-0'>
            {HOME_DATA.EXPERIENCE.companies.map((company, index) => (
              <ExperienceCard 
                key={index} 
                company={company} 
                index={index} 
                isLast={index === HOME_DATA.EXPERIENCE.companies.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience