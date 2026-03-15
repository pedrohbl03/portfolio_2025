"use client"

import React from 'react'
import Container from '../Container'
import { FaReact } from 'react-icons/fa'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { Skill } from '@/lib/sanity'

const Skills = ({ skills }: { skills: Skill[] }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryTitles: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    devops: 'DevOps',
    tools: 'Tools',
    other: 'Other'
  }

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
          <h3 className='text-xl uppercase leading-none'>My Skills</h3>
        </motion.div>
        
        {skills.length > 0 ? (
          <div>
            {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
              <motion.div 
                key={category} 
                className='grid grid-cols-12 gap-4 pt-8 mb-16'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className='col-span-12 md:col-span-4 flex'>
                  <h4 className='font-bold text-2xl md:text-3xl leading-[0.8em] uppercase'>
                    {categoryTitles[category] || category}
                  </h4>
                </div>
                <div className='col-span-12 md:col-span-8 mt-6 md:mt-0'>
                  <ul className='flex flex-wrap gap-x-11 gap-y-9'>
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skill._id} 
                        className='flex items-center gap-4'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.15 + skillIndex * 0.05,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        {skill.icon && (
                          <Image 
                            src={skill.icon} 
                            className="max-h-10" 
                            alt={skill.name} 
                            width={42} 
                            height={42} 
                          />
                        )}
                        <h5 className='text-xl md:text-2xl'>{skill.name}</h5>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='text-center py-16'>
            <p className='text-muted-foreground'>No skills added yet.</p>
          </div>
        )}
      </Container >
    </section>
  )
}

export default Skills