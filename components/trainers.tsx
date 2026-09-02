import Image from 'next/image'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const activities = [
  {
    title: 'Musculação',
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=900&auto=format&fit=crop',
    description:
      'Espaço para treinos de força, com orientação para iniciantes e alunos experientes.',
  },
  {
    title: 'Treino funcional',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=900&auto=format&fit=crop',
    description:
      'Exercícios dinâmicos para trabalhar mobilidade, resistência e condicionamento.',
  },
  {
    title: 'Cardio',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900&auto=format&fit=crop',
    description:
      'Equipamentos e treinos para melhorar o fôlego e complementar sua rotina.',
  },
  {
    title: 'Aulas coletivas',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop',
    description:
      'Atividades em grupo para treinar com energia, acompanhamento e constância.',
  },
]

export function Trainers() {
  return (
    <section
      id="estrutura"
      className="section-padding relative overflow-hidden bg-secondary/25"
    >
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Estrutura e modalidades"
            title="Um espaço para diferentes"
            highlight="objetivos"
            description="Exemplos de atividades que podem ser apresentadas com as fotos e os serviços reais de cada academia."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 60}>
              <article className="group glass glow-hover h-full overflow-hidden rounded-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <span className="absolute right-4 bottom-4 left-4 font-display text-2xl font-bold text-white">
                    {activity.title}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
