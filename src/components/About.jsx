import { useState } from 'react'
import SectionHeading from './SectionHeading'

const CAREER_LOG = [
  { hash: 'a91f3c2', date: '2023-03', msg: 'feat!: back to IC by choice, Senior Software Engineer @ Just Eat Takeaway.com', head: true },
  { hash: '7d02be4', date: '2021-04', msg: 'feat: led the Import API team as Engineering Manager @ commercetools', highlight: true },
  { hash: '5c8e1a9', date: '2020-01', msg: 'feat: joined commercetools as Backend Engineer' },
  { hash: '3b6f0d7', date: '2018-10', msg: 'feat: joined DATAPREV as Software Engineer' },
  { hash: '2e4a9c1', date: '2018-05', msg: 'feat: joined Instituto Atlântico as Software Engineer' },
  { hash: '1f3d8b6', date: '2017-01', msg: 'feat: joined HeavyConnect as Software Engineer' },
]

const About = () => {
  const [showLog, setShowLog] = useState(false)

  return (
    <section id="about">
      <SectionHeading label="about" />
      <div className="about-text">
        <p>
          Senior Software Engineer with <span className="tok-var">9+ years</span> building{' '}
          <span className="tok-var">data-intensive backend systems</span>. At{' '}
          <a href="https://www.justeattakeaway.com" target="_blank" rel="noopener" className="tok-type">
            Just Eat Takeaway.com
          </a>{' '}
          I build the systems couriers depend on: <span className="tok-var">event-driven microservices</span>{' '}
          in <span className="tok-type">TypeScript/Node.js</span> and <span className="tok-type">Java</span>{' '}
          that process hundreds of thousands of orders a day.
        </p>
        <p>
          I spent two years as an <span className="tok-type">Engineering Manager</span> leading a team of
          six, then chose to return to hands-on engineering. That time shapes how I lead now: through
          system design, <span className="tok-var">RFCs and shared standards across teams</span>, and a
          focus on <span className="tok-var">performance and cost optimisation</span>.
        </p>
      </div>

      <div className="git-log-wrap">
        <div className="prompt">
          <span className="ps1">dan@portfolio:~$</span>
          <span className="cmd">git</span>
          <span className="arg">log --oneline career</span>
        </div>
        <button className="toggle" onClick={() => setShowLog(!showLog)} aria-expanded={showLog}>
          {showLog ? '[- git log]' : '[+ git log]'}
        </button>
        {showLog && (
          <div className="git-log">
            {CAREER_LOG.map((c) => (
              <div key={c.hash}>
                <span className={c.head ? 'tok-var' : 'tok-number'}>{c.hash}</span>{' '}
                <span className="faint">{c.date}</span>{' '}
                <span className={c.highlight ? 'tok-type' : 'dim'}>{c.msg}</span>
                {c.head && <span className="tok-control"> (HEAD)</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
