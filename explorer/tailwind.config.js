module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tokyo: {
          800: '#222433',
          900: '#1b1b27',
        },
        accent: {
          DEFAULT: '#79a3f5',
          hover: '#7aa2f7',
        }
      }
    },
  },
  plugins: [],
}
