// ui_kits/web/app.jsx
import { useState } from 'react'
import { Header, Footer } from './components.jsx'
import { HomeScreen, ProductScreen, QuoteScreen, VivePlusScreen } from './screens.jsx'

export default function App() {
  const [route, setRoute] = useState({ name: 'home', arg: null })
  const navigate = (name, arg) => {
    setRoute({ name, arg })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const current =
    route.name === 'home' ? 'home' :
    route.name === 'product' ? route.arg :
    route.name === 'quote' ? route.arg :
    route.name === 'viveplus' ? 'viveplus' : 'home'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} data-screen-label={`Web · ${route.name}`}>
      <Header current={current} onNavigate={(id) => {
        if (id === 'home') navigate('home')
        else if (id === 'viveplus') navigate('viveplus')
        else navigate('product', id)
      }} />
      <main style={{ flex: 1 }}>
        {route.name === 'home' && <HomeScreen onNavigate={navigate} />}
        {route.name === 'product' && <ProductScreen productId={route.arg} onNavigate={navigate} />}
        {route.name === 'quote' && <QuoteScreen productId={route.arg} onNavigate={navigate} />}
        {route.name === 'viveplus' && <VivePlusScreen onNavigate={navigate} />}
      </main>
      <Footer />
    </div>
  )
}
