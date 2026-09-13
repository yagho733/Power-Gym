'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Reading = {
  label: string
  summary: string
  context: string
}

function getReading(value: number): Reading {
  if (value < 18.5) {
    return {
      label: 'Abaixo da faixa de referência',
      summary:
        'O resultado ficou abaixo da faixa de IMC mais usada como referência para adultos.',
      context:
        'Isso não determina sozinho composição corporal, estado nutricional ou saúde. Histórico, massa muscular e outras medidas mudam a interpretação.',
    }
  }

  if (value < 25) {
    return {
      label: 'Dentro da faixa de referência',
      summary:
        'O resultado ficou entre 18,5 e 24,9, intervalo usado com frequência como referência geral para adultos.',
      context:
        'Mesmo nessa faixa, o IMC não mostra percentual de gordura, massa muscular, condicionamento ou distribuição de gordura corporal.',
    }
  }

  if (value < 30) {
    return {
      label: 'Acima da faixa de referência',
      summary:
        'O resultado ficou entre 25 e 29,9 na classificação geral do IMC para adultos.',
      context:
        'Pessoas com bastante massa muscular podem aparecer nessa faixa sem que o número represente excesso de gordura. O contexto importa.',
    }
  }

  return {
    label: value < 35 ? 'Obesidade grau I' : value < 40 ? 'Obesidade grau II' : 'Obesidade grau III',
    summary:
      'O resultado ficou acima de 30 na classificação geral do IMC para adultos.',
    context:
      'O IMC funciona como triagem e não como diagnóstico. Uma avaliação individual consegue considerar composição corporal, histórico, rotina e outros indicadores.',
  }
}

export function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [error, setError] = useState('')

  const heightMeters = Number.parseFloat(height) / 100

  const reading = useMemo(() => (bmi === null ? null : getReading(bmi)), [bmi])

  const referenceWeight = useMemo(() => {
    if (!(heightMeters > 0)) return null
    return {
      min: 18.5 * heightMeters * heightMeters,
      max: 24.9 * heightMeters * heightMeters,
    }
  }, [heightMeters])

  const markerPosition = useMemo(() => {
    if (bmi === null) return 0
    const clamped = Math.min(40, Math.max(15, bmi))
    return ((clamped - 15) / 25) * 100
  }, [bmi])

  const calculateBMI = () => {
    const hCm = Number.parseFloat(height)
    const h = hCm / 100
    const w = Number.parseFloat(weight)

    if (!Number.isFinite(hCm) || !Number.isFinite(w) || hCm < 100 || hCm > 250 || w < 30 || w > 300) {
      setBmi(null)
      setError('Confira os dados: use uma altura entre 100 e 250 cm e um peso entre 30 e 300 kg.')
      return
    }

    setError('')
    setBmi(w / (h * h))
  }

  const reset = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setError('')
  }

  return (
    <section id="imc" className="bg-[#ece8df] py-24 text-[#0a0a09] sm:py-28 lg:py-36">
      <div className="container-site">
        <div className="grid gap-14 border-t border-black/20 pt-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow text-[#c74418]">Leitura corporal</span>
              <h2 className="display-tight mt-8 text-[clamp(3.5rem,8vw,6.8rem)] font-medium leading-[0.84]">
                Um número.
                <br />
                Com contexto.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-black/58 sm:text-base">
                O IMC relaciona peso e altura e funciona como uma referência inicial. Aqui, o resultado vem acompanhado do que ele significa — e do que ele não consegue mostrar.
              </p>

              <div className="mt-9 border-t border-black/20 pt-5">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#c74418]" />
                  <p className="max-w-sm text-xs leading-6 text-black/48">
                    Esta ferramenta é educativa. IMC não substitui avaliação de saúde nem análise de composição corporal.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-black/20 bg-[#f3f0e9]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between border-b border-black/15 pb-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-black/42">
                    Calculadora de IMC
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#c74418]">
                    Adultos
                  </span>
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-black/48">Altura · cm</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={100}
                      max={250}
                      value={height}
                      onChange={(event) => {
                        setHeight(event.target.value)
                        setError('')
                      }}
                      placeholder="175"
                      className="input-editorial mt-2"
                      aria-label="Altura em centímetros"
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
                      onChange={(event) => {
                        setWeight(event.target.value)
                        setError('')
                      }}
                      placeholder="70"
                      className="input-editorial mt-2"
                      aria-label="Peso em quilogramas"
                    />
                  </label>
                </div>

                {error && (
                  <p className="mt-5 border-l-2 border-[#c74418] pl-4 text-sm leading-6 text-black/62" role="alert">
                    {error}
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={calculateBMI} className="orange-link flex-1">
                    Ver resultado
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
              </div>

              <div className="border-t border-black/20 bg-[#0a0a09] p-6 text-white sm:p-8 lg:p-10" aria-live="polite">
                {bmi === null || reading === null ? (
                  <div className="grid min-h-[250px] content-between gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">Resultado</span>
                      <p className="mt-4 max-w-md text-sm leading-7 text-white/48">
                        Preencha altura e peso. O resultado vai mostrar o índice, a faixa em que ele se encontra e uma explicação curta para interpretar o número com mais cuidado.
                      </p>
                    </div>
                    <span className="display-tight text-7xl font-medium leading-none text-white/10 sm:text-8xl">00.0</span>
                  </div>
                ) : (
                  <div>
                    <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35">Seu IMC</span>
                        <strong className="display-tight mt-3 block text-[clamp(5.2rem,12vw,9rem)] font-medium leading-[0.78] text-[#f05a28]">
                          {bmi.toFixed(1)}
                        </strong>
                        <p className="display-tight mt-6 text-2xl font-medium leading-none sm:text-3xl">
                          {reading.label}
                        </p>
                      </div>

                      <div className="border-t border-white/15 pt-6 xl:border-t-0 xl:border-l xl:pl-8 xl:pt-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f05a28]">O que significa</span>
                        <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                          {reading.summary}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-white/48">
                          {reading.context}
                        </p>

                        {referenceWeight && (
                          <div className="mt-7 border-t border-white/15 pt-5">
                            <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                              Faixa de peso correspondente ao IMC 18,5–24,9 para essa altura
                            </span>
                            <strong className="display-tight mt-2 block text-2xl font-medium text-white">
                              {referenceWeight.min.toFixed(1)} — {referenceWeight.max.toFixed(1)} kg
                            </strong>
                            <p className="mt-2 text-xs leading-5 text-white/38">
                              É apenas uma conversão matemática da faixa de IMC, não uma meta de peso individual.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-10 border-t border-white/15 pt-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Escala de referência</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">IMC 15 — 40+</span>
                      </div>

                      <div className="relative mt-7 h-2 bg-white/12">
                        <span className="absolute inset-y-0 left-[14%] w-px bg-white/25" />
                        <span className="absolute inset-y-0 left-[40%] w-px bg-white/25" />
                        <span className="absolute inset-y-0 left-[60%] w-px bg-white/25" />
                        <span
                          className="absolute top-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 bg-[#f05a28]"
                          style={{ left: `${markerPosition}%` }}
                          aria-hidden
                        />
                      </div>

                      <div className="relative mt-3 h-8 text-[9px] font-semibold text-white/38">
                        <span className="absolute left-0">15</span>
                        <span className="absolute left-[14%] -translate-x-1/2">18,5</span>
                        <span className="absolute left-[40%] -translate-x-1/2">25</span>
                        <span className="absolute left-[60%] -translate-x-1/2">30</span>
                        <span className="absolute right-0">40+</span>
                      </div>
                    </div>
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
