/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    require('path').join(require.resolve(
      '@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {

        primary: {
          50: '#02407e',
          100: '#0058b0',
          200: '#0062e2',
          300: '#0074ff',
          400: '#008eff',
          500: '#00b7ff',
          600: '#2ad9ff',
          700: '#6eeaff',
          800: '#a9f0ff',
          900: '#cff5ff',
          950: '#e9fbff'
        }
      }
    }
  }
};

module.exports = config;
