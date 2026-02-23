# Design System

A personal design system built in React + TypeScript, developed alongside a Figma component library. This project is a learning exercise in bridging design and code as a UX/Product Designer.

## Live Storybook

👉 [View the component library on Chromatic]([https://main--b82eedb.chromatic.com](https://www.chromatic.com/builds?appId=699c317ccfd9f0295ba4c8cd))

## What's inside

- **Button** — 7 severity variants, outlined, text, link, raised and rounded styles
- **Card** — Flexible card with optional header image, subtitle and footer actions
- **Dropdown** — Select input with custom styling
- **InputText** — Text input with validation states
- **Divider, Panel, TabView, ScrollPanel** — Layout and navigation components
- **Tokens** — Full design token system sourced from Figma (colors, typography, spacing, shadows)

## Built with

- [React](https://react.dev/) + TypeScript
- [Storybook](https://storybook.js.org/) for component documentation
- [Chromatic](https://www.chromatic.com/) for publishing and visual testing
- [Vite](https://vitejs.dev/) for bundling
- Design tokens sourced from Figma

## Getting started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
git clone https://github.com/designdexter/design-system.git
cd design-system
npm install
```

### Run the app
```bash
npm run dev
```

### Run Storybook
```bash
npm run storybook
```

### Publish to Chromatic
```bash
npm run chromatic
```

## UX Trivia Game

This repo also includes a small UX trivia game (`src/App.tsx`) built using the design system components. It's a practical way to test the components in a real UI.

To play — run `npm run dev` and open the localhost URL in your browser.

## About

Built by [@designdexter](https://github.com/designdexter) — a UX/Product Designer
