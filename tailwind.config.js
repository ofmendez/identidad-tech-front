/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blueAvi: 'var(--blueAvi)',
        pinkAvi: ' var(--pinkAvi)',
        linksAvi: 'var(--linksAvi)',
        buttonsAvi: 'var(--buttonsAvi)',
        titlesAvi: 'var(--titlesAvi)',
        linksMenuAvi: 'var(--linksMenuAvi)',
      },
    },
  },
  plugins: [],
};
