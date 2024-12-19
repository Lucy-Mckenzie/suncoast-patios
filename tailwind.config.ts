import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: [
      "corporate", "dark", "synthwave", "light"
    ],
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
