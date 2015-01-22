var gulp        = require('gulp'),
    fs          = require('fs'),
    path        = require('path'),
    sass        = require('gulp-sass'),
    util        = require('gulp-util'),
    watch       = require('gulp-watch'),
    concat      = require('gulp-concat-util'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify'),
    shell       = require('child_process').exec,
    argv        = require('yargs').argv,
    yaml        = require('js-yaml').load,
    _           = require('underscore'),
    path        = require('path'),
    data        = require('gulp-data');

var paths = {
  scss: './styles/**/index.scss'
};

gulp.task('css', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      trace: false,
      sourcemapPath: './',
      bundleExec: true,
      require: ['bourbon', 'susy']
    }))
    .pipe(concat('lo-main.css'))
    .pipe(concat.header(fs.readFileSync('./node_modules/normalize.css/normalize.css')))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('docs', function() {
  var components = [];

  (function getModules(base) {
    var moduleName = './styles/' + (base ? base + '/' : '') + 'docs.js';
    delete require.cache[path.resolve(moduleName)] // Invalidate cache
    var doc = require(moduleName);

    if(base) {
      doc.syntax = base;
      doc.level  = base.split('/').length;
      components.push(doc);
    }

    if(doc.components) {
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
    .pipe(gulp.dest('./build/docs'));

  gulp.src('./site/main.scss')
    .pipe(sass({
      trace: false,
      sourcemapPath: './',
      bundleExec: true,
      require: ['bourbon', 'susy']
    }))
    .pipe(gulp.dest('./build/docs'));

  gulp.src('./site/**/[^_]*.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/docs'));

  // Assets
  gulp.src('./assets/**/*')
    .pipe(gulp.dest('./build/docs/assets'));

  // Component Library
  gulp.src('./node_modules/chopped-sui/dist/library/chopped-sui.min.js')
    .pipe(gulp.dest('./build/docs'));

  gulp.src('./node_modules/chopped-sui/dist/components/css/components.min.css')
    .pipe(gulp.dest('./build/docs'));

  gulp.src('./node_modules/chopped-sui/dist/components/js/components.min.js')
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('default', ['css', 'docs']);

gulp.task('watch', function() {
  watch(['assets/**/*', 'site/**/*', 'styles/**/*'], function() {
    gulp.start('default');
  });
});

gulp.task('deploy', function() {
  var msg = argv.m;

  if(msg) {
    gulp.start('default');
    shell('cd build/docs; git add -A; git commit -a -m "'+msg+'"; git push;', function(error, stdout, stderr) {
      util.log(stdout);
      util.log(stderr);
    });
  }
  else {
    throw 'Please provide a commit message using the -m flag';
  }
});

gulp.task('serve', function() {
  shell('node_modules/.bin/http-server build/docs');
  console.log('Serving Lo-Main Documentation at http://localhost:8080/');
});
