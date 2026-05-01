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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#ffffff",
        foreground: "#000000",
        headline: "#111111",
        muted: "#71717a",
        borderGlass: "rgba(0, 0, 0, 0.05)",
        surfaceGlass: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(61, 90, 62, 0.05), 0 2px 8px -2px rgba(61, 90, 62, 0.03)",
        "card-hover": "0 10px 30px -5px rgba(61, 90, 62, 0.15), 0 4px 12px -5px rgba(61, 90, 62, 0.1)",
      },
      animation: {
        "marquee-scroll": "marquee-scroll 40s linear infinite",
        "blob-drift": "blob-drift 30s ease-in-out infinite alternate",
        "blob-drift-delayed": "blob-drift 32s ease-in-out 5s infinite alternate-reverse",
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-drift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(5%, 5%) scale(1.05)" },
          "66%": { transform: "translate(-2%, 8%) scale(0.95)" },
          "100%": { transform: "translate(-5%, -2%) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
