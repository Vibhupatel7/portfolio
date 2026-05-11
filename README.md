# Vibhuti Patel — Portfolio Website

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178C6)
![License](https://img.shields.io/badge/License-MIT-green)

A modern and elegant personal portfolio website for **Vibhuti Patel**, a Data Science & AI/ML professional based in Ahmedabad, India.

Built with cutting-edge frontend technologies, optimized for performance, accessibility, responsiveness, and an engaging user experience.

---

## 🌐 Live Demo

🚀 Coming Soon

---

## ✨ Highlights

- Modern paper-inspired portfolio UI
- Fully responsive design
- Smooth animations & transitions
- Interactive hero section
- AI/ML focused project showcase
- SSR support with TanStack Start
- Optimized performance and SEO
- Accessible UI components with Radix UI
- Cloudflare-ready deployment setup

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Screenshots](#-screenshots)
- [Credits](#-credits)
- [License](#-license)

---

## 📖 Overview

This project is a single-page application (SPA) portfolio designed to showcase:

- Professional experience
- Technical skills
- AI/ML & Data Science projects
- Contact information
- Personal branding

The design emphasizes elegant typography, subtle animations, warm paper-like aesthetics, and interactive UI elements for a premium browsing experience.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-------------|
| **Framework** | [React 19](https://react.dev/) |
| **Routing / SSR** | [TanStack Start](https://tanstack.com/start) |
| **Router** | TanStack Router |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | Recharts |
| **Package Manager** | Bun |
| **Deployment** | Cloudflare Pages |
| **Linting & Formatting** | ESLint + Prettier |

---

## 🚀 Features

### 📄 Pages / Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero animation and introduction |
| `/about` | Personal bio and background |
| `/projects` | AI/ML & Data Science project showcase |
| `/skills` | Technical skills and competencies |
| `/experience` | Professional experience timeline |
| `/contact` | Contact form and social links |

---

### 🎨 Design & UX Highlights

- Elegant paper-inspired design system
- Warm ink & gold accent color palette
- Smooth reveal-on-scroll animations
- Interactive floating paper plane effect
- Typewriter hero text animation
- Mobile-first responsive layout
- Custom 404 error page
- Accessible UI primitives powered by Radix UI

---

## 📁 Project Structure

```bash
portfolio/
├── src/
│   ├── assets/
│   │   ├── hero-plane.png
│   │   ├── vibhuti-patel.jpeg
│   │   └── project-*.jpg
│   │
│   ├── components/
│   │   ├── Reveal.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── SiteNav.tsx
│   │   └── ui/
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   │
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   └── styles.css
│
├── package.json
├── vite.config.ts
├── tsconfig.json
├── wrangler.jsonc
├── bunfig.toml
├── components.json
├── README.md
└── TODO.md
```

---

## ⚙️ Prerequisites

Before starting, ensure you have:

- [Node.js](https://nodejs.org/) `v18+`
- [Bun](https://bun.sh/) `v1+` (recommended)

> The project uses `bun.lockb`, so Bun is recommended for best compatibility and performance.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vibhupatel7/portfolio.git
cd portfolio
```

---

### 2️⃣ Install Dependencies

#### Using Bun (recommended)

```bash
bun install
```

#### Using npm

```bash
npm install
```

---

### 3️⃣ Start Development Server

#### Using Bun

```bash
bun run dev
```

#### Using npm

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:5173
```

Vite Hot Module Replacement (HMR) is enabled for instant updates during development.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Create production build |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format files using Prettier |

---

## ☁️ Deployment

This project is configured for deployment on **Cloudflare Pages** using Wrangler.

---

### Deploy to Cloudflare Pages

#### Install Wrangler CLI

```bash
npm install -g wrangler
```

or

```bash
bun add -g wrangler
```

---

#### Login to Cloudflare

```bash
wrangler login
```

---

#### Build Project

```bash
bun run build
```

---

#### Deploy

```bash
wrangler pages deploy dist
```

---

### Alternative Hosting Platforms

You can also deploy to:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Any static hosting provider

---

## 🎨 Customization

### Update Personal Information

Edit:

```bash
src/routes/__root.tsx
```

Update:
- title
- meta description
- Open Graph tags

---

### Update Hero Section

Edit:

```bash
src/routes/index.tsx
```

Modify:
- tagline
- introduction
- CTA buttons
- animation text

---

### Change Profile Image

Replace:

```bash
src/assets/vibhuti-patel.jpeg
```

---

### Update Projects

Edit:

```bash
src/routes/projects.tsx
```

and update project images inside:

```bash
src/assets/
```

---

### Customize Theme Colors

Edit:

```bash
src/styles.css
```

Modify CSS variables:

```css
--color-paper
--color-ink
--color-gold
```

---

## 🖼 Screenshots

### Homepage Preview

```md
Add screenshots here later
```

Example:

```markdown
![Homepage](./public/screenshots/homepage.png)
```

---

## 🙌 Credits

- React
- TanStack Start
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Radix UI

---

## 📄 License

This project is open for learning and inspiration.

---

> Built with curiosity, precision, and a passion for intelligent design.
