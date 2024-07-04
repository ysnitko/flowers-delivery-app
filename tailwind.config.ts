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
        'wedding-bg': "url('/assets/wedding-bg.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'category-bg': "url('/assets/wedding-bg.png')",
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      borderColor: {
        'border-table': '#000',
        'border-white': '#ffffff',
      },
      content: {
        'arrow-right': 'url(/assets/arrow-right.svg)',
        'arrow-left': 'url(/assets/arrow-left.svg)',
      },
      colors: {
        'border-input': '#D2D2D7',
        'text-btn': '#FFFFFF',
        'text-footer': '#808080',
      },
    },
  },
  plugins: [],
};
export default config;
