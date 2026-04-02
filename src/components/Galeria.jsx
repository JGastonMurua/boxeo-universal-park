import React from 'react'
import foto1 from '../assets/foto1.jpeg'
import foto2 from '../assets/foto2.jpeg'
import foto3 from '../assets/foto3.jpeg'
import foto4 from '../assets/foto4.jpeg'
import maravillaVid from '../assets/maravilla.mp4'

const fotos = [foto1, foto2, foto3, foto4]

const Galeria = () => (
  <>
    <div className="divider" />
    <section id="galeria">
      <span className="section-label reveal">Galeria</span>
      <h2 className="section-title reveal">NUESTRO <em>ESPACIO</em></h2>

      {/* Video Sergio */}
      <div className="galeria-video-wrap reveal">
        <span className="video-badge">Sergio Maravilla Martinez</span>
        <video
          src={maravillaVid}
          controls
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000', display: 'block' }}
        />
      </div>

      {/* Fotos */}
      <div className="galeria-fotos-grid">
        {fotos.map((src, i) => (
          <div
            key={i}
            className="gallery-item reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <img src={src} alt={`Foto ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  </>
)

export default Galeria
