import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        electric: '#00c2ff',
        'neon-pink': '#ff2fb1',
        'neon-orange': '#ff8a00',
        'neon-yellow': '#ffd94a',
      },
    },
  },
  plugins: [],
};

export default config;
