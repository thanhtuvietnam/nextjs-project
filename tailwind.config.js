/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          main: {
            summerSky: '#228EE5',
            acliceBlue: '#EBFAFF',
            deepCerise: '#E5228D',
          },
          neutral: {
            black: '#000000',
            gray: '#808080',
            white: '#FFFFFF',
          },
          background: '#030A1B',
          semantic: {
            alizarin: '#E52222',
            goldenFizz: '#E5DB22',
            springGreen: '#00FB71',
          },
        },
        //Theme light
        light: {
          main: {
            summerSky: '#228EE5',
            darkGreen: '#030A1B',
            deepCerise: '#E522BD',
          },
          neutral: {
            black: '#000000',
            gray: '#808080',
            white: '#FFFFFF',
          },
          background: '#EBFAFF',
          semantic: {
            alizarin: '#E2204C',
            goldenFizz: '#E5DB22',
            springGreen: '#00FB71',
          },
        },
      },
    },
  },
  plugins: [],
};
