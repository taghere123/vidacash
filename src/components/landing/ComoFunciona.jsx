import { PiggyBank, CalendarRange, HandCoins } from 'lucide-react'
import Reveal from './Reveal'

const PASOS = [
  {
    icono: PiggyBank,
    titulo: 'Elige cuánto ahorrar al mes',
    texto: 'Desde S/260 hasta S/1,200.',
  },
  {
    icono: CalendarRange,
    titulo: 'Elige por cuántos años',
    texto: 'De 4 a 15 años de plazo.',
  },
  {
    icono: HandCoins,
    titulo: 'Recibe tu devolución al final del plan',
    texto: 'Con seguro de sepelio incluido.',
  },
]

// Delays escalonados como clases literales (Tailwind no detecta strings interpoladas)
const DELAYS = ['', 'delay-100', 'delay-200']

export default function ComoFunciona() {
  return (
    <section className="px-6 py-16 sm:py-24 max-w-5xl mx-auto">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark text-center mb-12 sm:mb-16 text-balance">
          Cómo funciona
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {PASOS.map((paso, i) => (
          <Reveal key={paso.titulo} className={DELAYS[i]}>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-tint flex items-center justify-center mb-5">
                <paso.icono size={24} strokeWidth={1.75} className="text-brand" />
              </div>
              <h3 className="text-base font-bold text-brand-dark mb-1.5">{paso.titulo}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{paso.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
