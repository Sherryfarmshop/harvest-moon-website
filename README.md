# Harvest Moon Farm Shop & Gathered Goods

A single-page scrolling website for Harvest Moon Farm Shop, a Northern Michigan farm market near Charlevoix.

Built with **Next.js 14+ (App Router)** and **Tailwind CSS**.

## Setup on Replit

1. **Import** this project into Replit (or create a new Next.js Repl and copy these files in).

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add images:**
   Upload all farm images to `public/images/`. Required files:
   - `logo.jpg`
   - `website-hero.jpg`
   - `website-intro.jpg`
   - `website-maple-syrup.jpg`
   - `website-breakfast-box.jpg`
   - `website-icecream.jpg`
   - `website-gathered-goods.jpg`
   - `website-icecream-feature.jpg`
   - `website-stay-on-farm.jpg`
   - `gallery-meadow.jpg`
   - `gallery-harvest-moon.jpg`
   - `gallery-sunset.jpg`
   - `gallery-deer-fall.jpg`
   - `gallery-moonrise.jpg`
   - `gallery-dog-sunset.jpg`
   - `gallery-hilltop-tree.jpg`
   - `gallery-treeline.jpg`
   - `gallery-aurora.jpg`
   - `gallery-barn.jpg`

4. **Run the dev server:**
   ```bash
   npm run dev
   ```
   The site runs on port 3000.

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Replit Configuration

If Replit doesn't auto-detect the framework, create a `.replit` file:

```toml
run = "npm run dev"
entrypoint = "src/app/page.tsx"

[nix]
channel = "stable-24_05"

[[ports]]
localPort = 3000
externalPort = 80
```

## Customization

- **Colors:** Edit `tailwind.config.ts` — all brand colors are defined there.
- **Fonts:** Google Fonts (Playfair Display, Lora, Source Sans 3) loaded via `next/font`.
- **VRBO/Booking links:** Update the `href` values in `src/components/StayOnFarm.tsx`.
- **Google Calendar:** Add an iframe embed in `src/components/Visit.tsx` where the placeholder is.
- **Google Maps:** Update the embed URL in `src/components/Visit.tsx` with the actual Place ID.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS 3.4
- TypeScript
- Google Fonts via next/font
- Responsive, mobile-first design
- Smooth scroll navigation
- Image lightbox gallery
