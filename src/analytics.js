// Cookie-free visitor analytics via GoatCounter (https://www.goatcounter.com).
// Dashboard: https://<GOATCOUNTER_CODE>.goatcounter.com
export const GOATCOUNTER_CODE = 'danteixeira'

// Friendly event names for outbound links; anything else falls back to its hostname.
const LINK_EVENTS = {
  'linkedin.com': 'linkedin',
  'github.com': 'github',
  'humano.ink': 'humano',
}

const eventName = (href) => {
  if (href.startsWith('mailto:')) return 'email'
  try {
    const host = new URL(href).hostname.replace(/^www\./, '')
    return LINK_EVENTS[host] ?? host
  } catch {
    return null
  }
}

// Records a click on an outbound link as a GoatCounter event, e.g. "click-linkedin".
export const trackLink = (href) => {
  const name = eventName(href)
  if (!name || !window.goatcounter?.count) return
  window.goatcounter.count({ path: `click-${name}`, title: href, event: true })
}

export const initAnalytics = () => {
  // Only count the production site, never `npm start` or `npm run preview`.
  if (!import.meta.env.PROD || location.hostname !== 'danteixeira.me') return

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://gc.zgo.at/count.js'
  script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  document.head.appendChild(script)

  // One delegated listener covers every outbound link (hero, footer, experience, playground).
  document.addEventListener('click', (e) => {
    const a = e.target.closest?.('a[href]')
    if (!a) return
    const href = a.getAttribute('href')
    if (href.startsWith('mailto:') || href.startsWith('http')) trackLink(href)
  })
}
