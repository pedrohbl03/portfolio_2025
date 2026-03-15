"use client"

import React, { useMemo } from 'react'
import Container from '../Container'
import { FaReact, FaArrowRight } from 'react-icons/fa'
import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import { Project, urlFor } from '@/lib/sanity'

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const imageUrl = project.thumbnail 
    ? urlFor(project.thumbnail).width(800).height(600).url() 
    : '/placeholder-project.jpg'
  
  const projectLink = project.projectUrl || project.githubUrl || `/portfolio/${project.slug.current}`
  return (
    <motion.a
      href={projectLink}
      target={project.projectUrl || project.githubUrl ? '_blank' : '_self'}
      rel={project.projectUrl || project.githubUrl ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className='group block'
    >
      <div className='space-y-4'>
        {/* Image */}
        <div className='relative h-80 overflow-hidden bg-muted-foreground/5'>
          <Image 
            src={imageUrl} 
            alt={project.thumbnail?.alt || project.title}
            fill
            className='object-cover opacity-90 group-hover:opacity-100 
                     group-hover:scale-105 transition-all duration-700'
          />
        </div>

        {/* Content */}
        <div className='space-y-3'>
          {/* Title */}
          <h4 className='text-xl md:text-2xl font-bold text-foreground group-hover:text-primary 
                       transition-colors duration-300'>
            {project.title}
          </h4>
          
          {/* Description */}
          <p className='text-sm text-muted-foreground leading-relaxed'>
            {project.description}
          </p>

          {/* Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className='text-xs text-muted-foreground'
                >
                  {tag}{tagIndex < (project.technologies?.length ?? 0) - 1 ? ' /' : ''}
                </span>
              ))}
            </div>
          )}

          {/* Link indicator */}
          <div className='flex items-center gap-2 text-sm text-primary/70 
                        group-hover:text-primary group-hover:gap-3 
                        transition-all duration-300'>
            <span>View Project</span>
            <FaArrowRight className='text-xs' />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

const Portfolio = ({ projects }: { projects: Project[] }) => {
  // Sort projects by display order
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  }, [projects])

  return (
    <section id="portfolio" className='pb-section'>
      <Container>
        <div className='flex items-center gap-4 mb-16'>
          <FaReact className="motion-safe:animate-spin duration-7000" size={24} />
          <h3 className='text-xl uppercase leading-none'>Featured Projects</h3>
        </div>

        {sortedProjects.length > 0 ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {sortedProjects.slice(0, 4).map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>

            {/* More Projects Button */}
            <motion.div
              className='flex justify-center mt-16'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/portfolio"
                className='group inline-flex items-center gap-3 px-8 py-4 
                         bg-primary/10 hover:bg-primary/20 
                         border border-primary/30 hover:border-primary/50
                         rounded-full transition-all duration-300
                         text-primary font-bold uppercase text-sm tracking-wide'
              >
                <span>More Projects</span>
                <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </motion.div>
          </>
        ) : (
          <div className='text-center py-16'>
            <p className='text-muted-foreground'>No projects yet. Check back soon!</p>
          </div>
        )}
      </Container>
    </section>
  )
}

export default Portfolio