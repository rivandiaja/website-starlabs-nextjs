import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite alternate",
      },
      keyframes: {
        pulseGlow: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;