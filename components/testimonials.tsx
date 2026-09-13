import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

const advantages = [
  {
    index: '01',
    title: 'Começar com contexto',
    description: 'Antes de aumentar carga ou volume, a equipe entende seu histórico, rotina e objetivo.',
  },
  {
    index: '02',
    title: 'Treino que evolui',
    description: 'A ficha não fica esquecida por meses. O treino pode ser ajustado conforme execução e progresso.',
  },
  {
    index: '03',
    title: 'Equipe no salão',
    description: 'Orientação durante o treino para corrigir execução, organizar intensidade e tirar dúvidas.',
  },
  {
    index: '04',
    title: 'Rotina viável',
    description: 'Horários amplos e modalidades diferentes para o treino caber na semana de verdade.',
  },
]

export function Testimonials() {
  return (
    <section id="diferenciais" className="bg-[#f05a28] text-[#0a0a09]">
      <div className="container-site grid gap-14 py-24 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-36">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Como a gente trabalha</span>
            <h2 className="display-tight mt-8 max-w-3xl text-[clamp(3.8rem,9vw,7.4rem)] font-semibold leading-[0.82]">
              Menos
              <br />
              pose.
              <br />
              Mais
              <br />
              processo.
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-7 text-black/65 sm:text-base">
              Resultado sustentável costuma ser menos sobre motivação de uma semana e mais sobre treino bem orientado, frequência e ajuste ao longo do tempo.
            </p>
            <Link href="#contato" className="mt-8 inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors hover:border-black">
              Conversar com a equipe
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-black/30">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage.title} delay={index * 60}>
              <article className="grid gap-5 border-b border-black/30 py-7 sm:grid-cols-[70px_1fr] sm:py-9">
                <span className="text-[10px] font-extrabold tracking-[0.18em] text-black/45">{advantage.index}</span>
                <div>
                  <h3 className="display-tight text-3xl font-medium sm:text-4xl">{advantage.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-black/62">{advantage.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
