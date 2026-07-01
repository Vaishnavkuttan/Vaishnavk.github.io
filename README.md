# Vaishnav Kalaikumar — Portfolio

Personal portfolio site for Vaishnav Kalaikumar, Senior QA Engineer. Built with React, Vite, and Tailwind CSS, featuring animated sections (Hero, Projects, Experience, Education, Skills, About) and a resume viewer.

Live at: https://vaishnavkuttan.github.io/Vaishnavk.github.io/

## Tech stack

- React 19 + Vite
- Tailwind CSS
- Framer Motion / GSAP for animation
- Three.js / OGL for background visuals

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves.

A manual deploy is also available:

```bash
npm run deploy
```
