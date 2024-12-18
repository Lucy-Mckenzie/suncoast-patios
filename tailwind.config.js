/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}
