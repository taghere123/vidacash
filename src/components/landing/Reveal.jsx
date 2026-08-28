import { useEffect, useRef, useState } from 'react'

/**
 * Revela a sus hijos con un fade + desplazamiento discreto cuando entran al
 * viewport. Respeta prefers-reduced-motion (se muestra de inmediato, sin
 * animar) y solo dispara una vez por sección.
 */
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)

    // Red de seguridad: si por lo que sea el observer nunca dispara (entorno
    // sin soporte, iframe con scroll atípico), la sección igual se muestra.
    const timeout = setTimeout(() => setVisible(true), 1200)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
