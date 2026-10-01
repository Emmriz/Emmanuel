/** @type {import('tailwindcss').Config} */
module.exports = {
  // Every file that contains Tailwind class names. Classes are found by scanning these as text.
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        surface: "#111115",
        elevated: "#1a1a20",
        border: "#27272a",
        foreground: "#fafafa",
        secondary: "#a1a1aa",
        muted: "#52525b",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
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
