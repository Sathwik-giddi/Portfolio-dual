# Portfolio Dual

Dual-mode portfolio for **Sathwik Giddi**: one codebase, two entry experiences.

## Why Dual Mode

Most portfolios try to speak to everyone and end up diluted. This one splits the presentation into two focused modes while keeping the same underlying data:

- **Technical**: for recruiters and engineering managers
- **Freelance**: for founders and clients

Same projects, metrics, and proof. Different framing, ordering, tone, and UI.

## Tech Stack

- **Next.js**
- **Tailwind CSS**
- **YAML-driven content**
- **Three.js** for visual depth / interactive graphics

## Routes

- `/` — mode selector
- `/technical` — engineering-first portfolio
- `/freelance` — client-first portfolio

## Folder Structure

```txt
src/
  app/
    page.tsx
    technical/
    freelance/
  components/
    portfolio-site/
  content/
    portfolio.ts
public/
  assets/
```

## Data Model

The site uses a **shared content model** so both modes render from the same source of truth. Projects, metrics, services, testimonials, and process content are structured once and presented differently per mode.

## Setup

```bash
git clone https://github.com/Sathwik-giddi/Portfolio-dual.git
cd Portfolio-dual
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Status

Active build in progress and evolving as a premium dual-mode portfolio system.

## Author

**Sathwik Giddi**  
AI Engineer / Full-Stack Builder

- GitHub: https://github.com/Sathwik-giddi
- LinkedIn: https://www.linkedin.com/in/sathwik-g-aa29682a7/
- Email: mailto:sathwikgiddi01@gmail.com

## License

MIT
