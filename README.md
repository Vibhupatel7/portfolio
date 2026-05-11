# Vibhuti Patel — Portfolio Website

A personal portfolio website for **Vibhuti Patel**, a Data Science & AI/ML professional based in Ahmedabad, India. Built with modern web technologies and optimized for performance, accessibility, and a delightful user experience.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

---

## Overview

This is a single-page application (SPA) portfolio that showcases professional experience, projects, skills, and provides a way to get in touch. The design features a paper-like aesthetic with elegant typography, smooth animations, and interactive elements.

### Live Demo

The site is configured for deployment on **Cloudflare Pages** (see [Deployment](#deployment)).

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [React 19](https://react.dev/) |
| **Router / SSR** | [TanStack Start](https://tanstack.com/start) (powered by TanStack Router) |
| **Build Tool** | [Vite 7](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| **Package Manager** | [Bun](https://bun.sh/) |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) (via Wrangler) |
| **Linting** | ESLint + Prettier |

### Key Dependencies

- `@tanstack/react-start` — Full-stack React framework with SSR support
- `@tanstack/react-router` — Type-safe file-based routing
- `@radix-ui/react-*` — Accessible, unstyled UI primitives
- `lucide-react` — Icon library
- `recharts` — Data visualization (for charts)
- `tailwind-merge`, `class-variance-authority`, `clsx` — Utility libraries for styling

---

## Features

### Pages / Routes

| Route | Description |
|-------|-------------|
| `/` | **Home** — Hero section with animated typewriter effect, floating paper plane, and call-to-action links |
| `/about` | **About** — Personal bio and background |
| `/projects` | **Projects** — Showcase of data science and AI/ML projects |
| `/skills` | **Skills** — Technical skills and competencies |
| `/experience` | **Experience** — Work history and professional journey |
| `/contact` | **Contact** — Contact form and social links |

### Design & UX Highlights

- **Paper-inspired aesthetic** with warm ink and gold accents
- **Custom fonts**: Cormorant Garamond (display), Caveat (script), Inter (body), JetBrains Mono (mono)
- **Smooth scroll animations** with the `Reveal` component
- **Interactive hero plane** that responds to mouse movement
- **Typewriter effect** for the tagline
- **Fully responsive** layout for mobile, tablet, and desktop
- **404 page** with custom design

---

## Project Structure

```
kinjal-palette-project/
├── src/
│   ├── assets/                  # Images and static assets
│   │   ├── hero-plane.png
│   │   ├── vibhuti-patel.jpeg
│   │   └── project-*.jpg        # Project thumbnails
│   ├── components/              # React components
│   │   ├── Reveal.tsx           # Scroll-reveal animation wrapper
│   │   ├── SectionLabel.tsx     # Section heading component
│   │   ├── SiteNav.tsx          # Navigation bar
│   │   └── ui/                  # shadcn/ui components (50+ components)
│   ├── hooks/                   # Custom React hooks
│   │   └── use-mobile.tsx       # Mobile detection hook
│   ├── lib/                     # Utility functions
│   │   └── utils.ts             # cn() helper for Tailwind classes
│   ├── routes/                  # File-based routes (TanStack Router)
│   │   ├── __root.tsx           # Root layout with HTML shell
│   │   ├── index.tsx            # Home page
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   ├── router.tsx               # Router configuration
│   ├── routeTree.gen.ts         # Auto-generated route tree
│   └── styles.css               # Global styles & Tailwind imports
├── package.json
├── vite.config.ts               # Vite + TanStack Start + Tailwind plugins
├── tsconfig.json                # TypeScript configuration
├── wrangler.jsonc               # Cloudflare deployment config
├── bunfig.toml                  # Bun configuration
├── components.json              # shadcn/ui configuration
├── TODO.md                      # Project task tracking
└── README.md                    # This file
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** `v18.x` or later (if using npm)
- **[Bun](https://bun.sh/)** `v1.x` or later (recommended — the project is configured for Bun)

> **Note**: The project uses a `bun.lockb` lockfile. While `npm` will work, **Bun** is the preferred package manager for the best compatibility and performance.

---

## Getting Started

### 1. Clone or Navigate to the Project

```bash
cd kinjal-palette-project
```

### 2. Install Dependencies

**Using Bun (recommended):**

```bash
bun install
```

**Using npm:**

```bash
npm install
```

### 3. Start the Development Server

**Using Bun:**

```bash
bun run dev
```

**Using npm:**

```bash
npm run dev
```

The development server will start. Open your browser and navigate to:

```
http://localhost:5173
```

Vite's Hot Module Replacement (HMR) is enabled, so changes to your code will reflect instantly in the browser.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun run dev` | Start the Vite development server with HMR |
| `build` | `bun run build` | Build the application for production |
| `build:dev` | `bun run build:dev` | Build in development mode (for debugging) |
| `preview` | `bun run preview` | Preview the production build locally |
| `lint` | `bun run lint` | Run ESLint across the codebase |
| `format` | `bun run format` | Format all files with Prettier |

---

## Deployment

This project is configured for deployment on **Cloudflare Pages** using Wrangler.

### Deploy to Cloudflare

1. **Install Wrangler CLI** (if not already installed):

   ```bash
   npm install -g wrangler
   # or
   bun add -g wrangler
   ```

2. **Login to Cloudflare**:

   ```bash
   wrangler login
   ```

3. **Deploy**:

   ```bash
   wrangler pages deploy dist
   ```

   Or, if configured for Workers:

   ```bash
   wrangler deploy
   ```

> See `wrangler.jsonc` for the Cloudflare compatibility configuration. The project uses `nodejs_compat` flag for Node.js API support.

### Alternative: Static Hosting

Since TanStack Start can produce static builds, you can also deploy to:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- Any static file server

Build the project first:

```bash
bun run build
```

Then deploy the generated `dist/` directory.

---

## Customization

### Changing Personal Information

1. **Name & Meta Tags**: Edit `src/routes/__root.tsx`
   - Update `<title>`, `description`, and Open Graph meta tags

2. **Home Page Hero**: Edit `src/routes/index.tsx`
   - Update the typed text, tagline, and links

3. **Profile Picture**: Replace `src/assets/vibhuti-patel.jpeg`

4. **Projects**: Edit `src/routes/projects.tsx` and update images in `src/assets/`

### Changing Colors / Theme

The project uses CSS custom properties for theming. Edit `src/styles.css` to customize:

- `--color-paper` — Background color
- `--color-ink` — Primary text color
- `--color-gold` — Accent color

### Adding New Pages

TanStack Start uses file-based routing. Simply create a new file in `src/routes/`:

```bash
# Example: create a /blog page
touch src/routes/blog.tsx
```

Export a `Route` component following the existing patterns. The router will auto-generate the route tree.

### Adding UI Components

This project uses **shadcn/ui**. To add a new component:

```bash
npx shadcn add <component-name>
```

Example:

```bash
npx shadcn add badge
```

---

## License

This project is private and proprietary. All rights reserved.

---

## Credits

- **Design & Development**: Vibhuti Patel
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Framework**: [TanStack Start](https://tanstack.com/start)

---

## Troubleshooting

### `bun install` fails

If you don't have Bun installed, use npm instead:

```bash
npm install
npm run dev
```

### Port already in use

Vite will automatically try the next available port (e.g., `5174`). Check the terminal output for the actual URL.

### Build errors

Ensure all dependencies are installed and you're using a compatible Node.js/Bun version. Delete `node_modules` and the lockfile, then reinstall:

```bash
rm -rf node_modules bun.lockb
bun install
```

---

> Built with curiosity, precision, and a passion for intelligent design.

