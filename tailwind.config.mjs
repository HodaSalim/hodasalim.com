/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
  //darkMode: ['selector', '[data-mode="dark"]'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#28282E",
        white: "#F5F4FE",
        gray: {
          100: "#D2D2D8",
          300: "#AAAAAF",
          500: "#8D8D93",
          700: "#4C4C4F",
          900: "#1a202c",
        },
        yellow: {
          100: "#FFFBED",
          300: "#F6F1DD",
          500: "#D1CCB9",
          700: "#A9A48F",
          900: "#797460",
        },
        teal: {
          100: "#E5FFFF",
          300: "#D2E7EE",
          500: "#9EC4C9",
          700: "#789DA0",
          900: "#4E656B",
        },
        green: {
          100: "#D1DBD4",
          300: "#B0BAB3",
          500: "#91A497",
          700: "#6A7E71",
          900: "#3D4A42",
        },
        violet: {
          100: "#E3E2F9",
          300: "#C7C5DE",
          500: "#8E8CA4",
          700: "#504E62",
          900: "#323146",
        },
        rose: {
          100: "#FFE1E3",
          300: "#F3CACC",
          500: "#CFADAF",
          700: "#97686B",
          900: "#5A383A",
        },
        plum: {
          100: "#E6C7D1",
          300: "#B38394",
          500: "#7C5A66",
          700: "#513B43",
          900: "#38282D",
        },
      },
      fontFamily: {
        sans: ["Alexandria Variable", ...defaultTheme.fontFamily.sans],
        header: ["Kufam Variable", ...defaultTheme.fontFamily.sans],
        code: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },

};
