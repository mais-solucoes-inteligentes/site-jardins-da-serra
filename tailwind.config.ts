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
          green: {
            DEFAULT: "#65A631", // Pantone 7489C
            light: "#7FC446",
            dark: "#4D8223",
          },
          brown: {
            DEFAULT: "#663124", // Pantone 4705C
            light: "#823E2E",
            dark: "#4C2319",
          },
          yellow: {
            DEFAULT: "#FFF688", // Pantone 100C
            light: "#FFF9AB",
            dark: "#E8DC6B",
          },
          surface: "#FBFDF9",
          darkText: "#222625",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        brand: ["Fontastique", "var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
