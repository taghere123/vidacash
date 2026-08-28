import { usePlan } from '../../context/PlanContext'
import {
  APORTE_MIN,
  APORTE_MAX,
  APORTE_PASO,
  ANIOS_MIN,
  ANIOS_MAX,
  SEPELIO_MONTO,
  formatMonto,
} from '../../lib/calculadora'
import Reveal from './Reveal'

export default function CalculadoraViva({ onContinuar }) {
  const { aporteMensual, setAporteMensual, anios, setAnios, resultado } = usePlan()

  return (
    <section id="calculadora" className="scroll-mt-16 px-6 py-16 sm:py-24 bg-brand-soft">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark text-center mb-10 sm:mb-14 text-balance">
            Simula tu ahorro
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white rounded-[var(--radius-card)] border border-[#D9DDE3] card-shadow p-6 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <label htmlFor="aporte-landing" className="text-sm font-semibold text-brand-dark">
                  ¿Cuánto ahorras al mes?
                </label>
                <p className="text-3xl font-extrabold text-brand mt-2">
                  S/ {formatMonto(aporteMensual)}
                </p>
                <input
                  id="aporte-landing"
                  type="range"
                  min={APORTE_MIN}
                  max={APORTE_MAX}
                  step={APORTE_PASO}
                  value={aporteMensual}
                  onChange={(e) => setAporteMensual(Number(e.target.value))}
                  className="w-full mt-4"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>S/ {formatMonto(APORTE_MIN)}</span>
                  <span>S/ {formatMonto(APORTE_MAX)}</span>
                </div>
              </div>

              <div>
                <label htmlFor="anios-landing" className="text-sm font-semibold text-brand-dark">
                  ¿Por cuántos años?
                </label>
                <p className="text-3xl font-extrabold text-brand mt-2">
                  {anios} {anios === 1 ? 'año' : 'años'}
                </p>
                <input
                  id="anios-landing"
                  type="range"
                  min={ANIOS_MIN}
                  max={ANIOS_MAX}
                  step={1}
                  value={anios}
                  onChange={(e) => setAnios(Number(e.target.value))}
                  className="w-full mt-4"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>{ANIOS_MIN} años</span>
                  <span>{ANIOS_MAX} años</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-brand-light my-8" />

            <div className="text-center">
              <p className="text-sm font-semibold text-slate-500">Recibes de vuelta</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-2">
                <div>
                  <p className="text-4xl sm:text-6xl font-extrabold text-brand tracking-tight">
                    S/ {formatMonto(resultado.devolucionTotal)}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">devolución total</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-6xl font-extrabold text-brand tracking-tight">
                    {resultado.porcentajeDevolucion}%
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">de tu aporte</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 mt-8">
                Aporte total:{' '}
                <span className="font-semibold text-brand-dark">
                  S/ {formatMonto(resultado.aporteTotal)}
                </span>
              </p>
            </div>

            <div className="flex items-start gap-2 rounded-[12px] bg-brand-tint border border-brand-light p-3.5 mt-8">
              <span className="text-lg leading-none">🕊️</span>
              <p className="text-xs text-brand-dark">
                Incluye, sin costo adicional, un seguro de sepelio por{' '}
                <span className="font-semibold">S/ {formatMonto(SEPELIO_MONTO)}</span>.
              </p>
            </div>

            <button
              onClick={onContinuar}
              className="mt-8 w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-full transition-colors active:scale-[0.98]"
            >
              Continuar con este plan
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
