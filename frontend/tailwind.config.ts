/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }:any) {
      const scrollbarUtilities = {
        ".custom-scrollbar": {
          /* Your custom scrollbar styles here */
          // For webkit-based browsers (Chrome, Safari)
          "&::-webkit-scrollbar": {
            width: "0.1px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "6px",
          },
          // For Firefox
          "scrollbar-width": "thin",
          "scrollbar-color": "#888 #f1f1f1",
        },
      };

      addUtilities(scrollbarUtilities, ["responsive", "hover"]);
    },
  ],
};