// Shared data used by the nav, hero, command palette and footer.

export const EMAIL = 'danrleyt@gmail.com'

export const LINKS = [
  { label: 'email', href: `mailto:${EMAIL}` },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/danrley-teixeira/' },
  { label: 'github', href: 'https://github.com/danrleyt' },
]

export const SECTIONS = [
  { id: 'about', nav: 'about', label: 'about' },
  { id: 'experience', nav: 'work', label: 'work experience' },
  { id: 'education', nav: 'edu', label: 'education' },
  { id: 'projects', nav: 'projects', label: 'projects' },
  { id: 'skills', nav: 'skills', label: 'skills' },
]

// First job start date, used for the footer "uptime".
export const CAREER_START = new Date(2017, 0, 1)

// Commands cycled by the typewriter prompt in the hero.
export const TYPED_CYCLES = [
  { cmd: 'whoami', out: 'software engineer by heart, manager by experience' },
  {
    cmd: 'head -5 interests.txt',
    out: [
      'data-intensive applications',
      'microservices',
      'event-driven architecture',
      'geospatial data',
      'code optimisation',
    ],
  },
  { cmd: 'cat /etc/languages', out: ['Portuguese (native)', 'English (fluent)', 'German (B1)'] },
  { cmd: 'echo $LOCATION', out: 'Berlin, Germany' },
  {
    cmd: 'ls -1 education/',
    out: ['BSc. Information Systems @ UFC', 'Informatik @ FU Berlin'],
  },
  { cmd: 'kubectl get stack', out: ['typescript  java  python  sql', 'aws  kubernetes  kafka  mongodb'] },
]
