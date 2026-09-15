import { ArrowUpRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

const plans = [
  {
    index: '01',
    name: 'Essencial',
    price: '89',
    description: 'Para quem quer musculação e cardio com uma rotina direta.',
    bestFor: 'Rotina simples',
    collective: '—',
    review: 'Inicial',
    support: 'Padrão',
    features: ['Musculação', 'Área de cardio', 'Avaliação inicial', 'Treino de adaptação'],
    featured: false,
  },
  {
    index: '02',
    name: 'Performance',
    price: '149',
    description: 'Mais variedade para combinar força, cardio e aulas na mesma semana.',
    bestFor: 'Mais variedade',
    collective: 'Incluídas',
    review: 'Periódica',
    support: 'Ampliado',
    features: ['Tudo do Essencial', 'Aulas coletivas', 'Renovação de treino', 'Avaliação periódica'],
    featured: true,
  },
  {
    index: '03',
    name: 'Acompanhado',
    price: '189',
    description: 'Para quem prefere revisar o treino com mais frequência e ter orientação mais próxima.',
    bestFor: 'Mais orientação',
    collective: 'Incluídas',
    review: 'Frequente',
    support: 'Próximo',
    features: ['Tudo do Performance', 'Encontros de acompanhamento', 'Ajustes individuais', 'Leitura de evolução'],
    featured: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="bg-[#ece8df] py-24 text-[#0a0a09] sm:py-28 lg:py-36">
      <div className="container-site">
        <Reveal>
          <div className="grid gap-8 border-t border-black/20 pt-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <span className="eyebrow text-[#c74418]">Planos</span>
            </div>
            <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
              <h2 className="display-tight max-w-3xl text-[clamp(3.05rem,8vw,6.8rem)] font-medium">
                Escolha o seu ritmo.
              </h2>
              <p className="max-w-md text-sm leading-7 text-black/60 sm:text-base">
                Compare o que muda de um plano para outro e escolha pelo tipo de acompanhamento que você quer ter.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid border-t border-l border-black/20 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 70}>
              <article className={`relative flex h-full flex-col border-r border-b border-black/20 p-6 sm:p-8 ${plan.featured ? 'bg-[#0a0a09] text-[#f1eee7]' : 'bg-transparent'}`}>
                {plan.featured && (
                  <span className="absolute right-0 top-0 bg-[#f05a28] px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#0a0a09]">
                    Em destaque
                  </span>
                )}

                <div className="flex items-start justify-between gap-6">
                  <span className={`text-[10px] font-bold tracking-[0.18em] ${plan.featured ? 'text-white/40' : 'text-black/42'}`}>{plan.index}</span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#f05a28]' : 'text-[#c74418]'}`}>Mensal</span>
                </div>

                <div className="mt-14">
                  <h3 className="display-tight text-[clamp(2.55rem,5vw,3.6rem)] font-medium">{plan.name}</h3>
                  <p className={`mt-4 max-w-sm text-sm leading-6 ${plan.featured ? 'text-white/58' : 'text-black/58'}`}>{plan.description}</p>
                </div>

                <div className={`mt-8 border-y py-6 ${plan.featured ? 'border-white/15' : 'border-black/20'}`}>
                  <div className="flex items-end gap-2">
                    <span className={`pb-2 text-xs font-bold ${plan.featured ? 'text-white/45' : 'text-black/45'}`}>R$</span>
                    <strong className="display-tight text-7xl font-medium sm:text-8xl">{plan.price}</strong>
                    <span className={`pb-2 text-xs font-semibold ${plan.featured ? 'text-white/45' : 'text-black/45'}`}>/mês</span>
                  </div>
                </div>

                <dl className={`mt-6 grid grid-cols-2 border-y ${plan.featured ? 'border-white/15' : 'border-black/20'}`}>
                  {[
                    ['Perfil', plan.bestFor],
                    ['Coletivas', plan.collective],
                    ['Avaliação', plan.review],
                    ['Suporte', plan.support],
                  ].map(([label, value], itemIndex) => (
                    <div key={label} className={`py-4 ${itemIndex % 2 === 0 ? 'pr-4' : 'border-l pl-4'} ${plan.featured ? 'border-white/15' : 'border-black/20'}`}>
                      <dt className={`text-[8px] font-bold uppercase tracking-[0.15em] ${plan.featured ? 'text-white/35' : 'text-black/38'}`}>{label}</dt>
                      <dd className={`mt-1 text-xs font-semibold ${plan.featured ? 'text-white/75' : 'text-black/68'}`}>{value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f05a28]" />
                      <span className={plan.featured ? 'text-white/68' : 'text-black/65'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="#contato" className={`group mt-10 flex items-center justify-between border-t pt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-white/15 text-white hover:text-[#f05a28]' : 'border-black/20 text-black hover:text-[#c74418]'}`}>
                  Quero este plano
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-black/45">
          Valores e condições apresentados neste projeto são demonstrativos e podem ser adaptados para a academia contratante.
        </p>
      </div>
    </section>
  )
}
