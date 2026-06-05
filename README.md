# M.Riswan — Full-Stack Portfolio CMS

A modern, high-performance, and fully dynamic portfolio website built with Next.js 15 and TypeScript. It features a stunning public showcase and a secure, bespoke Admin Content Management System (CMS) to manage projects, images, and metrics dynamically.

---

## ✨ Key Features

- **Public Showcase:** Highly polished dark-mode UI with smooth animations to display professional experience and case studies.
- **Secure Admin Panel:** Protected routes using NextAuth.js (GitHub OAuth), restricted strictly to the admin.
- **Advanced CRUD Operations:** Manage projects with dynamic array fields (multiple tech stacks, dynamic impact metrics).
- **Enterprise-Grade Image Uploads:** Direct client-to-cloud image uploads using Vercel Blob, featuring Lightbox previews, custom URL generation, and an auto-rollback/cleanup system for failed database transactions.
- **Type-Safe Architecture:** End-to-end type safety from the PostgreSQL database (Prisma) to the client forms (React Hook Form + Zod).

---

## 🛠️ Tech Stack

| Layer          | Technologies                                         |
| -------------- | ---------------------------------------------------- |
| **Framework**  | Next.js 15 (App Router, Server Actions)              |
| **Language**   | TypeScript 5                                         |
| **Database**   | PostgreSQL (Neon/Supabase)                           |
| **ORM**        | Prisma                                               |
| **Auth**       | NextAuth.js (v4) with GitHub Provider                |
| **Storage**    | Vercel Blob                                          |
| **Forms**      | React Hook Form + Zod (Validation)                   |
| **Styling**    | Tailwind CSS 4, PostCSS                              |
| **Components** | shadcn/ui (New York), Radix UI                       |
| **Icons**      | Lucide React                                         |
| **Utilities**  | class-variance-authority (cva), clsx, tailwind-merge |
| **Fonts**      | Geist, Geist Mono (next/font)                        |

---

## 🎨 Design System

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

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn / bun
- A PostgreSQL Database (e.g., Neon.tech, Supabase)
- Vercel Account (for Blob Storage)
- GitHub OAuth Application

### 1. Installation

```bash
git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
cd portfolio
npm install
```
