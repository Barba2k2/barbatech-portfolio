import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blackText: "#111111",
        button: {
          primary: "#D300FF",
          hover: "#9507e3",
          secondary: "#FFFFFF",
        },
        logo: {
          blue: "#00BAFF",
          purple: "#D300FF",
        },
        black: {
          "20": "rgba(0, 0, 0, 0.2)",
          "64": "rgba(0, 0, 0, 0.64)",
          "99": "rgba(17, 17, 17, 0.99)",
          bg: "#222222",
          secondary: "#141414",
          tertiary: "#212429",
        },
        gray: {
          "100": "#F8F9FA",
          "300": "#DDE2E5",
          "600": "#495057",
          secondary: "#7E7E7E",
          mid: "#495057",
          tertiary: "#ACB5BD",
          support: "#F8F9FA",
          background: "rgba(255, 255, 255, 0.02)",
          background04: "rgba(255, 255, 255, 0.04)",
        },
        white: {
          "100": "#ffffff0a",
          primary: "#FFFFFF",
        },
        green: {
          "50": "rgba(38, 192, 138, 0.5)",
          checkmark: "#26C08A",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        desktop: "1440px",
        tabletLarge: "1024px",
        tablet: "744px",
        mobile: "380px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
