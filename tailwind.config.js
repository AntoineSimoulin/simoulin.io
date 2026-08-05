/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neo-sm': '2px 2px 0px #000',
        'neo': '4px 4px 0px #000',
        'neo-lg': '6px 6px 0px #000',
        'neo-xl': '8px 8px 0px #000',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

