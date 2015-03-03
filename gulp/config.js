'use strict';

var config = {

  components: {

    root: './styles/components',

    scss: {
      src: './styles/components/**/index.scss',
      out: 'LoMein.css',
      dest: './build'
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
    root: 'build/docs',
    serverport: 8080
  },

  watch: {
    paths: ['assets/**/*', 'site/**/*', 'styles/**/*']
  }

};

module.exports = config;
