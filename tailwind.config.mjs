/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arepa: {
          DEFAULT: '#D4A860',
          light: '#E8C88A',
          dark: '#B8893A',
          50: '#FBF5EA',
        },
        verde: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          forest: '#4A6E2D',
          olive: '#6B8E3A',
        },
        crema: {
          DEFAULT: '#FAF3E8',
          dark: '#EDE0CC',
        },
        marron: {
          DEFAULT: '#3B2417',
          light: '#5C3A21',
          medium: '#7A4E2D',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
