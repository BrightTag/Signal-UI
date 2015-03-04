'use strict';

var config = {

  components: {

    root: './styles/components',

    scss: {
      src: './styles/lo-mein.scss',
      dest: './dist',
      out: 'lo-mein.css'
    },

    rubySass: {
      trace: false,
      sourcemapPath: './',
      style: 'expanded',
      bundleExec: true,
      require: ['bourbon', 'susy']
    },

    normalize: './node_modules/normalize.css/normalize.css'

  },

  docs: {
    root: './dist/docs',
    serverport: 8080
  },

  watch: {
    paths: ['assets/**/*', 'site/**/*', 'styles/**/*']
  }

};

module.exports = config;
