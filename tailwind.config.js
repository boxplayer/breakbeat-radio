/** @type {import('tailwindcss').Config} */
//TODO: remove backgroundImage?
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-wall": "url('/lofi-wallpaper.jpg')",
        "pc98-gif": "url('/gifs/pc-98-retro-game.gif')",
      },
    },
  },
  plugins: [],
};
