/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: ["1.1rem", "1.5rem"],
      },

      accent: "rgba(12, 38, 69, var(--tw-bg-opacity))",
    },
  },
  plugins: [],
};
