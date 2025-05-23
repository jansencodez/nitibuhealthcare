import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#005792",
        "accent-teal": "#00bbbb",
        "dark-gray": "#2d3436",
        "light-gray": "#f5f6fa",
      },
      fontFamily: {
        sans: ["Roboto", "Inter", "Arial", "Helvetica", "sans-serif"],
      },
      aspectRatio: {
        square: "1 / 1",
      },
    },
  },
  plugins: [],
} satisfies Config;
