/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(45deg, rgba(19, 0, 145, 1) 0%, rgba(55, 81, 212, 1) 100%',
      },
      colors: {
        'primary-dark': 'rgba(55, 81, 212, 1)',
      }
    },
  },
  plugins: [],
}
