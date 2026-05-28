import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4460EF",
          light: "#4BC9F1",
          purple: "#3F37CA",
          pink: "#FC3196",
          offwhite: "#F7F7F2",
        },
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "background-elevated": "var(--background-elevated)",
        foreground: "var(--foreground)",
        muted: "var(--foreground-muted)",
        subtle: "var(--foreground-subtle)",
        faint: "var(--foreground-faint)",
        border: "var(--border)",
        glass: "var(--glass-bg)",
        "glass-hover": "var(--glass-bg-hover)",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-pink": "var(--shadow-glow-pink)",
        glass: "var(--shadow-glass)",
        card: "var(--shadow-card)",
        "theme-sm": "var(--shadow-theme-sm)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
