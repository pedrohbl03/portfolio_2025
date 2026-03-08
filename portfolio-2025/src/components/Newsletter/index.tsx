"use client"

import React, { useState } from 'react'
import Container from '../Container'
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa'
import * as motion from "motion/react-client"

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    console.log('Subscribing email:', email)
    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section id="newsletter" className='pb-section'>
      <Container>
        <motion.div
          className='max-w-2xl mx-auto text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            className='inline-flex items-center justify-center w-16 h-16 mb-8
                     bg-primary/10 rounded-full'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaEnvelope className='text-primary text-2xl' />
          </motion.div>

          {/* Title & Description */}
          <motion.h3
            className='text-3xl md:text-4xl font-bold text-foreground mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Stay Updated
          </motion.h3>

          <motion.p
            className='text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Subscribe to get notified about new blog posts, projects, and tech insights
            delivered straight to your inbox.
          </motion.p>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubscribe}
            className='relative max-w-md mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className='w-full px-6 py-4 bg-muted-foreground/5 border border-muted-foreground/20
                       focus:border-primary focus:outline-none rounded-full
                       text-foreground placeholder:text-muted-foreground
                       transition-colors duration-300'
            />
            <button
              type="submit"
              className='absolute right-2 top-1/2 -translate-y-1/2
                       px-6 py-2.5 bg-primary hover:bg-primary/80
                       text-background font-bold rounded-full
                       transition-all duration-300
                       flex items-center gap-2'
            >
              <FaPaperPlane className='text-xs' />
              <span className='hidden sm:inline'>Subscribe</span>
            </button>
          </motion.form>

          {/* Success Message */}
          {isSubscribed && (
            <motion.p
              className='text-sm text-primary text-center mt-4'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Thanks for subscribing! Check your inbox to confirm.
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}

export default Newsletter
