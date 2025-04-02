# React Headless Menu

A headless, themeable, access-controlled, and fully responsive menu system for React + TailwindCSS.

[![npm version](https://img.shields.io/npm/v/react-headless-menu?style=flat-square)](https://www.npmjs.com/package/react-headless-menu)
[![License](https://img.shields.io/github/license/jonmatum/react-headless-menu?style=flat-square)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jonmatum/react-headless-menu?style=flat-square)](https://github.com/jonmatum/react-headless-menu)
[![Playground](https://img.shields.io/badge/Playground-Live-informational?style=flat-square)](https://jonmatum.github.io/react-headless-menu/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Ready-38bdf8?style=flat-square)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18%2B-blue?style=flat-square)](https://reactjs.org)

---

## Features

- ✅ Fully headless — bring your own styles
- 🎨 Themeable via TailwindCSS classes
- 🌙 Dark & Light mode support
- 📱 Responsive: Sidebar, Topbar, Dropdown
- 🧩 Supports up to 3-level nested menus
- 🔐 Scope-based access control (RBAC-friendly)
- 🧪 Playground with live theming & variants
- 📦 Optimized for mobile & desktop

---

## Installation

```bash
npm install react-headless-menu
```

---

## Quick Usage

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

## Playground

```bash
npm run playground
```

To export the playground for GitHub Pages:

```bash
npm run build:playground
```

The output will be available inside `/docs/`.

---

## Documentation

- Playground & usage examples: `./playground`
- Helper functions: `./src/helpers`
- Components: `./src/components`

---

## Roadmap

- [ ] Accessibility Improvements (ARIA, Keyboard Navigation)
- [ ] Storybook integration
- [ ] Framer Motion Animations
- [ ] TypeScript Definitions
- [ ] Slots API

---

## License

MIT License © 2025 Jonatan Mata
