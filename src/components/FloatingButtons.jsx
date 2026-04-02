import React, { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showTop, setShowTop]       = useState(false)
  const [bottomOffset, setBottomOffset] = useState(32)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)

      const footer = document.querySelector('.bup-footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const visible = window.innerHeight - footerTop
        setBottomOffset(visible > 0 ? visible + 16 : 32)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/5491150962124?text=Hola%20profe%2C%20tengo%20ganas%20de%20inscribirme%20a%20las%20clases%20de%20boxeo%2C%20mi%20nombre%20es..."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          position: 'fixed',
          bottom: `${bottomOffset}px`,
          right: '2rem',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25d366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 8000,
          boxShadow: '0 6px 24px rgba(37,211,102,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s, bottom 0.15s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.12)'
          e.currentTarget.style.boxShadow = '0 10px 32px rgba(37,211,102,0.6)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.45)'
        }}
      >
        {/* Ping animation */}
        <span style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: '#25d366',
          animation: 'waPing 2s infinite',
          zIndex: -1,
        }} />
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.099 1.515 5.833L.057 23.943l6.233-1.636A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.374l-.359-.214-3.7.972.988-3.611-.235-.37A9.797 9.797 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        style={{
          position: 'fixed',
          right: '6.5rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(13,43,13,0.85)',
          border: '1.5px solid rgba(57,255,20,0.4)',
          color: '#39ff14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 8000,
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'opacity 0.3s, transform 0.2s, box-shadow 0.2s',
          bottom: `${bottomOffset}px`,
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? 'all' : 'none',
          transform: showTop ? 'translateY(0)' : 'translateY(12px)',
          fontSize: '1.1rem',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(57,255,20,0.3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        ↑
      </button>

      <style>{`
        @keyframes waPing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </>
  )
}

export default FloatingButtons
