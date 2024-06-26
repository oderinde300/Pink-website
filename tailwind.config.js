/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      // animation: {
      //   fade: "fade 3s forwards",
      // },
      animation: {
        fadeIn: "fadeIn 2s forwards",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/home-bg.png')",
        "content-pattern": "url('/src/assets/images/content-bg.png')",
        "content-m-pattern": "url('/src/assets/images/content-m-bg.png')",
        "con-m-pattern": "url('/src/assets/images/com-m-bg.png')",
        "con-pattern": "url('/src/assets/images/con-bg.svg')",
        "features-pattern": "url('/src/assets/images/features-bg.png')",
        "features-m-pattern": "url('/src/assets/images/features-m-bg.png')",
        "service-pattern": "url('/src/assets/images/services-bg.png')",
        "finance-pattern": "url('/src/assets/images/finance-bg.png')",
      },
    },
  },
  plugins: [],
};
