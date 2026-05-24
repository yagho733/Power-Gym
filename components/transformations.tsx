'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const transformations = [
  {
    name: 'João Paulo',
    age: 32,
    duration: '6 meses',
    weightLoss: '-25kg',
    before:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=500&auto=format&fit=crop',
    testimony:
      'A POWER GYM mudou minha vida. Os personal trainers são incríveis!',
  },
  {
    name: 'Maria Clara',
    age: 28,
    duration: '4 meses',
    weightLoss: '-15kg',
    before:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=500&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop',
    testimony:
      'Resultado além das expectativas. Equipe muito profissional!',
  },
  {
    name: 'Pedro Henrique',
    age: 35,
    duration: '8 meses',
    weightLoss: '-30kg',
    before:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop',
    testimony:
      'Nunca pensei que conseguiria. O acompanhamento faz toda a diferença!',
  },
]

export function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length,
    )
  }

  const current = transformations[currentIndex]

  return (
    <section id="transformacoes" className="section-padding relative overflow-hidden">
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Transformações Reais"
            title="Antes &"
            highlight="Depois"
            description="Resultados reais de alunos que confiaram em nossa metodologia."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto max-w-5xl">
            <div className="glass glow rounded-2xl p-5 sm:rounded-3xl sm:p-8 md:p-12">
              <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl">
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-muted/90 px-2.5 py-1 text-[10px] font-bold tracking-wider sm:text-xs">
                      ANTES
                    </span>
                    <Image
                      src={current.before}
                      alt={`${current.name} antes`}
                      fill
                      sizes="(max-width: 768px) 45vw, 240px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl">
                    <span className="gradient-btn absolute top-3 left-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold text-primary-foreground sm:text-xs">
                      DEPOIS
                    </span>
                    <Image
                      src={current.after}
                      alt={`${current.name} depois`}
                      fill
                      sizes="(max-width: 768px) 45vw, 240px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:mb-6 sm:text-sm">
                    {current.weightLoss} em {current.duration}
                  </div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {current.name}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{current.age} anos</p>
                  <blockquote className="mt-4 text-base italic leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                    &ldquo;{current.testimony}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 md:justify-start">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10"
                      aria-label="Transformação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      {transformations.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setCurrentIndex(index)}
                          className={cn(
                            'h-2 rounded-full transition-all duration-300',
                            index === currentIndex
                              ? 'w-7 bg-primary'
                              : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                          )}
                          aria-label={`Ir para transformação ${index + 1}`}
                          aria-current={index === currentIndex}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10"
                      aria-label="Próxima transformação"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
