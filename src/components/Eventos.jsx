import React from 'react'

const clases = [
  {
    titulo: 'BOXEO',
    sub: 'Tecnica · Fuerza · Velocidad',
    desc: 'Aprende la tecnica del boxeo desde cero o perfecciona tu estilo. Clases para todos los niveles, con entrenadores que te guian en cada golpe, esquive y movimiento de pies.',
  },
  {
    titulo: 'ENTRENAMIENTO FISICO',
    sub: 'Fuerza · Cardio · Resistencia',
    desc: 'Programas de acondicionamiento fisico disenados para maximizar tu rendimiento. Circuitos, trabajo con pesas y cardio de alta intensidad para llevar tu cuerpo al limite.',
  },
  {
    titulo: 'SPARRING',
    sub: 'Combate · Tactica · Control',
    desc: 'Sesiones de practica controlada donde pones a prueba tu tecnica en combate real. Solo para alumnos con base solida, siempre bajo supervision profesional.',
  },
]

const eventos = [
  {
    titulo: 'Torneo Interno de Boxeo',
    fecha: '15 de Junio 2025',
    desc: 'Participación abierta a todos los niveles. ¡Sumate y mostrá lo que aprendiste!',
  },
  {
    titulo: 'Clase con el Profe Santiago',
    fecha: 'Lunes, Miercoles y Viernes · 19 a 21hs',
    desc: 'Clases regulares enfocadas en tecnica de boxeo y sparring. Abierto a todos los niveles.',
  },
  {
    titulo: 'Fotos y Videos del Último Evento',
    fecha: 'Disponible en Instagram',
    desc: '¡No te pierdas las imágenes en nuestras redes!',
  },
]

const Eventos = () => (
  <>
    {/* ── CLASES ── */}
    <div className="divider" />
    <section id="clases" style={{ background: 'var(--black)', padding: '7rem 4rem', textAlign: 'center' }}>
      <div className="section-header">
        <span className="section-label reveal">Disciplinas</span>
        <h2 className="section-title reveal">NUESTRAS <em>CLASES</em></h2>
      </div>
      <div className="classes-grid">
        {clases.map((c, i) => (
          <div className="flip-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="flip-inner">
              <div className="flip-front">
                <h3>{c.titulo}</h3>
                <span className="fsub">{c.sub}</span>
              </div>
              <div className="flip-back">
                <h3>{c.titulo}</h3>
                <p>{c.desc}</p>
                <a
                  href="https://wa.me/5491150962124?text=Hola%20profe%2C%20quiero%20info%20sobre%20las%20clases"
                  target="_blank"
                  rel="noreferrer"
                  className="flink"
                >
                  Inscribirme →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── EVENTOS ── */}
    <div className="divider" />
    <section id="eventos">
      <span className="section-label reveal">Agenda</span>
      <h2 className="section-title reveal">EVENTOS Y <em>NOVEDADES</em></h2>
      <div className="eventos-grid">
        {eventos.map((ev, i) => (
          <div className="evento-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="evento-fecha">{ev.fecha}</div>
            <div className="evento-titulo">{ev.titulo}</div>
            <div className="evento-desc">{ev.desc}</div>
          </div>
        ))}
      </div>
    </section>
  </>
)

export default Eventos
