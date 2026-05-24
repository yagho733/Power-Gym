import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  fullWidth?: boolean
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-sm rounded-lg',
  md: 'px-7 py-3.5 text-sm sm:text-base rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

const variantClasses = {
  primary: 'gradient-btn text-primary-foreground',
  secondary:
    'bg-secondary text-secondary-foreground border border-border hover:border-primary/40 hover:bg-primary/10',
  outline:
    'border border-border bg-transparent hover:border-primary/50 hover:bg-primary/5',
}

export function CtaButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  disabled,
  fullWidth,
}: CtaButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
