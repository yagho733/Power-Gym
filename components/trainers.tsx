import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const trainers = [
  {
    name: 'Carlos Silva',
    role: 'Especialista em Hipertrofia',
    image:
      'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop',
    bio: '10+ anos de experiência em treinos de força e ganho de massa muscular.',
    social: { instagram: '#', linkedin: '#' },
  },
  {
    name: 'Ana Santos',
    role: 'Personal de Emagrecimento',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500&auto=format&fit=crop',
    bio: 'Especializada em perda de peso saudável e definição corporal.',
    social: { instagram: '#', linkedin: '#' },
  },
  {
    name: 'Ricardo Mendes',
    role: 'Treinador Funcional',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop',
    bio: 'Expert em treinos funcionais e preparação física para atletas.',
    social: { instagram: '#', linkedin: '#' },
  },
  {
    name: 'Juliana Costa',
    role: 'Instrutora de Crossfit',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop',
    bio: 'Certificada em CrossFit Level 3 e especialista em condicionamento.',
    social: { instagram: '#', linkedin: '#' },
  },
]

export function Trainers() {
  return (
    <section
      id="equipe"
      className="section-padding relative overflow-hidden bg-secondary/25"
    >
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Nossa Equipe"
            title="Personal Trainers"
            highlight="Certificados"
            description="Profissionais experientes e dedicados para ajudar você a alcançar seus objetivos."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 60}>
              <article className="group glass glow-hover overflow-hidden rounded-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <a
                      href={trainer.social.instagram}
                      className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:bg-primary/20"
                      aria-label={`Instagram de ${trainer.name}`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={trainer.social.linkedin}
                      className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:bg-primary/20"
                      aria-label={`LinkedIn de ${trainer.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-bold">{trainer.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {trainer.role}
                  </p>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {trainer.bio}
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
