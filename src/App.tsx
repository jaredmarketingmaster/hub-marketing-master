import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Modules } from './components/Modules'
import { Audiences } from './components/Audiences'
import { Comparison } from './components/Comparison'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Extras } from './components/Extras'
import { AppBanner } from './components/AppBanner'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { PurchaseModal } from './components/PurchaseModal'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [buyOpen, setBuyOpen] = useState(false)
  const openBuy = useCallback(() => setBuyOpen(true), [])
  const closeBuy = useCallback(() => setBuyOpen(false), [])
  useReveal()

  return (
    <>
      <Navbar onBuy={openBuy} />
      <main>
        <Hero onBuy={openBuy} />
        <HowItWorks />
        <Modules />
        <Audiences />
        <Comparison />
        <Pricing onBuy={openBuy} />
        <Process onBuy={openBuy} />
        <Extras />
        <AppBanner />
        <Faq />
        <FinalCta onBuy={openBuy} />
      </main>
      <Footer />
      <PurchaseModal open={buyOpen} onClose={closeBuy} />
    </>
  )
}
