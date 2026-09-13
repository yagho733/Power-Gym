'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = Number.parseFloat(height) / 100
    const w = Number.parseFloat(weight)
    if (!(h > 0 && w > 0)) return

    const result = w / (h * h)
    setBmi(result)

    if (result < 18.5) setCategory('Abaixo do peso')
    else if (result < 25) setCategory('Faixa de referência')
    else if (result < 30) setCategory('Sobrepeso')
    else if (result < 35) setCategory('Obesidade grau I')
    else if (result < 40) setCategory('Obesidade grau II')
    else setCategory('Obesidade grau III')
  }

  const reset = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setCategory('')
  }

  return (
    <section id="imc" className="bg-[#ece8df] py-24 text-[#0a0a09] sm:py-28 lg:py-36">
      <div className="container-site">
        <div className="grid gap-14 border-t border-black/20 pt-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal>
            <div>
              <span className="eyebrow text-[#c74418]">Ferramenta rápida</span>
              <h2 className="display-tight mt-8 text-[clamp(3.5rem,8vw,6.8rem)] font-medium leading-[0.84]">
                Seu IMC,
                <br />
                sem enrolação.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-black/58 sm:text-base">
                Uma referência simples entre peso e altura. Não substitui avaliação clínica, composição corporal ou orientação individual.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-black/20 bg-[#f3f0e9] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/48">Altura · cm</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={100}
                    max={250}
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder="175"
                    className="input-editorial mt-2"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/48">Peso · kg</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={30}
                    max={300}
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="70"
                    className="input-editorial mt-2"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={calculateBMI}
                  className="orange-link flex-1"
                >
                  Calcular
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="min-h-[52px] border border-black/20 px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-colors hover:border-black/50"
                >
                  Limpar
                </button>
              </div>

              <div className="mt-10 border-t border-black/20 pt-7" aria-live="polite">
                {bmi === null ? (
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <p className="max-w-md text-sm leading-6 text-black/50">
                      Preencha altura e peso para ver o índice e a faixa de referência.
                    </p>
                    <span className="display-tight text-5xl font-medium text-black/15 sm:text-6xl">00.0</span>
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/45">Resultado</span>
                      <h3 className="display-tight mt-2 text-3xl font-medium">{category}</h3>
                      <p className="mt-2 text-xs leading-5 text-black/50">Use o número como referência inicial, não como diagnóstico.</p>
                    </div>
                    <strong className="display-tight text-7xl font-medium leading-none text-[#c74418] sm:text-8xl">{bmi.toFixed(1)}</strong>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
