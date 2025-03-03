/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '768px',  // Custom small screen breakpoint
        'md': '1400px',  // Custom medium screen breakpoint
        'lg': '1600px', // Custom large screen breakpoint
        'xl': '2100px', // Custom extra-large screen breakpoint
        '2xl': '2500px', // Custom 2x-large screen breakpoint
      },
    },
  },
  plugins: [],
}
