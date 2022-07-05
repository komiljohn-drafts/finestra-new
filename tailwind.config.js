module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: { max: "768px" },
      sm: { max: "576px" },
    },
  },
  plugins: [],
  mode: "jit",
  purge: ["./views/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
}
