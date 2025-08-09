import React from 'react'
import Container from '../Container'
import { HOME_DATA } from '@/data/home'
import { cn } from '@/utils/cn'
import Button from '../Button'

/* interface IHeroProps {
  title: string;
  description: string;
} */

export const Hero = () => {
  return (
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
        <p className='text-muted font-light'>
          {HOME_DATA.HERO.description}
        </p>
        <Button variant='primary' size='sm' className="text-foreground hover:text-primary font-bold">
          HIRE ME
        </Button>
      </div>
    </Container>
  )
}
