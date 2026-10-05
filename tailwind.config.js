/** @type {import('tailwindcss').Config} */
module.exports = {
  // Every file that contains Tailwind class names. Classes are found by scanning these as text.
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      // Colour values live in css/theme.css — edit them there, no rebuild needed.
      colors: {
        bg: "color-mix(in srgb, var(--color-bg) calc(<alpha-value> * 100%), transparent)",
        surface: "color-mix(in srgb, var(--color-surface) calc(<alpha-value> * 100%), transparent)",
        elevated: "color-mix(in srgb, var(--color-elevated) calc(<alpha-value> * 100%), transparent)",
        border: "color-mix(in srgb, var(--color-border) calc(<alpha-value> * 100%), transparent)",
        foreground: "color-mix(in srgb, var(--color-foreground) calc(<alpha-value> * 100%), transparent)",
        secondary: "color-mix(in srgb, var(--color-secondary) calc(<alpha-value> * 100%), transparent)",
        muted: "color-mix(in srgb, var(--color-muted) calc(<alpha-value> * 100%), transparent)",
        accent: {
          DEFAULT: "color-mix(in srgb, var(--color-accent) calc(<alpha-value> * 100%), transparent)",
          light: "color-mix(in srgb, var(--color-accent-light) calc(<alpha-value> * 100%), transparent)",
          dark: "color-mix(in srgb, var(--color-accent-dark) calc(<alpha-value> * 100%), transparent)",
        },
        success: {
          DEFAULT: "color-mix(in srgb, var(--color-success) calc(<alpha-value> * 100%), transparent)",
          light: "color-mix(in srgb, var(--color-success-light) calc(<alpha-value> * 100%), transparent)",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
    },
  },
  plugins: [],
};
