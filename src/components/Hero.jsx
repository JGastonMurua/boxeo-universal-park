import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: 0, y: 0 }

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })

    // Particles
    const N = 180
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      // color type: 0=neon, 1=green, 2=white
      type: Math.random() < 0.12 ? 0 : Math.random() < 0.35 ? 1 : 2,
    }))

    // Geometric shapes (floating hexagons / triangles)
    const shapes = [
      { x: 0.15, y: 0.3, size: 90, rot: 0, vr: 0.003, type: 'hex', alpha: 0.12 },
      { x: 0.82, y: 0.2, size: 60, rot: 0.5, vr: -0.004, type: 'tri', alpha: 0.1 },
      { x: 0.7,  y: 0.75, size: 110, rot: 1, vr: 0.002, type: 'hex', alpha: 0.08 },
      { x: 0.25, y: 0.7, size: 50, rot: 0.3, vr: 0.005, type: 'tri', alpha: 0.1 },
      { x: 0.5,  y: 0.15, size: 70, rot: 0.8, vr: -0.003, type: 'hex', alpha: 0.07 },
      { x: 0.88, y: 0.6, size: 45, rot: 1.2, vr: 0.004, type: 'tri', alpha: 0.09 },
    ]

    const drawHex = (cx, cy, r, rot) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = rot + (i * Math.PI) / 3
        const x = cx + r * Math.cos(a)
        const y = cy + r * Math.sin(a)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()
    }

    const drawTri = (cx, cy, r, rot) => {
      ctx.beginPath()
      for (let i = 0; i < 3; i++) {
        const a = rot + (i * 2 * Math.PI) / 3 - Math.PI / 2
        const x = cx + r * Math.cos(a)
        const y = cy + r * Math.sin(a)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()
    }

    // Grid lines
    const drawGrid = () => {
      const cols = 18, rows = 10
      const cw = canvas.width / cols
      const ch = canvas.height / rows
      ctx.strokeStyle = 'rgba(13,43,13,0.35)'
      ctx.lineWidth = 0.8
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * cw, 0)
        ctx.lineTo(i * cw + mouse.x * 0.01, canvas.height)
        ctx.stroke()
      }
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath()
        ctx.moveTo(0, j * ch)
        ctx.lineTo(canvas.width, j * ch + mouse.y * 0.01)
        ctx.stroke()
      }
    }

    let t = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.012

      // Background
      ctx.fillStyle = '#050505'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid
      drawGrid()

      // Shapes
      shapes.forEach(s => {
        s.rot += s.vr
        const cx = s.x * canvas.width  + Math.sin(t * 0.4) * 12
        const cy = s.y * canvas.height + Math.cos(t * 0.3) * 10
        ctx.strokeStyle = `rgba(57,255,20,${s.alpha})`
        ctx.lineWidth = 1.2
        if (s.type === 'hex') drawHex(cx, cy, s.size, s.rot)
        else                  drawTri(cx, cy, s.size, s.rot)
        ctx.stroke()

        // inner smaller
        ctx.strokeStyle = `rgba(57,255,20,${s.alpha * 0.5})`
        ctx.lineWidth = 0.7
        if (s.type === 'hex') drawHex(cx, cy, s.size * 0.6, s.rot + 0.3)
        else                  drawTri(cx, cy, s.size * 0.6, s.rot - 0.3)
        ctx.stroke()
      })

      // Connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.18
            ctx.strokeStyle = `rgba(57,255,20,${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Particles
      particles.forEach(p => {
        // Mouse repel (subtle)
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.sqrt(dx*dx + dy*dy)
        if (d < 100) {
          p.vx += (dx / d) * 0.04
          p.vy += (dy / d) * 0.04
        }
        // dampen
        p.vx *= 0.99; p.vy *= 0.99

        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const color =
          p.type === 0 ? `rgba(57,255,20,0.9)` :
          p.type === 1 ? `rgba(26,74,26,0.9)` :
                         `rgba(245,245,240,0.55)`
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Neon glow center radial
      const grd = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, canvas.width * 0.5
      )
      grd.addColorStop(0, 'rgba(57,255,20,0.03)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="inicio" style={{ position:'relative', width:'100%', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">Ramos Mejía · Buenos Aires · Argentina</p>
        <h1 className="hero-title">
          <span className="glitch" data-text="BOXEO">BOXEO</span>
          <span className="green">UNIVERSAL</span>
          PARK
        </h1>
        <p className="hero-sub">Forjando Campeones en Ramos Mejía</p>
        <div className="hero-btns">
          <a
            href="https://wa.me/5491150962124?text=Hola%20Santiago%2C%20tengo%20ganas%20de%20inscribirme%20a%20las%20clases%2C%20mi%20nombre%20es..."
            target="_blank"
            rel="noreferrer"
            className="btn-neon"
          >
            Inscribite Ahora
          </a>
          <a href="#clases" className="btn-ghost">Ver Clases</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

export default Hero
