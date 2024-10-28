/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
		extend: {
      colors: {
        setta: {
          50: "hsl(222, 28%, 95%)",
          100: "hsl(219, 24%, 89%)",
          200: "hsl(219, 25%, 77%)",
          300: "hsl(220, 25%, 67%)",
          400: "hsl(220, 26%, 57%)",
          500: "hsl(220, 25%, 45%)",
          600: "hsl(219, 25%, 34%)",
          700: "hsl(219, 26%, 23%)",
          800: "hsl(220, 26%, 14%)",
          850: "hsl(220, 25%, 11%)",
          860: "hsl(220, 25%, 8.5%)",
          875: "hsl(220, 25%, 7.5%)",
          900: "hsl(220, 27%, 6%)",
          925: "hsl(220, 24%, 4.5%)",
          950: "hsl(220, 25%, 3%)",
          975: "hsl(220, 33%, 0.5%)",
					lightSite: "hsl(221, 100%, 93%)",
          light: "hsl(215, 20%, 65%)",
          dark: "hsl(220, 27%, 13%)",
        },
      },
		}
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}