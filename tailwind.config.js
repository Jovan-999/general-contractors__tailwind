module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      40: '40px',
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        // darkBlue: '#213977',
        // lightBlue: '#477cdf',
      },
      maxWidth: {
        1200: '1200px',
        600: '600px',
      },
      width: {
        200: '200px',
      },
      lineHeight: {
        60: '60px',
      },
      height: {
        60: '60px',
        250: '250px',
        650: '650px',
        900: '900px',
      },
      backgroundImage: {
        'hero-pattern':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/GettyImages-165995076-1920w.jpg)',
        'good-contractors':
          'url(https://lirp.cdn-website.com/26a6bb9c/dms3rep/multi/opt/bg1-1920w.png)',
        'service-pattern': 'linear-gradient(90deg, #005f9c 0, #213977 100%)',
      },
    },
  },
  plugins: [],
};
