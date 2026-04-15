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
          50: "#f1f7f3",
          100: "#deefe3",
          200: "#bddfca",
          300: "#96cbb0",
          400: "#71b395",
          500: "#569d77",
          600: "#3B8757",
          700: "#306d47",
          800: "#275739",
          900: "#1f452e",
          950: "#0f2418",
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
        /** Gevonden/Vermist: white surface + green border (glow reads as border halo) */
        "animal-white":
          "0 4px 22px -4px rgb(15 23 42 / 0.09), 0 14px 40px -18px rgb(15 23 42 / 0.08), 0 0 36px -10px rgb(59 135 87 / 0.22)",
        /** Green surface + calm elevation */
        "animal-green":
          "0 4px 22px -4px rgb(15 23 42 / 0.08), 0 16px 44px -20px rgb(0 0 0 / 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
