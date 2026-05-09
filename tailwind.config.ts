import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#06070d',
        neonPink: '#ff3ea5',
        electricBlue: '#25a6ff',
        neonSun: '#ffbe3d',
      },
      boxShadow: {
        neon: '0 0 25px rgba(255, 62, 165, 0.35), 0 0 45px rgba(37, 166, 255, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
