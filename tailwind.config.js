/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx,mdx}'],
  theme: {
    daisyui: [
      "corporate", "dark", "synthwave", "light"
    ],
  },
  plugins: [
    daisyui,
  ],
}
