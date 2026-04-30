/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dde7ff',
          200: '#b8ccff',
          300: '#84a9ff',
          400: '#527bff',
          500: '#2d52f5',
          600: '#1a35e8',
          700: '#1527cc',
          800: '#1523a5',
          900: '#162282',
          950: '#0e1550',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
