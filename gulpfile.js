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
    _           = require('underscore');

gulp.task('css', function() {
  gulp.src('./components/**/index.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(concat('SignalUI.css'))
    .pipe(concat.header(fs.readFileSync('./node_modules/normalize.css/normalize.css')))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('js', function() {
  gulp.src('./client/SignalUI.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('docs', function() {
  var components = [];

  (function getModules(base) {
    var doc = require('./components/' + (base ? base + '/' : '') + 'docs');

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

  gulp.src('./docs/**/[^_]*.jade')
    .pipe(jade({
      locals: {
        signalUI:   require('./helper'),
        components: components
      }
    }))
    .on('error', function(err) {
      util.log(err.stack);
    })
    .on('error', util.beep)
    .pipe(gulp.dest('./build/docs'));

  gulp.src('./docs/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./build/docs'));
});

gulp.task('test', function() {

});

gulp.task('default', ['css', 'js', 'docs']);

gulp.task('watch', function() {
  watch(['components/**/*', 'docs/**/*', 'client/**/*', 'helper/**/*'], function() {
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
  shell('http-server build/docs');
  console.log('Serving Signal UI Documentation at http://localhost:8080/');
});
