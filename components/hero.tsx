import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Play } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Academia POWER GYM com equipamentos premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>

      <div className="mesh-bg" aria-hidden />

      <div className="relative z-10 container-tight pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-2 sm:mb-8 sm:px-4 sm:py-2.5">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-primary"
                style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
              />
              <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                Academia Premium #1 do Brasil
              </span>
            </div>

            <h1 className="font-display mb-5 text-[2rem] font-bold leading-[1.1] tracking-tight sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">Supere seus</span>
              <br />
              <span className="text-gradient">Limites.</span>
              <br />
              <span className="text-foreground">Transforme sua</span>
              <br />
              <span className="text-gradient">Vida.</span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:text-xl lg:mx-0">
              Equipamentos de última geração, personal trainers certificados e um
              ambiente motivador para você alcançar resultados extraordinários.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
              <CtaButton href="#planos" size="lg" className="sm:min-w-[220px]">
                Matricule-se Agora
                <ChevronRight className="h-5 w-5" />
              </CtaButton>
              <Link
                href="#equipe"
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-border/80 bg-background/20 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 transition-colors group-hover:bg-primary/25">
                  <Play className="h-4 w-4 fill-primary text-primary" />
                </div>
                <span className="font-medium">Conheça a Academia</span>
              </Link>
            </div>

            <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border/40 pt-8 sm:mt-14 sm:gap-6 sm:pt-10 lg:mx-0 lg:max-w-xl">
              {[
                { value: '5000+', label: 'Alunos Ativos' },
                { value: '15+', label: 'Anos de Mercado' },
                { value: '98%', label: 'Satisfação' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-bold tabular-nums text-primary sm:text-3xl md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Role para baixo
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-muted-foreground/25 pt-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
