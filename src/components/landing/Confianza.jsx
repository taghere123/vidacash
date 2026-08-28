import { ShieldCheck, Building2, FileCheck2, Award } from 'lucide-react'
import Reveal from './Reveal'

const PUNTOS = [
  { icono: ShieldCheck, texto: 'Supervisado por la SBS' },
  { icono: Building2, texto: 'Respaldo del Grupo Intercorp' },
  { icono: FileCheck2, texto: 'Devolución garantizada por contrato' },
  // TODO: confirmar la cifra exacta de años en el mercado peruano
  { icono: Award, texto: 'XX años en el mercado peruano' },
]

export default function Confianza() {
  return (
    <section className="px-6 py-16 sm:py-24 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark text-center mb-10 sm:mb-14 text-balance">
          Un respaldo real
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PUNTOS.map((p) => (
          <Reveal key={p.texto}>
            <div className="card-shadow flex flex-col items-center text-center gap-3 rounded-[var(--radius-card)] border border-[#D9DDE3] bg-white p-5 h-full">
              <p.icono size={22} strokeWidth={1.75} className="text-brand" />
              <p className="text-xs font-semibold text-brand-dark leading-snug">{p.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
