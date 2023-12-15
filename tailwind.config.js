/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // eslint-disable-next-line quotes
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // eslint-disable-next-line quotes
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // eslint-disable-next-line quotes
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    // eslint-disable-next-line quotes
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
