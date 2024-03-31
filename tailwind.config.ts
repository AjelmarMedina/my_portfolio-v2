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
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
