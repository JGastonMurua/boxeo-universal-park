import React, { useEffect } from 'react'
import Navbar          from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'
import Hero    from './components/Hero'
import { Sobre, Contacto } from './components/Home'
import Eventos from './components/Eventos'
import Galeria from './components/Galeria'
import Promos  from './components/Promos'
import Footer  from './components/Footer'

const App = () => {
  // Scroll reveal — applied once globally
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Eventos />
      <Galeria />
      <Promos />
      <Contacto />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
