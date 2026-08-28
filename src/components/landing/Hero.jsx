export default function Hero({ onSimular }) {
  return (
    <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[2.25rem] sm:text-5xl font-extrabold text-brand-dark leading-[1.12] tracking-tight text-balance">
          Ahorra desde S/260 al mes.
          <br />
          {/* TODO: confirmar con Legal/Actuarial antes de publicar — "hasta" implica el escenario máximo */}
          Recibe hasta el 200% de lo aportado.
        </h1>

        <button
          onClick={onSimular}
          className="mt-9 inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-full transition-colors active:scale-[0.98]"
        >
          Simula tu ahorro
        </button>

        <p className="mt-5 text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
          Sujeto a plazo y monto de aporte. Seguro de vida con ahorro, sepelio incluido.
        </p>
      </div>
    </section>
  )
}
