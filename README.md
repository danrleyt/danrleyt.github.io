# danrleyt.github.io

Source for my personal website, **https://danteixeira.me** (https://danrleyt.github.io redirects there).

It's a single terminal-style page built with React 19 and Vite. The colours follow the
[vscode.nvim](https://github.com/Mofiqul/vscode.nvim) palette (VS Code Dark+ / Light+) I use in Neovim.

## Features

- Dark and light themes that follow the system setting, with a `[theme]` toggle that remembers the choice
- Hero with an `ssh` prompt and a typewriter that cycles through short "commands"
- Sections: about (with a collapsible career `git log`), work experience, education, projects, skills
- Command palette: press `/` (or click `[/]`) to jump to a section or open a link
- Sticky nav that highlights the current section, a scroll progress bar, and a responsive mobile menu

## Development

Requires Node `^20.19` or `>=22.12`.

```sh
npm install
npm start          # dev server at http://localhost:5173
npm run build      # production build into ./build
npm run preview    # serve the production build locally
```

## Deployment

```sh
npm run deploy     # builds, then publishes ./build to the gh-pages branch
```

GitHub Pages serves the site from the `gh-pages` branch. `public/CNAME` holds the custom domain
(`danteixeira.me`); it's copied into every build so a deploy never wipes the domain setting. GitHub
redirects `danrleyt.github.io` to the custom domain.

## Editing content

| What | Where |
| --- | --- |
| Social links, nav/palette sections, typewriter lines, career start date | `src/content.js` |
| About text and career `git log` | `src/components/About.jsx` |
| Jobs | `src/components/Experience.jsx` |
| Education | `src/components/Education.jsx` |
| Projects | `src/components/Projects.jsx` |
| Skills | `src/components/Skills.jsx` |
| Colours, fonts, layout | `src/index.css` (theme tokens at the top) |
| Page title, meta tags, font loading | `index.html` |

To add a section, create a component, render it in `src/App.jsx`, and add an entry to `SECTIONS` in
`src/content.js` so it appears in the nav and command palette.
