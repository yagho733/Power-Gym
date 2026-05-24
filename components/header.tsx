'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/cta-button'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#planos', label: 'Planos' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#transformacoes', label: 'Transformações' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#imc', label: 'IMC' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong shadow-lg shadow-black/20' : 'glass',
      )}
    >
      <div className="container-tight">
        <div className="flex h-16 items-center justify-between sm:h-[4.5rem] md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
              <Dumbbell className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
              POWER<span className="text-primary">GYM</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CtaButton href="#planos" size="sm">
              Matricule-se Agora
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2.5 text-foreground transition-colors hover:bg-primary/10 hover:text-primary lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'lg:hidden overflow-hidden border-t border-border/50 transition-all duration-300 ease-out',
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 border-transparent',
        )}
      >
        <nav className="container-tight flex flex-col gap-1 py-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <CtaButton
            href="#planos"
            fullWidth
            className="mt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            Matricule-se Agora
          </CtaButton>
        </nav>
      </div>
    </header>
  )
}
