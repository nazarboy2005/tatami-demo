import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument-sans", "sans-serif"],
        heading: ["Darker-grotesque", "sans-serif"],
        arabic: ["Noto Sans Arabic", "sans-serif"],
        fig: ["Figtree", "sans-serif"],
      },

      colors: {
        primary: "#025356",
        "primary-light": "#d2fce3",
        neutral: "#617268",
        "bg-light": "#ededed",
        "accent-purple": "#e0a9ee",
        "accent-orange": "#ffbe84",
      },
      backgroundImage: {
        "arabian-pattern": "url('/images/arabian-pattern-light.png')",
        "arabian-pattern-dark": "url('/images/arabian-pattern-dark.png')",
      },
      borderRadius: {
        arabian: "0.5rem 0.5rem 1.5rem 0.5rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".perspective": {
          perspective: "1000px",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".perspective-1500": {
          perspective: "1500px",
        },
        ".transform-gpu": {
          transform: "translateZ(0)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
