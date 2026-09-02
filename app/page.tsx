import { Header } from '@/components/header'
import { MessageCircle } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Plans } from '@/components/plans'
import { Trainers } from '@/components/trainers'
import { Testimonials } from '@/components/testimonials'
import { BMICalculator } from '@/components/bmi-calculator'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

const portfolioWhatsAppUrl = `https://wa.me/5553999563554?text=${encodeURIComponent(
  'Olá, Yagho! Vi o modelo Power Gym e quero um site para o meu negócio.',
)}`

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      suppressHydrationWarning
    >
      <Header />
      <Hero />
      <Plans />
      <Trainers />
      <Testimonials />
      <BMICalculator />
      <Contact />
      <Footer />
      <a
        href={portfolioWhatsAppUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-[70] inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:right-6 sm:bottom-6 sm:px-5"
        aria-label="Falar com Yagho sobre um site"
      >
        <MessageCircle className="h-5 w-5" />
        Quero um site assim
      </a>
    </main>
  )
}
