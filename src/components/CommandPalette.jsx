import { useEffect, useRef, useState } from 'react'
import { LINKS, SECTIONS } from '../content'
import { trackLink } from '../analytics'

const ITEMS = [
  ...SECTIONS.map((s) => ({ key: '#', label: s.label, href: `#${s.id}` })),
  ...LINKS.map((l) => ({ key: '↗', label: l.label, href: l.href })),
]

const go = (item) => {
  if (item.href.startsWith('#')) {
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
  } else if (item.href.startsWith('mailto:')) {
    trackLink(item.href)
    window.location.href = item.href
  } else {
    trackLink(item.href)
    window.open(item.href, '_blank', 'noopener')
  }
}

const CommandPalette = ({ open, onClose }) => {
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIdx(0)
      inputRef.current?.focus()
    }
  }, [open])

  if (!open) return null

  const q = query.toLowerCase()
  const filtered = ITEMS.filter(
    (i) => i.label.toLowerCase().includes(q) || i.href.toLowerCase().includes(q)
  )

  const select = (item) => {
    onClose()
    go(item)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && filtered[activeIdx]) {
      select(filtered[activeIdx])
    }
  }

  return (
    <div className="cmd-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cmd-box" role="dialog" aria-modal="true" aria-label="Jump to">
        <div className="cmd-input-wrap">
          <span className="ps1">:~$</span>
          <input
            ref={inputRef}
            className="cmd-input"
            type="text"
            placeholder="jump to..."
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIdx(0)
            }}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className="cmd-results">
          {filtered.map((item, idx) => (
            <div
              key={item.href}
              className={idx === activeIdx ? 'cmd-item active' : 'cmd-item'}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => select(item)}
            >
              <span className="cmd-key">{item.key}</span>
              {item.label}
            </div>
          ))}
          {filtered.length === 0 && <div className="cmd-empty">command not found: {query}</div>}
        </div>
        <div className="cmd-hint">↑↓ navigate · enter select · esc close · press / to open</div>
      </div>
    </div>
  )
}

export default CommandPalette
