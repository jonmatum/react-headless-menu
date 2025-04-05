/** @type {import('tailwindcss').Config} */
export default {
  content: ["./playground/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  safelist: [
    {
      pattern:
        /(bg|hover:bg|from|to|hover:from|hover:to|border|text|hover:text|ring|hover:ring|focus-visible:ring)-(blue|indigo|cyan|emerald|slate|rose|amber)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /(bg|hover:bg|border|text|ring|hover:ring|focus-visible:ring|from|to|hover:from|hover:to)-white(\/[0-9]{2,3})?/,
    },
    {
      pattern: /(text|hover:text)-(slate|gray)-[0-9]{3}/,
    },
  ],
  extend: {
    borderRadius: { xl: "1rem" },
    spacing: { 128: "32rem" },
    // etc...
  },
  plugins: ["@tailwindcss/forms"],
};
