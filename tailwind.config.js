/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'footer-bg' : "url('/images/BG.png')",
          'hero-pattern': "url('/images/Rectangle 1.png')" ,
           'hero-vector': "url('/images/Vector.png')" ,
           'rectangle': "url('/images/Rectangle 2004.png')",
           'rectangle1': "url('/images/Rectangle 2005.png')",
      },
      width:{
        '1145':'1145px'
      },
      maxWidth:{
        '1145':'1145px'
      },
    },
  },
  plugins: [],
}
