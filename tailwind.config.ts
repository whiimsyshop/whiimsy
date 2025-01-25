import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      screens:{
        'tablet': {'min':'426px'},
        'laptop': {'min':'769px'},
        'laptopl': {'min':'1200px'},
        '4k': {'min':'1600px'},
      },
      colors:{
        grey: "#474852",
        bluelink: "#1E2694",
        purple: "#5D66EB",
        warning:"#ff9800",
        danger:"#00acc1",
        primary:"#5ca0dd",
        success:"#5cddb4",
        secondary:"#5cdd60"
      },
      fontFamily:{
        kantumruyPro: ['var(--font-kantumruyPro)'],
        kaiseiTokumin: ['--font-kaiseiTokumin'],
        inknutAntiqua: ['--font-inknutAntiqua']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;