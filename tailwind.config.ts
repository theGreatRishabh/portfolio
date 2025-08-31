import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "panel-about": "#2a4d69",
        "panel-services": "#c02942",
        "panel-portfolio": "#458b74",
        "panel-contact": "#d98c56",
        "panel-text": "#ffffff",
        "left-bg": "#2c3e50",
        "brand-bg": "#10121B",
        "brand-surface": "#1B1E28",
        "brand-primary": "#7A67F8",
        "brand-text-primary": "#F5F5F7",
        "brand-text-secondary": "#A9AABC",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
