import React from 'react'
import Container from '../Container'
import { HOME_DATA } from '@/data/home'
import { cn } from '@/utils/cn'
import Button from '../Button'
import Counter from '../Counter'
import ScrollIndicator from '../ScrollIndicator'

/* interface IHeroProps {
  title: string;
  description: string;
} */

export const Hero = () => {
  return (
    <>
      <Container className='h-[100svh] flex items-center relative'>
        <div className='max-w-[540px] flex flex-col gap-4'>
          <h1 className={"font-bold text-6xl leading-[0.8em]"}>
            {HOME_DATA.HERO.title.split(' ').map((word, index) => {
              return (
                <span key={index} className={cn(
                  'block',
                  index % 2 === 0 ? 'text-primary' : 'text-foreground',
                  index !== 0 ? 'ml-4' : '',
                )}>
                  {word}
                </span>
              )
            })}
          </h1>
          <p className='font-light'>
            {HOME_DATA.HERO.description}
          </p>
          <Button variant='primary' size='sm' className="text-foreground hover:text-primary font-bold">
            HIRE ME
          </Button>
        </div>
        {/*   

      it is some lights effect

      <div className='absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />
      <div className='absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10' />   
      
      */}
      </Container>

      <div className='right-[4%] bottom-[10%] absolute text-end flex flex-col gap-8'>
        <div className='flex flex-col'>
          <span
            className='text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={5} />
            +</span>
          <p className='text-sm font-light'>Years of Experience</p>
        </div>
        <div className='flex flex-col'>
          <span
            className='text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={15} />+</span>
          <p className='text-sm font-light'>Completed Projects</p>
        </div>
        <div className='flex flex-col'>
          <span
            className='text-3xl font-bold text-primary inline-flex justify-end'
          >
            <Counter from={0} to={100} />
            +</span>
          <p className='text-sm font-light'>Happy Clients</p>
        </div>
      </div>
    </>
  )
}
