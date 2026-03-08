"use client"

import React from 'react'
import Container from '../Container'
import { HOME_DATA } from '@/data/home'
import { cn } from '@/utils/cn'
import Button from '../Button'
import Counter from '../Counter'
import * as motion from "motion/react-client"

/* interface IHeroProps {
  title: string;
  description: string;
} */

export const Hero = () => {
  return (
    <section id="hero">
      <Container className='h-[100svh] flex items-center relative'>
        <div className='max-w-[540px] flex flex-col gap-4'>
          <motion.h1 
            className={"font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.8em]"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {HOME_DATA.HERO.title.split(' ').map((word, index) => {
              return (
                <motion.span 
                  key={index} 
                  className={cn(
                    'block',
                    index % 2 === 0 ? 'text-primary' : 'text-foreground',
                    index !== 0 ? 'ml-4' : '',
                  )}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.h1>
          <motion.p 
            className='font-light'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {HOME_DATA.HERO.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <Button variant='primary' size='sm' className="text-foreground hover:text-primary font-bold">
              HIRE ME
            </Button>
          </motion.div>
        </div>


      <div className='absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />   
      
      </Container>

      <motion.div 
        className='right-[4%] bottom-[10%] absolute text-end flex flex-col gap-8 hidden md:flex'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className='flex flex-col'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <span
            className='text-2xl md:text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={5} delay={1900} />
            +</span>
          <p className='text-sm font-light'>Years of Experience</p>
        </motion.div>
        <motion.div 
          className='flex flex-col'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span
            className='text-2xl md:text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={15} delay={2100} />+</span>
          <p className='text-sm font-light'>Completed Projects</p>
        </motion.div>
        <motion.div 
          className='flex flex-col'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <span
            className='text-2xl md:text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={100} delay={2300} />
            +</span>
          <p className='text-sm font-light'>Happy Clients</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
