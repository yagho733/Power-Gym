import {
  ClipboardCheck,
  Clock3,
  MessageCircle,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const advantages: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Avaliação de entrada',
    description:
      'Um primeiro atendimento para entender objetivos, limitações e experiência com treino.',
    icon: ClipboardCheck,
  },
  {
    title: 'Horários flexíveis',
    description:
      'Informações claras para o aluno encontrar o melhor período para treinar.',
    icon: Clock3,
  },
  {
    title: 'Equipe presente',
    description:
      'Orientação durante os exercícios e ajustes de treino conforme a evolução.',
    icon: Users,
  },
  {
    title: 'Contato pelo WhatsApp',
    description:
      'Um caminho rápido para tirar dúvidas, conhecer os planos e agendar uma visita.',
    icon: MessageCircle,
  },
]

export function Testimonials() {
  return (
    <section
      id="diferenciais"
      className="section-padding relative overflow-hidden bg-secondary/25"
    >
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Diferenciais do modelo"
            title="Informação clara para"
            highlight="decidir e começar"
            description="Esta área pode destacar os pontos fortes reais da academia, sem promessas exageradas ou depoimentos inventados."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon

            return (
              <Reveal key={advantage.title} delay={index * 60}>
                <article className="glass glow-hover h-full rounded-2xl p-6 transition-all duration-500">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {advantage.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
