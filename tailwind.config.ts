import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hanken)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-newsreader)", "Georgia", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-plex-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ink: "#1D2B36",
        harbor: "#0E2A3F",
        navy: { DEFAULT: "#113F60", deep: "#0B2235" },
        stone: "#F4F2ED",
        rule: { DEFAULT: "#DDD7CB", strong: "#CFC8BA", soft: "#ECE7DD" },
        brass: { DEFAULT: "#B08D57", text: "#7D5E2E" },
        slate: { body: "#3B4A56", muted: "#4A5864", faint: "#6B7680" },
        mist: { DEFAULT: "#A9BBCB", light: "#C9D4DE", lighter: "#D5DEE5" },
      },
      maxWidth: { site: "1200px" },
    },
  },
  plugins: [],
};
export default config;
