import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const EXPERIENCE_IMAGE =
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=88&w=2200&auto=format&fit=crop'

const principles = [
  {
    index: '01',
    title: 'Chegue com direção',
    text: 'Objetivo claro, treino organizado e menos tempo tentando descobrir sozinho o que fazer.',
  },
  {
    index: '02',
    title: 'Treine com presença',
    text: 'Uma equipe acessível durante a sessão muda a qualidade da execução e do progresso.',
  },
  {
    index: '03',
    title: 'Volte com constância',
    text: 'O melhor plano é o que funciona na vida real e continua fazendo sentido depois das primeiras semanas.',
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="bg-[#ece8df] text-[#0a0a09]">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-[860px]">
          <Image
            src={EXPERIENCE_IMAGE}
            alt="Treino de força em ambiente de academia"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-black/15" />
          <div className="absolute inset-x-5 bottom-5 border-t border-white/35 pt-4 text-white sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Power Gym · experiência
                </span>
                <p className="display-tight mt-2 max-w-xl text-3xl font-medium leading-[0.95] sm:text-4xl">
                  Ambiente forte. Rotina possível.
                </p>
              </div>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#f05a28] sm:block">
                Pelotas · RS
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between px-5 py-20 sm:px-9 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
          <Reveal>
            <div>
              <span className="eyebrow text-[#c74418]">Experiência de treino</span>
              <h2 className="display-tight mt-8 max-w-3xl text-[clamp(3.8rem,8vw,7rem)] font-medium leading-[0.84]">
                Não é só entrar.
                <br />
                É querer voltar.
              </h2>
              <p className="mt-8 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                Uma boa academia não depende de excesso de promessa. Ela precisa facilitar o treino: espaço bem organizado, orientação quando importa e uma rotina que faça sentido para quem está do outro lado da catraca.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-black/20 lg:mt-20">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 60}>
                <article className="grid gap-4 border-b border-black/20 py-6 sm:grid-cols-[52px_1fr] sm:py-7">
                  <span className="text-[10px] font-extrabold tracking-[0.18em] text-black/35">
                    {principle.index}
                  </span>
                  <div>
                    <h3 className="display-tight text-2xl font-medium sm:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-black/56">
                      {principle.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <Link
              href="#contato"
              className="mt-10 inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors hover:border-[#c74418] hover:text-[#c74418]"
            >
              Conhecer a academia
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
