// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        sparkleWave: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '25%': { transform: 'translateX(-0.5rem) translateY(-0.2rem)' },
          '50%': { transform: 'translateX(-1rem) translateY(0.2rem)' },
          '75%': { transform: 'translateX(-1.5rem) translateY(-0.2rem)' },
          '100%': { transform: 'translateX(-2rem) translateY(0)', opacity: '0' },
        },
      },
      animation: {
        'sparkle-wave': 'sparkleWave 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
