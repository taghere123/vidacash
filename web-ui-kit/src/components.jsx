// ui_kits/web/components.jsx
// All shared building blocks for the Interseguro web UI kit.

import React, { useEffect, useRef } from 'react'
import { createIcons, icons } from 'lucide'

// ---------------- Icon helper (Lucide) ----------------
export function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 2 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = ''
      const el = document.createElement('i')
      el.setAttribute('data-lucide', name)
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.color = color
      ref.current.appendChild(el)
      createIcons({
        icons,
        attrs: { 'stroke-width': strokeWidth, width: size, height: size },
      })
    }
  }, [name, size, color, strokeWidth])
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, lineHeight: 0 }} />
}

// ---------------- Logo ----------------
export function Logo({ color = '#0960DC', size = 22 }) {
  return (
    <div style={{
      fontFamily: 'Manrope, system-ui, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      fontSize: size,
      color,
      lineHeight: 1,
    }}>interseguro</div>
  )
}

// ---------------- Button ----------------
export function Button({ variant = 'primary', size = 'md', children, icon, iconAfter, onClick, type = 'button', disabled, fullWidth, style }) {
  const cls = `btn btn-${variant}${size === 'sm' ? ' btn-sm' : size === 'lg' ? ' btn-lg' : ''}`
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}
            style={{ width: fullWidth ? '100%' : undefined, ...style }}>
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 18} />}
      {children}
      {iconAfter && <Icon name={iconAfter} size={size === 'sm' ? 14 : 18} />}
    </button>
  )
}

// ---------------- Input ----------------
export function Input({ label, hint, error, value, onChange, placeholder, type = 'text', prefix, suffix, autoFocus, maxLength }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {prefix && (
          <span style={{
            position: 'absolute', left: 14,
            fontSize: 14, fontWeight: 700, color: 'var(--is-azul-4)',
          }}>{prefix}</span>
        )}
        <input
          className={`input${error ? ' error' : ''}`}
          value={value} onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder} type={type}
          autoFocus={autoFocus} maxLength={maxLength}
          style={{
            width: '100%',
            paddingLeft: prefix ? 44 : undefined,
            paddingRight: suffix ? 44 : undefined,
          }}
        />
        {suffix && (
          <span style={{ position: 'absolute', right: 14, fontSize: 13, color: 'var(--is-gray-700)' }}>{suffix}</span>
        )}
      </div>
      {error ? <span className="field-error">{error}</span> :
        hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  )
}

// ---------------- Tag ----------------
export function Tag({ children, kind = 'default' }) {
  const cls = kind === 'default' ? 'tag' : `tag tag-${kind}`
  return <span className={cls}>{children}</span>
}

// ---------------- Header ----------------
export function Header({ onNavigate, current = 'home' }) {
  const items = [
    { id: 'vehicular', label: 'Vehículo' },
    { id: 'viajes',    label: 'Viajes' },
    { id: 'hogar',     label: 'Hogar' },
    { id: 'salud',     label: 'Salud' },
    { id: 'vida',      label: 'Vida y Ahorro' },
    { id: 'viveplus',  label: 'Vive+' },
  ]
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'rgba(255,255,255,0.92)',
      borderBottom: '1px solid var(--is-negro-200)',
      backdropFilter: 'blur(8px)',
    }}>
      <div className="shell" style={{ display: 'flex', alignItems: 'center', height: 72, gap: 32 }}>
        <a onClick={() => onNavigate?.('home')} style={{ cursor: 'pointer' }}>
          <Logo size={22} />
        </a>
        <nav style={{ display: 'flex', gap: 24, flex: 1 }}>
          {items.map(it => (
            <a key={it.id}
               onClick={() => onNavigate?.(it.id)}
               style={{
                 cursor: 'pointer',
                 fontSize: 14, fontWeight: 600,
                 color: current === it.id ? 'var(--is-azul-is-500)' : 'var(--is-gray-900)',
                 borderBottom: current === it.id ? '2px solid var(--is-azul-is-500)' : '2px solid transparent',
                 paddingBottom: 4,
                 transition: 'color 200ms',
               }}>{it.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Button variant="ghost" size="sm" icon="phone-call">(01) 500 0000</Button>
          <Button variant="primary" size="sm">Mi cuenta</Button>
        </div>
      </div>
    </header>
  )
}

// ---------------- Photo placeholder ----------------
// We don't have real photography. Per brand manual, photography is warm/volumetric
// with brand color in wardrobe/utility. The placeholder uses warm-amber + magenta
// + brand-blue tints that approximate that direction, with a subtle vignette and a
// label so it's clear it's a placeholder.
export function PhotoPlaceholder({ scene = 'family', children, style }) {
  const scenes = {
    family:   'radial-gradient(circle at 25% 30%, #FFD4A8 0%, transparent 45%), radial-gradient(circle at 75% 70%, #F5A6C8 0%, transparent 50%), linear-gradient(135deg,#FFE7C2 0%, #F4B1C8 55%, #80DFFF 100%)',
    road:     'radial-gradient(circle at 70% 35%, #FFD49B 0%, transparent 45%), linear-gradient(160deg,#FFB892 0%, #F32682 45%, #074EAB 100%)',
    travel:   'radial-gradient(circle at 20% 80%, #FFE7C2 0%, transparent 50%), linear-gradient(120deg,#80DFFF 0%, #3BA2F7 50%, #074EAB 100%)',
    home:     'radial-gradient(circle at 30% 30%, #FFE0A8 0%, transparent 50%), linear-gradient(155deg,#FFE2B0 0%, #FFC3D6 50%, #80DFFF 100%)',
    portrait: 'radial-gradient(circle at 35% 35%, #FFCC9C 0%, transparent 50%), linear-gradient(135deg,#FFE1B4 0%, #F5A0BD 50%, #074EAB 100%)',
    park:     'radial-gradient(circle at 65% 70%, #FFD79A 0%, transparent 55%), linear-gradient(135deg,#C9E9A8 0%, #80DFFF 50%, #074EAB 100%)',
  }
  return (
    <div style={{
      position: 'relative',
      background: scenes[scene] || scenes.family,
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 50%, rgba(4,44,108,0.18) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 8, right: 12,
        fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,.7)',
      }}>Fotografía · placeholder</div>
      {children}
    </div>
  )
}

// ---------------- Hero (home) ----------------
export function Hero({ onCta }) {
  return (
    <section style={{ padding: '40px 0 24px' }}>
      <div className="shell">
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          minHeight: 440,
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
        }}>
          {/* Left: blue text panel */}
          <div style={{
            background: 'var(--is-azul-is-500)',
            color: '#fff',
            padding: '56px 56px 48px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .85 }}>SOAT Plus</div>
              <h1 style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 700, margin: '14px 0 12px' }}>
                Tan fácil como<br/>escoger la siguiente<br/>canción.
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.55, opacity: .92, maxWidth: 380, margin: 0 }}>
                Compra tu SOAT en menos de 2 minutos. Con cobertura inmediata y respaldo total.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <Button variant="accent" size="lg" iconAfter="arrow-right" onClick={onCta}>Cotiza tu SOAT</Button>
              <Button variant="ghost" size="lg" style={{ color:'#fff', borderColor:'rgba(255,255,255,.6)' }}>Conoce más</Button>
            </div>
          </div>
          {/* Right: photo + glass container */}
          <PhotoPlaceholder scene="road" style={{ minHeight: 440 }}>
            <div className="glass" style={{
              position: 'absolute', right: 28, bottom: 28,
              padding: '18px 22px', maxWidth: 280,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .9 }}>Desde</div>
              <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 4 }}>S/ 89<span style={{ fontSize: 14, opacity: .85, marginLeft: 4 }}>/año</span></div>
              <div style={{ fontSize: 12, opacity: .85, marginTop: 8 }}>Aplican TyC.</div>
            </div>
          </PhotoPlaceholder>
        </div>
      </div>
    </section>
  )
}

// ---------------- Product card ----------------
export function ProductCard({ icon, title, blurb, badge, highlighted, onClick }) {
  const bg = highlighted ? 'var(--is-azul-is-500)' : '#fff'
  const fg = highlighted ? '#fff' : 'var(--is-azul-4)'
  const sub = highlighted ? 'rgba(255,255,255,.85)' : 'var(--is-gray-700)'
  return (
    <div onClick={onClick} className={highlighted ? '' : 'card-base'} style={{
      position: 'relative',
      background: bg, color: fg,
      borderRadius: 20, padding: 24,
      cursor: 'pointer',
      border: highlighted ? 'none' : '1px solid var(--is-negro-200)',
      boxShadow: highlighted ? '0 12px 32px rgba(4,44,108,.18)' : 'var(--shadow-rest)',
      minHeight: 196,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      transition: 'transform 200ms cubic-bezier(.16,1,.3,1), box-shadow 200ms',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
      {badge && <div style={{ position: 'absolute', top: 14, right: 14 }}><Tag kind={highlighted ? 'default' : 'default'}>{badge}</Tag></div>}
      <div>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: highlighted ? 'rgba(255,255,255,.16)' : 'var(--is-blanco-nube)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 16,
        }}>
          <Icon name={icon} size={24} color={highlighted ? '#fff' : '#0A6AF5'} />
        </div>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.5, color: sub }}>{blurb}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 13, fontWeight: 600 }}>
        Cotizar <Icon name="arrow-right" size={14} color={fg} />
      </div>
    </div>
  )
}

// ---------------- Product grid ----------------
export function ProductGrid({ onProductSelect }) {
  const products = [
    { id: 'soat',       icon: 'car',         title: 'SOAT Plus',       blurb: 'Cobertura obligatoria con extras digitales.', badge: 'NUEVO', highlighted: true },
    { id: 'vehicular',  icon: 'shield-check',title: 'Seguro Vehicular',blurb: 'Hasta 30% de descuento en nuestra web.' },
    { id: 'viajes',     icon: 'plane',       title: 'Seguro de Viajes',blurb: 'Hasta $1,200 USD en cobertura de maletas.' },
    { id: 'hogar',      icon: 'home',        title: 'Seguro de Hogar', blurb: 'Tu casa protegida con un solo plan.' },
    { id: 'salud',      icon: 'heart-pulse', title: 'Salud',           blurb: 'Cobertura nacional con red de clínicas.' },
    { id: 'rumbo',      icon: 'piggy-bank',  title: 'Seguro Rumbo',    blurb: 'Ahorra, asegúrate y rentabiliza desde S/ 200.' },
  ]
  return (
    <section className="section" style={{ background: 'var(--is-blanco-980)' }}>
      <div className="shell">
        <div className="eyebrow">Productos</div>
        <h2 className="h2" style={{ marginTop: 8, marginBottom: 6 }}>Encuentra el plan ideal para ti</h2>
        <p className="lead" style={{ maxWidth: 560 }}>Cotiza, compra y administra todos tus seguros desde un solo lugar.</p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 36,
        }}>
          {products.map(p => (
            <ProductCard key={p.id} {...p} onClick={() => onProductSelect?.(p.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------- Vive+ strip ----------------
export function VivePlusStrip({ onCta }) {
  return (
    <section className="section">
      <div className="shell">
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          background: 'linear-gradient(115deg, var(--is-azul-is-500) 0%, var(--is-azul-3) 100%)',
          color: '#fff',
          padding: '48px 48px',
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: 32,
        }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(243,38,130,0.78)' }} />
          <div style={{ position: 'relative' }}>
            <Tag kind="default" >Vive+</Tag>
            <h2 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '14px 0 10px' }}>
              Nuestro programa de beneficios para ti
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, opacity: .92, maxWidth: 460, margin: 0 }}>
              Descuentos en gastronomía, salud, entretenimiento y mucho más. Sin costo adicional para nuestros clientes.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <Button variant="accent" iconAfter="arrow-right" onClick={onCta}>Conoce Vive+</Button>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {['gastronomía','salud','viajes','entretenimiento'].map((label, i) => (
              <div key={label} className="glass" style={{
                padding: 16, display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                <Icon name={['utensils','heart-pulse','plane','ticket'][i]} size={22} color="#fff" />
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'capitalize' }}>{label}</div>
                <div style={{ fontSize: 11, opacity: .85 }}>Hasta 30% dscto.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------- Testimonial card ----------------
export function Testimonial({ quote, name, product }) {
  return (
    <div className="card-base" style={{ padding: 24, borderRadius: 20 }}>
      <Icon name="quote" size={20} color="#0A6AF5" />
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--is-azul-4)', margin: '12px 0 18px', fontWeight: 500 }}>"{quote}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg,#FFE0A8,#FFC3D6,#80DFFF)',
        }} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--is-azul-4)' }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--is-gray-700)' }}>Cliente · {product}</div>
        </div>
      </div>
    </div>
  )
}

// ---------------- Footer ----------------
export function Footer() {
  const cols = [
    { title: 'Seguros',  items: ['SOAT Plus', 'Vehicular', 'Hogar', 'Viajes', 'Salud', 'Vida'] },
    { title: 'Inversión',items: ['Inversión Segura', 'Seguro Rumbo', 'Renta Particular'] },
    { title: 'Nosotros', items: ['Quiénes somos', 'Sostenibilidad', 'Trabaja con nosotros', 'Sala de prensa'] },
    { title: 'Ayuda',    items: ['Centro de ayuda', 'Contacto', 'Reclamos', 'Vive+'] },
  ]
  return (
    <footer style={{ background: 'var(--is-azul-4)', color: '#fff', paddingTop: 56, paddingBottom: 32, marginTop: 24 }}>
      <div className="shell">
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr repeat(4, 1fr)', gap: 32, paddingBottom: 40 }}>
          <div>
            <Logo color="#fff" size={26} />
            <p style={{ fontSize: 14, lineHeight: 1.55, opacity: .85, marginTop: 16, maxWidth: 280 }}>
              Avanzar seguros es más fácil.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['facebook','instagram','youtube','linkedin'].map(s => (
                <div key={s} style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={s} size={16} color="#fff" />
                </div>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .7, marginBottom: 14 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(i => <li key={i} style={{ fontSize: 14, opacity: .92, cursor: 'pointer' }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,.12)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, fontSize: 12, opacity: .7 }}>
          <div>© 2026 Interseguro Compañía de Seguros · RUC 20100074991</div>
          <div style={{ display: 'flex', gap: 18 }}>
            <span>Términos y condiciones</span>
            <span>Política de privacidad</span>
            <span>Libro de reclamaciones</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
