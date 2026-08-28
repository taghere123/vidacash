import ScreenHeader from './ScreenHeader'
import Hero from './landing/Hero'
import ComoFunciona from './landing/ComoFunciona'
import CalculadoraViva from './landing/CalculadoraViva'
import Confianza from './landing/Confianza'
import Testimonios from './landing/Testimonios'
import CtaFinalFooter from './landing/CtaFinalFooter'

export default function Landing({ onCotizar }) {
  const scrollToCalculadora = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-full flex flex-col bg-white">
      <ScreenHeader />
      <Hero onSimular={scrollToCalculadora} />
      <ComoFunciona />
      <CalculadoraViva onContinuar={onCotizar} />
      <Confianza />
      <Testimonios />
      <CtaFinalFooter onSimular={scrollToCalculadora} />
    </div>
  )
}
