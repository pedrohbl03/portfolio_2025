"use client"

import React from 'react'
import Container from '../Container'
import { FaReact, FaArrowRight, FaClock, FaCalendar } from 'react-icons/fa'
import { HOME_DATA } from '@/data/home'
import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ post, index }: { post: typeof HOME_DATA.BLOG.posts[0], index: number }) => {
  return (
    <motion.a
      href={post.link}
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
        <div className='relative h-64 overflow-hidden bg-muted-foreground/5'>
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className='object-cover opacity-90 group-hover:opacity-100 
                     group-hover:scale-105 transition-all duration-700'
          />
        </div>

        {/* Content */}
        <div className='space-y-3'>
          {/* Meta info */}
          <div className='flex items-center gap-4 text-xs text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <FaCalendar className='text-[10px]' />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className='flex items-center gap-1'>
              <FaClock className='text-[10px]' />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className='text-xl md:text-2xl font-bold text-foreground group-hover:text-primary 
                       transition-colors duration-300'>
            {post.title}
          </h4>
          
          {/* Excerpt */}
          <p className='text-sm text-muted-foreground leading-relaxed'>
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {post.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className='text-xs text-muted-foreground'
              >
                {tag}{tagIndex < post.tags.length - 1 ? ' /' : ''}
              </span>
            ))}
          </div>

          {/* Link indicator */}
          <div className='flex items-center gap-2 text-sm text-primary/70 
                        group-hover:text-primary group-hover:gap-3 
                        transition-all duration-300'>
            <span>Read more</span>
            <FaArrowRight className='text-xs' />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

const BlogPosts = () => {
  return (
    <section id="blog" className='pb-section'>
      <Container>
        <div className='flex items-center gap-4 mb-16'>
          <FaReact className="motion-safe:animate-spin duration-7000" size={24} />
          <h3 className='text-xl uppercase leading-none'>{HOME_DATA.BLOG.title}</h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
          {HOME_DATA.BLOG.posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>

        {/* All Posts Button */}
        <motion.div
          className='flex justify-center mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/blog"
            className='group inline-flex items-center gap-3 px-8 py-4 
                     bg-primary/10 hover:bg-primary/20 
                     border border-primary/30 hover:border-primary/50
                     rounded-full transition-all duration-300
                     text-primary font-bold uppercase text-sm tracking-wide'
          >
            <span>All Posts</span>
            <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform duration-300' />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}

export default BlogPosts
