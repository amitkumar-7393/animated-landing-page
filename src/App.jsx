import './App.css'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // HERO INTRO
      tl.from('.nav', {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from('.hero-label', {
          y: 25,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
        .from('.hero-title span', {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power4.out',
        })
        .from('.hero-text', {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        })
        .from('.hero-buttons', {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from('.hero-card', {
          scale: 0.75,
          opacity: 0,
          rotation: -8,
          duration: 1,
          ease: 'back.out(1.7)',
        })

      // HERO CARD PARALLAX
      gsap.to('.hero-card', {
        y: -80,
        rotation: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // HERO CONTENT PARALLAX
      gsap.to('.hero-content', {
        y: 100,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // WORK SECTION REVEAL
      gsap.from('.work-section .section-label', {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-section',
          start: 'top 75%',
        },
      })

      gsap.from('.work-title .line', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.work-title',
          start: 'top 80%',
        },
      })

      // WORK CARDS
      gsap.from('.project-card', {
        y: 100,
        opacity: 0,
        scale: 0.92,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 80%',
        },
      })

      // ABOUT REVEAL
      gsap.from('.about-section .section-label', {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 75%',
        },
      })

      gsap.from('.about-title .line', {
        y: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        },
      })

      // ABOUT TEXT
      gsap.from('.about-copy', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-copy',
          start: 'top 85%',
        },
      })

      // ORANGE LINE
      gsap.from('.about-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 60%',
        },
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={appRef}>
      {/* NAVBAR */}
      <nav className="nav">
        <a href="#home" className="logo">
          NOVA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>

        <a href="#about" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-label">CREATIVE DIGITAL STUDIO</p>

          <h1 className="hero-title">
            <span>We create</span>
            <span>digital</span>
            <span className="outline-text">experiences.</span>
          </h1>

          <p className="hero-text">
            We design bold websites and digital experiences that help brands
            stand out, connect with people, and grow.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-button">
              View Our Work ↗
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-circle" />

            <div className="card-content">
              <span>01</span>
              <strong>CREATE</strong>
              <small>WITHOUT LIMITS</small>
            </div>
          </div>

          <div className="floating-text">SCROLL ↓</div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section" id="work">
        <div className="section-label">SELECTED WORK</div>

        <h2 className="work-title">
          <span className="line">Ideas that move</span>
          <span className="line">people forward.</span>
        </h2>

        <div className="projects">
          <article className="project-card project-orange">
            <span>01 / BRANDING</span>
            <h3>ORBIT</h3>
            <p>Brand identity & digital direction</p>
          </article>

          <article className="project-card project-gray">
            <span>02 / DIGITAL</span>
            <h3>FORM</h3>
            <p>Interactive digital experience</p>
          </article>

          <article className="project-card project-dark">
            <span>03 / CREATIVE</span>
            <h3>VOID</h3>
            <p>Creative technology & motion</p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-label">ABOUT NOVA</div>

        <h2 className="about-title">
          <span className="line">Strategy. Design.</span>
          <span className="line">Technology.</span>
        </h2>

        <div className="about-bottom">
          <div className="about-line" />

          <p className="about-copy">
            NOVA is a creative digital studio focused on building memorable
            brands, powerful websites and digital experiences that connect
            ideas with people.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="logo">
          NOVA<span>.</span>
        </div>

        <p>CREATIVE DIGITAL STUDIO © 2026</p>

        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App