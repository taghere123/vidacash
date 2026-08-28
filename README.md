# Ahorro Plus con Sepelio — Prototipo interactivo

Prototipo de UX (React + Tailwind CSS v4 + Vite) del flujo de 3 pantallas de
"Ahorro Plus con Sepelio", un producto de ahorro con devolución de
Interseguro que incluye un seguro de sepelio de monto fijo (S/10,000).

Es un prototipo de solo interfaz: no hay backend, no se procesa ningún pago
real y todos los datos (cálculos, testimonios) son simulados.

## Cómo correrlo

```bash
npm install
npm run dev
```

Cotizador y Pago siguen el marco mobile-first de ~390px (centrado en
pantallas más anchas); la landing es una página de marketing responsive de
ancho completo.

## Estructura

- `src/lib/calculadora.js` — función pura `calcularPlan(aporteMensual, anios)`
  que devuelve aporte total, ganancia, devolución total y % de devolución.
  Aislada a propósito para poder reemplazarla luego por la lógica actuarial
  real sin tocar la UI.
- `src/context/PlanContext.jsx` — estado compartido del plan elegido
  (aporte mensual, años, frecuencia de cobro y resultado) entre las 3
  pantallas, incluida la calculadora en vivo de la landing.
- `src/components/Landing.jsx` — Pantalla 1: landing de 6 secciones (hero,
  cómo funciona, calculadora en vivo, confianza/respaldo, testimonios, CTA
  final + footer), compuesta a partir de `src/components/landing/*.jsx`.
  `landing/Reveal.jsx` anima la entrada de cada sección al hacer scroll
  (IntersectionObserver, respeta `prefers-reduced-motion`).
- `src/components/Cotizador.jsx` — Pantalla 2: sliders de aporte/años y
  tarjeta de resultado en vivo.
- `src/components/Pago.jsx` — Pantalla 3: resumen del plan, formulario de
  tarjeta (solo visual), frecuencia de cobro y modal de compra confirmada.
- `src/App.jsx` — navegación entre pantallas con estado de React (sin
  router).

## Notas de marca

Los tokens de `src/index.css` (`--color-brand`, `--color-accent`, radios,
sombras) y la tipografía Manrope vienen del Interseguro Design System real,
tomado de `web-ui-kit/src/app.css` — ya no son valores placeholder. El único
pendiente es la fuente "Interseguro Sans" en sí (Manrope es el fallback
documentado en el manual de marca hasta que se comparta el archivo oficial).

Convención de botones tomada del UI kit: **azul** (`bg-brand`) para
navegación/progresión (p. ej. "Confirmar plan"), **magenta** (`bg-accent`)
para la acción de conversión principal (p. ej. "Cotizar ahora",
"Confirmar compra").
