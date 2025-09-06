import React from 'react'
import Container from '../Container'
import { HOME_DATA } from '@/data/home'
import { FaTools } from 'react-icons/fa'


const Skills = () => {
  return (
    <section className="pb-section" id="skills">
      <Container>
        <div className='flex items-center gap-4'>
          <FaTools className="motion-safe:animate-spin duration-7000" size={24}/>
          <h3 className='text-xl uppercase leading-none'>{HOME_DATA.SKILLS.title}</h3>
        </div>
        <div>
          {HOME_DATA.SKILLS.area.map((skillArea, index) => (
            <div key={index} className='grid grid-cols-12 gap-4 pt-8 mb-16'>
              <div className='col-span-12 md:col-span-4 flex'>
                <h4
                  className='font-bold text-3xl leading-[0.8em] uppercase'
                >
                  {/* Add <br /> if have \n */}
                  {skillArea.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h4>
              </div>
              <div className='col-span-12 md:col-span-8'>
                <ul className='flex flex-wrap gap-x-11 gap-y-9'>
                  {skillArea.tools.map((tool, index) => (
                    <li key={index} className='flex items-center gap-4'>
                      <img src={tool.icon} className="max-h-10" alt={tool.name} width={42} height={42} />
                      <h5 className='text-2xl'>{tool.name}</h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container >
    </section>
  )
}

export default Skills