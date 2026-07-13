import { cld } from "./cloudinary";

/**
 * The landing hero's shuffling background is defined in styles.css as a pure
 * CSS @keyframes animation (`change-background`) that swaps background-image
 * every few seconds. Since plain CSS can't read VITE_CLOUDINARY_CLOUD_NAME,
 * we rebuild that same keyframe rule here in JS (with Cloudinary URLs) and
 * inject it as a <style> tag. Same selector + same keyframe name, so it
 * simply overrides the version in styles.css via normal cascade order
 * (this tag is added after styles.css is loaded).
 */

const LANDING_PATHS = {
  shuffle1: "v1783963553/OWG/Landing/shuffle1.jpg",
  shuffle2: "v1783963553/OWG/Landing/shuffle2.jpg",
  shuffle3: "v1783963553/OWG/Landing/shuffle3.jpg",
  shuffle4: "v1783963553/OWG/Landing/shuffle4.jpg",
  shuffle5: "v1783963553/OWG/Landing/shuffle5.jpg",
  shuffle6: "v1783963553/OWG/Landing/shuffle6.jpg",
};

const STYLE_TAG_ID = "cloudinary-landing-bg";

export function injectLandingBackgrounds(): void {
  if (document.getElementById(STYLE_TAG_ID)) return;

  const url = (path: string) => cld(path, { width: 1600 });

  const css = `
    .landing .image {
      background-image: url("${url(LANDING_PATHS.shuffle1)}");
    }
    @keyframes change-background {
      0%, 100% { background-image: url("${url(LANDING_PATHS.shuffle1)}"); }
      18% { background-image: url("${url(LANDING_PATHS.shuffle2)}"); }
      36% { background-image: url("${url(LANDING_PATHS.shuffle3)}"); }
      54% { background-image: url("${url(LANDING_PATHS.shuffle4)}"); }
      72% { background-image: url("${url(LANDING_PATHS.shuffle5)}"); }
      90% { background-image: url("${url(LANDING_PATHS.shuffle6)}"); }
    }
  `;

  const styleTag = document.createElement("style");
  styleTag.id = STYLE_TAG_ID;
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
}
