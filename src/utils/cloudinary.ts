

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined;

if (!CLOUD_NAME) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_CLOUDINARY_CLOUD_NAME is not set. Add it to a .env file, e.g. VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name"
  );
}

interface CldOptions {
  /** Target display width in px. Cloudinary will downscale/upscale + serve the best format for it. */
  width?: number;
  /** Target display height in px (used together with width + crop). */
  height?: number;
  /** Crop mode, only applied when width and/or height are set. Defaults to "fill" when both are given. */
  crop?: "fill" | "fit" | "scale" | "thumb";
}

/**
 * Build a single optimized Cloudinary URL.
 */
export function cld(path: string, options: CldOptions = {}): string {
  const cloudName = CLOUD_NAME || "demo"; // "demo" keeps things from crashing before .env is set
  const transforms = ["f_auto", "q_auto"];

  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.width || options.height) {
    transforms.push(`c_${options.crop || "fill"}`);
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
}

/**
 * Build a responsive srcset across common breakpoints, for use on <img srcSet>.
 * Pass the widths you actually need to cut down on Cloudinary transformation usage.
 */
export function cldSrcSet(path: string, widths: number[] = [400, 800, 1200, 1600]): string {
  return widths.map((w) => `${cld(path, { width: w })} ${w}w`).join(", ");
}
