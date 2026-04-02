import React, { useEffect } from 'react'
import sobreImg from '../assets/sobre.jpeg'

// Shared reveal-on-scroll — se llama una vez en App
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ── SOBRE NOSOTROS ── */
export const Sobre = () => (
  <>
    <div className="divider" />
    <section id="sobre">
      <div className="about-img-wrap reveal">
        <div className="about-img">
          <img src={sobreImg} alt="Boxeo Universal Park" />
        </div>
        <div className="about-corner tl" />
        <div className="about-corner br" />
      </div>

      <div className="about-text">
        <span className="section-label reveal">Nuestra Historia</span>
        <h2 className="section-title reveal">SOMOS MÁS QUE<br />UN <em>GIMNASIO</em></h2>
        <p className="reveal">
          Boxeo Universal Park nació con una misión clara: transformar vidas a través del deporte.
          Ubicados en el corazón de Ramos Mejía, somos un espacio donde la disciplina, el esfuerzo
          y la pasión por el boxeo se convierten en el motor de cada entrenamiento.
        </p>
        <p className="reveal">
          Contamos con entrenadores certificados, equipamiento de primer nivel y un ambiente que te
          desafía a superar tus propios límites. Desde principiantes hasta competidores, todos tienen
          un lugar aquí.
        </p>
        <div className="about-stats">
          {[
            { num: '+500', lbl: 'Atletas Formados' },
            { num: '+10',  lbl: 'Años de Experiencia' },
            { num: '100%', lbl: 'Compromiso' },
          ].map((s, i) => (
            <div className="about-stat reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="num">{s.num}</span>
              <span className="lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

/* ── CONTACTO ── */
export const Contacto = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const f = e.target

    const nombre   = f.nombre.value.trim()
    const email    = f.email.value.trim()
    const telefono = f.telefono.value.trim()
    const interes  = f.interes.value
    const mensaje  = f.mensaje.value.trim()

    const lineas = [
      '*Nuevo contacto desde la web*',
      `Nombre: ${nombre}`,
      email    ? `Email: ${email}`       : '',
      telefono ? `Telefono: ${telefono}` : '',
      interes  ? `Interes: ${interes}`   : '',
      mensaje  ? `Mensaje: ${mensaje}`   : '',
    ].filter(Boolean).join('%0A')

    window.open(`https://wa.me/5491150962124?text=${lineas}`, '_blank')

    const btn = f.querySelector('.form-submit')
    btn.textContent = 'Mensaje enviado'
    btn.style.background = '#1a4a1a'
    btn.style.color = '#39ff14'
    btn.disabled = true
    f.reset()

    setTimeout(() => {
      btn.textContent = 'Enviar Consulta'
      btn.style.background = ''
      btn.style.color = ''
      btn.disabled = false
    }, 4000)
  }

  return (
    <>
      <div className="divider" />
      <section id="contacto">
        <div className="contact-info">
          <span className="section-label reveal">Contacto</span>
          <h2 className="section-title reveal">HABLEMOS<br /><em>HOY</em></h2>
          <p className="reveal">¿Querés empezar a entrenar o tenés alguna consulta? Escribinos y te respondemos a la brevedad.</p>

          {[
            { label: 'Direccion',  val: 'Perito Moreno 1421, Ramos Mejia, Buenos Aires' },
            { label: 'Instagram',  val: '@boxeouniversalpark' },
            { label: 'Facebook',   val: 'Universalparkbox' },
            { label: 'Horarios',   val: 'Lunes, Miercoles y Viernes · 19 a 21hs' },
          ].map((d, i) => (
            <div className="contact-detail reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div>
                <strong>{d.label}</strong>
                <span>{d.val}</span>
              </div>
            </div>
          ))}

          <a
            href="https://wa.me/5491150962124?text=Hola%20Santiago%2C%20tengo%20ganas%20de%20inscribirme%20a%20las%20clases%20de%20boxeo%2C%20mi%20nombre%20es..."
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn reveal"
            style={{ transitionDelay: '0.4s' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.099 1.515 5.833L.057 23.943l6.233-1.636A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.374l-.359-.214-3.7.972.988-3.611-.235-.37A9.797 9.797 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          {[
            { id: 'nombre',   label: 'Tu Nombre',          type: 'text',  placeholder: 'Juan García',      required: true },
            { id: 'email',    label: 'Email',               type: 'email', placeholder: 'juan@email.com',   required: true },
            { id: 'telefono', label: 'Teléfono (opcional)', type: 'tel',   placeholder: '+54 11 0000-0000' },
          ].map(f => (
            <div className="form-group" key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              <input type={f.type} id={f.id} name={f.id} placeholder={f.placeholder} required={f.required || false} />
            </div>
          ))}
          <div className="form-group">
            <label htmlFor="interes">Me interesa</label>
            <select id="interes" name="interes">
              <option value="">— Seleccioná una opción —</option>
              <option value="boxeo">Boxeo</option>
              <option value="entrenamiento">Entrenamiento Físico</option>
              <option value="sparring">Sparring</option>
              <option value="info">Información General</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Contanos en qué podemos ayudarte..." />
          </div>
          <button type="submit" className="form-submit">Enviar Consulta →</button>
        </form>
      </section>
    </>
  )
}

export default { Sobre, Contacto, useReveal }
