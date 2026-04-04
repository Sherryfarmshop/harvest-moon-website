import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'barn-red': '#8B2500',
        'forest-green': '#2D5016',
        'harvest-gold': '#D4A017',
        'cream': '#FDF6E3',
        'warm-brown': '#8B7355',
        'soft-white': '#FEFEFE',
        'dark-text': '#3D2B1F',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lora': ['Lora', 'serif'],
        'source': ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
