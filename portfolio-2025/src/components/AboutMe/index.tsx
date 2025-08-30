import React from 'react'
import Container from '../Container'

const AboutMe = () => {
  return (
    <section id="about-me" className='py-16'>
      <Container>
        <div className='eyebrow mb-20'>
          <p className='text-4xl md:text-6xl font-light'>
            I think systems need to be guided by user-centered design, ensuring that each product is not only functional, but truly work with its audience.
          </p>
        </div>

        <div className='main-content'>
          <h2 className='pb-3 border-b text-muted-foreground border-b-muted-foreground'>Get to know me</h2>
          <div className='grid grid-cols-12 gap-4 pt-8'>
            <div className='col-span-12 md:col-span-5'>
              <h3 className='text-4xl'>Hi, I&apos;m Pedro</h3>
            </div>
            <div className='col-span-12 md:col-span-7'>
              <p>
                Having worked as a software developer for five years, I consider myself passionate about creating innovative solutions that positively impact people&apos;s lives. I have experience writing clean, efficient, and high-performance code, always striving for simplicity and quality in software development. I currently prioritize opportunities that can contribute to my learning and growth and that make sense for improving people&apos;s lives.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutMe