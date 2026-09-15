import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=88&w=2200&auto=format&fit=crop'

const tickerItems = [
  'Musculação',
  'Treino funcional',
  'Cardio',
  'Mobilidade',
  'Aulas coletivas',
]

function TickerGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {tickerItems.map((item) => (
        <span key={item} className="flex items-center gap-7">
          {item}
          <span className="text-[9px]" aria-hidden>●</span>
        </span>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0a0a09] pt-[72px] lg:pt-[82px]">
      <div className="grid min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-82px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex flex-col justify-between px-5 py-12 sm:px-9 sm:py-16 lg:px-[max(36px,calc((100vw-1440px)/2))] lg:py-16 lg:pr-12 xl:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <div className="eyebrow text-[#f05a28]">Força · cardio · condicionamento</div>
              <h1 className="display-tight mt-8 text-[clamp(3.7rem,17vw,8.4rem)] font-semibold text-white lg:text-[clamp(6rem,8.1vw,9.5rem)]">
                Treino
                <br />
                sem
                <br />
                <span className="text-[#f05a28]">atalho.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/62 sm:text-base lg:mt-10 lg:text-[17px]">
                Musculação, cardio e funcional com espaço para treinar bem, orientação no salão e uma rotina que cabe na semana.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row lg:mt-16">
              <Link href="#planos" className="orange-link">
                Conhecer planos
                <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link href="#contato" className="ghost-link">
                Agendar uma visita
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[54svh] overflow-hidden border-t border-white/10 lg:min-h-0 lg:border-t-0 lg:border-l">
          <Image
            src={HERO_IMAGE}
            alt="Área de musculação da Power Gym"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center grayscale-[12%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/20 lg:bg-gradient-to-r lg:from-black/35 lg:via-transparent lg:to-transparent" />

          <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 border border-white/20 bg-black/45 backdrop-blur-md sm:inset-x-8 sm:bottom-8 lg:left-8 lg:right-8 lg:grid-cols-3">
            <div className="border-r border-white/15 p-4 sm:p-5">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">Horário</span>
              <strong className="mt-2 block text-sm font-semibold text-white">06h — 22h</strong>
            </div>
            <div className="p-4 sm:p-5 lg:border-r lg:border-white/15">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">Local</span>
              <strong className="mt-2 block text-sm font-semibold text-white">Pelotas · RS</strong>
            </div>
            <div className="col-span-2 hidden p-5 lg:col-span-1 lg:block">
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">Primeiro passo</span>
              <strong className="mt-2 block text-sm font-semibold text-white">Visita + avaliação</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee border-y border-white/10 bg-[#f05a28] py-3.5 text-[#0a0a09]">
        <div className="marquee-track display-tight text-[17px] font-semibold tracking-[0.04em] sm:text-xl">
          <TickerGroup />
          <TickerGroup hidden />
        </div>
      </div>
    </section>
  )
}
