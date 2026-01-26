/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F8E1E7',
        pastelBlue: '#D6E6F2',
        pastelGreen: '#D4F1F4',
        pastelYellow: '#FFF6D1',
        pastelPurple: '#EAD7F6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
