import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Play, Clock3, Users, MessageCircle } from 'lucide-react'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-zinc-950 select-none"
    >
      {/* BACKGROUND COM FILTROS DE LUZ PREMIUN */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Academia POWER GYM com equipamentos premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.3] contrast-[1.05]"
        />
        {/* Gradientes de Fusão de Cores */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent lg:from-zinc-950 lg:via-zinc-950/85 lg:to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        {/* Efeitos de Iluminação Futurista (Glow) */}
        <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[130px]" />
        
        {/* Overlay sutil de Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-zinc-950/20 to-zinc-950 opacity-60 grid-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
            
            {/* Tag Badge com Glassmorphism Avançado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/30 bg-zinc-900/40 px-4 py-2 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-primary/30 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent sm:text-sm">
                Modelo demonstrativo para academias
              </span>
            </div>

            {/* Tipografia Impactante de Startup */}
            <h1 className="font-display mb-6 text-[2.5rem] font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              TREINE DO SEU <br className="hidden sm:inline" />
              <span className="relative inline-block mt-1">
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-orange-600 opacity-20 blur-md" />
                <span className="relative bg-gradient-to-r from-primary via-orange-500 to-amber-400 bg-clip-text font-black text-transparent">
                  JEITO.
                </span>
              </span>
            </h1>

            {/* Descrição Alinhada com UX Aprimorada */}
            <div className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400 font-normal sm:mb-12 sm:text-lg md:text-xl lg:mx-0 lg:max-w-2xl">
              Uma academia completa, com orientação próxima e uma rotina de treino que cabe na sua vida. Venha conhecer o espaço e conversar com a equipe.
            </div>

            {/* CTAs Interativos com Efeitos Hover Modernos */}
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
              <CtaButton 
                href="#planos" 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-orange-600 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/40 sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver planos e horários
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </CtaButton>
              
              <Link
                href="#estrutura"
                className="group flex items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/20 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-800 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10">
                  <Play className="h-4 w-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-95" />
                </div>
                <span className="text-sm font-bold tracking-wide text-zinc-300 transition-colors group-hover:text-white">
                  Conhecer a estrutura
                </span>
              </Link>
            </div>

            {/* Seção de Estatísticas Premium com Mini-Ícones */}
            <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-zinc-800/60 pt-8 sm:mt-16 sm:gap-8 sm:pt-10 lg:mx-0 lg:max-w-2xl">
              {[
                { value: 'Flexível', label: 'Horários de treino', icon: Clock3 },
                { value: 'Próximo', label: 'Acompanhamento', icon: Users },
                { value: 'Direto', label: 'Contato no WhatsApp', icon: MessageCircle },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center lg:text-left group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 justify-center lg:justify-start mb-1">
                      <Icon className="h-4 w-4 text-zinc-500 mx-auto lg:mx-0 transition-colors duration-300 group-hover:text-primary" />
                      <div className="font-display text-2xl font-black tabular-nums text-white sm:text-3xl md:text-4xl">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-[11px] font-medium tracking-wide uppercase text-zinc-500 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Indicador de Scroll Clean e Minimalista */}
      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
          Descubra Mais
        </span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-zinc-800 bg-zinc-950/50 p-1.5 backdrop-blur-sm">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
