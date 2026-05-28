import { useEffect, useRef, useState } from 'react'
import './App.css'
import {
  careerTimeline,
  copilotProjectIds,
  featuredProjectIds,
  powerAutomateProjectIds,
  powerBiProjectIds,
  projects,
  skillGroups,
  vbaProjectIds,
  webProjectIds,
  type Accent,
  type Project,
} from './data'
import { Screenshot } from './components/Screenshot'
import { ProfilePhoto } from './components/ProfilePhoto'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Featured' },
  { href: '#power-automate', label: 'Power Automate' },
  { href: '#power-bi', label: 'Power BI' },
  { href: '#excel', label: 'VBA/Macros' },
  { href: '#copilot', label: 'Copilot' },
  { href: '#web', label: 'Web App' },
  { href: '#it-support', label: 'IT Support' },
  { href: '#contact', label: 'Contact' },
]

const byIds = (ids: string[]) =>
  ids.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p))

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function useScrollParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = (rect.top + rect.height / 2) / vh - 0.5
      el.style.setProperty('--parallax', progress.toFixed(4))
    }
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

function useMouseParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let pendingX = 0
    let pendingY = 0
    const apply = () => {
      raf = 0
      el.style.setProperty('--mx', pendingX.toFixed(3))
      el.style.setProperty('--my', pendingY.toFixed(3))
    }
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      pendingX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pendingY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      if (!raf) raf = window.requestAnimationFrame(apply)
    }
    const onLeave = () => {
      pendingX = 0
      pendingY = 0
      if (!raf) raf = window.requestAnimationFrame(apply)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

function useTilt<T extends HTMLElement>(maxDeg = 6) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) return
    if (window.matchMedia('(hover: none)').matches) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const rx = (0.5 - py) * maxDeg * 2
        const ry = (px - 0.5) * maxDeg * 2
        el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
        el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
        el.style.setProperty('--tilt-active', '1')
      })
    }
    const onLeave = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
      el.style.setProperty('--tilt-active', '0')
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [maxDeg])
  return ref
}

function HeroShapes() {
  return (
    <div className="hero__shapes" aria-hidden="true">
      <div className="shape shape--cube">
        <div className="shape__cube">
          <span className="cube__face cube__face--front" />
          <span className="cube__face cube__face--back" />
          <span className="cube__face cube__face--right" />
          <span className="cube__face cube__face--left" />
          <span className="cube__face cube__face--top" />
          <span className="cube__face cube__face--bottom" />
        </div>
      </div>
      <div className="shape shape--orb" />
      <div className="shape shape--ring" />
      <div className="shape shape--plane" />
      <svg className="shape shape--lines" viewBox="0 0 400 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neonA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="neonB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 240 Q 120 160 220 200 T 400 90" stroke="url(#neonA)" strokeWidth="1.2" fill="none" />
        <path d="M0 80 Q 110 30 200 110 T 400 220" stroke="url(#neonB)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  )
}

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    if (reduced) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useScrollReveal()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand__mark" aria-hidden="true">NP</span>
            <span className="brand__text">
              <span className="brand__name">Nathaniel Philip T. Cruz</span>
              <span className="brand__role">IT Specialist</span>
            </span>
          </a>

          <button
            className="navbar__toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>
                {l.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />

        <ProjectCategory
          id="power-automate"
          eyebrow="Microsoft 365 Automation"
          title="Power Automate Projects"
          description="Ten practical workflows that connect Microsoft Teams, SharePoint Lists, Excel, due-date reminders, file sorting, and automated update messages. Each workflow card has a screenshot slot so proof images can be added later."
          items={byIds(powerAutomateProjectIds)}
          accent="cyan"
          showScreenshots
        />

        <ProjectCategory
          id="power-bi"
          eyebrow="Business Intelligence"
          title="Power BI Dashboards"
          description="Dashboards that turn Microsoft Lists and SharePoint data into cleaner status tracking for RFQs, Job Orders, and Field Service records."
          items={byIds(powerBiProjectIds)}
          accent="blue"
          showScreenshots
        />

        <ProjectCategory
          id="excel"
          eyebrow="Excel, VBA & Scripts"
          title="VBA / Macros Projects"
          description="Excel-based tools supported by formulas, VBA, VBS scripts, batch files, PowerShell, and folder-path automation."
          items={byIds(vbaProjectIds)}
          accent="green"
          showScreenshots
        />

        <ProjectCategory
          id="copilot"
          eyebrow="Copilot Studio"
          title="Copilot Studio Project"
          description="A SharePoint-connected chatbot that helps users search RFQ or company-related project status through chat."
          items={byIds(copilotProjectIds)}
          accent="teal"
          showScreenshots
        />

        <ProjectCategory
          id="web"
          eyebrow="Web Development"
          title="Web Application Project"
          description="Internal web application development using React, Vite, TypeScript, Supabase, and Vercel."
          items={byIds(webProjectIds)}
          accent="blue"
          showScreenshots
        />

        <ITSupport />
        <Career />
        <GeistVillage />

        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true">NP</span>
            <div className="footer__id">
              <span className="footer__name">Nathaniel Philip T. Cruz</span>
              <span className="footer__role">IT Specialist · Business Automation Developer</span>
            </div>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#it-support">IT Support</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#top" className="footer__top" aria-label="Back to top">
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="container footer__meta">
          <span>© {new Date().getFullYear()} Nathaniel Philip T. Cruz. All rights reserved.</span>
          <span>Built with React · Vite · TypeScript</span>
        </div>
      </footer>
    </div>
  )
}

function Hero() {
  const scrollRef = useScrollParallax<HTMLElement>()
  const mouseRef = useMouseParallax<HTMLDivElement>()
  return (
    <section id="top" className="hero" ref={scrollRef}>
      <div className="hero__bg" aria-hidden="true" ref={mouseRef}>
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--cyan" />
        <div className="hero__orb hero__orb--blue" />
        <div className="hero__orb hero__orb--green" />
        <HeroShapes />
        <span className="ping ping--1" />
        <span className="ping ping--2" />
        <span className="ping ping--3" />
        <span className="ping ping--4" />
      </div>

      <div className="container hero__inner reveal">
        <div className="hero__main">
          <span className="eyebrow"><span className="eyebrow__dot" /> Available for new projects · IT Specialist Portfolio</span>

```jsx
<h1 className="hero__title">
  IT Support Specialist focused on{' '}
  <span className="grad">hardware and software troubleshooting</span>,{' '}
  <span className="grad grad--blue">network and printer support</span>, and{' '}
  <span className="grad grad--green">automation tools</span> for daily IT operations.
</h1>

<p className="hero__subtitle">
  I provide hands-on technical support for computers, software issues, network
  connectivity, printers, CCTV systems, user support, and daily IT operations,
  while also building automation workflows, dashboards, Excel systems, and
  internal web tools that reduce manual work and improve business processes.
</p>
```


          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a
              href="/resume/NPC%20-%20IT%20Support%20Specialist.pdf"
              className="btn btn--ghost btn--icon"
              target="_blank"
              rel="noreferrer"
              download
              aria-label="Download Nathaniel Philip Cruz CV (PDF)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download CV
            </a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
        </div>

        <div className="hero__aside">
          <ProfilePhoto />
        </div>

        <ul className="hero__stats" aria-label="Highlights">
          <li><strong>17</strong><span>Total portfolio projects</span></li>
          <li><strong>10</strong><span>Power Automate workflows</span></li>
          <li><strong>3</strong><span>Power BI dashboards</span></li>
          <li><strong>2</strong><span>VBA / Macro Systems</span></li>
        </ul>
      </div>
    </section>
  )
}

function About() { return ( <Section id="about" eyebrow="About Me" title="Hi, I’m Nathaniel — an IT Support Specialist who builds practical systems for daily operations" > <div className="about"> <div className="about__lead"> <p> Hi, I’m <strong>Nathaniel Philip T. Cruz</strong>, an{' '} <strong>IT Support Specialist</strong> with hands-on experience in hardware and software troubleshooting, computer setup, printer support, network connectivity, CCTV setup, remote support, and daily IT operations. </p> <p> My main focus is helping users resolve technical issues, maintain reliable IT equipment, support office systems, and make sure daily operations run smoothly. I handle support tasks such as PC setup, Windows configuration, printer and peripheral troubleshooting, LAN/Wi-Fi issues, shared folder access, CCTV support, and basic server or VPN-related tasks. </p> <p> Alongside IT support, I also build practical automation tools and internal systems that help reduce manual work and improve business processes. My work includes Power Automate workflows, Microsoft Teams and SharePoint automations, Power BI dashboards, Excel VBA tools, scripting solutions, and internal web applications. </p> <p> <em> I enjoy solving technical problems while also improving repetitive workflows through organized, automated, and easier-to-manage systems. </em></p>
        </div>

        <aside className="about__card">
          <h3>What I focus on</h3>
          <ul>
            <li>Business process automation using Microsoft 365 tools</li>
            <li>Dashboard reporting with Power BI and Microsoft Lists</li>
            <li>Excel VBA systems for document and workflow preparation</li>
            <li>Internal web applications using React and Supabase</li>
            <li>Hands-on IT support for users, devices, and systems</li>
          </ul>
        </aside>
      </div>

      <div className="about__highlights">
        {[
          { title: 'Workflow Automation', desc: 'Power Automate, Teams, and SharePoint workflows that reduce manual follow-ups.', accent: 'cyan' },
          { title: 'Dashboard Reporting', desc: 'Power BI dashboards that make operations easier to monitor and explain.', accent: 'blue' },
          { title: 'Excel VBA Systems', desc: 'Excel tools, formulas, macros, and scripts that speed up repetitive office processes.', accent: 'green' },
          { title: 'IT Support', desc: 'Computer setup, printers, CCTV, hardware troubleshooting, remote support, and network basics.', accent: 'teal' },
        ].map((h) => (
          <article key={h.title} className={`highlight highlight--${h.accent}`}>
            <span className="highlight__dot" aria-hidden="true" />
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Core Skills"
      title="Tools and platforms I work with"
      description="A practical stack focused on Microsoft 365 automation, dashboard reporting, Excel/VBA systems, scripting, web development, and IT support."
    >
      <div className="skills">
        {skillGroups.map((g) => (
          <article key={g.title} className={`skill-card skill-card--${g.accent}`}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => (
                <li key={item}><span className="skill-dot" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work across automation, reporting, VBA, Copilot, and web"
      description="These are the main projects to present first. Detailed category sections below separate Power Automate, Power BI, VBA/Macros, Copilot Studio, and Web Development work."
    >
      <div className="project-grid project-grid--featured">
        {byIds(featuredProjectIds).map((p) => (
          <ProjectCard key={p.id} project={p} showScreenshot featured />
        ))}
      </div>
    </Section>
  )
}

type ProjectCategoryProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  items: Project[]
  accent: Accent
  compact?: boolean
  showScreenshots?: boolean
}

function ProjectCategory({ id, eyebrow, title, description, items, accent, compact, showScreenshots }: ProjectCategoryProps) {
  return (
    <Section id={id} eyebrow={eyebrow} title={title} description={description} accent={accent}>
      <div className="category-summary">
        <span>{items.length} {items.length === 1 ? 'project' : 'projects'}</span>
      </div>

      <div className={`project-grid ${compact ? 'project-grid--workflow' : 'project-grid--compact'}`}>
        {items.map((p, index) => (
          <ProjectCard
            key={p.id}
            project={p}
            compact={compact}
            showScreenshot={Boolean(showScreenshots)}
            index={index + 1}
          />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({
  project,
  featured = false,
  compact = false,
  showScreenshot = false,
  index,
}: {
  project: Project
  featured?: boolean
  compact?: boolean
  showScreenshot?: boolean
  index?: number
}) {
  const tiltRef = useTilt<HTMLElement>(5)
  return (
    <article
      ref={tiltRef}
      className={`project-card tilt${featured ? ' project-card--featured' : ''}${compact ? ' project-card--compact-only' : ''}`}
    >
      <span className="tilt__spotlight" aria-hidden="true" />
      <div className="tilt__inner">
        {showScreenshot && <Screenshot src={project.screenshot} alt={project.title} />}

        <div className="project-card__body">
          <div className="project-card__topline">
            {index && <span className="project-card__number">{String(index).padStart(2, '0')}</span>}
            <span className="project-card__category">{project.category}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>

          <div className="project-card__tools">
            {project.tools.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className="project-card__impact">
            <span className="project-card__impact-label">Impact</span>
            <span>{project.impact}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function ITSupport() {
  const groups = [
    {
      title: 'Hardware & Devices',
      items: ['Computer setup & reformatting', 'PC building & CPU cleaning', 'Hardware troubleshooting', 'Printer & network printer setup', 'Printer troubleshooting', 'CCTV setup'],
    },
    {
      title: 'Network & Infrastructure',
      items: ['Tailscale VPN', 'Unraid server basics', 'CMD & PowerShell basics', 'Internal file server pathing', 'Remote support via Veyon', 'Remote support via AnyDesk'],
    },
  ]

  return (
    <Section
      id="it-support"
      eyebrow="IT Support & Infrastructure"
      title="Reliable hands-on IT support"
      description="Day-to-day support for users, devices, peripherals, and small infrastructure while also building automation and reporting tools."
      accent="cyan"
    >
      <div className="it-grid">
        {groups.map((g) => (
          <div key={g.title} className="it-card">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((i) => (
                <li key={i}>
                  <span className="check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Career() {
  return (
    <Section
      id="career"
      eyebrow="Career Journey"
      title="How my role has evolved"
      description="From hands-on IT support to building automation workflows, dashboards, VBA tools, and internal web applications."
    >
      <ol className="timeline">
        {careerTimeline.map((s) => (
          <li key={s.step} className="timeline__item">
            <div className="timeline__step">{s.step}</div>
            <div className="timeline__body">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

type Villager = {
  id: string
  label: string
  symbol: string
  accent: Accent
  x: number
  y: number
}

const villagers: Villager[] = [
  { id: 'flow', label: 'Power Automate', symbol: '⇆', accent: 'cyan', x: 18, y: 28 },
  { id: 'bi', label: 'Power BI', symbol: '▦', accent: 'blue', x: 43, y: 20 },
  { id: 'vba', label: 'Excel VBA', symbol: 'Σ', accent: 'green', x: 72, y: 30 },
  { id: 'bot', label: 'Copilot Bot', symbol: '◇', accent: 'teal', x: 26, y: 64 },
  { id: 'web', label: 'Web App', symbol: '◫', accent: 'cyan', x: 58, y: 66 },
  { id: 'support', label: 'IT Support', symbol: '⌁', accent: 'blue', x: 84, y: 58 },
]

function GeistVillage() {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)
  const [hovered, setHovered] = useState<string | null>('bot')

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 })
  }

  const computeOffset = (v: Villager) => {
    if (!mouse) return { x: 0, y: 0 }
    const dx = v.x - mouse.x
    const dy = v.y - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const radius = 22
    if (dist > radius) return { x: 0, y: 0 }
    const strength = (radius - dist) / radius
    const angle = Math.atan2(dy, dx)
    const push = strength * 60
    return { x: Math.cos(angle) * push, y: Math.sin(angle) * push }
  }

  return (
    <Section
      id="village"
      eyebrow="Interactive Detail"
      title="Automation Village"
      description="A small interactive section that represents the tools I work with. Move your cursor through the village and the elements will react."
      accent="cyan"
    >
      <div ref={ref} className="village" onMouseMove={onMove} onMouseLeave={() => setMouse(null)} role="presentation">
        <div className="village__grid" aria-hidden="true" />
        <div className="village__glow" aria-hidden="true" />
        {villagers.map((v) => {
          const offset = computeOffset(v)
          const isHovered = hovered === v.id
          return (
            <button
              key={v.id}
              type="button"
              className={`villager villager--${v.accent}${isHovered ? ' villager--active' : ''}`}
              style={{ left: `${v.x}%`, top: `${v.y}%`, transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)` }}
              onMouseEnter={() => setHovered(v.id)}
              onFocus={() => setHovered(v.id)}
              aria-label={v.label}
            >
              <span className="villager__symbol" aria-hidden="true">{v.symbol}</span>
              <span className="villager__label">{v.label}</span>
              {isHovered && <span className="villager__bubble" role="status">{v.id === 'bot' ? 'Hi! Welcome to my site!' : `Hello from ${v.label}`}</span>}
            </button>
          )
        })}
        <span className="village__hint">Hover or move your cursor</span>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something useful"
      description="Open to IT specialist, automation, dashboard reporting, and internal systems work."
      accent="green"
    >
      <div className="contact">
        <div className="contact__cards">
          <a className="contact__card" href="mailto:Cruznathaniel633@gmail.com">
            <span className="contact__label">Email</span>
            <span className="contact__value">Cruznathaniel633@gmail.com</span>
          </a>
          <a className="contact__card" href="tel:+639073068873">
            <span className="contact__label">Phone</span>
            <span className="contact__value">0907 306 8873</span>
          </a>
        </div>
        <div className="contact__actions">
          <a
            className="btn btn--primary btn--icon"
            href="/resume/NPC%20-%20IT%20Support%20Specialist.pdf"
            target="_blank"
            rel="noreferrer"
            download
            aria-label="Download Nathaniel Philip Cruz CV (PDF)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
          <a className="btn btn--ghost" href="mailto:Cruznathaniel633@gmail.com">Send a message</a>
        </div>
      </div>
    </Section>
  )
}

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  accent?: Accent
  children: React.ReactNode
}

function Section({ id, eyebrow, title, description, accent, children }: SectionProps) {
  return (
    <section id={id} className={`section${accent ? ` section--${accent}` : ''}`}>
      <div className="container reveal">
        <header className="section__header">
          <span className="eyebrow"><span className="eyebrow__dot" /> {eyebrow}</span>
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__desc">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export default App