import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  badge: string
  title: string
  highlight?: string
  description: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-14 md:mb-16 max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <span className="badge-pill">{badge}</span>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl mt-5 mb-4 sm:mb-5">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>
      <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
        {description}
      </p>
    </div>
  )
}
