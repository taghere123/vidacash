// ui_kits/web/screens.jsx
import React, { useState } from 'react'
import { Icon, Button, Input, Tag, Hero, ProductGrid, VivePlusStrip, Testimonial, PhotoPlaceholder } from './components.jsx'

// ---------------- Home Screen ----------------
export function HomeScreen({ onNavigate }) {
  return (
    <>
      <Hero onCta={() => onNavigate('quote', 'soat')} />
      <ProductGrid onProductSelect={(id) => onNavigate('product', id)} />
      <VivePlusStrip onCta={() => onNavigate('viveplus')} />

      {/* Testimonials */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="shell">
          <div className="eyebrow">Clientes</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 32 }}>Más de 2 millones de peruanos confían en nosotros</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <Testimonial
              quote="Saqué mi SOAT en menos de 2 minutos. La pantalla del celular y listo."
              name="Lucía R." product="SOAT Plus" />
            <Testimonial
              quote="El reembolso del viaje a Cusco llegó al día siguiente. Sin papeleo."
              name="Diego M." product="Seguro de Viajes" />
            <Testimonial
              quote="Mi madre tuvo una emergencia y la atendieron de inmediato. Tranquilidad real."
              name="Andrea P." product="Salud" />
          </div>
        </div>
      </section>
    </>
  )
}

// ---------------- Product detail screen (SOAT Plus example) ----------------
export function ProductScreen({ productId, onNavigate }) {
  const data = {
    soat: {
      title: 'SOAT Plus',
      tagline: 'Tan fácil como escoger la siguiente canción.',
      blurb: 'Cumple con la ley en menos de 2 minutos. SOAT digital, cobertura inmediata y respaldo total.',
      features: [
        { icon: 'zap', title: 'Activación inmediata', body: 'Tu SOAT vigente apenas terminas el proceso.' },
        { icon: 'smartphone', title: '100% digital', body: 'Recíbelo por correo y guárdalo en tu billetera.' },
        { icon: 'shield-check', title: 'Cobertura nacional', body: 'Atención médica garantizada en todo el Perú.' },
        { icon: 'clock', title: 'Renovación 1-clic', body: 'Te avisamos cuando vence. Lo renuevas sin papeleo.' },
      ],
      tiers: [
        { name: 'Particular',   price: 'S/ 89',  period: '/año', popular: false, items: ['Auto, station wagon o pickup', 'Hasta 5 pasajeros', 'Cobertura nacional'] },
        { name: 'Familiar',     price: 'S/ 129', period: '/año', popular: true,  items: ['Auto + camioneta hasta 6 pasajeros', 'Asistencia mecánica básica', 'Renovación inteligente'] },
        { name: 'Comercial',    price: 'S/ 189', period: '/año', popular: false, items: ['Taxi, transporte privado', 'Hasta 9 pasajeros', 'Soporte 24/7'] },
      ],
    },
    vehicular: {
      title: 'Seguro Vehicular',
      tagline: 'Tu auto, protegido al 100%.',
      blurb: 'Asistencia mecánica 24/7, cobertura todo riesgo y descuentos en talleres asociados.',
      features: [
        { icon: 'wrench', title: 'Asistencia 24/7', body: 'Grúa, batería, gasolinera. Te ayudamos donde estés.' },
        { icon: 'car', title: 'Auto de reemplazo', body: 'No te quedas sin moverte cuando llevamos tu auto al taller.' },
        { icon: 'shield-check', title: 'Todo riesgo', body: 'Choque, robo, daños a terceros — un solo plan.' },
        { icon: 'badge-percent', title: '30% dscto. online', body: 'Cotiza y compra desde la web y aprovecha la promo.' },
      ],
      tiers: [
        { name: 'Básico',  price: 'S/ 79',  period: '/mes', popular: false, items: ['Robo y daños propios', 'Daños a terceros', 'Asistencia básica'] },
        { name: 'Plus',    price: 'S/ 129', period: '/mes', popular: true,  items: ['Todo el Básico', 'Asistencia 24/7 nacional', 'Auto de reemplazo 15 días'] },
        { name: 'Total',   price: 'S/ 189', period: '/mes', popular: false, items: ['Todo el Plus', 'Lunas y accesorios', 'Auto de reemplazo 30 días'] },
      ],
    },
  }
  const p = data[productId] || data.soat

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '40px 0 24px' }}>
        <div className="shell">
          <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'var(--is-gray-700)', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
            <Icon name="arrow-left" size={14} color="#6B7280" /> Volver
          </a>
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 400, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ background: 'var(--is-azul-is-500)', color: '#fff', padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>{p.title}</div>
                <h1 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700, margin: '12px 0 12px', color: '#fff' }}>{p.tagline}</h1>
                <p style={{ fontSize: 17, lineHeight: 1.55, opacity: .92, maxWidth: 420, margin: 0 }}>{p.blurb}</p>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <Button variant="accent" size="lg" iconAfter="arrow-right" onClick={() => onNavigate('quote', productId)}>Cotizar ahora</Button>
                <Button variant="ghost" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.6)' }}>Ver condiciones</Button>
              </div>
            </div>
            <PhotoPlaceholder scene={productId === 'vehicular' ? 'road' : 'road'} style={{ minHeight: 400 }} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="shell">
          <div className="eyebrow">Qué incluye</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 32 }}>Todo lo que necesitas, en un solo plan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {p.features.map(f => (
              <div key={f.title} className="card-base" style={{ padding: 24, borderRadius: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--is-blanco-nube)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={f.icon} size={22} color="#0A6AF5" />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--is-azul-4)', marginBottom: 6, letterSpacing: '-0.01em' }}>{f.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--is-gray-700)' }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section" style={{ background: 'var(--is-blanco-980)' }}>
        <div className="shell">
          <div className="eyebrow">Planes</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 32 }}>Escoge el plan que va contigo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {p.tiers.map(t => (
              <div key={t.name} style={{
                position: 'relative',
                background: t.popular ? 'var(--is-azul-is-500)' : '#fff',
                color: t.popular ? '#fff' : 'var(--is-azul-4)',
                borderRadius: 20, padding: 28,
                border: t.popular ? 'none' : '1px solid var(--is-negro-200)',
                boxShadow: t.popular ? '0 12px 32px rgba(4,44,108,.18)' : 'var(--shadow-rest)',
              }}>
                {t.popular && <div style={{ position: 'absolute', top: -10, left: 24 }}><Tag><span style={{ background: 'var(--is-magenta)', color: '#fff', padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700 }}>Más elegido</span></Tag></div>}
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .8 }}>{t.name}</div>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1 }}>{t.price}</span>
                  <span style={{ fontSize: 14, opacity: .8 }}>{t.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.items.map(it => (
                    <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ marginTop: 2 }}><Icon name="check" size={16} color={t.popular ? '#fff' : '#1F8A5B'} /></span>
                      <span style={{ color: t.popular ? 'rgba(255,255,255,.92)' : 'var(--is-gray-900)' }}>{it}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={t.popular ? 'accent' : 'primary'}
                  fullWidth
                  onClick={() => onNavigate('quote', productId)}
                >Cotizar {t.name}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ---------------- Quote screen ----------------
export function QuoteScreen({ productId, onNavigate }) {
  const [step, setStep] = useState(1)
  const [dni, setDni] = useState('')
  const [placa, setPlaca] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const isStep1Valid = dni.length === 8 && placa.length >= 6
  const isStep2Valid = name.length > 2 && /@/.test(email) && phone.length >= 9

  return (
    <section style={{ padding: '48px 0 96px', background: 'var(--is-blanco-980)', minHeight: 'calc(100vh - 72px)' }}>
      <div className="shell" style={{ maxWidth: 880 }}>
        <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'var(--is-gray-700)', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <Icon name="arrow-left" size={14} color="#6B7280" /> Volver
        </a>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          {[1, 2, 3].map(n => (
            <React.Fragment key={n}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: step >= n ? 'var(--is-azul-is-500)' : 'var(--is-negro-200)',
                color: step >= n ? '#fff' : 'var(--is-gray-700)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700,
              }}>{step > n ? '✓' : n}</div>
              {n < 3 && <div style={{ flex: 1, height: 2, background: step > n ? 'var(--is-azul-is-500)' : 'var(--is-negro-200)' }} />}
            </React.Fragment>
          ))}
        </div>

        <div className="card-base" style={{ padding: 40, borderRadius: 24 }}>
          {step === 1 && (
            <>
              <div className="eyebrow">Paso 1 de 3</div>
              <h2 className="h2" style={{ marginTop: 8, marginBottom: 8, fontSize: 32 }}>Cuéntanos sobre ti y tu vehículo</h2>
              <p className="lead" style={{ marginBottom: 28, color: 'var(--is-gray-700)', fontSize: 16 }}>
                Cotizamos tu seguro en menos de un minuto. Sin compromiso.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label="DNI" placeholder="74521089" value={dni} onChange={v => setDni(v.replace(/\D/g, '').slice(0, 8))} maxLength={8} autoFocus />
                <Input label="Placa del vehículo" placeholder="ABC-123" value={placa} onChange={v => setPlaca(v.toUpperCase().slice(0, 8))} />
              </div>
              <div style={{ marginTop: 16, padding: 16, borderRadius: 12, background: 'var(--is-blanco-nube)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Icon name="info" size={18} color="#0A6AF5" />
                <div style={{ fontSize: 13, color: 'var(--is-azul-4)', lineHeight: 1.5 }}>
                  Buscaremos los datos de tu vehículo en SUNARP. Si algo no calza, lo corriges en el siguiente paso.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 28 }}>
                <Button variant="primary" size="lg" iconAfter="arrow-right" disabled={!isStep1Valid} onClick={() => setStep(2)}>Continuar</Button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="eyebrow">Paso 2 de 3</div>
              <h2 className="h2" style={{ marginTop: 8, marginBottom: 8, fontSize: 32 }}>¿Cómo te contactamos?</h2>
              <p className="lead" style={{ marginBottom: 28, color: 'var(--is-gray-700)', fontSize: 16 }}>
                Te enviaremos la cotización y tu póliza por estos medios.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Input label="Nombre completo" placeholder="María Quispe" value={name} onChange={setName} />
                <Input label="Teléfono" placeholder="999 555 444" value={phone} prefix="+51" onChange={v => setPhone(v.replace(/\D/g, '').slice(0, 9))} />
              </div>
              <div style={{ marginTop: 16 }}>
                <Input label="Correo electrónico" type="email" placeholder="hola@correo.com" value={email} onChange={setEmail} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
                <Button variant="ghost" onClick={() => setStep(1)} icon="arrow-left">Atrás</Button>
                <Button variant="primary" size="lg" iconAfter="arrow-right" disabled={!isStep2Valid} onClick={() => setStep(3)}>Ver mi precio</Button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="eyebrow">Paso 3 de 3</div>
              <h2 className="h2" style={{ marginTop: 8, marginBottom: 8, fontSize: 32 }}>Tu cotización está lista</h2>
              <p className="lead" style={{ marginBottom: 24, color: 'var(--is-gray-700)', fontSize: 16 }}>
                Te enviamos una copia a <strong style={{ color: 'var(--is-azul-4)', fontWeight: 600 }}>{email || 'tu correo'}</strong>.
              </p>
              <div style={{
                position: 'relative',
                borderRadius: 20, padding: 32, overflow: 'hidden',
                background: 'linear-gradient(120deg, var(--is-azul-is-500), var(--is-azul-3))',
                color: '#fff',
                marginBottom: 24,
              }}>
                <div style={{ position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(243,38,130,.7)' }} />
                <div style={{ position: 'relative' }}>
                  <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>SOAT Plus Familiar</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 12 }}>
                    <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1 }}>S/ 129</span>
                    <span style={{ fontSize: 16, opacity: .85 }}>/año</span>
                  </div>
                  <div style={{ fontSize: 14, opacity: .85, marginTop: 6 }}>Placa <strong>{placa || '———'}</strong> · Cobertura inmediata</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <span className="small">Aplican TyC. Precio referencial sujeto a evaluación.</span>
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button variant="ghost" onClick={() => setStep(2)}>Editar datos</Button>
                  <Button variant="accent" size="lg" iconAfter="arrow-right">Pagar ahora</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

// ---------------- Vive+ screen ----------------
export function VivePlusScreen({ onNavigate }) {
  const benefits = [
    { icon: 'utensils',    title: 'Gastronomía', off: '30%', merchants: 'La Lucha, Tanta, Astrid&Gastón' },
    { icon: 'heart-pulse', title: 'Salud',        off: '25%', merchants: 'Inkafarma, Mifarma, Boticas' },
    { icon: 'plane',       title: 'Viajes',       off: '20%', merchants: 'LATAM, Sky, Booking.com' },
    { icon: 'ticket',      title: 'Entretenimiento', off: '15%', merchants: 'Cineplanet, Cinemark, Teleticket' },
    { icon: 'shirt',       title: 'Moda',          off: '20%', merchants: 'Saga Falabella, Ripley, Topitop' },
    { icon: 'shopping-bag',title: 'Supermercados', off: '10%', merchants: 'Tottus, Plaza Vea, Wong' },
  ]
  return (
    <>
      <section style={{ padding: '48px 0 24px' }}>
        <div className="shell">
          <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'var(--is-gray-700)', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
            <Icon name="arrow-left" size={14} color="#6B7280" /> Volver
          </a>
          <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', minHeight: 360, padding: '56px 56px', background: 'linear-gradient(115deg, var(--is-azul-is-500), var(--is-azul-3))', color: '#fff' }}>
            <div style={{ position: 'absolute', top: -100, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'rgba(243,38,130,.78)' }} />
            <div style={{ position: 'relative', maxWidth: 580 }}>
              <Tag kind="default">Vive+</Tag>
              <h1 style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 700, margin: '14px 0 16px' }}>
                Tu vida con<br/>más beneficios.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, opacity: .92, margin: 0 }}>
                Descuentos en cientos de comercios, todo el año. Para nuestros clientes, sin costo adicional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="eyebrow">Categorías</div>
          <h2 className="h2" style={{ marginTop: 8, marginBottom: 32 }}>Beneficios pensados para ti</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {benefits.map(b => (
              <div key={b.title} className="card-base" style={{ padding: 24, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--is-blanco-nube)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={b.icon} size={22} color="#0A6AF5" />
                  </div>
                  <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--is-magenta)', letterSpacing: '-0.01em' }}>−{b.off}</span>
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--is-azul-4)', letterSpacing: '-0.01em' }}>{b.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--is-gray-700)' }}>{b.merchants}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
