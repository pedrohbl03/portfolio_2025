import { cn } from '@/utils/cn';
import React from 'react'

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({
  children,
  className = '',
}: IContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container