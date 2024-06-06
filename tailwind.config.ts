import { url } from 'inspector';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      borderColor: {
        'border-table': '#000',
      },
      content: {
        'arrow-right': 'url(/assets/arrow-right.svg)',
        'arrow-left': 'url(/assets/arrow-left.svg)',
      },
      colors: {
        'border-input': '#D2D2D7',
        'text-btn': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
