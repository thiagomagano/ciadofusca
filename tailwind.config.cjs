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
    extend: {}
  }
};

module.exports = config;
