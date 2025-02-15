import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textFooter: '#72777A',
        textColor: '#000000',

        primary: {
          main: '#252E45',
        },
      },
      textColor: {
        black: { primary: '#FFFFFF', secondary: '#72777A' },
      },
      backgroundColor: {
        primary: '#252E45',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
} satisfies Config;
