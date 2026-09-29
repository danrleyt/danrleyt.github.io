import { useEffect, useState } from 'react'
import { EMAIL, LINKS, TYPED_CYCLES } from '../content'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Types each command, shows its output, erases it, and moves on to the next.
const useTypewriter = (cycles) => {
  const [cmd, setCmd] = useState('')
  const [out, setOut] = useState([])

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      for (let i = 0; !cancelled; i = (i + 1) % cycles.length) {
        const c = cycles[i]
        for (let n = 1; n <= c.cmd.length && !cancelled; n++) {
          setCmd(c.cmd.slice(0, n))
          await sleep(55)
        }
        await sleep(500)
        if (cancelled) return
        setOut(Array.isArray(c.out) ? c.out : [c.out])
        await sleep(2200)
        if (cancelled) return
        setOut([])
        for (let n = c.cmd.length - 1; n >= 0 && !cancelled; n--) {
          setCmd(c.cmd.slice(0, n))
          await sleep(30)
        }
        await sleep(350)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [cycles])

  return [cmd, out]
}

const Presentation = () => {
  const [cmd, out] = useTypewriter(TYPED_CYCLES)

  return (
    <section id="home">
      <div className="prompt">
        <span className="ps1">dan@local:~$</span>
        <span className="cmd">ssh</span>
        <span className="arg">dan@portfolio</span>
      </div>
      <div className="connected">Connected to dan@portfolio. Welcome.</div>

      <div className="hero-out">
        <h1 className="hero-name">Dan Teixeira</h1>
        <div className="hero-role">
          // Senior Software Engineer @{' '}
          <a href="https://www.justeattakeaway.com" target="_blank" rel="noopener">
            Just Eat Takeaway.com
          </a>
        </div>
        <div className="hero-meta">Berlin, Germany · {EMAIL}</div>

        <div className="hero-links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.label === 'email' ? 'hl primary' : 'hl'}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="prompt" aria-hidden="true">
        <span className="ps1">dan@portfolio:~$</span>
        <span>{cmd}</span>
        <span className="cursor"></span>
      </div>
      <div className="typed-out" aria-hidden="true">
        {out.map((line) => (
          <div key={line}>&gt; {line}</div>
        ))}
      </div>
    </section>
  )
}

export default Presentation
