import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Settings2,
} from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
  'Olá! Quero saber mais sobre os planos e agendar uma aula experimental.',
)}`

const contactDetails = [
  {
    icon: MapPin,
    label: 'Localização de exemplo',
    value: 'Pelotas / RS',
  },
  {
    icon: Clock3,
    label: 'Horários ilustrativos',
    value: 'Seg. a sex., 6h às 22h • Sáb., 8h às 14h',
  },
  {
    icon: MessageCircle,
    label: 'Atendimento',
    value: 'WhatsApp configurado com o número da academia',
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute top-1/4 right-[5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-[5%] h-[450px] w-[450px] rounded-full bg-orange-600/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Contato rápido"
            title="Da dúvida para a"
            highlight="aula experimental"
            description="O visitante encontra as informações principais e inicia uma conversa sem precisar preencher um formulário que não envia nada."
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="h-full">
            <article className="h-full rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6 backdrop-blur-xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Informações de exemplo
              </p>
              <div className="mt-7 space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon

                  return (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {detail.label}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-7 shadow-2xl shadow-primary/10 sm:p-10">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="font-display text-3xl font-black text-white sm:text-4xl">
                  Pronto para começar?
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
                  Abra o WhatsApp, tire suas dúvidas e combine o melhor horário
                  para conhecer a academia.
                </p>
              </div>

              <div className="relative mt-9">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-orange-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:w-auto"
                >
                  Testar contato pelo WhatsApp
                  <ArrowUpRight className="h-5 w-5" />
                </a>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <Settings2 className="mt-0.5 h-5 w-5 shrink-0 text-zinc-500" />
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Neste modelo, o WhatsApp abre sem destinatário. Na entrega
                    ao cliente, o botão é conectado ao número real da academia.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
