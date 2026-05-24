'use client'

import Link from 'next/link'
import { Dumbbell, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'

const footerLinks = {
  company: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Carreiras', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  services: [
    { label: 'Musculação', href: '#' },
    { label: 'Aulas Coletivas', href: '#' },
    { label: 'Personal Training', href: '#' },
    { label: 'Nutrição', href: '#' },
  ],
  support: [
    { label: 'FAQ', href: '#' },
    { label: 'Contato', href: '#contato' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-secondary/40 pt-16 pb-8 sm:pt-20">
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <div className="mb-12 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 flex items-center gap-2.5 sm:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">
                POWER<span className="text-primary">GYM</span>
              </span>
            </Link>
            <div className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Transformando vidas através do fitness há mais de 15 anos. Nossa
              missão é ajudar você a alcançar seu melhor físico e mental.
            </div>
            <CtaButton href="#planos" size="sm" className="mb-6 sm:mb-8">
              Começar Agora
            </CtaButton>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all duration-300 hover:border-primary/40 hover:bg-primary/15"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {(
            [
              { title: 'Empresa', links: footerLinks.company },
              { title: 'Serviços', links: footerLinks.services },
              { title: 'Suporte', links: footerLinks.support },
            ] as const
          ).map((group) => (
            <div key={group.title}>
              <h4 className="font-display mb-4 font-bold">{group.title}</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p
            className="text-center text-sm text-muted-foreground sm:text-left"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} POWER GYM. Todos os direitos reservados.
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
