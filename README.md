# Barsell Electrical Services

Professional electrical services website for Barsell Electrical Services, serving the East Bay Area.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment to any static hosting service.

## Deployment

This site is configured for static export and can be deployed to:

- **Digital Ocean** (nginx static hosting)
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

### Environment Variables

Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g., `https://barsellelectrical.com`) for proper metadata and sitemap generation.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/       # About page
│   ├── contact/     # Contact page
│   ├── reviews/     # Reviews page
│   └── services/    # Services page
├── components/       # React components
├── content/          # Site content and data
└── lib/             # Utility functions
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Touch device detection
- ✅ Accessible navigation
- ✅ Error pages (404, 500)
- ✅ Favicon and app icons

## License

© 2025 Barsell Electrical Services. All rights reserved.
