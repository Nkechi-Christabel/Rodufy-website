module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#301446",
        secondary: "#EA7052",
        tertiary: "#F4F4F4",
        secondaryLight: "#EE8B73",
        overlay: "#636262",
      },
      screens: {
        xs: "540px", // min-width
        // mb: "317px", // min-width
        xxs: { max: "316px" },
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
