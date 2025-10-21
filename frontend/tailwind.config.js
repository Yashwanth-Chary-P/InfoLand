/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'Poppins', 'sans-serif'],
      },
      colors: {
        'govt-green': '#10B981',
        'private-blue': '#3B82F6',
        'soft-gray': '#F8FAFC',
        'text-gray': '#64748B',
        'dark-gray': '#1E293B',
      }
    },
  },
  plugins: [],
}
