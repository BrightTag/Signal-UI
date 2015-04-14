'use strict;'

var config = require('../config')
    gulp = require('gulp'),
    path = require('path'),
    data = require('gulp-data'),
    jade = require('gulp-jade'),
    util = require('gulp-util'),
    rubySass = require('gulp-ruby-sass'),
    browserify = require('gulp-browserify');

gulp.task('docs', function() {

  var components = [];

  (function getModules(base) {
    var moduleName = './../../styles/' + (base ? base + '/' : '') + 'docs.js';
    delete require.cache[path.resolve(moduleName)]; // Invalidate cache
    var doc = require(moduleName);

    if (base) {
      doc.syntax = base;
      doc.level  = base.split('/').length;
      components.push(doc);
    }

    if (doc.components) {
      for(var i=0; i<doc.components.length; i++) {
        getModules((base ? base + '/' : '') + doc.components[i]);
      }
    }
  })();

  gulp.src('./site/**/[^_]*.jade')
    .pipe(data(function(file) {
      var depth = (file.history[0].replace(file.base, '').match(/\//g) || []).length;

      return {
        path: depth === 0 ? './' : Array(depth + 1).join('../'),
        components: components
      };
    }))
    .pipe(jade())
    .on('error', function(err) {
      util.log(err.stack);
    })
    .on('error', util.beep)
    .pipe(gulp.dest('./dist/docs'));

  gulp.src('./site/main.scss')
    .pipe(rubySass({
      trace: false,
      sourcemapPath: './',
      bundleExec: true,
      require: ['bourbon', 'susy']
    }))
    .pipe(gulp.dest('./dist/docs'));

  gulp.src('./site/**/[^_]*.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist/docs'));

  gulp.src('./site/**/*.png')
    .pipe(gulp.dest('./dist/docs'));

  // Assets
  gulp.src('./assets/**/*')
    .pipe(gulp.dest('./dist/docs/assets'));
});
