import Reveal from './Reveal'

export default function CtaFinalFooter({ onSimular }) {
  return (
    <>
      <section className="px-6 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark leading-tight text-balance">
              Empieza a ahorrar con un plan claro
            </h2>
            <button
              onClick={onSimular}
              className="mt-8 inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-full transition-colors active:scale-[0.98]"
            >
              Simula tu ahorro
            </button>
          </div>
        </Reveal>
      </section>

      <footer className="px-6 py-8 border-t border-slate-100 text-center">
        {/* TODO: completar razón social, RUC y N° de registro SBS antes de publicar */}
        <p className="text-[11px] text-slate-400 max-w-md mx-auto leading-relaxed">
          [Razón social pendiente] · RUC [pendiente] · Registro SBS N° [pendiente]. Prototipo
          interno de UX — no representa condiciones contractuales reales.
        </p>
        <p className="text-[11px] text-slate-300 mt-1">© 2026 Interseguro</p>
      </footer>
    </>
  )
}
