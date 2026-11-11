# Exlantic Growth Partners

The corporate website for **Exlantic Growth Partners**, founded by Hussain Khan.
*Turning Insights Into Growth. Think Beyond. Build Forward.*

A single, premium, fully responsive page: matte black canvas, deep violet accents, metallic silver typography, 3D geometric visuals and subtle scroll animations. Sections: Home, About Us, Our Vision, Our Philosophy, Meet Our Founder, Why Exlantic, Contact Us and a closing brand statement.

## Technology

- **TanStack Start** (React 19, TanStack Router) with Vite
- **Tailwind CSS 4**, brand theme in `src/styles.css`
- **Netlify Forms**: stores contact submissions (spam filtering and a honeypot included)
- **Netlify Image CDN**: serves the 3D artwork as responsive WebP
- Fonts: Michroma (wordmark), Instrument Serif (headings), Manrope (body)

## Running locally

```bash
pnpm install
netlify dev        # or: pnpm dev (contact submissions only work on Netlify)
```

## Content you can update

- **Founder photograph**: add the portrait to `public/img/` and set `FOUNDER_PHOTO` at the top of `src/routes/index.tsx` (for example `'/img/hussain-khan.jpg'`). Until then an elegant monogram placeholder is shown.
- **Contact submissions**: view them in the Netlify dashboard under *Forms → contact*. Set up email notifications there.
