'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar, TrendingDown, Award } from 'lucide-react'
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
      'A POWER GYM mudou a minha vida de forma radical. O ecossistema, o suporte dos treinadores e a infraestrutura premium mantiveram-me focado em superar os meus limites todos os dias!',
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
      'Resultados muito acima das minhas expectativas. O acompanhamento personalizado e a metodologia de elite fazem com que cada minuto investido no treino valha mesmo a pena.',
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
      'Nunca imaginei que conseguiria alcançar este nível de performance. Ter profissionais de alto nível a desenhar cada passo da minha evolução fez toda a diferença na minha transformação.',
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
    <section id="transformacoes" className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 select-none">
      {/* Efeito de Iluminação de Fundo Sutil */}
      <div className="absolute top-1/2 left-12 h-[450px] w-[450px] rounded-full bg-orange-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-12 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Transformações Reais"
            title="Resultados Extraordinários de"
            highlight="Antes & Depois"
            description="Histórias reais de atletas de elite que redefiniram a sua composição corporal com a nossa metodologia de alta performance."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Card Principal com Glassmorphism Avançado */}
            <div className="relative rounded-3xl border border-zinc-800/60 bg-zinc-900/10 p-6 backdrop-blur-xl shadow-2xl sm:p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700/20 to-transparent" />
              
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 relative z-10">
                
                {/* Lado das Imagens */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Imagem ANTES */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-inner">
                    <span className="absolute top-3 left-3 z-20 rounded-full bg-zinc-900/90 px-3 py-1 text-[10px] font-black tracking-widest text-zinc-400 border border-zinc-800">
                      ANTES
                    </span>
                    <Image
                      src={current.before}
                      alt={`${current.name} antes`}
                      fill
                      sizes="(max-width: 768px) 45vw, 380px"
                      className="object-cover contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Imagem DEPOIS */}
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/30 bg-zinc-950 shadow-lg shadow-primary/5">
                    <span className="absolute top-3 left-3 z-20 rounded-full bg-gradient-to-r from-primary to-orange-600 px-3 py-1 text-[10px] font-black tracking-widest text-white shadow-sm shadow-primary/20">
                      DEPOIS
                    </span>
                    <Image
                      src={current.after}
                      alt={`${current.name} depois`}
                      fill
                      sizes="(max-width: 768px) 45vw, 380px"
                      className="object-cover contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Lado dos Textos */}
                <div className="flex flex-col text-center md:text-left justify-center">
                  
                  {/* Badges de Métricas */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-bold text-primary">
                      <TrendingDown className="h-3.5 w-3.5" />
                      {current.weightLoss}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/30 px-3 py-1.5 text-xs font-medium text-zinc-400">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      {current.duration}
                    </div>
                  </div>

                  {/* Nome e Idade */}
                  <h3 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {current.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center justify-center md:justify-start gap-1.5">
                    <Award className="h-3.5 w-3.5 text-primary" /> Aluno de Elite • {current.age} anos
                  </p>
                  
                  {/* Testemunho */}
                  <div className="relative mt-6 sm:mt-8">
                    <span className="absolute -top-4 -left-2 text-6xl font-serif text-zinc-800 pointer-events-none select-none">“</span>
                    <p className="text-base italic leading-relaxed text-zinc-400 font-medium relative z-10 sm:text-lg">
                      {current.testimony}
                    </p>
                  </div>

                  {/* Controlo de Navegação Avançado */}
                  <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 md:justify-start">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:text-white"
                      aria-label="Transformação anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    
                    {/* Indicadores de Barra Slim */}
                    <div className="flex items-center gap-2">
                      {transformations.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setCurrentIndex(index)}
                          className={cn(
                            'h-1.5 rounded-full transition-all duration-300',
                            index === currentIndex
                              ? 'w-8 bg-gradient-to-r from-primary to-orange-500'
                              : 'w-2 bg-zinc-800 hover:bg-zinc-700',
                          )}
                          aria-label={`Ir para transformação ${index + 1}`}
                          aria-current={index === currentIndex}
                        />
                      ))}
                    </div>
                    
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80 hover:text-white"
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