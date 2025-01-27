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
        primary: {
          main: '#252E45',
          // light: '',
          // dark: '',
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
