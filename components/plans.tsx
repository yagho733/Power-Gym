import { Check, Star, Zap, Crown } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const plans = [
  {
    name: 'Básico',
    price: '89',
    period: '/mês',
    description: 'Ideal para quem está a começar',
    icon: Zap,
    features: [
      'Acesso à musculação',
      'Balneários completos',
      'Cofre individual',
      'App de treinos guiados',
    ],
    popular: false,
    cta: 'Começar Agora',
  },
  {
    name: 'Premium',
    price: '149',
    period: '/mês',
    description: 'O nosso plano mais popular',
    icon: Star,
    features: [
      'Tudo do plano Básico',
      'Aulas coletivas ilimitadas',
      'Área de cardio de última geração',
      '1 avaliação física avançada/mês',
      'Acesso livre 24 horas',
      'Estacionamento privado gratuito',
    ],
    popular: true,
    cta: 'Garantir Acesso Premium',
  },
  {
    name: 'Elite',
    price: '249',
    period: '/mês',
    description: 'Experiência máxima e exclusiva',
    icon: Crown,
    features: [
      'Tudo do plano Premium',
      'Acompanhamento de Personal Trainer',
      'Consulta de Nutrição incluída',
      'Acesso ao Spa & Sauna',
      'Suplementação básica no clube',
      'Serviço de toalhas incluído',
      'Lounges VIP e área exclusiva',
    ],
    popular: false,
    cta: 'Tornar-me Elite',
  },
]

export function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 select-none">
      {/* Luz de fundo para realçar a secção */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Nossos Planos"
            title="Escolha o plano"
            highlight="ideal para si"
            description="Planos flexíveis ajustados aos seus objetivos de alta performance. Sem taxas ocultas."
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-3 lg:max-w-none items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Reveal key={plan.name} delay={index * 100}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-500 sm:p-8 border ${
                    plan.popular
                      ? 'border-primary/80 bg-zinc-900/60 shadow-2xl shadow-primary/10 scale-105 z-10 md:-translate-y-2'
                      : 'border-zinc-800/60 bg-zinc-900/20 backdrop-blur-md shadow-xl hover:border-zinc-700 hover:bg-zinc-900/40 hover:scale-[1.02]'
                  }`}
                >
                  {/* Brilho interno se for o plano popular */}
                  {plan.popular && (
                    <div className="absolute top-0 right-1/4 left-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]" />
                  )}

                  {/* Badge de Destaque */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-orange-600 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-primary/20 animate-pulse">
                        <Star className="h-3 w-3 fill-white" /> Recomendado
                      </span>
                    </div>
                  )}

                  {/* Cabeçalho do Card */}
                  <div className="mb-6 border-b border-zinc-800/60 pb-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className={`p-2.5 rounded-2xl border ${
                        plan.popular 
                          ? 'bg-primary/10 border-primary/20 text-primary' 
                          : 'bg-zinc-900/80 border-zinc-800 text-zinc-400'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-black tracking-tight text-white">{plan.name}</h3>
                    <p className="mt-2 text-xs text-zinc-400 font-medium px-2 min-h-[32px]">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex items-baseline justify-center gap-1">
                      <span className="text-sm font-bold text-zinc-500">R$</span>
                      <span className="font-display text-5xl font-black tracking-tight text-white sm:text-6xl">
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Lista de Recursos (Features) */}
                  <ul className="mb-8 flex-grow space-y-3.5 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 group/item">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          plan.popular 
                            ? 'bg-primary/20 border border-primary/30' 
                            : 'bg-zinc-800/80 border border-zinc-700/50'
                        }`}>
                          <Check className={`h-3 w-3 ${plan.popular ? 'text-primary' : 'text-zinc-400'}`} />
                        </div>
                        <span className="text-sm font-medium leading-snug text-zinc-400 transition-colors duration-200 group-hover/item:text-zinc-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão de Ação CTA */}
                  <CtaButton
                    href="#contato"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    fullWidth
                    size="lg"
                    className={`font-bold uppercase tracking-wider text-xs py-4 transition-all duration-300 rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]' 
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </CtaButton>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Rodapé da secção */}
        <p className="mt-12 text-center text-xs font-medium tracking-wide text-zinc-500 sm:mt-16">
          🛡️ Todos os planos incluem 7 dias de garantia de satisfação ou o seu dinheiro de volta. Cancele online a qualquer momento.
        </p>
      </div>
    </section>
  )
}