import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fonteLogo: ['"fonteLogo"', 'Lorena']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        second: "var(--second)",
        thrd: "var(--thrd)",
        fourt: "var(--fourt)"
      },
    },
  },
  plugins: [],
} satisfies Config;