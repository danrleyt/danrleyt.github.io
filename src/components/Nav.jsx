import { useEffect, useState } from 'react'
import { SECTIONS } from '../content'

const toggleTheme = () => {
  const root = document.documentElement
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try {
    localStorage.setItem('theme', next)
  } catch (e) {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}

// Highlights the nav link of the section currently in view.
const useActiveSection = () => {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { threshold: 0.1, rootMargin: '-10% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

const Nav = ({ onOpenPalette }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection()

  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="#home" className="nav-brand">
          <span className="dim">~/</span>dan
        </a>

        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? '[close]' : '[menu]'}
        </button>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'} id="nav-links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'nav-active' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {s.nav}
            </a>
          ))}
          <button className="theme-btn" onClick={onOpenPalette} aria-label="Open command palette">
            [/]
          </button>
          <button className="theme-btn" onClick={toggleTheme}>
            [theme]
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
