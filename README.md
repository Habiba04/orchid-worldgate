# Orchid World Gate — React Rebuild

Your original landing page, rebuilt as a Vite + React + TypeScript project.
Same visual design, same CSS — now componentized and bilingual (EN/AR).

## What changed vs. the original

- **Structure**: each section (Header, Landing, Explore, Vision, About, Mission,
  Services, Support, Brands, WhyUs, Values, Gallery, Contact, Footer) is now its
  own React component in `src/components/`.
- **Styling**: `normalize.css` and `styles.css` are copied over **untouched** —
  your design, colors, spacing, and animations are unchanged. `src/styles/rtl.css`
  adds a small, additive layer that only flips text direction and mirrors a few
  directional icons when Arabic is active — it doesn't override anything else.
- **Bilingual (EN/AR)**: powered by `react-i18next`. All copy lives in
  `src/i18n/en.json` and `src/i18n/ar.json`. Switching language also flips the
  whole page to RTL (via `dir="rtl"` on `<html>` and Ant Design's `ConfigProvider`).
- **Ant Design**: used sparingly, not to restyle your design — just for:
  - a clean language switcher (`Segmented`) in the header
  - `Skeleton.Image` placeholders while gallery images load, replacing the
    instant "pop-in" with a smoother, more professional loading state

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Images: gallery hosted on Cloudinary, everything else local

Only the **gallery** (the largest, highest-traffic set of images — 60+ photos)
is served through [Cloudinary](https://cloudinary.com). Everything else
(logos, explore thumbnails, brand logos, footer logo, CSS background images)
stays as regular local files in `public/assets/`, same as the original site.
This is where Cloudinary's `f_auto,q_auto` (auto format + quality) and
responsive `srcset` add the most value anyway, since it's by far the heaviest
set of images on the page.

**Setup:**

1. Create a free Cloudinary account and copy your **Cloud name** from the Dashboard.
2. Copy `.env.example` to `.env` and set:

   ```
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   ```

3. Restart `npm run dev` after adding `.env` (Vite only reads it on start).

Your gallery images are expected on Cloudinary under:

```
OWG/Gallery/
  Fresh/...
  Frozen/...
  Processed/...
  Real/...
```

(matching the folders you already uploaded — there's also an `Extra` folder
kept in reserve, not currently wired into the gallery filters).

All Cloudinary URLs are built through one small helper: `src/utils/cloudinary.ts`
(`cld()` for a single optimized URL, `cldSrcSet()` for the responsive `srcset`
used in `GalleryThumb.tsx`). Nothing else in the codebase touches Cloudinary.

## Important: add your remaining images locally

Copy your existing `assets/` folder (minus the gallery, which now lives on
Cloudinary) into:

```
public/assets/
```

so paths like `/assets/logo.PNG`, `/assets/explore/about.jpeg`,
`/assets/Brands/Spark_fresh_logo.png`, and the CSS background images
(`/assets/landing/shuffle1.jpeg`, `/assets/vision.jpeg`, `/assets/about.png`)
resolve exactly like they did before.

## Editing text / translations

All page copy lives in two JSON files:

- `src/i18n/en.json`
- `src/i18n/ar.json`

Both mirror the same key structure (e.g. `services.frozen.title`), so it's easy
to keep them in sync. I translated all existing copy into Arabic; feel free to
refine the wording — I kept it close to the original English meaning but you
know your brand voice best.

## Notes on the RTL layout

Full RTL was requested, so when Arabic is active:
- The whole page direction flips (`dir="rtl"`)
- Text aligns right
- Directional arrow icons (like the `›` bullets in Services/Support) mirror
  automatically
- The Cairo font (already loaded via Google Fonts in `index.html`) is used for
  Arabic text, matching what was already linked in your original `<head>`

If you spot any spot where RTL doesn't look quite right (e.g. a specific
spacing or icon), it's a one-line addition to `src/styles/rtl.css` — that file
is intentionally kept separate from your original styles so it's easy to find
and adjust.

## Project structure

```
├── index.html
├── .env                          # Cloudinary cloud name (gitignored)
├── .gitignore
├── .hintrc
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── assets/
│       ├── Brands/
│       ├── explore/
│       ├── about.png
│       ├── horizental.PNG
│       ├── logo.PNG
│       ├── OWG_logo.PNG
│       └── vision.jpeg
└── src/
    ├── main.tsx                   # app bootstrap, stylesheet imports, landing bg injector
    ├── App.tsx / App.css
    ├── index.css
    ├── vite-env.d.ts
    ├── assets/
    ├── components/
    │   ├── Gallery/
    │   │   ├── Gallery.tsx
    │   │   ├── galleryImages.ts   # Cloudinary paths
    │   │   └── GalleryThumb.tsx
    │   ├── AboutUs.tsx
    │   ├── Brands.tsx
    │   ├── Contact.tsx
    │   ├── Explore.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Landing.tsx
    │   ├── Mission.tsx
    │   ├── Services.tsx
    │   ├── Support.tsx
    │   ├── Values.tsx
    │   ├── Vision.tsx
    │   └── WhyUs.tsx
    ├── CSS/
    │   ├── fontawesome.ts
    │   ├── normalize.css          # unchanged
    │   ├── styles.css             # unchanged — original design
    │   └── rtl.css                # additive RTL overrides only
    ├── Hook/
    │   └── useLanguageDirection.ts
    ├── i18n/
    │   ├── en.json
    │   ├── ar.json
    │   └── index.ts
    └── utils/
        ├── cloudinary.ts                    # cld() / cldSrcSet() URL builders
        └── cloudinaryLandingBackground.ts   # injects hero bg keyframes

```
