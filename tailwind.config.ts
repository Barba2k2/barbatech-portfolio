import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: {
          primary: "#CC06FF",
          hover: "#9507e3",
          secondary: "#FFFFFF",
        },
        primary: "#C02648",
        red: {
          backgorung15: "rgba(213, 110, 132, 0.15)",
          300: "#D56E84",
          600: "#AF2342",
          700: "#881B33",
          card: "rgba(136, 27, 51, 0.7)",
          accordion: "rgba(192, 38, 72, 0.05)",
        },
        black: {
          bg: "#222222",
          secondary: "#141414",
          tertiary: "#212429",
          20: "rgba(0, 0, 0, 0.2)",
          64: "rgba(0, 0, 0, 0.64)",
          99: "rgba(17, 17, 17, 0.99)",
        },
        gray: {
          100: "#F8F9FA",
          300: "#DDE2E5",
          600: "#495057",
          secondary: "#7E7E7E",
          mid: "#495057",
          tertiary: "#ACB5BD",
          support: "#F8F9FA",
          background: "rgba(255, 255, 255, 0.08)",
          background04: "rgba(255, 255, 255, 0.04)",
        },
        white: {
          primary: "#FFFFFF",
          100: "#ffffff0a",
        },
        green: {
          checkmark: "#26C08A",
          50: "rgba(38, 192, 138, 0.5)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
