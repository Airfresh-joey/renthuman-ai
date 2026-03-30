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
          50: "#FFF3E6",
          100: "#FFE0B3",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF6B00",
          600: "#E65100",
          700: "#BF4400",
          800: "#993600",
          900: "#732900",
        },
        dark: {
          50: "#f5f5f6",
          100: "#e6e6e7",
          200: "#ccccce",
          300: "#b3b3b6",
          400: "#8a8a8e",
          500: "#62626a",
          600: "#3d3d45",
          700: "#2a2a32",
          800: "#1a1a22",
          900: "#0d0d14",
          950: "#06060b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "count-up": "countUp 2s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 107, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 107, 0, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
