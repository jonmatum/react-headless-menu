# React Headless Menu

A fully headless, themeable, access-controlled, and responsive menu system for React + TailwindCSS.

[![npm version](https://img.shields.io/npm/v/react-headless-menu?style=flat-square)](https://www.npmjs.com/package/react-headless-menu)
[![License](https://img.shields.io/github/license/jonmatum/react-headless-menu?style=flat-square)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jonmatum/react-headless-menu?style=flat-square)](https://github.com/jonmatum/react-headless-menu)
[![Docs](https://img.shields.io/badge/Docs-Available-blue?style=flat-square)](https://jonmatum.github.io/react-headless-menu/guide)
[![Playground](https://img.shields.io/badge/Playground-Live-informational?style=flat-square)](https://jonmatum.github.io/react-headless-menu/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Ready-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org)

---

## Features

- Fully headless architecture
- Built with TailwindCSS utility classes
- Light & Dark mode support
- Responsive across devices
- Variants: Topbar, Sidebar, Dropdown
- Role-based access control (RBAC)
- Nested menus (up to 3 levels)
- Live Playground + Theming support

---

## Getting Started

```bash
npm install react-headless-menu
```

```jsx
import Menu from "react-headless-menu";

<Menu
  variant="auto"
  items={menuData}
  userScopes={userScopes}
  theme={theme}
  color="blue"
  themeName="light"
/>;
```

---

## Documentation

> Full documentation is available at [jonmatum.github.io/react-headless-menu/guide](https://jonmatum.github.io/react-headless-menu/guide)

Topics include:

- Installation & Configuration
- Menu Props
- Theming & Styling
- Playground & Recipes
- Advanced Usage (router, scopes, etc.)

---

## Playground

To explore the menu live:

```bash
npm run playground
```

To publish the playground (for GitHub Pages):

```bash
npm run build:playground
```

Resulting output will be in `/docs`.

---

## Recipes

- Sidebar with nested routes
- Topbar with branding and dropdowns
- Mobile-first menu toggle
- RBAC-driven dynamic menu structure

---

## Development

### Lint, Format & Test

```bash
npm run lint
npm run format
npm test
```

### Releasing

This project uses **release-please** and GitHub Actions to automate releases. All commits must follow [Conventional Commits](https://www.conventionalcommits.org/).

```bash
npm run release
```

---

## Contributing

We welcome PRs! Please read the [CONTRIBUTING](./CONTRIBUTING) guide.

- Use conventional commits
- Submit docs/tests with features
- Keep code headless and style-agnostic

---

## License

MIT © [Jonatan Mata](https://github.com/jonmatum)
