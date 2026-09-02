'use client'

import { useState } from 'react'
import { Calculator, Info } from 'lucide-react'
import { SectionHeader } from '@/components/section-header'
import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100
    const w = parseFloat(weight)

    if (h > 0 && w > 0) {
      const result = w / (h * h)
      setBmi(result)

      if (result < 18.5) {
        setCategory('Abaixo do peso')
      } else if (result < 25) {
        setCategory('Peso normal')
      } else if (result < 30) {
        setCategory('Sobrepeso')
      } else if (result < 35) {
        setCategory('Obesidade Grau I')
      } else if (result < 40) {
        setCategory('Obesidade Grau II')
      } else {
        setCategory('Obesidade Grau III')
      }
    }
  }

  const getBmiColor = () => {
    if (!bmi) return 'text-foreground'
    if (bmi < 18.5) return 'text-sky-400'
    if (bmi < 25) return 'text-emerald-400'
    if (bmi < 30) return 'text-amber-400'
    return 'text-primary'
  }

  const resetCalculator = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setCategory('')
  }

  return (
    <section id="imc" className="section-padding relative overflow-hidden">
      <div className="mesh-bg" aria-hidden />

      <div className="container-tight relative z-10">
        <Reveal>
          <SectionHeader
            badge="Calculadora"
            title="Calcule seu"
            highlight="IMC"
            description="O Índice de Massa Corporal (IMC) relaciona peso e altura e pode servir como uma referência inicial."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto max-w-2xl">
            <div className="glass glow rounded-2xl p-6 sm:rounded-3xl sm:p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3 sm:mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    Calculadora de IMC
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    Descubra seu índice de massa corporal
                  </div>
                </div>
              </div>

              <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label htmlFor="height" className="mb-2 block text-sm font-medium">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    inputMode="decimal"
                    min={100}
                    max={250}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Ex: 175"
                    className="input-premium"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="mb-2 block text-sm font-medium">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    inputMode="decimal"
                    min={30}
                    max={300}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Ex: 70"
                    className="input-premium"
                  />
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:gap-4">
                <CtaButton
                  type="button"
                  onClick={calculateBMI}
                  fullWidth
                  className="sm:flex-1"
                >
                  Calcular IMC
                </CtaButton>
                <CtaButton
                  type="button"
                  variant="outline"
                  onClick={resetCalculator}
                  className="sm:px-8"
                >
                  Limpar
                </CtaButton>
              </div>

              {bmi !== null && (
                <div className="animate-fade-in-up rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                  <div className="mb-4 text-center">
                    <div
                      className={cn(
                        'font-display text-4xl font-bold tabular-nums sm:text-5xl',
                        getBmiColor(),
                      )}
                    >
                      {bmi.toFixed(1)}
                    </div>
                    <div className={cn('mt-2 text-lg font-semibold', getBmiColor())}>
                      {category}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 h-2.5 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-primary" />
                    <div className="flex justify-between text-[10px] text-muted-foreground sm:text-xs">
                      <span>{'<18.5'}</span>
                      <span>18.5–24.9</span>
                      <span>25–29.9</span>
                      <span>{'>30'}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm leading-relaxed text-muted-foreground">
                  O IMC não substitui uma avaliação individual. Para orientações
                  sobre treino e saúde, procure profissionais qualificados.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
