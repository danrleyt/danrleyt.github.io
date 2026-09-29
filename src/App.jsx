import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const total = el.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (el.scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

const App = () => {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const progress = useScrollProgress()

  // Press "/" anywhere (outside inputs) to open the command palette.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        setPaletteOpen(true)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <main className="wrap">
        <Presentation />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}

export default App
