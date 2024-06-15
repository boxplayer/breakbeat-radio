/** @type {import('tailwindcss').Config} */
//TODO: remove backgroundImage?
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  dropShadow: {
    radio: "2px 2px var(--tw-shadow-color)",
  },
  extend: {
    backgroundImage: {
      "main-wall": "url('/lofi-wallpaper.jpg')",
    },
  },
};
export const plugins = [];
