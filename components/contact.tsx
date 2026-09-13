import Image from 'next/image'
import { ArrowUpRight, Clock3, MapPin, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=88&w=2200&auto=format&fit=crop'

const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
  'Olá! Quero conhecer os planos e agendar uma visita na Power Gym.',
)}`

export function Contact() {
  return (
    <section id="contato" className="relative min-h-[860px] overflow-hidden bg-[#0a0a09]">
      <Image
        src={CONTACT_IMAGE}
        alt="Área de treino da Power Gym"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

      <div className="container-site relative z-10 flex min-h-[860px] flex-col justify-between py-24 sm:py-28 lg:py-32">
        <Reveal>
          <div className="max-w-5xl">
            <span className="eyebrow text-[#f05a28]">Primeiro treino</span>
            <h2 className="display-tight mt-8 text-[clamp(4rem,11vw,9.2rem)] font-semibold leading-[0.8] text-white">
              Comece
              <br />
              entrando.
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Conheça o espaço, entenda os planos e converse com a equipe antes de decidir. O primeiro passo pode ser só uma visita.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-16 grid border-t border-white/20 lg:grid-cols-[1fr_1fr_1.2fr]">
            <div className="border-b border-white/20 py-6 lg:border-r lg:border-b-0 lg:pr-8">
              <MapPin className="h-4 w-4 text-[#f05a28]" />
              <span className="mt-4 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Local</span>
              <strong className="mt-2 block text-sm font-semibold text-white">Pelotas · RS</strong>
            </div>
            <div className="border-b border-white/20 py-6 lg:border-r lg:border-b-0 lg:px-8">
              <Clock3 className="h-4 w-4 text-[#f05a28]" />
              <span className="mt-4 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Horários</span>
              <strong className="mt-2 block text-sm font-semibold text-white">Seg. a sex. · 06h às 22h</strong>
            </div>
            <div className="py-6 lg:pl-8">
              <MessageCircle className="h-4 w-4 text-[#f05a28]" />
              <span className="mt-4 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Atendimento</span>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#f05a28]"
              >
                Falar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
