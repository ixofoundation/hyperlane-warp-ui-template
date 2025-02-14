/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-main)'],
      serif: ['Garamond', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    screens: {
      all: '1px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        black: '#010101',
        white: '#ffffff',
        gray: { ...defaultColors.gray, 150: '#EBEDF0', 250: '#404040', 350: '#6B6B6B' },
        primary: {
          50: '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b9b9b9',
          400: '#a3a3a3',
          500: '#292929',
          600: '#202020',
          700: '#1d1d1d',
          800: '#1a1a1a',
          900: '#171717',
        },
        accent: {
          50: '#e6fafe',
          100: '#ccf5fd',
          200: '#99ecfc',
          300: '#66e2fa',
          400: '#33d9f9',
          500: '#00D2FF',
          600: '#00b8e6',
          700: '#0099cc',
          800: '#007a99',
          900: '#005c73',
        },
        red: {
          100: '#EBBAB8',
          200: '#DF8D8A',
          300: '#D25F5B',
          400: '#C5312C',
          500: '#BF1B15',
          600: '#AB1812',
          700: '#85120E',
          800: '#5F0D0A',
          900: '#390806',
        },
        green: {
          50: '#D3E3DB',
          100: '#BED5C9',
          200: '#93BAA6',
          300: '#679F82',
          400: '#3C835E',
          500: '#27764d',
          600: '#236A45',
          700: '#1F5E3D',
          800: '#17462E',
          900: '#0F2F1E',
        },
      },
      fontSize: {
        xxs: '0.7rem',
        xs: '0.775rem',
        sm: '0.85rem',
        md: '0.95rem',
      },
      spacing: {
        88: '22rem',
        100: '26rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.20rem',
        DEFAULT: '0.30rem',
        md: '0.40rem',
        lg: '0.50rem',
        full: '9999px',
      },
      blur: {
        xs: '3px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      transitionProperty: {
        height: 'height, max-height',
        spacing: 'margin, padding',
      },
      maxWidth: {
        'xl-1': '39.5rem',
      },
    },
  },
  plugins: [],
};
