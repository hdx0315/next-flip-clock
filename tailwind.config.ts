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
        blackTransparent: "var(--blackTransparent)",
      },
      fontFamily: {
        NimbusSansT: ['NimbusSansT', 'sans-serif'],
        NimbusSansTBold: ['NimbusSansTBold', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '16rem',
        '13xl': '20rem',
        '14xl': '24rem',
        '15xl': '28rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
