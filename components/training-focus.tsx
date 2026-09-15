'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    index: '01',
    title: 'Musculação',
    label: 'Força e progressão',
    description:
      'Uma área pensada para treino de força, com exercícios livres, máquinas e espaço para evoluir carga com boa execução.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=88&w=1800&auto=format&fit=crop',
    imagePosition: 'object-center',
  },
  {
    index: '02',
    title: 'Cardio',
    label: 'Ritmo e condicionamento',
    description:
      'Sessões curtas ou longas, aquecimento ou treino principal. O cardio entra onde fizer sentido na sua rotina.',
    image:
      'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=88&w=1800&auto=format&fit=crop',
    imagePosition: 'object-center',
  },
  {
    index: '03',
    title: 'Funcional',
    label: 'Movimento e intensidade',
    description:
      'Um treino mais dinâmico para combinar força, resistência, coordenação e exercícios com o peso do corpo.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=88&w=1800&auto=format&fit=crop',
    imagePosition: 'object-center',
  },
  {
    index: '04',
    title: 'Mobilidade',
    label: 'Controle e amplitude',
    description:
      'Mobilidade não entra como detalhe: ela ajuda a preparar o corpo, melhorar posições e dar qualidade ao treino.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=88&w=1800&auto=format&fit=crop',
    imagePosition: 'object-center',
  },
]

export function TrainingFocus() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [paused])

  const active = items[activeIndex]

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length)
  }

  return (
    <section id="treino-em-foco" className="bg-[#0a0a09] py-24 text-white sm:py-28 lg:py-36">
      <div className="container-site">
        <div className="grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-[0.74fr_1.26fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-[#f05a28]">Treino em foco</span>
              <h2 className="display-tight mt-7 max-w-xl text-[clamp(3.1rem,7vw,6.3rem)] font-medium">
                Cada treino pede uma coisa.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                A estrutura muda de função ao longo da semana. Explore as principais áreas sem sair da página.
              </p>
              <Link
                href="#contato"
                className="mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:border-[#f05a28] hover:text-[#f05a28]"
              >
                Conhecer a academia
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div
              className="border border-white/15 bg-[#111110]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              <div className="relative min-h-[430px] overflow-hidden sm:min-h-[540px]">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={`Área de ${active.title.toLowerCase()}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 64vw"
                  className={`animate-in fade-in duration-500 object-cover ${active.imagePosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
                  <div key={active.title} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                    <div className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/55">
                      <span className="text-[#f05a28]">{active.index}</span>
                      <span>{active.label}</span>
                    </div>
                    <h3 className="display-tight mt-4 text-[clamp(3.2rem,8vw,6.8rem)] font-medium text-white">
                      {active.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                      {active.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid border-t border-white/15 sm:grid-cols-[1fr_auto]">
                <div className="flex items-center gap-2 overflow-x-auto px-5 py-4 sm:px-7">
                  {items.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => goTo(index)}
                      className={`h-1.5 shrink-0 transition-all duration-300 ${
                        index === activeIndex
                          ? 'w-12 bg-[#f05a28]'
                          : 'w-6 bg-white/18 hover:bg-white/35'
                      }`}
                      aria-label={`Mostrar ${item.title}`}
                      aria-current={index === activeIndex ? 'true' : undefined}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 border-t border-white/15 sm:border-t-0 sm:border-l">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    className="flex h-14 w-full items-center justify-center border-r border-white/15 text-white/60 transition-colors hover:bg-white/5 hover:text-white sm:w-16"
                    aria-label="Modalidade anterior"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    className="flex h-14 w-full items-center justify-center text-white/60 transition-colors hover:bg-white/5 hover:text-white sm:w-16"
                    aria-label="Próxima modalidade"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
