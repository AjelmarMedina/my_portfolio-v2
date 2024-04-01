import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        50: '#EFF2F6',
        white: '#EFF2F6',
        100: '#DEE5ED',
        200: '#BDCBDB',
        light: '#BDCBDB',
        300: '#9CB0C9',
        400: '#7B96B7',
        mid: '#7B96B7',
        500: '#5B7CA4',
        600: '#486384',
        dark: '#486384',
        700: '#364A63',
        800: '#243242',
        black: '#243242',
        900: '#121921',
        950: '#090C10',
      },
      primary: {
        50: '#E5F1FF',
        100: '#CCE4FF',
        200: '#99C9FF',
        300: '#66ADFF',
        400: '#3392FF',
        500: '#0077FF',
        600: '#005FCC',
        700: '#004799',
        800: '#003066',
        900: '#001833',
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-radial-md" : "radial-gradient(circle at 0 0, #001833 30%, #004799 100%)",
      },
      typography: {
        'display-2xl': {
          css: {
            'font-size': '72px',
            'line-height': '90px'
          }
        },
        'display-xl': {
          css: {
            'font-size': '60px',
            'line-height': '72px'
          }
        },
        'display-lg': {
          css: {
            'font-size': '48px',
            'line-height': '60px'
          }
        },
        'display-md': {
          css: {
            'font-size': '36px',
            'line-height': '44px'
          }
        },
        'display-sm': {
          css: {
            'font-size': '30px',
            'line-height': '38px'
          }
        },
        'display-xs': {
          css: {
            'font-size': '24px',
            'line-height': '32px'
          }
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
