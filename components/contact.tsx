'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react'
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
      className="section-padding relative overflow-hidden bg-secondary/25"
    >
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Contato"
            title="Entre em"
            highlight="Contato"
            description="Estamos prontos para tirar suas dúvidas e ajudá-lo a começar sua transformação."
          />
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="space-y-6">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-display mb-6 text-xl font-bold">
                Informações de Contato
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: 'Endereço',
                    lines: [
                      'Av. Paulista, 1000 - Bela Vista',
                      'São Paulo - SP, 01310-100',
                    ],
                  },
                  {
                    icon: Phone,
                    title: 'Telefone',
                    lines: ['(11) 99999-9999', '(11) 3333-3333'],
                  },
                  {
                    icon: Mail,
                    title: 'E-mail',
                    lines: ['contato@powergym.com.br'],
                  },
                  {
                    icon: Clock,
                    title: 'Horário de Funcionamento',
                    lines: ['Seg - Sex: 5h às 23h', 'Sáb - Dom: 7h às 20h'],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold">{item.title}</h4>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass h-52 overflow-hidden rounded-2xl sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197599714966!2d-46.65512768502192!3d-23.56168698468089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1645000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização POWER GYM"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass glow rounded-2xl p-6 sm:p-8">
              <h3 className="font-display mb-6 text-xl font-bold">
                Envie uma Mensagem
              </h3>

              {submitted ? (
                <div className="animate-fade-in-up py-10 text-center sm:py-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                    <Send className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h4 className="font-display mb-2 text-xl font-bold">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="input-premium"
                      autoComplete="name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="input-premium"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="input-premium"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Como podemos ajudá-lo?"
                      className="input-premium resize-none"
                    />
                  </div>

                  <CtaButton
                    type="submit"
                    fullWidth
                    disabled={isSubmitting}
                    size="md"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </>
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
