'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

const links = [
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Planos', href: '#planos' },
  { label: 'Método', href: '#diferenciais' },
  { label: 'IMC', href: '#imc' },
  { label: 'Contato', href: '#contato' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a09] py-12 text-white sm:py-14">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Link href="#inicio" className="display-tight text-4xl font-semibold sm:text-5xl">
              POWER<span className="text-[#f05a28]">/</span>GYM
            </Link>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/45">
              Força, cardio e condicionamento em uma experiência direta, clara e feita para virar rotina.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end" aria-label="Links do rodapé">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/48 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.13em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Power Gym</span>
            <span>Projeto demonstrativo</span>
            <span>Desenvolvido por Yagho Sites</span>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/55 transition-colors hover:border-[#f05a28] hover:text-[#f05a28]"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
