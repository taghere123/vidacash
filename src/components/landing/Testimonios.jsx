import Reveal from './Reveal'

const TESTIMONIOS = [
  {
    nombre: 'María del Carmen R.',
    ciudad: 'Lima',
    texto: 'Me ayudó a ahorrar con disciplina, sin tener que pensarlo cada mes.',
  },
  {
    nombre: 'Jorge L.',
    ciudad: 'Arequipa',
    texto: 'Elegí un plazo que puedo sostener y ya no me preocupo por el sepelio.',
  },
  {
    nombre: 'Fiorella P.',
    ciudad: 'Trujillo',
    texto: 'Es simple: sé exactamente cuánto voy a recibir al final.',
  },
]

export default function Testimonios() {
  return (
    <section className="px-6 py-16 sm:py-24 bg-brand-soft">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark text-center mb-10 sm:mb-14 text-balance">
            Clientes que ya ahorran así
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t) => (
            <Reveal key={t.nombre}>
              <div className="card-shadow rounded-[var(--radius-card)] bg-white border border-[#D9DDE3] p-6 h-full">
                <span className="text-brand text-lg leading-none">“</span>
                <p className="text-sm text-brand-dark font-medium -mt-1">{t.texto}”</p>
                <p className="text-xs font-semibold text-brand-dark mt-4">{t.nombre}</p>
                <p className="text-xs text-slate-400">{t.ciudad}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
