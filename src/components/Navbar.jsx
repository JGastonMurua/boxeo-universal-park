import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      {/* Mobile nav panel */}
      <div className={`bup-mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button className="bup-mobile-close" onClick={close}>✕</button>
        <a href="#sobre"    onClick={close}>Nosotros</a>
        <a href="#clases"   onClick={close}>Clases</a>
        <a href="#eventos"  onClick={close}>Eventos</a>
        <a href="#galeria"  onClick={close}>Galería</a>
        <a href="#promos"   onClick={close}>Promos</a>
        <a href="#redes"    onClick={close}>Redes</a>
        <a href="#contacto" onClick={close}>Contacto</a>
      </div>

      <nav className={`bup-nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#inicio" className="bup-nav-logo">
          BOXEO <span>UNIVERSAL</span> PARK
        </a>

        <ul className="bup-nav-links">
          <li><a href="#sobre">Nosotros</a></li>
          <li><a href="#clases">Clases</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#promos">Promos</a></li>
          <li><a href="#redes">Redes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <a
          href="https://wa.me/5491150962124?text=Hola%20Santiago%2C%20quiero%20info%20sobre%20las%20clases"
          target="_blank"
          rel="noreferrer"
          className="bup-nav-cta"
        >
          Inscribite
        </a>

        <button className="bup-hamburger" onClick={() => setMobileOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>
    </>
  )
}

export default Navbar
