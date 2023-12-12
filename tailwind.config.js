/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-1": "#2A9D8F",
        "brand-2": "#12423D",
        "secondary-1": "#000000",
        "secondary-2": "#262A2C",
        "greyscale-50": "#F9FAFB",
        "greyscale-100": "#F4F4F6",
        "greyscale-200": "#E5E6EB",
        "greyscale-300": "#D3D5DA",
        "greyscale-400": "#9EA3AE",
        "greyscale-500": "#6C727F",
        "greyscale-600": "#4D5461",
        "greyscale-700": "#394150",
        "greyscale-800": "#212936",
        "greyscale-900": "#0B0A0F",
      },

      fontSize: {
        h1: "72px",
        h2: "48px",
        h3: "44px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
