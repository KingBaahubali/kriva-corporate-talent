/**
 * Kriva — Tailwind CSS Configuration
 * Components use CSS variables for theming, not Tailwind color utilities.
 * This config handles content scanning, fonts, and basic utilities only.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
        mono:    ["var(--font-mono)",    "monospace"],
      },
      colors: {
        brand:   "var(--brand)",
        accent:  "var(--accent)",
        canvas:  "var(--canvas)",
        surface: "var(--surface)",
        ink:     "var(--ink)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm:      "var(--radius-sm)",
        lg:      "var(--radius-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
