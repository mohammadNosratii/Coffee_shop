/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      "xs": '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1450px',
    },
    extend: {
      colors: {
        "brown": {
          10: "#5D5553",
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
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
      },
      container: {
        center: true,
        padding: {
        DEAFAULT: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "0.625rem",
        }
      },
      backgroundImage: {
        "home-mobile": "url(../images/headerBgMobile.webp)",
        "home-dekstop": "url(../images/headerBgDesktop.webp)",
      },
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ],
}

