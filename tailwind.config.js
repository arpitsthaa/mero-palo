/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#0A3A3D',
          900: '#0F5257',
          800: '#146569',
        },
        cream: '#FAF7F2',
        amber: {
          500: '#E8A33D',
          600: '#D18B26',
        },
        coral: {
          500: '#E85D4A',
        },
        ink: '#1E293B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}

