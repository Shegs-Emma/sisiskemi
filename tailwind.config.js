/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#363435',
        grey: {
          input: '#828282',
          title: '#4F4F4F',
          label: '#596080',
          light: '#758089',
          bg: '#F7F7F7',
          border: '#C4C4C4',
        },
      },
      screens: {
        xs: '480px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
