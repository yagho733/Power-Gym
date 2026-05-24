'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Fernanda Oliveira',
    role: 'Empresária',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'A melhor academia que já frequentei! O ambiente é incrível, os equipamentos são de primeira e os profissionais são extremamente qualificados. Recomendo para todos!',
  },
  {
    name: 'Marcos Almeida',
    role: 'Advogado',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Comecei na POWER GYM há 1 ano e já perdi 20kg. O acompanhamento dos personal trainers e a estrutura da academia fizeram toda a diferença na minha transformação.',
  },
  {
    name: 'Carla Mendes',
    role: 'Médica',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Como profissional da saúde, sei a importância de um treino bem orientado. A POWER GYM oferece exatamente isso: qualidade, segurança e resultados.',
  },
  {
    name: 'Rafael Santos',
    role: 'Engenheiro',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'O acesso 24 horas foi decisivo para mim. Consigo treinar no meu horário, sem correria. A estrutura está sempre impecável, independente do horário.',
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) {
  return (
    <article className="glass glow-hover flex h-full flex-col rounded-2xl p-5 transition-all duration-500 sm:p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
        <Quote className="h-5 w-5 text-primary" />
      </div>
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section
      id="depoimentos"
      className="section-padding relative overflow-hidden bg-secondary/25"
    >
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Depoimentos"
            title="O que nossos"
            highlight="alunos dizem"
            description="Histórias reais de pessoas que transformaram suas vidas conosco."
          />
        </Reveal>

        <div className="mx-auto hidden max-w-7xl gap-5 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 60}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>

        <div className="md:hidden">
          <Reveal>
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </Reveal>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-muted-foreground/30',
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
