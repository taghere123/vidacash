// Lógica de cotización SIMULADA para el prototipo "Ahorro Plus con Sepelio".
// TODO: reemplazar calcularPlan() por la lógica actuarial real del producto
// cuando esté disponible (tasas técnicas, tablas de mortalidad, gastos, etc).

export const APORTE_MIN = 260
export const APORTE_MAX = 1200
export const APORTE_PASO = 10

export const ANIOS_MIN = 4
export const ANIOS_MAX = 15

// Beneficio de sepelio: monto FIJO, no es variable de cotización.
export const SEPELIO_MONTO = 10000

// Placeholder: ganancia plana del 15.6% sobre el aporte total, igual para
// cualquier aporte o plazo. TODO: reemplazar por la curva actuarial real
// (debería variar según plazo, tasa técnica, gastos, etc).
const GANANCIA_TASA = 0.156

/**
 * Calcula el resultado de la cotización a partir del aporte mensual y el
 * plazo en años. Función pura: mismos parámetros, mismo resultado.
 */
export function calcularPlan(aporteMensual, anios) {
  const aporteTotal = aporteMensual * 12 * anios
  const ganancia = aporteTotal * GANANCIA_TASA
  const devolucionTotal = aporteTotal + ganancia
  const porcentajeDevolucion = aporteTotal > 0 ? (devolucionTotal / aporteTotal) * 100 : 0

  return {
    aporteTotal: Math.round(aporteTotal),
    ganancia: Math.round(ganancia),
    devolucionTotal: Math.round(devolucionTotal),
    porcentajeDevolucion: Math.round(porcentajeDevolucion * 10) / 10,
  }
}

export function formatMonto(valor) {
  return new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(valor)
}
