import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gala: {
          red: "#B71C1C",
          "red-deep": "#8B0000",
          "red-bright": "#D32F2F",
          "red-light": "#FFCDD2",
          "red-soft": "#F8E8E8",
          cream: "#FAF7F5",
          charcoal: "#2D2D2D",
          stone: "#E8E3DF",
          dark: "#1A1214",
          "dark-warm": "#2C1A1A",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      animation: {
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        float: "float 25s ease-in-out infinite",
        "float-reverse": "float 18s ease-in-out infinite reverse",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.6)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(15px, -25px) scale(1.02)" },
          "66%": { transform: "translate(-10px, 10px) scale(0.98)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
