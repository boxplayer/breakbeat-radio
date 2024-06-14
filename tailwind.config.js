/** @type {import('tailwindcss').Config} */
//TODO: remove backgroundImage?
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      radio: "2px 2px var(--tw-shadow-color)",
    },
    extend: {
      backgroundImage: {
        "main-wall": "url('/lofi-wallpaper.jpg')",
      },
    },
  },
  plugins: [],
};
