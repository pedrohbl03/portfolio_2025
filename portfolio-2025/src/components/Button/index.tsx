"use client"

import { cn } from '@/utils/cn';
import React from 'react'
import { motion } from 'motion/react';
import { FaSpinner } from 'react-icons/fa';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}


const Button = ({
  children,
  onClick,
  className,
  disabled,
  loading,
  variant,
  size,
  fullWidth,
  href,
  target,
  rel,
}: IButtonProps) => {
  const classes = cn(
    'inline-flex items-center justify-center font-medium overflow-hidden transition-colors duration-500',
    disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
    variant === 'primary' ? 'bg-primary text-background' : '',
    variant === 'outline' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : '',
    variant === 'ghost' ? 'bg-transparent text-foreground hover:bg-accent' : '',
    size === 'md' ? 'px-4 py-2 max-w-[200px]' : '',
    size === 'sm' ? 'px-3 py-1.5 text-sm max-w-[150px]' : '',
    size === 'lg' ? 'px-5 py-3 text-lg max-w-[250px]' : '',
    fullWidth ? 'w-full' : '',
    className
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(classes, 'relative group')}
      disabled={disabled || loading}
    >
      <span className='absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150' />

      <span className='z-[1]'>
        {loading ? (
          <span className='animate-spin'>
            <FaSpinner />
          </span>
        ) : (
          children
        )}
      </span>
    </motion.button>

  )
}

export default Button
