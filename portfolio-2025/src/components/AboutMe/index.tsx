"use client"

import React from 'react'
import Container from '../Container'
import * as motion from "motion/react-client"

const AboutMe = () => {
  return (
    <section id="about-me" className='pb-section'>
      <Container>
        <motion.div 
          className='eyebrow mb-20'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className='text-3xl md:text-4xl lg:text-6xl font-light'>
            I think systems need to be guided by user-centered design, ensuring that each product is not only functional, but truly work with its audience.
          </p>
        </motion.div>

        <div className='main-content'>
          <motion.h2 
            className='pb-3 border-b text-muted-foreground border-b-muted-foreground'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know me
          </motion.h2>
          <div className='grid grid-cols-12 gap-4 pt-8'>
            <motion.div 
              className='col-span-12 md:col-span-5'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className='text-3xl md:text-4xl'>Hi, I&apos;m Pedro</h3>
            </motion.div>
            <motion.div 
              className='col-span-12 md:col-span-7'
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p>
                Having worked as a software developer for five years, I consider myself passionate about creating innovative solutions that positively impact people&apos;s lives. I have experience writing clean, efficient, and high-performance code, always striving for simplicity and quality in software development. I currently prioritize opportunities that can contribute to my learning and growth and that make sense for improving people&apos;s lives.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutMe