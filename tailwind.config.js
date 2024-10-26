/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#EE1B30',
        'secondary': '#000000'
      },
      backgroundColor: {
        'primary': '#EE1B30'
      },
      borderColor: {
        'primary': '#EE1B30'
      },
      fill: {
        'primary': '#EE1B30'
      }
    },
  },
  plugins: [],
};
