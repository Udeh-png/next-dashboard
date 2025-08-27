/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      black: "rgb(40, 40, 40)",
      gray: "rgb(100, 100, 100)",
      white: "rgb(245, 245, 245)",
      "trans-white": "rgba(255, 255, 255, 0.5)",
    },
    fontFamily: {
      sans: "var(--font-geist-sans)",
      mono: "var(--font-geist-mono)",
      wavy: ['"Brush Script MT"', "cursive"],
    },
  },
};
export const plugins = [];
