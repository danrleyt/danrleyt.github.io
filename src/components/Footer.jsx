import { CAREER_START, LINKS } from '../content'

const uptime = () => {
  const days = Math.floor((Date.now() - CAREER_START) / 86400000)
  return `uptime: ${Math.floor(days / 365)}y ${Math.floor((days % 365) / 30)}m ${days % 30}d`
}

const Footer = () => (
  <footer className="wrap">
    <span>
      &copy; {new Date().getFullYear()} dan teixeira ·{' '}
      <span className="uptime" title="time since starting my first job (Jan 2017)">
        {uptime()}
      </span>
    </span>
    <div className="footer-links">
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener"
        >
          {l.label}
        </a>
      ))}
    </div>
  </footer>
)

export default Footer
