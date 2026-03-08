"use client"

import React from 'react'
import Container from '../Container'
import { HOME_DATA } from '@/data/home'
import { FaReact } from 'react-icons/fa'
import Image from 'next/image'
import * as motion from "motion/react-client"


const Skills = () => {
  return (
    <section className="pb-section" id="skills">
      <Container>
        <motion.div 
          className='flex items-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <FaReact  className="motion-safe:animate-spin duration-7000" size={24}/>
          <h3 className='text-xl uppercase leading-none'>{HOME_DATA.SKILLS.title}</h3>
        </motion.div>
        <div>
          {HOME_DATA.SKILLS.area.map((skillArea, index) => (
            <motion.div 
              key={index} 
              className='grid grid-cols-12 gap-4 pt-8 mb-16'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className='col-span-12 md:col-span-4 flex'>
                <h4
                  className='font-bold text-2xl md:text-3xl leading-[0.8em] uppercase'
                >

                  {skillArea.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h4>
              </div>
              <div className='col-span-12 md:col-span-8 mt-6 md:mt-0'>
                <ul className='flex flex-wrap gap-x-11 gap-y-9'>
                  {skillArea.tools.map((tool, toolIndex) => (
                    <motion.li 
                      key={toolIndex} 
                      className='flex items-center gap-4'
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + toolIndex * 0.05,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Image src={tool.icon} className="max-h-10" alt={tool.name} width={42} height={42} />
                      <h5 className='text-xl md:text-2xl'>{tool.name}</h5>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container >
    </section>
  )
}

export default Skills