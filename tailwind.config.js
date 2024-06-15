/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/home-bg.svg')",
        "content-pattern": "url('/src/assets/images/content-bg.svg')",
        "content-m-pattern": "url('/src/assets/images/content-m-bg.svg')",
        "con-m-pattern": "url('/src/assets/images/con-m-bg.svg')",
        "con-pattern": "url('/src/assets/images/con-bg.svg')",
        "features-pattern": "url('/src/assets/images/features-bg.svg')",
        "features-m-pattern": "url('/src/assets/images/features-m-bg.svg')",
        "service-pattern": "url('/src/assets/images/service-bg.svg')",
        "finance-pattern": "url('/src/assets/images/finance-bg.svg')",
      },
    },
  },
  plugins: [],
};
