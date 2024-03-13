/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        "4xl": "32px"
      },
      letterSpacing: {
        "tightest" : "-0.065em"
      },
      fontSize: {
        "xs" : "10px"
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ],
}

