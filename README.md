# Qollix – Premium African Tech Talent Platform

This Next.js codebase powers the Qollix marketing & services site showcasing:

- Tech Talent Sourcing & Placement (10–14 day delivery, $300 flat sourcing fee)
- Comprehensive Talent Management (onboarding, performance & retention)
- Compliance & Legal / Employer of Record (multi-country payroll & statutory coverage)
- Transparent Pricing & ROI (25% total service fee: 13% management + 12% EOR)

## Tech Stack
Next.js 15 · React 18 · TypeScript · Bootstrap 5 · AOS · GSAP · Swiper

## Getting Started
Install dependencies and run the dev server:

```
npm install
npm run dev
```

Visit http://localhost:3000

## Key Pages
- `/` – Landing (selected variant)
- `/services` – Core services overview
- `/services/talent-sourcing` – Sourcing & Placement
- `/services/talent-management` – Talent Lifecycle Management
- `/services/compliance-legal` – Compliance & EOR
- `/pricing` – Pricing tiers, volume discounts & ROI examples

## Customization
Update global meta tags in `app/layout.tsx`.
Navigation: `components/layout/MainMenu.tsx`.
Service content: `components/sections/services/*`.

## Roadmap Ideas
- Add dynamic CMS (e.g. MDX or headless CMS) for blog & case studies
- Integrate real ROI calculator with user inputs
- Add testimonial slider fed from JSON / API
- Implement structured data (JSON-LD) for SEO

## License
Internal proprietary use unless otherwise specified.