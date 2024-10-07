import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        tomato: "#F06542",
        white: "#ffffff",
        alabaster: "#f3efe2",
        pearl: "#E7DFC6",
        aero: "#5bc0eb",
        pictonBlue: "#1BA1DA",
        aquamarine: "#40dea7",
      },
      gridTemplateColumns: {
        form: "1fr 4fr",
      },
    },
  },
};

export default config;
