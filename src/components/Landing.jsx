import ScreenHeader from './ScreenHeader'

const BENEFICIOS = [
  { icono: '❄️', titulo: 'Congela tu cuenta', texto: 'Pausa tus aportes ante un imprevisto sin perder tu ahorro.' },
  { icono: '🕊️', titulo: 'Sepelio incluido', texto: 'Protección de sepelio de S/10,000 sin costo adicional.' },
  { icono: '📱', titulo: '100% digital', texto: 'Contrata y gestiona tu plan desde tu celular, sin papeleos.' },
]

const TESTIMONIOS = [
  { nombre: 'María del Carmen R.', ciudad: 'Lima', texto: 'Me gusta saber cuánto voy a recibir al final, es un ahorro con propósito.' },
  { nombre: 'Jorge L.', ciudad: 'Arequipa', texto: 'Lo contraté pensando en mi familia y en no dejarles gastos de sepelio.' },
  { nombre: 'Fiorella P.', ciudad: 'Trujillo', texto: 'El proceso fue rápido y todo lo hice desde el celular.' },
]

export default function Landing({ onCotizar }) {
  return (
    <div className="min-h-full flex flex-col bg-white">
      <ScreenHeader />

      {/* Hero */}
      <section className="px-5 pt-8 pb-6 bg-brand-soft">
        <h1 className="text-2xl font-extrabold text-brand-dark leading-tight">
          Ahorra con <span className="text-brand">Ahorro Plus</span> y protege a
          quienes más amas
        </h1>
        <ul className="mt-4 space-y-2">
          {[
            'Ahorra desde S/260 al mes',
            'Protección de sepelio incluida (S/10,000)',
            'Plan flexible de 4 a 15 años',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 text-brand">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onCotizar}
          className="mt-6 w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-[12px] transition-colors active:scale-[0.98]"
        >
          Cotizar ahora
        </button>
      </section>

      {/* Beneficios */}
      <section className="px-5 py-7">
        <h2 className="text-base font-bold text-brand-dark mb-4">Beneficios de tu plan</h2>
        <div className="grid grid-cols-1 gap-3">
          {BENEFICIOS.map((b) => (
            <div
              key={b.titulo}
              className="card-shadow flex items-start gap-3 rounded-[var(--radius-card)] border border-[#D9DDE3] bg-white p-4"
            >
              <span className="text-2xl leading-none">{b.icono}</span>
              <div>
                <p className="text-sm font-semibold text-brand-dark">{b.titulo}</p>
                <p className="text-sm text-slate-500 mt-0.5">{b.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-5 py-7 bg-brand-soft">
        <h2 className="text-base font-bold text-brand-dark mb-4">Lo que dicen nuestros clientes</h2>
        <div className="flex flex-col gap-3">
          {TESTIMONIOS.map((t) => (
            <div key={t.nombre} className="card-shadow rounded-[var(--radius-card)] bg-white border border-[#D9DDE3] p-4">
              <span className="text-brand text-lg leading-none">“</span>
              <p className="text-sm text-brand-dark font-medium -mt-1">{t.texto}”</p>
              <p className="text-xs font-semibold text-brand-dark mt-3">{t.nombre}</p>
              <p className="text-xs text-slate-400">{t.ciudad}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 py-7">
        <button
          onClick={onCotizar}
          className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 rounded-[12px] transition-colors active:scale-[0.98]"
        >
          Cotizar ahora
        </button>
      </section>

      {/* Footer */}
      <footer className="px-5 py-6 border-t border-slate-100 text-center">
        <p className="text-[11px] text-slate-400">
          Interseguro Seguros de Vida S.A. Prototipo interno de UX — no representa
          condiciones contractuales reales.
        </p>
        <p className="text-[11px] text-slate-300 mt-1">© 2026 Interseguro</p>
      </footer>
    </div>
  )
}
