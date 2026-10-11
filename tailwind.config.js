/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "sala de proyección" — negro azulado profundo, terciopelo
        // borgoña y un latón envejecido para los brillos, como el metal
        // de una carátula de DVD bajo luz de televisor.
        reel: {
          black: '#08070b',
          charcoal: '#141119',
          velvet: '#3b0d1c',
          velvetLight: '#5c1830',
          brass: '#c9a24d',
          brassBright: '#e8c778',
          bone: '#e9e2d0',
          fog: '#8a8496',
        },
      },
      fontFamily: {
        display: ['"Cormorant SC"', '"Cormorant Garamond"', 'serif'],
        label: ['"Jost"', 'sans-serif'],
      },
      boxShadow: {
        brassGlow: '0 0 18px 2px rgba(201, 162, 77, 0.35)',
        brassGlowStrong: '0 0 32px 6px rgba(232, 199, 120, 0.55)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '92%': { opacity: 1 },
          '93%': { opacity: 0.85 },
          '94%': { opacity: 1 },
        },
      },
      animation: {
        flicker: 'flicker 6s infinite',
      },
    },
  },
  plugins: [],
}
