import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8f7",
          100: "#dcecea",
          200: "#bcd8d5",
          300: "#96c1bd",
          400: "#6fa9a4",
          500: "#4a9b66",
          600: "#3B8757",
          700: "#2f6d46",
          800: "#255638",
          900: "#1c432c",
          950: "#132523",
        },
        accent: {
          50: "#f8f5f0",
          100: "#ede4d7",
          500: "#c2824d",
          600: "#a96b3e",
          700: "#855232",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -14px rgb(15 23 42 / 0.24)",
        card: "0 1px 2px rgb(15 23 42 / 0.06), 0 14px 32px -22px rgb(15 23 42 / 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
