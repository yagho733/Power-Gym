'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#planos', label: 'Planos' },
  { href: '#diferenciais', label: 'Método' },
  { href: '#imc', label: 'IMC' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-white/10 bg-[#0a0a09]/95 backdrop-blur-xl'
          : 'border-white/10 bg-[#0a0a09]/55 backdrop-blur-md',
      )}
    >
      <div className="container-site flex h-[72px] items-center justify-between lg:h-[82px]">
        <Link href="#inicio" onClick={() => setOpen(false)} className="flex items-end gap-3">
          <span className="display-tight text-[23px] font-semibold leading-none text-white sm:text-[27px]">
            POWER<span className="text-[#f05a28]">/</span>GYM
          </span>
          <span className="hidden pb-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:block">
            Pelotas · RS
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/58 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#f05a28] after:transition-transform hover:text-white hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="#contato" className="inline-flex h-10 items-center gap-2 border border-white/20 px-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#f05a28] hover:text-[#f05a28]">
            Agendar visita
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#f05a28] hover:text-[#f05a28] xl:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn('overflow-hidden transition-all duration-300 xl:hidden', open ? 'max-h-[620px] border-t border-white/10' : 'max-h-0')}>
        <nav className="container-site flex flex-col py-6" aria-label="Navegação mobile">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-4"
            >
              <span className="display-tight text-2xl font-medium text-white">{link.label}</span>
              <span className="text-[10px] font-semibold text-white/35">{String(index + 1).padStart(2, '0')}</span>
            </Link>
          ))}
          <Link href="#contato" onClick={() => setOpen(false)} className="orange-link mt-6 self-start">
            Agendar visita
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
