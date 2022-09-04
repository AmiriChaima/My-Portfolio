const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {

      
      extend: {
        fontFamily:{
          'nunito':'Nunito',
          'alumini':'Alumni Sans Inline One'
        }


    




      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
