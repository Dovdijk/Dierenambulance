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
          50: "#edf6f3",
          100: "#d5e9e1",
          200: "#afd4c4",
          300: "#81b8a2",
          400: "#5f9f86",
          500: "#3d866a",
          600: "#165B47",
          700: "#124a3a",
          800: "#103a2f",
          900: "#0c2d24",
          950: "#071a15",
        },
        accent: {
          50: "#fffbe6",
          100: "#fff4b0",
          500: "#F2E500",
          600: "#d4c900",
          700: "#a9a100",
        },
        rescue: {
          50: "#fdece8",
          100: "#f9cdc2",
          500: "#C73418",
          600: "#a82c14",
          700: "#842210",
        },
        ink: {
          500: "#14120E",
        },
      },
      fontFamily: {
        sans: ["Avenir LT Std", "Avenir", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["Avenir LT Std", "Avenir", "var(--font-display)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
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
