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
        "primary": '#003066',
        900: '#001833',
      },
      accent: {
        50: "#fcf8ea",
        100: "#f9f0c8",
        200: "#f4df94",
        300: "#edc657",
        "accent": "#edc657",
        400: "#e6af2e",
        500: "#d6971c",
        600: "#b87416",
        700: "#935315",
        800: "#7a4219",
        900: "#68371b",
        950: "#3d1c0b",
      },
      "success": {
        "50": "#f0fdf1",
        "100": "#dcfce1",
        "200": "#baf8c4",
        "300": "#85f097",
        "400": "#2edb4b",
        "500": "#20c73d",
        "600": "#15a42e",
        "700": "#148128",
        "800": "#156624",
        "900": "#135420"
      },
      "warning": {
        "50": "#fefce8",
        "100": "#fefac3",
        "200": "#fdf18b",
        "400": "#f9cd16",
        "500": "#e9b409",
        "600": "#c98c05",
        "700": "#a06408",
        "800": "#844e0f",
        "900": "#714012",
        "300*": "#fce040"
      },
      "error": {
        "50": "#fef3f2",
        "100": "#fee4e2",
        "200": "#fecdca",
        "300": "#fda29b",
        "400": "#f97066",
        "500": "#f04438",
        "600": "#d92d20",
        "700": "#b42318",
        "800": "#912018",
        "900": "#7a271a"
      },
      "blue_Gray": {
        "90": "#ecf2f9",
        "100": "#d9e6f2",
        "200": "#b3cce6",
        "300": "#8cb2d9",
        "500": "#6699cc",
        "600": "#336699",
        "700": "#264c73",
        "800": "#19334d",
        "900": "#0d1926"
      }
    
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-radial-md": "radial-gradient(circle at 0 0, #001833 30%, #004799 100%)",
        "project1": "url('/projects/my-portfolio-v2.png')",
        "dark-gradient": "linear-gradient(to right, rgba(9, 12, 16, 0.5) 75%, transparent)"
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
        'text-xl': {
          css: {
            'font-size': '20px',
            'line-height': '30px'
          }
        },
        'text-lg': {
          css: {
            'font-size': '18px',
            'line-height': '28px'
          }
        },
        'text-md': {
          css: {
            'font-size': '16px',
            'line-height': '24px'
          }
        },
        'text-sm': {
          css: {
            'font-size': '14px',
            'line-height': '20px'
          }
        },
        'text-xs': {
          css: {
            'font-size': '12px',
            'line-height': '18px'
          }
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ajelmar-slide-in": {
          from: { transform: "translate(50vw)"},
          to: { transform: "translate(0vw)"}
        },
        "medina-slide-in": {
          from: { transform: "translate(-50vw)"},
          to: { transform: "translate(0vw)"}
        },
        "image-left-slide-in": {
          from: { transform: "translate(-50vw)" },
          to: { transform: "translate(0vw)" }
        },
        "image-right-slide-in": {
          from: { transform: "translate(50vw)" },
          to: { transform: "translate(0vw)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ajelmar-slide-in": "ajelmar-slide-in 0.75s",
        "medina-slide-in": "medina-slide-in 0.75s",
        "image-left-slide-in": "image-left-slide-in 1.25s ease-out 1.5s forwards",
        "image-right-slide-in": "image-right-slide-in 1.25s ease-out 1.5s forwards",
        "fade-in--body": "fade-in--body 2.75s ease-out 3s forwards",
        "fade-in--buttons": "fade-in--body 2.75s ease-out 4s forwards",
        "fade-in": "fade-in 2.5s ease-out 6s forwards",
        "show-sections": "show-sections 1.5s ease-in-out 4s forwards",
        "mobile-hero-image": "mobile-hero-image 2.5s ease-in-out 4s forwards",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate"),
  ],
};
export default config;
