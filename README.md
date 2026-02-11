# M.Riswan — Portfolio

A modern, high-performance portfolio website built with Next.js 15 and TypeScript. Showcases professional experience, projects, and contact information with a polished dark-mode design system.

---

## Tech Stack

| Layer          | Technologies                                         |
| -------------- | ---------------------------------------------------- |
| **Framework**  | Next.js 15 (App Router, Turbopack)                   |
| **Language**   | TypeScript 5                                         |
| **Styling**    | Tailwind CSS 4, PostCSS                              |
| **Components** | shadcn/ui (New York), Radix UI                       |
| **Icons**      | Lucide React                                         |
| **Utilities**  | class-variance-authority (cva), clsx, tailwind-merge |
| **Animations** | tw-animate-css                                       |
| **Fonts**      | Geist, Geist Mono (next/font)                        |

---

## Design System

### Color Palette

- **Primary**: Neon Blue (`#256af4`) untuk aksen dan CTA
- **Base**: OKLCH color space untuk konsistensi dan aksesibilitas
- **Mode**: Dark theme sebagai default (light mode-ready via CSS variables)

### Tokens

- Custom CSS variables untuk `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `card`, `border`, dll.
- Radius scale: `sm` → `4xl` (berbasis `--radius: 0.75rem`)
- Surface tokens: `surface-dark`, `surface-border` untuk kartu dan layout

### Utility Classes

- `.btn-primary` — Primary button dengan shadow dan hover state
- `.glass-card` — Card dengan backdrop-blur dan border halus
- `.grid-pattern` — Background grid subtle
- `.custom-scrollbar` — Styled scrollbar
- `.glow-blue` — Soft blue glow effect
- Animasi: `animate-bounce-slow`, `animate-pulse-slow`, `anchor-highlight` untuk scroll target

### Typography

- **Sans**: Geist (variable font)
- **Mono**: Geist Mono
- Font weights: semibold, bold, black untuk hierarchy yang jelas

---

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn / bun

### Install

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

```bash
npm run build
```

Environment: tidak memerlukan environment variables untuk run basic.

---

## License

© 2026 M.Riswan. Built with Next.js.
