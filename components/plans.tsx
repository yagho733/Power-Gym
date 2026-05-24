import { Check } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

const plans = [
  {
    name: 'Básico',
    price: '89',
    period: '/mês',
    description: 'Ideal para quem está começando',
    features: [
      'Acesso à musculação',
      'Vestiários completos',
      'Armário individual',
      'App de treinos',
    ],
    popular: false,
    cta: 'Começar Agora',
  },
  {
    name: 'Premium',
    price: '149',
    period: '/mês',
    description: 'Nosso plano mais popular',
    features: [
      'Tudo do plano Básico',
      'Aulas coletivas ilimitadas',
      'Área de cardio premium',
      '1 avaliação física/mês',
      'Acesso 24 horas',
      'Estacionamento gratuito',
    ],
    popular: true,
    cta: 'Escolher Premium',
  },
  {
    name: 'Elite',
    price: '249',
    period: '/mês',
    description: 'Experiência completa e exclusiva',
    features: [
      'Tudo do plano Premium',
      'Personal Trainer incluso',
      'Nutricionista incluso',
      'Spa e sauna',
      'Suplementos básicos',
      'Toalhas incluídas',
      'Área VIP exclusiva',
    ],
    popular: false,
    cta: 'Ir para Elite',
  },
]

export function Plans() {
  return (
    <section id="planos" className="section-padding relative overflow-hidden">
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Nossos Planos"
            title="Escolha o plano"
            highlight="ideal para você"
            description="Planos flexíveis para todos os objetivos. Sem taxa de matrícula no primeiro mês."
          />
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-500 sm:p-8 ${
                  plan.popular
                    ? 'border-2 border-primary bg-gradient-to-b from-primary/15 to-card glow md:-translate-y-1'
                    : 'glass glow-hover border border-border hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="gradient-btn rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 text-center sm:mb-8">
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-6 flex-grow space-y-3 sm:mb-8 sm:space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm leading-snug text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <CtaButton
                  href="#contato"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  fullWidth
                  size="md"
                >
                  {plan.cta}
                </CtaButton>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground sm:mt-12">
          Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}
