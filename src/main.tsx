import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { isThankYouRoute, markNoIndex } from './routes'
import './index.css'

// La página de gracias se carga aparte para no sumar peso a la landing
const ThankYou = lazy(() => import('./pages/ThankYou'))

const thankYou = isThankYouRoute()
if (thankYou) markNoIndex()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {thankYou ? (
      <Suspense fallback={<div className="min-h-screen bg-[#1A202C]" />}>
        <ThankYou />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
)
