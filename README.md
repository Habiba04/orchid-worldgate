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

## Images: hosted on Cloudinary

Most images (logos, explore thumbnails, brand logos, gallery photos) are now
served through [Cloudinary](https://cloudinary.com), which auto-picks the best
format (WebP/AVIF) and quality for each visitor, and resizes on the fly —
no manual compressing or exporting multiple sizes needed.

**Setup:**

1. Create a free Cloudinary account and copy your **Cloud name** from the Dashboard.
2. In Cloudinary's Media Library, recreate this folder structure and upload the
   matching files from your old `assets/` folder:

   ```
   owg/
     logo.PNG, OWG_logo.PNG, horizental.PNG
     explore/about.jpeg, services.jpeg, gallery.jpeg, contact.jpeg
     Brands/Spark_fresh_logo.png, Spark_gardens_logo.png
     gallery/Fresh/...   gallery/Frozen/...   gallery/Processed/...   gallery/Real/...
   ```

3. Copy `.env.example` to `.env` and set your cloud name:

   ```
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   ```

4. Restart `npm run dev` after adding `.env` (Vite only reads it on start).

All Cloudinary URLs are built through one small helper: `src/utils/cloudinary.ts`
(`cld()` for a single optimized URL, `cldSrcSet()` for responsive `srcset`s used
in the gallery). If you ever rename a folder in Cloudinary, that's the one place
to check paths against.

**Favicons** (`our_color_logo.PNG`, `OWG_logo.PNG` referenced in `index.html`'s
`<head>`) were left as local files — they're tiny and loaded before your JS
runs, so Cloudinary doesn't add value there.

**CSS background images** (the landing hero's shuffling background, the vision
section background, the about section background — all defined via
`background-image: url(...)` in `styles.css`) were also kept local, since plain
CSS can't read the `VITE_CLOUDINARY_CLOUD_NAME` env variable the way
JavaScript can. These are a handful of decorative images, so the perf win from
Cloudinary is small here — but if you want them on Cloudinary too later, it's
a quick follow-up (setting CSS custom properties from JS, or a tiny Vite
plugin to substitute the URL at build time). Just say the word.

So `public/assets/` only needs these local files:

```
public/assets/
  our_color_logo.PNG
  OWG_logo.PNG
  vision.jpeg
  about.png
  landing/shuffle1.jpeg ... shuffle6.jpg
```

Everything else (gallery photos, explore thumbnails, brand logos, the main
logo, footer logo) comes from Cloudinary.

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
├── index.html                  # Vite entry (favicon links + Cloudinary preloads)
├── .env.example                 # copy to .env, add your Cloudinary cloud name
├── public/
│   ├── css/all.min.css         # Font Awesome, copied as-is
│   └── assets/                 # only the 2 favicon files go here now
├── src/
│   ├── main.tsx                # app bootstrap + stylesheet imports
│   ├── App.tsx                 # renders all sections inside ConfigProvider
│   ├── components/              # one component per section
│   ├── data/galleryImages.ts   # gallery image list (Cloudinary paths)
│   ├── hooks/useLanguageDirection.ts
│   ├── i18n/                   # en.json, ar.json, i18next setup
│   ├── utils/cloudinary.ts     # cld() / cldSrcSet() URL builders
│   └── styles/
│       ├── normalize.css       # unchanged
│       ├── styles.css          # unchanged — your original design
│       └── rtl.css             # additive RTL overrides only
```
