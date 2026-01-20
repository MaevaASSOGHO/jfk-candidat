import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ciGreen: "#0B6E4F",
        ciOrange: "#F77F00",
        darkText: "#1F2937",
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
