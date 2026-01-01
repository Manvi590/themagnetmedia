/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        'red-300': '#fca5a5',
        'red-400': '#f87171',
        'red-500': '#ef4444',
        'pink-300': '#f9a8d4',
        'rose-200': '#fecdd3',
      },
    },
  },
  plugins: [],
};
