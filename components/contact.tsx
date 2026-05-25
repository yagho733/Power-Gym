'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 select-none"
    >
      {/* Efeitos de Luz de Fundo Studio */}
      <div className="absolute top-1/4 right-[5%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] h-[450px] w-[450px] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Contato de Elite"
            title="Inicie a sua"
            highlight="jornada hoje"
            description="Agende uma visita guiada ou fale com os nossos especialistas em alta performance para desenhar o seu plano personalizado."
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          
          {/* Coluna de Informações e Mapa */}
          <Reveal className="flex flex-col gap-6 justify-between">
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/10 p-6 backdrop-blur-xl shadow-xl sm:p-8 relative overflow-hidden flex-grow">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
              
              <h3 className="font-display mb-8 text-xl font-black uppercase tracking-wider bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Canais de Atendimento
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Localização Premium',
                    lines: [
                      'Av. Paulista, 1000 - Bela Vista',
                      'São Paulo - SP, 01310-100',
                    ],
                  },
                  {
                    icon: Phone,
                    title: 'Contacto Direto',
                    lines: ['(11) 99999-9999', '(11) 3333-3333'],
                  },
                  {
                    icon: Mail,
                    title: 'E-mail Corporativo',
                    lines: ['elite@powergym.com.br'],
                  },
                  {
                    icon: Clock,
                    title: 'Horários Exclusivos',
                    lines: ['Segunda a Sexta: 5h às 23h', 'Sábados e Domingos: 7h às 20h'],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/10">
                      <item.icon className="h-5 w-5 text-zinc-400 transition-colors duration-300 group-hover:text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-bold text-white transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </h4>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm font-medium leading-relaxed text-zinc-400">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Container do Mapa — URL corrigida */}
            <div className="relative h-56 overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-xl sm:h-64 shadow-2xl group">
              <div className="absolute inset-0 bg-zinc-950/20 mix-blend-color transition-opacity duration-500 group-hover:opacity-0 pointer-events-none z-10" />
              <iframe
                src="https://maps.google.com/maps?q=Av.+Paulista,+1000,+Bela+Vista,+S%C3%A3o+Paulo,+SP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização POWER GYM"
                className="relative z-0"
              />
            </div>
          </Reveal>

          {/* Coluna do Formulário */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/10 p-6 backdrop-blur-xl shadow-2xl sm:p-8 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <h3 className="font-display mb-6 text-xl font-black uppercase tracking-wider bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Envie uma Mensagem
              </h3>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-display mb-2 text-xl font-black text-white">
                    Solicitação Recebida!
                  </h4>
                  <p className="text-sm font-medium text-zinc-400 max-w-xs mx-auto leading-relaxed">
                    Um consultor de alta performance entrará em contacto nas próximas duas horas. Prepare-se.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ex: João Silva"
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-zinc-950 focus:ring-1 focus:ring-primary/40 shadow-inner"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="nome@exemplo.com"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-zinc-950 focus:ring-1 focus:ring-primary/40 shadow-inner"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Telemóvel / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-zinc-950 focus:ring-1 focus:ring-primary/40 shadow-inner"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Mensagem de Objetivos
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Conte-nos brevemente o seu objetivo fitness atual..."
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-zinc-950 focus:ring-1 focus:ring-primary/40 shadow-inner resize-none"
                    />
                  </div>

                  <CtaButton
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                    size="lg"
                    className="mt-2 font-bold uppercase tracking-wider text-xs py-4 transition-all duration-300 bg-gradient-to-r from-primary to-orange-600 text-white shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] disabled:opacity-70 rounded-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Validando Credenciais...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Solicitar Convite VIP
                      </span>
                    )}
                  </CtaButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
