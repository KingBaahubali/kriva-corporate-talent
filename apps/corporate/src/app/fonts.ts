import localFont from "next/font/local";

/**
 * Rajdhani — geometric display typeface, matches the logo wordmark style.
 * Used for all headings, nav, CTAs.
 */
export const rajdhani = localFont({
  src: [
    {
      path: "../../public/fonts/Rajdhani-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rajdhani-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rajdhani-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rajdhani",
  display: "swap",
  preload: true,
  fallback: ["'Segoe UI'", "system-ui", "sans-serif"],
  adjustFontFallback: false,
});

/**
 * Inter Variable — body and UI copy. The most readable geometric sans for screens.
 */
export const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

/**
 * IBM Plex Mono — technical labels, tags, code, eyebrows.
 */
export const ibmPlexMono = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["'Courier New'", "monospace"],
  adjustFontFallback: false,
});
