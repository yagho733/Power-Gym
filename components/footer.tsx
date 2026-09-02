'use client'

import Link from 'next/link'
import { ArrowUp, Dumbbell } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const links = [
  { label: 'Planos', href: '#planos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Calculadora de IMC', href: '#imc' },
  { label: 'Contato', href: '#contato' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-secondary/40 pt-14 pb-8 sm:pt-16">
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <div className="mb-10 grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                POWER<span className="text-primary">GYM</span>
              </span>
            </Link>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Modelo demonstrativo de site para academias. Identidade, textos,
              fotos, planos e contatos são personalizados para cada cliente.
            </p>

            <CtaButton href="#contato" size="sm" className="mt-6">
              Ver contato demonstrativo
            </CtaButton>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:justify-start lg:justify-end"
            aria-label="Links do rodapé"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p
            className="text-center text-sm text-muted-foreground sm:text-left"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} POWER GYM • Projeto demonstrativo
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
