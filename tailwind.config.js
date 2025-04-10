/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'poppins-thin': ['Poppins-Thin', 'sans-serif'],
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        'poppins-extralight': ['Poppins-ExtraLight', 'sans-serif'],
        'poppins-extrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'poppins-black': ['Poppins-Black', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        dark: 'var(--dark)',
        light: 'var(--light)',
      },
    },
  },
  plugins: [],
}
