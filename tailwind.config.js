/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        yellowItech: ' var(--yellowItech)',
        buttonsItech: 'var(--buttonsItech)',
        titlesItech: 'var(--titlesItech)',
      },
    },
  },
  plugins: [],
};
