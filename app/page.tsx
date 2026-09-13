import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Trainers } from '@/components/trainers'
import { Plans } from '@/components/plans'
import { Testimonials } from '@/components/testimonials'
import { BMICalculator } from '@/components/bmi-calculator'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" suppressHydrationWarning>
      <Header />
      <Hero />
      <Trainers />
      <Plans />
      <Testimonials />
      <BMICalculator />
      <Contact />
      <Footer />
    </main>
  )
}
