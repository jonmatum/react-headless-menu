# react-headless-menu

A fully headless, themeable, access-controlled, and responsive menu system for React + TailwindCSS.

[![npm version](https://img.shields.io/npm/v/react-headless-menu?style=flat-square)](https://www.npmjs.com/package/react-headless-menu)
[![License](https://img.shields.io/github/license/yourusername/react-headless-menu?style=flat-square)](./LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/react-headless-menu?style=flat-square)](https://github.com/yourusername/react-headless-menu)
[![Playground](https://img.shields.io/badge/Playground-Live-informational?style=flat-square)](https://yourusername.github.io/react-headless-menu/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Ready-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://reactjs.org)

---

## ✨ Features

- Fully headless — bring your own styles
- Themeable via TailwindCSS classes
- Dark & Light mode ready
- Responsive (Sidebar / Topbar / Dropdown)
- Supports up to 3 levels of nested menus
- Scope-based access control (RBAC-friendly)
- Playground with live theming and variants
- Optimized for mobile & desktop

---

## 📦 Installation

```bash
npm install react-headless-menu
```

---

## ⚡ Quick Usage

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

## 🧪 Playground

```bash
npm run playground
```

> Use `npm run build:playground` to export the playground into `/docs/` for GitHub Pages.

---

## 📚 Documentation

- Playground and usage examples available in `/src/playground`
- More advanced documentation available in `/docs`

---

## 🛣️ Roadmap

- [ ] Accessibility Improvements (ARIA, Keyboard Nav)
- [ ] Storybook integration
- [ ] Framer Motion Animations
- [ ] TypeScript Definitions
- [ ] Slots API

---

## 📄 License

MIT © 2025 Your Name
