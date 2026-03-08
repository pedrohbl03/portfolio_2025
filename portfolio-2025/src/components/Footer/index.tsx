"use client"

import React from 'react'
import Container from '../Container'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si'
import * as motion from "motion/react-client"

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/pedrohbl03"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      link: "mailto:your.email@example.com"
    }
  ]

  return (
    <footer className='border-t border-muted-foreground/10 py-16'>
      <Container>
        <div className='flex flex-col items-center gap-12'>
          {/* Social Links */}
          <motion.div
            className='flex flex-wrap justify-center gap-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group flex flex-col items-center gap-3 text-muted-foreground 
                           hover:text-primary transition-colors duration-300'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Icon size={28} />
                  <span className='text-sm font-medium'>{social.name}</span>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Tech Stack Badge */}
          <motion.div
            className='flex flex-col items-center gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className='text-xs text-muted-foreground uppercase tracking-wide'>Built with</p>
            <div className='flex flex-wrap justify-center gap-6'>
              {[
                { icon: SiNextdotjs, name: 'Next.js' },
                { icon: FaReact, name: 'React' },
                { icon: SiTypescript, name: 'TypeScript' },
                { icon: SiTailwindcss, name: 'Tailwind CSS' },
                { icon: SiFramer, name: 'Framer Motion' }
              ].map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    className='flex items-center gap-2 text-muted-foreground
                             hover:text-primary transition-colors duration-300'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon size={18} />
                    <span className='text-xs font-medium'>{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Divider */}
          <div className='w-full max-w-md h-px bg-muted-foreground/10' />

          {/* Copyright */}
          <motion.div
            className='flex flex-col items-center gap-2 text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className='text-sm text-muted-foreground flex items-center gap-2'>
              Made with <FaHeart className='text-primary text-xs' /> by Pedro Lima
            </p>
            <p className='text-xs text-muted-foreground'>
              © {new Date().getFullYear()} Pedro Lima. All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
