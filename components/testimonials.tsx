import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const advantages = [
  {
    index: '01',
    title: 'Entender antes de acelerar',
    description: 'Objetivo, rotina e experiência mudam a forma de treinar. O ponto de partida precisa fazer sentido para você.',
  },
  {
    index: '02',
    title: 'Execução vem primeiro',
    description: 'Carga só é progresso quando o movimento continua bem feito. Técnica não entra como detalhe.',
  },
  {
    index: '03',
    title: 'Ajustar quando precisa',
    description: 'Treino não é documento para ficar parado. Volume, exercícios e intensidade podem mudar junto com a evolução.',
  },
  {
    index: '04',
    title: 'Fazer caber na semana',
    description: 'O melhor plano ainda precisa funcionar na vida real. Frequência consistente vale mais do que uma semana perfeita.',
  },
]

export function Testimonials() {
  return (
    <section id="diferenciais" className="bg-[#f05a28] text-[#0a0a09]">
      <div className="container-site grid gap-14 py-24 sm:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:py-36">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">Método Power Gym</span>
            <h2 className="display-tight mt-8 max-w-3xl text-[clamp(3.35rem,8vw,7rem)] font-semibold">
              Treino bom tem método.
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-black/68 sm:text-base">
              A lógica é simples: montar bem, executar melhor e ajustar quando o corpo ou a rotina pedirem. Sem promessa milagrosa.
            </p>
            <Link
              href="#contato"
              className="mt-8 inline-flex items-center gap-3 border-b border-black/35 pb-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors hover:border-black"
            >
              Conhecer de perto
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
                  <h3 className="display-tight text-[clamp(2rem,5vw,3.2rem)] font-medium">{advantage.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-black/64">{advantage.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
