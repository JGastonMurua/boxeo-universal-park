# Boxeo Universal Park

Sitio web para un gimnasio de boxeo real en Ramos Mejía, Buenos Aires. Desarrollado con React + Vite, sin frameworks de UI — todo el diseño es CSS personalizado con estética oscura, efectos 3D y animaciones.

**Live:** [boxeouniversalpark.vercel.app](https://boxeouniversalpark.vercel.app)

---

## Caracteristicas

- Hero con animacion de particulas y geometrias en Canvas 2D, efecto parallax con el mouse
- Navbar fija con scroll detection y menu hamburguesa para mobile
- Seccion de clases con flip cards 3D al hover
- Galeria con video HTML5 y grilla de fotos
- Formulario de contacto que arma el mensaje y lo envia por WhatsApp
- Botones flotantes (WhatsApp + volver arriba) que se elevan sobre el footer dinamicamente
- Animaciones de reveal al hacer scroll con IntersectionObserver
- SEO con meta tags, Open Graph, Twitter Card y JSON-LD de LocalBusiness

## Stack

- **React 18 + Vite**
- **CSS personalizado** — variables, 3D transforms, perspective, keyframes
- **Google Fonts** — Bebas Neue, Barlow Condensed, Barlow
- **Deploy** — Vercel

## Estructura

```
src/
  assets/          # Fotos, videos, logo
  components/
    Navbar.jsx
    Hero.jsx
    Home.jsx       # Sobre nosotros + Contacto
    Eventos.jsx    # Clases + Eventos
    Galeria.jsx
    Promos.jsx     # Promos + Redes sociales
    Footer.jsx
    FloatingButtons.jsx
  App.jsx
  index.css        # Todo el CSS del proyecto
  main.jsx
```

## Correr localmente

```bash
npm install
npm run dev
```

## Deploy

```bash
vercel --prod
```

---

Desarrollado por [Jorge Gastón Murúa](https://jorge-gaston-murua.gtresia.com/) — [portfolio](https://jorge-gaston-murua.gtresia.com/) · [LinkedIn](https://linkedin.com/in/jgastonmurua)
