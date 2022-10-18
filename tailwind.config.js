/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "runner": "url('../src/assets/run.jpg')",
      }
    },
  },
  plugins: [],
}