import SectionHeading from './SectionHeading'

const PROJECTS = [
  {
    name: 'humano.ink',
    url: 'https://humano.ink',
    status: 'live',
    year: '2026',
    summary:
      'An end-to-end encrypted journal and social app: keep entries private, share them with friends, or post publicly. For private and friends posts the server only ever stores ciphertext.',
    bullets: [
      'Client-side encryption with the Web Crypto API; accepting a friend request re-encrypts post keys for the new friend, so shared posts appear without the server seeing plaintext.',
      'Java 21 / Spring Boot backend in Clean Architecture (domain, application, infrastructure) on PostgreSQL, with JWT auth and real-time updates over STOMP.',
      'React 19 web app with a Windows 95–style retro theme, in English and Brazilian Portuguese.',
      'Runs on Google Cloud: Cloud Run, Cloud SQL and Firebase Hosting.',
    ],
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'Web Crypto', 'GCP'],
  },
]

const Playground = () => (
  <section id="playground">
    <SectionHeading label="playground" />
    <div className="prompt">
      <span className="ps1">dan@portfolio:~$</span>
      <span className="cmd">ls</span>
      <span className="arg">-l playground/</span>
    </div>
    {PROJECTS.map((p) => (
      <div className="project" key={p.name}>
        <div className="project-hd">
          <h3 className="project-name">
            <a href={p.url} target="_blank" rel="noopener">
              {p.name}
            </a>
          </h3>
          <span className="badge">{p.status}</span>
          <span className="exp-date project-year">{p.year}</span>
        </div>
        <p className="project-summary">{p.summary}</p>
        <ul className="exp-list">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="project-stack">
          {p.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    ))}
  </section>
)

export default Playground
