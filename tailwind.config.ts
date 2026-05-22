import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1929",
          surface: "#12243A",
          light: "#1C3450",
        },
        gold: {
          DEFAULT: "#C9A052",
          light: "#D4B574",
          muted: "#8B6A2E",
        },
        cream: "#E8E0D4",
        paper: "#F0EAE0",
        muted: "#8A9BAE",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
