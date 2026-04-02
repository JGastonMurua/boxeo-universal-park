import React from 'react'

const promos = [
  {
    badge: 'Promo Bienvenida',
    titulo: 'Bienvenida al Ring',
    desc: '50% de descuento en la primera mensualidad para nuevos socios. Tu primer mes a mitad de precio.',
  },
  {
    badge: 'Pack Amigos',
    titulo: 'Vengan de a Dos',
    desc: 'Veni con un amigo y ambos tienen 2x1 el primer mes. Entrenas mejor con alguien que te acompane.',
  },
]

// SVG icons para redes sociales
const IconInsta = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.099 1.515 5.833L.057 23.943l6.233-1.636A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.374l-.359-.214-3.7.972.988-3.611-.235-.37A9.797 9.797 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
  </svg>
)

const Redes = () => (
  <>
    {/* PROMOS */}
    <div className="divider" />
    <section id="promos">
      <span className="section-label reveal">Ofertas</span>
      <h2 className="section-title reveal">NUESTRAS <em>PROMOS</em></h2>
      <div className="promos-grid">
        {promos.map((p, i) => (
          <div className="promo-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <span className="promo-badge">{p.badge}</span>
            <div className="promo-titulo">{p.titulo}</div>
            <div className="promo-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* REDES SOCIALES */}
    <div className="divider" />
    <section id="redes" style={{ textAlign: 'center', padding: '5rem 4rem' }}>
      <span className="section-label reveal">Redes Sociales</span>
      <h2 className="section-title reveal">ENCONTRANOS <em>ONLINE</em></h2>

      <div className="redes-grid">

        {/* Facebook */}
        <a href="https://www.facebook.com/Universalparkbox" target="_blank" rel="noreferrer" className="red-card reveal">
          <div className="red-card-inner">
            <IconFacebook />
            <span className="red-card-name">Facebook</span>
            <span className="red-card-handle">Universalparkbox</span>
            <span className="red-card-cta">Ver pagina</span>
          </div>
        </a>

        {/* Instagram — principal, mas grande */}
        <a href="https://www.instagram.com/boxeouniversalpark/" target="_blank" rel="noreferrer" className="red-card red-card--main reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="red-card-inner">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ig2" x1="0" y1="24" x2="24" y2="0">
                  <stop offset="0%" stopColor="#f09433"/>
                  <stop offset="50%" stopColor="#dc2743"/>
                  <stop offset="100%" stopColor="#bc1888"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig2)" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4.5" stroke="url(#ig2)" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="url(#ig2)"/>
            </svg>
            <span className="red-card-name" style={{ fontSize: '1.3rem' }}>Instagram</span>
            <span className="red-card-handle">@boxeouniversalpark</span>
            <span className="red-card-cta">Seguir</span>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5491150962124?text=Hola%20Boxeo%20Universal%20Park%2C%20quiero%20info"
          target="_blank"
          rel="noreferrer"
          className="red-card reveal"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="red-card-inner">
            <IconWhatsApp />
            <span className="red-card-name">WhatsApp</span>
            <span className="red-card-handle">+54 9 11 5096-2124</span>
            <span className="red-card-cta">Escribir</span>
          </div>
        </a>

      </div>
    </section>
  </>
)

export default Redes
