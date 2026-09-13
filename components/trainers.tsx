import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const activities = [
  {
    index: '01',
    title: 'Musculação',
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=86&w=1400&auto=format&fit=crop',
    description: 'Treino de força com equipamentos completos e orientação durante a sessão.',
    className: 'lg:col-span-7 lg:row-span-2 lg:min-h-[720px]',
  },
  {
    index: '02',
    title: 'Funcional',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=86&w=1200&auto=format&fit=crop',
    description: 'Mobilidade, potência e condicionamento em treinos dinâmicos.',
    className: 'lg:col-span-5 lg:min-h-[348px]',
  },
  {
    index: '03',
    title: 'Cardio',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=86&w=1200&auto=format&fit=crop',
    description: 'Esteiras, bikes e trabalho cardiovascular para complementar a rotina.',
    className: 'lg:col-span-5 lg:min-h-[348px]',
  },
  {
    index: '04',
    title: 'Aulas coletivas',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=86&w=1800&auto=format&fit=crop',
    description: 'Treino em grupo com ritmo, acompanhamento e constância.',
    className: 'lg:col-span-12 lg:min-h-[440px]',
  },
]

export function Trainers() {
  return (
    <section id="estrutura" className="bg-[#0a0a09] py-24 sm:py-28 lg:py-36">
      <div className="container-site">
        <Reveal>
          <div className="grid gap-8 border-t border-white/15 pt-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <span className="eyebrow text-[#f05a28]">Estrutura</span>
            </div>
            <div>
              <h2 className="display-tight max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] font-medium leading-[0.86] text-white">
                Espaço para
                <br />
                treino de verdade.
              </h2>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Nada de encher a tela com promessas. O foco aqui é mostrar o que o aluno encontra quando chega: estrutura, modalidades e acompanhamento.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 lg:grid-cols-12 lg:auto-rows-fr lg:gap-4">
          {activities.map((activity, index) => (
            <Reveal key={activity.title} delay={index * 70} className={activity.className}>
              <article className="group relative h-[430px] overflow-hidden border border-white/10 bg-[#151514] lg:h-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/15" />
                <span className="absolute left-5 top-5 text-[10px] font-bold tracking-[0.18em] text-white/55 sm:left-6 sm:top-6">
                  {activity.index}
                </span>
                <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                  <div className="flex items-end justify-between gap-5 border-t border-white/25 pt-4">
                    <div>
                      <h3 className="display-tight text-4xl font-medium leading-none text-white sm:text-5xl">
                        {activity.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                        {activity.description}
                      </p>
                    </div>
                    <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-[#f05a28] sm:block" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
